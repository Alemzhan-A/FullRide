"use client";

import Container from '../Container';
import { useState } from 'react';

const modes = [
  {
    id: 'essay',
    title: 'Эссе',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    example: {
      before: "Я хочу поступить в университет, потому что это поможет мне получить хорошее образование и найти работу.",
      after: "Мое стремление к поступлению в университет основано на желании развиваться в области компьютерных наук. С детства я увлекаюсь программированием, создавая игры и участвуя в хакатонах. Я вижу в университете возможность не только получить качественное образование, но и стать частью сообщества, которое формирует будущее технологий."
    }
  },
  {
    id: 'activity',
    title: 'Активности',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    example: {
      before: "Президент клуба робототехники. Проводил еженедельные встречи и участвовал в соревнованиях.",
      after: "Президент клуба робототехники (11-12 классы). Руководил командой из 20 человек в разработке автономных роботов; занял 2-е место на региональном соревновании. Получил грант в размере $1,000 для клуба и наставлял новых участников."
    }
  },
  {
    id: 'achievements',
    title: 'Достижения',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    example: {
      before: "Похвальная грамота на Математической олимпиаде.",
      after: "Топ-5% на Национальной математической олимпиаде (10-11 классы) среди более чем 10,000 участников. Отмечен за высокие результаты в комбинаторике и геометрии."
    }
  }
];

export default function AIAssistant() {
  const [activeMode, setActiveMode] = useState('activity');
  const [inputText, setInputText] = useState(modes[1].example.before);

  const currentMode = modes.find(mode => mode.id === activeMode);

  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      <Container>
        <div className="relative">
          {/* Заголовок */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              AI-<span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 md:px-4 py-1 rounded-lg">ассистент</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Улучшите ваши документы с помощью искусственного интеллекта
            </p>
          </div>

          {/* Переключатели режимов */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4">
            {modes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => {
                  setActiveMode(mode.id);
                  setInputText(mode.example.before);
                }}
                className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl transition-all duration-300 text-sm md:text-base ${activeMode === mode.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
              >
                {mode.icon}
                <span className="font-medium">{mode.title}</span>
              </button>
            ))}
          </div>

          {/* Демо-редактор */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mx-4 md:mx-0">
            <div className="p-4 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Входной текст */}
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Ваш текст</h3>
                  <textarea
                    value={inputText}
                    readOnly
                    className="w-full h-40 md:h-48 p-3 md:p-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-600 text-sm md:text-base resize-none"
                  />
                </div>

                {/* Результат */}
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Результат</h3>
                  <div className="w-full h-40 md:h-48 p-3 md:p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <p className="text-gray-600 text-sm md:text-base">
                      {currentMode?.example.after}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 