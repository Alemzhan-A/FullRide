import { SignUp } from "@clerk/nextjs";
import Header from "../../components/Header";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24 flex items-center justify-center">
        <SignUp
          appearance={{
            elements: {
              subtitle: 'to access {{applicationName}}',
              socialButtonsPlacement: 'bottom',
              formButtonPrimary:
                "bg-blue-600 hover:bg-blue-700 text-sm normal-case",
              card: "bg-transparent shadow-none",
              headerTitle: "Создайте аккаунт",
            },
          }}
        />
      </div>
    </div>
  );
} 