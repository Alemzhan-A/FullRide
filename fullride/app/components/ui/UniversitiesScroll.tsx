import Image from 'next/image';
import Container from '../Container';

const universities = [
  {
    name: "Harvard",
    logo: "/universities/harvard_logo.png",
    width: 120,
    height: 120
  },
  {
    name: "Stanford",
    logo: "/universities/stanford_logo.png",
    width: 120,
    height: 120
  },
  {
    name: "Cornell",
    logo: "/universities/cornell_logo.png",
    width: 120,
    height: 120
  },
  {
    name: "Brown",
    logo: "/universities/brown_logo.png",
    width: 120,
    height: 120
  },
  {
    name: "NYUAD",
    logo: "/universities/nyuad_logo.png",
    width: 120,
    height: 120
  },
  {
    name: "UBC",
    logo: "/universities/ubc_logo.png",
    width: 120,
    height: 120
  },
  {
    name: "KAIST",
    logo: "/universities/KAIST_logo.png",
    width: 120,
    height: 120
  },
  {
    name: "Northwestern",
    logo: "/universities/northwestern_logo.png",
    width: 120,
    height: 120
  }
];

export default function UniversitiesScroll() {
  return (
    <section className="py-16">
      <Container>
        <div className="space-y-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center max-w-4xl mx-auto text-gray-900">
            <span className="block mb-2">Университеты, в которые</span>
            <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-lg mb-2">реально</span>
            <span className="block mb-2">можно поступить и учиться</span>
            <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-lg">не платя ни копейки</span>
          </h2>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-8">
              {/* Первый набор университетов */}
              {universities.map((uni, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-32 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center p-4">
                  <div className="text-center space-y-2">
                    <div className="relative w-20 h-20 mx-auto">
                      <Image
                        src={uni.logo}
                        alt={`${uni.name} logo`}
                        width={uni.width}
                        height={uni.height}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-lg font-medium text-gray-800">{uni.name}</div>
                  </div>
                </div>
              ))}
              {/* Дублируем набор для бесшовной анимации */}
              {universities.map((uni, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0 w-48 h-32 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center p-4">
                  <div className="text-center space-y-2">
                    <div className="relative w-20 h-20 mx-auto">
                      <Image
                        src={uni.logo}
                        alt={`${uni.name} logo`}
                        width={uni.width}
                        height={uni.height}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-lg font-medium text-gray-800">{uni.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <button className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-xl text-lg font-medium hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Смотреть список университетов
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