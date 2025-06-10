import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Header from "../components/Header";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Добро пожаловать в FullRide!
            </h1>
            <p className="text-gray-600">
              Здесь вы можете отслеживать свой прогресс и управлять заявками на обучение.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Application Status */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Статус заявки</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Профиль заполнен</span>
                  <span className="text-green-600">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Документы загружены</span>
                  <span className="text-yellow-600">В процессе</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Заявка отправлена</span>
                  <span className="text-gray-400">Ожидает</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Быстрые действия</h2>
              <div className="space-y-4">
                <button className="w-full text-left px-4 py-3 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                  Загрузить документы
                </button>
                <button className="w-full text-left px-4 py-3 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                  Выбрать университет
                </button>
                <button className="w-full text-left px-4 py-3 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                  Обновить профиль
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Последние действия</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-600"></div>
                  <div>
                    <p className="text-gray-900">Профиль обновлен</p>
                    <p className="text-sm text-gray-500">2 часа назад</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-green-600"></div>
                  <div>
                    <p className="text-gray-900">Документы загружены</p>
                    <p className="text-sm text-gray-500">Вчера</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-yellow-600"></div>
                  <div>
                    <p className="text-gray-900">Заявка создана</p>
                    <p className="text-sm text-gray-500">3 дня назад</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 