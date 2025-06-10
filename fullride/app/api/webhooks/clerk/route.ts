import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(req: Request) {
  // Get the headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your webhook secret
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET || '');

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400,
    });
  }

  // Connect to MongoDB
  await connectDB();

  // Handle the webhook
  const eventType = evt.type;

  if (eventType === 'user.created') {
    const { id, email_addresses, ...attributes } = evt.data;
    const email = email_addresses?.[0]?.email_address;

    if (!email) {
      return new Response('No email provided', { status: 400 });
    }

    try {
      await User.create({
        clerkId: id,
        email,
        name: attributes.first_name && attributes.last_name
          ? `${attributes.first_name} ${attributes.last_name}`
          : attributes.first_name || attributes.last_name || undefined,
      });
    } catch (error) {
      console.error('Error creating user:', error);
      return new Response('Error creating user', { status: 500 });
    }
  }

  if (eventType === 'user.updated') {
    const { id, email_addresses, ...attributes } = evt.data;
    const email = email_addresses?.[0]?.email_address;

    if (!email) {
      return new Response('No email provided', { status: 400 });
    }

    try {
      await User.findOneAndUpdate(
        { clerkId: id },
        {
          email,
          name: attributes.first_name && attributes.last_name
            ? `${attributes.first_name} ${attributes.last_name}`
            : attributes.first_name || attributes.last_name || undefined,
          updatedAt: new Date(),
        },
        { new: true }
      );
    } catch (error) {
      console.error('Error updating user:', error);
      return new Response('Error updating user', { status: 500 });
    }
  }

  if (eventType === 'user.deleted') {
    const { id } = evt.data;

    try {
      await User.findOneAndDelete({ clerkId: id });
    } catch (error) {
      console.error('Error deleting user:', error);
      return new Response('Error deleting user', { status: 500 });
    }
  }

  return NextResponse.json({ success: true });
} 