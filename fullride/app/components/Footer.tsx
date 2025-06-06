import React from 'react';
import Container from './Container';

const navigation = {
  main: [
    { name: 'Университеты', href: '/universities' },
    { name: 'Истории успеха', href: '/success-stories' },
    { name: 'Как это работает', href: '/how-it-works' },
    { name: 'Блог', href: '/blog' },
    { name: 'О нас', href: '/about' },
  ],
  social: [
    {
      name: 'Instagram',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.25.38-.51 1.05-.78 4.12-1.79 6.87-2.97 8.26-3.54 3.93-1.63 4.75-1.91 5.26-1.91.12 0 .38.03.55.17.14.12.18.28.2.45-.02.05-.02.31-.17 1.2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {/* Логотип и описание */}
            <div className="col-span-2">
              <div className="flex items-center gap-2">
                <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
                </svg>
                <span className="text-xl font-bold text-gray-900">FullRide</span>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Помогаем студентам из Казахстана получить полные стипендии в лучших университетах мира
              </p>
            </div>

            {/* Навигация */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Навигация</h3>
              <ul className="mt-4 space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Контакты */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Контакты</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="mailto:info@fullride.kz" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    info@fullride.kz
                  </a>
                </li>
                <li>
                  <a href="tel:+77771234567" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    +7 (777) 123-45-67
                  </a>
                </li>
              </ul>
            </div>

            {/* Социальные сети */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Социальные сети</h3>
              <ul className="mt-4 flex space-x-4">
                {navigation.social.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Нижняя часть футера */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} FullRide. Все права защищены.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
} 