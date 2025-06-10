export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Политика конфиденциальности
          </h1>

          <div className="prose prose-blue max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              1. Общие положения
            </h2>
            <p className="text-gray-600 mb-4">
              Настоящая политика конфиденциальности разработана в соответствии с Законом Республики Казахстан
              "О персональных данных и их защите" и другими нормативными правовыми актами Республики Казахстан.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              2. Сбор информации
            </h2>
            <p className="text-gray-600 mb-4">
              Мы собираем следующую информацию в соответствии с законодательством Республики Казахстан:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Контактная информация (имя, email)</li>
              <li>Информация об образовании</li>
              <li>Документы для поступления</li>
              <li>История использования платформы</li>
              <li>Техническая информация о посещении сайта</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              3. Использование информации
            </h2>
            <p className="text-gray-600 mb-4">
              Собранная информация используется для:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Предоставления и улучшения наших услуг</li>
              <li>Персонализации опыта пользователя</li>
              <li>Коммуникации с пользователями</li>
              <li>Анализа и улучшения платформы</li>
              <li>Выполнения требований законодательства Республики Казахстан</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              4. Защита информации
            </h2>
            <p className="text-gray-600 mb-4">
              Мы принимаем меры для защиты вашей личной информации в соответствии с законодательством Республики Казахстан:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Шифрование данных в соответствии с требованиями безопасности</li>
              <li>Регулярные проверки безопасности</li>
              <li>Ограниченный доступ к данным</li>
              <li>Соблюдение стандартов защиты данных Республики Казахстан</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              5. Права пользователей
            </h2>
            <p className="text-gray-600 mb-4">
              В соответствии с законодательством Республики Казахстан вы имеете право:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Получить доступ к своим персональным данным</li>
              <li>Требовать уточнения персональных данных</li>
              <li>Требовать блокирования или уничтожения персональных данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Требовать устранения неправомерных действий с персональными данными</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              6. Передача данных третьим лицам
            </h2>
            <p className="text-gray-600 mb-4">
              Мы можем передавать ваши персональные данные третьим лицам только в случаях,
              предусмотренных законодательством Республики Казахстан, и с вашего согласия.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              7. Хранение данных
            </h2>
            <p className="text-gray-600 mb-4">
              Персональные данные хранятся в соответствии с требованиями законодательства Республики Казахстан
              и уничтожаются после достижения целей обработки или в случае отзыва согласия на обработку.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              8. Контакты
            </h2>
            <p className="text-gray-600 mb-4">
              По вопросам обработки персональных данных обращайтесь:
              <br />
              Email: privacy@fullride.kz
              <br />
              Адрес: Республика Казахстан
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 