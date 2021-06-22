import React from 'react';
const Dummy_category = [
  "So'gliq",
  'Data Science',
  'Dasturchilik',
  'Munosabatlar',
  'Siyosat',
  'Samaradorlik',
];
function Category() {
  return (
    <div className='mt-3'>
      <h1 className='sm:text-2xl md:text-lg lg:text-lg font-extrabold'>
        O'zingizga xos bo'lgan sohalarni tanlang
      </h1>
      <ul className='grid grid-cols-3 p-3 gap-3'>
        {Dummy_category.map((item) => (
          <li className='p-2 border border-gray-400 rounded-md mt-2' key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
