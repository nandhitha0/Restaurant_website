import React, { useContext, useState } from 'react';
import { categoryItem } from '../assets/assets';
import { MenuContext } from '../context/MenuContext';

const Menu = () => {
  const { products } = useContext(MenuContext);
  const [category, setCategory] = useState("All");

  return (
    <div className='px-4 py-12 max-w-6xl mx-auto'>
      <div className='text-center mb-6'>
        <h1 className ='text-4xl font-bold text-gray-800'>Discover Our Menu</h1>
      </div>

      <div className='text-center mb-8'>
        <h2 className='text-2xl font-medium mb-4 text-gray-700'>Explore Our Categories</h2>
        <ul className='flex flex-wrap justify-center gap-4'>
          {categoryItem.map((item, index) => (
            <li
              key={index}
              onClick={() => setCategory(prev => prev === item.category_title ? "All" : item.category_title)}className={` cursor-pointer px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 ${category === item.category_title ? " brightness-150 bg-gradient-to-r from-yellow-800 via-yellow-600 to-yellow-800 text-black" : " brightness-150 bg-gray-200 hover:bg-gradient-to-r from-yellow-800 via-yellow-600 to-yellow-800"}`}>

              {item.category_title}
            </li>
          ))}
        </ul>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'> 
        {products.length > 0 ? (
          products.filter(product => category === "All" || category === product.category).map(product => (
              <div key={product._id} className='flex flex-center gap-6 border p-4 border-gray-100 rounded-xl shadow-sm transition hover:shadow-md'>
                <img src={product.image} alt={product.name} className='w-30 h-30 object-cover rounded-full' />
                <div className='flex-1'>
                  <div className='flex justify-between items-center'>
                    <h3 className='text-lg font-semibold text-gray-800'>{product.name}</h3>
                    <span className='text-lg font-semibold hover:scale-105 p-1 rounded-xl bg-gradient-to-br  brightness-150 from-yellow-800 via-yellow-600 to-yellow-800 text-black   hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600 relative ml-4'> 
                      <span className="before:content-[''] before:absolute before:w-10 before:border-b border-dotted before:border-gray-400 before:-left-12 before:top-1/2 before:transform before:translate-y-1/2"></span>
                      ${product.price}</span>
                  </div>
                  <p className='text-sm text-gray-500 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            ))
        ) : (
          <p className='text-sm col-span-2 text-gray-500'>No Products Available</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
