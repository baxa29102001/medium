import React from 'react';

const Dummy_users = [
  {
    name: 'Alisher Isayev',
    imgAuthor:
      'https://thumb.tildacdn.com/tild3734-3261-4362-b434-313462303439/-/resize/460x/-/format/webp/1-photo.png',
    stories: 0,
  },
  {
    name: 'Aziz Rakhimov',
    imgAuthor: 'https://i.ytimg.com/vi/xHyGd_rBzM8/maxresdefault.jpg',
    stories: 0,
  },
  {
    name: 'Murad Nazarov',
    imgAuthor:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Murad_Nazarov.jpg/200px-Murad_Nazarov.jpg',
    stories: 0,
  },
  {
    name: 'Allayev uz',
    imgAuthor:
      'https://static10.tgstat.ru/channels/_0/7f/7f31e970ed59b216acd402514e837735.jpg',
    stories: 0,
  },
];

function Following() {
  return (
    <div className='p-4 border-0 md:border-r lg:border-0 border-gray-400 ml-4'>
      <h1 className='text-lg font-extrabold mb-3'>
        Siz obuna bo'lgan insonlar{' '}
      </h1>
      <ul className='grid grid-cols-3'>
        {Dummy_users.map((item) => (
          <li className='md:py-2 md:px-0' key={item.name}>
            <img
              src={item.imgAuthor}
              className='w-12 h-12 md:w-14 md:h-14 ml-3 md:ml-2 rounded-full'
            />
            <p className='text-gray-500 text-sm md:text-sm'>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Following;
