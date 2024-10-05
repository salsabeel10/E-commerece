import React, { useState } from 'react'
import Nav from './Components/Nav'
import Carousel from './Components/Carousel'
import Store from './Components/Store'


const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-100 work-sans leading-normal text-base tracking-normal transition-all duration-300">
      <Nav />
      <Carousel />
      <Store />
    </div>
  )
}

export default App
