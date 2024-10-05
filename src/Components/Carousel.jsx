import React, { useState } from 'react'

const slides = [
  {
    id: 'carousel-1',
    image: '/pillow.jpg',
    title: 'Stripy Zig Zag Jigsaw Pillow and Duvet Set',
    link: '#',
  },
  {
    id: 'carousel-2',
    image: '/clock.jpg',
    title: 'Real Bamboo Wall Clock',
    link: '#',
  },
  {
    id: 'carousel-3',
    image: '/book.jpg',
    title: 'Brown and blue hardbound book',
    link: '#',
  },
]

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative container mx-auto max-w-[1600px]">
  <div
    className="relative overflow-hidden w-full"
    style={{ height: '50vh' }}
  >
    {slides.map((slide, index) => (
      <div
        key={slide.id}
        className={`absolute w-full h-full transition-opacity duration-700 ${
          currentSlide === index ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          display: currentSlide === index ? 'block' : 'none',
        }}
      >
        <div
          className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="container mx-auto">
            <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
              <p className="text-black text-2xl my-4">
                {slide.title}
              </p>
              <a
                className="text-xl text-black inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-slate-800 hover:border-black"
                href={slide.link}
              >
                view product
              </a>
            </div>
          </div>
        </div>
      </div>
    ))}

    {/* Controls */}
    <button
      onClick={handlePrev}
      className="absolute top-1/2 left-2 md:left-10 transform -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-700 text-black dark:text-white hover:bg-gray-900 dark:hover:bg-gray-600 hover:text-white rounded-full text-3xl font-bold z-10"
    >
      ‹
    </button>
    <button
      onClick={handleNext}
      className="absolute top-1/2 right-2 md:right-10 transform -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-700 text-black dark:text-white hover:bg-gray-900 dark:hover:bg-gray-600 hover:text-white rounded-full text-3xl font-bold z-10"
    >
      ›
    </button>
  </div>
</div>

  )
}

export default Carousel
