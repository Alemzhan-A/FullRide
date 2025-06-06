import Image from 'next/image';
import Container from '../Container';

const stories = [
  {
    name: "Айгерим Нурлан",
    university: "Stanford University",
    image: "/students/student1.jpg",
    scores: {
      sat: 1550,
      ielts: 8.5
    },
    quote: "Благодаря FullRide я получила полную стипендию в Стэнфорде. Это изменило мою жизнь!",
    videoUrl: "https://youtube.com/watch?v=example1"
  },
  {
    name: "Алишер Канат",
    university: "MIT",
    image: "/students/student2.jpg",
    scores: {
      sat: 1580,
      ielts: 8.0
    },
    quote: "FullRide помог мне подготовить идеальное заявление и получить стипендию в MIT.",
    videoUrl: "https://youtube.com/watch?v=example2"
  },
  {
    name: "Диана Алиева",
    university: "Harvard University",
    image: "/students/student3.jpg",
    scores: {
      sat: 1560,
      ielts: 8.5
    },
    quote: "С FullRide процесс поступления стал намного проще и понятнее.",
    videoUrl: "https://youtube.com/watch?v=example3"
  }
];

export default function SuccessStories() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Истории <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-lg">успеха</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Реальные истории студентов, которые получили полные стипендии в лучших университетах мира
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
              >
                <div className="space-y-4">
                  {/* Фото студента */}
                  <div className="relative w-24 h-24 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                    <Image
                      src={story.image}
                      alt={story.name}
                      width={96}
                      height={96}
                      className="relative w-full h-full object-cover rounded-full border-4 border-white"
                    />
                  </div>

                  {/* Имя и университет */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-blue-600 font-medium">{story.university}</p>
                  </div>

                  {/* Баллы */}
                  <div className="flex justify-center gap-4 text-sm">
                    <div className="bg-gray-50 px-3 py-1 rounded-full">
                      SAT: {story.scores.sat}
                    </div>
                    <div className="bg-gray-50 px-3 py-1 rounded-full">
                      IELTS: {story.scores.ielts}
                    </div>
                  </div>

                  {/* Цитата */}
                  <p className="text-gray-600 text-center italic">
                    &ldquo;{story.quote}&rdquo;
                  </p>

                  {/* Ссылка на полную историю */}
                  <a
                    href={`/stories/${story.name.toLowerCase().replace(' ', '-')}`}
                    className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Читать полностью
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
              Смотреть все истории
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