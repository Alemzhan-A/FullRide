import Header from './components/Header';
import Container from './components/Container';
import FinancialAidCard from './components/FinancialAidCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <section className="pt-24 md:pt-32 pb-12 md:pb-20 relative">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center relative">
            <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Учись в лучших университетах мира
                  </span>
                  <br />
                  <span className="relative inline-block mt-2">
                    <span className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      бесплатно
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 -rotate-1"></span>
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
                  Платформа для поиска университетов с полной стипендией, подготовки документов и отслеживания статуса поступления.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                  Начать бесплатно
                </button>
                <button className="w-full sm:w-auto border-2 border-gray-200 text-gray-600 px-8 py-4 rounded-xl text-lg font-medium hover:border-gray-300 transition-all duration-300 hover:scale-105">
                  Узнать больше
                </button>
              </div>
              <div className="text-center md:text-left space-y-4">
                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-medium">
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm">3000+ студентов из КЗ учатся зарубежом бесплатно</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 md:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-10 blur-2xl"></div>
              <div className="animate-float max-w-[320px] mx-auto md:max-w-none">
                <FinancialAidCard />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
