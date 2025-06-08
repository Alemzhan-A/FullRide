import Link from 'next/link';
import Container from './components/Container';

export default function NotFound() {
  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-indigo-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
      </div>

      <Container>
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
          {/* Main content */}
          <div className="relative space-y-8">
            {/* 404 Number */}
            <div className="relative">
              <h1 className="text-8xl md:text-9xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  404
                </span>
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl -z-10"></div>
            </div>

            {/* Message Card */}
            <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 max-w-lg mx-auto">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  Ой! Эта страница еще в разработке
                </h2>
                <p className="text-lg text-gray-600">
                  Наша команда усердно работает над созданием новых возможностей. Скоро мы добавим эту страницу!
                </p>
              </div>
            </div>

            {/* Return Home Button */}
            <div className="flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Вернуться на главную
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 