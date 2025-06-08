import Container from '../Container';

const steps = [
  {
    number: "01",
    title: "Выберите университет",
    description: "Изучите список университетов с полной стипендией и выберите подходящие для вас",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14L8 10H16L12 14Z" fill="currentColor" />
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Подготовьте документы",
    description: "Получите пошаговую инструкцию по подготовке всех необходимых документов",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="currentColor" />
        <path d="M8 12H16V14H8V12Z" fill="currentColor" />
        <path d="M8 16H16V18H8V16Z" fill="currentColor" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Отправьте заявку",
    description: "Заполните заявку на поступление и отправьте её в выбранный университет",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Получите стипендию",
    description: "После успешного поступления получите полную стипендию на обучение",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
      </svg>
    )
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Как это <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-lg">работает</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Простой путь к бесплатному образованию в лучших университетах мира
            </p>
          </div>

          <div className="relative">
            {/* Соединительные линии */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-blue-600/20 -translate-y-1/2 hidden lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {steps.map((step, index) => (
                <div key={index} className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Карточка шага */}
                  <div className="relative w-full lg:w-1/2">
                    <div className="absolute -top-4 -left-4 text-7xl font-bold text-gray-100 z-0">
                      {step.number}
                    </div>
                    <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 group">
                      <div className="space-y-4">
                        <div className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                        <p className="text-gray-600 text-lg">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Номер последовательности (кроме последнего шага) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center w-16 h-16 text-3xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl shadow-lg shadow-blue-500/20">
                      {index + 1}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
              Начать сейчас
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
} 