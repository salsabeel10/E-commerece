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
    <div className="relative container mx-auto w-full">
      <div
        className="relative overflow-hidden w-full"
        style={{ height: '60vh' }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div
              className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <p className="text-black text-2xl my-4">{slide.title}</p>
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
          className="absolute top-1/2 left-2 md:left-10 transform -translate-y-1/2 w-10 h-10 bg-white/80 text-black hover:bg-white rounded-full text-3xl font-bold z-20 transition-colors duration-300  dark:bg-gray-700 dark:text-white"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 md:right-10 transform -translate-y-1/2 w-10 h-10 bg-white/80 text-black hover:bg-white rounded-full text-3xl font-bold z-20 transition-colors duration-300  dark:bg-gray-700 dark:text-white"
        >
          ›
        </button>
      </div>
    </div>
  )
}

export default Carousel
