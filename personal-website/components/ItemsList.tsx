import React from 'react'

type props = {
  items: {
    [key: string] : {
      content: string,
      duration?: string,
    } 
  },
  columns?: string, //md:columns-2
  listStyle?: string, //before:content-['...']
}

function ItemsList({ items, columns, listStyle } : props) {

  return (
    <ul className={`columns-1 ${columns??''} rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 lg:hover:scale-105 duration-200`}>
      {
        Object.keys(items).map((itemNum, i) => (
          <li key={i} className={`my-2 font-light ${listStyle ? listStyle + ' before:pr-2' : ''}}`}>
            <span>
              {items[itemNum].content}&nbsp; 
            </span>
            <span className='font-bold text-dark-text/60 dark:text-light-text'>
              {items[itemNum].duration}
            </span>
            
          </li>
        ))
      }
    </ul>
  )
}

export default ItemsList