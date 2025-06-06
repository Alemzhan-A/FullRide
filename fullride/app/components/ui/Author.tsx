"use client";

import Container from '../Container';

export default function Author() {
  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      <Container>
        <div className="relative">
          {/* Заголовок */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Привет, я автор этой платформы
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Получил полное финансирование в ведущих университетах мира
            </p>
          </div>

          {/* Основной контент */}
          <div className="max-w-4xl mx-auto">
            {/* Фото и достижения */}
            <div className="relative mb-8 md:mb-12">
              <div className="relative">
                {/* Геометрические формы */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 transform -rotate-12"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-100 transform rotate-12"></div>

                {/* Фото */}
                <div className="relative aspect-square md:aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
                  {/* Здесь будет фото */}
                </div>
              </div>

              {/* Достижения поверх фото */}
              <div className="absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%]">
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">CMU Qatar</p>
                        <p className="font-semibold text-gray-900">$320,000 грант</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">DGIST</p>
                        <p className="font-semibold text-gray-900">Полное финансирование</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* История */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Почему я создал FullRide</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Я заметил, что многие талантливые школьники не знают о возможностях получения полного финансирования в ведущих университетах мира. Многие из них не имеют правильной стратегии при поступлении и не знают, как правильно представить свои достижения. Я создал FullRide, чтобы помочь амбициозным школьникам реализовать свой потенциал и получить образование в лучших университетах мира.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 