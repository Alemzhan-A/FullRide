"use client";

import { useState } from 'react';
import Container from '../Container';

const faqs = [
  {
    question: "Какие документы нужны для поступления?",
    answer: "Основной пакет документов включает: транскрипт оценок, результаты SAT/ACT, результаты IELTS/TOEFL, мотивационное письмо, рекомендательные письма, список внеклассных активностей и достижений. Точный список документов может варьироваться в зависимости от университета."
  },
  {
    question: "Когда нужно начинать подготовку к поступлению?",
    answer: "Рекомендуется начать подготовку за 1.5-2 года до планируемого поступления. Это даст достаточно времени для подготовки к экзаменам, написания эссе и сбора всех необходимых документов."
  },
  {
    question: "Какие стипендии доступны?",
    answer: "Университеты предлагают различные типы стипендий: полные стипендии (full-ride), покрывающие обучение и проживание; частичные стипендии, покрывающие только обучение; и стипендии за заслуги (merit-based). Мы помогаем найти и получить максимально возможную финансовую поддержку."
  },
  {
    question: "Как подготовиться к SAT/ACT?",
    answer: "Подготовка включает: изучение формата экзамена, регулярную практику с пробными тестами, работу над слабыми местами, и использование официальных материалов для подготовки. Мы предоставляем доступ к ресурсам и можем помочь составить индивидуальный план подготовки."
  },
  {
    question: "Как выбрать подходящий университет?",
    answer: "При выборе университета важно учитывать: академические программы, рейтинг университета, расположение, стоимость обучения, доступные стипендии, требования к поступлению и возможности для внеклассной деятельности. Наш сервис поможет подобрать университеты, максимально соответствующие вашим целям и возможностям."
  },
  {
    question: "Как работает процесс подачи заявки?",
    answer: "Процесс включает: выбор университетов, подготовку документов, заполнение заявок через Common App или другие платформы, отправку документов, прохождение интервью (если требуется) и ожидание решения. Мы помогаем на каждом этапе и следим за сроками подачи."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Часто задаваемые <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-lg">вопросы</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ответы на самые популярные вопросы о поступлении в зарубежные университеты
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
} 