import React, { useState } from 'react'
import { products } from '../assets/products'
import StoreNav from './StoreNav'
import { FaHeart, FaRegHeart } from 'react-icons/fa' // Import heart icons

const Store = () => {
  const [productList, setProductList] = useState(products)

  const handleLikeClick = (index) => {
    const updatedProducts = [...productList]
    updatedProducts[index].liked = !updatedProducts[index].liked // Toggle liked status
    setProductList(updatedProducts)
  }
  return (
    <div>
      <section className="bg-white dark:bg-gray-950 py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <StoreNav />
          {/* Products List */}
          <div className="flex flex-wrap">
            {products.map((product, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
              >
                <img
                  className="hover:grow hover:shadow-lg"
                  src={product.image}
                  alt={product.name}
                />
                <div className="pt-3 flex items-center justify-between">
                  <p className="">{product.name}</p>

                  <div
                    onClick={() => handleLikeClick(index)}
                    className="cursor-pointer"
                  >
                    {product.liked ? (
                      <FaHeart className="h-6 w-6 text-red-500" /> // Filled heart icon
                    ) : (
                      <FaRegHeart className="h-6 w-6 text-gray-500" /> // Regular heart icon
                    )}
                  </div>
                </div>
                <p className="pt-1 text-gray-900 dark:text-slate-300">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Store
