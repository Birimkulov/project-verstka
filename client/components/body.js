import React from 'react'
import {Link} from "react-router-dom";



const Body = () => {
  return (
    <div>
      <div className="flex bg-gray-200">
        <div className="flex-1 text-center bg-gray-400 px-4 py-2 m-2">
          <Link
            to="/1"
            className="inline-block text-sm mr-6 px-4 py-2 leading-none border rounded text-gray-700  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            3 колонки разных цветов красный зеленый и синий во весь размер страницы
          </Link>
        </div>
        <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          <Link
            to="/2"
            className="inline-block text-sm mr-6 px-4 py-2 leading-none border rounded text-gray-700  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            4 строки разных цветов красный зеленый желтый и синий во весь размер страницы
          </Link>
        </div>
        <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          <Link
            to="/3"
            className="inline-block text-sm mr-6 px-4 py-2 leading-none border rounded text-gray-700  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            4 строки с 4 столбцами с центрированными надписями 1 - 16
          </Link>
        </div>
      </div>
      <div className="flex bg-gray-200">
        <div className="flex-1  text-center bg-gray-400 px-4 py-2 m-2">
          <Link
            to="/4"
            className="inline-block text-sm mr-6 px-4 py-2 leading-none border rounded text-gray-700  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            4 столбца с 4 строками с центрированными надписями 1 - 16
          </Link>
        </div>
        <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          <Link
            to="/5"
            className="inline-block text-sm mr-6 px-4 py-2 leading-none border rounded text-gray-700  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            3 строки 2 и 3 строка имеет по три столбца. первая строка имеет столбец с шириной 100px  и второй столбец, который занимает все места на экране
          </Link>
        </div>
        <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          <Link
            to="/6"
            className="inline-block text-sm mr-6 px-4 py-2 leading-none border rounded text-gray-700  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Черный квадрат 100 на 100 в центре экрана
          </Link>
        </div>
      </div>
      <div className="flex bg-gray-200">
        <div className="flex-1 text-center bg-gray-400 px-4 py-2 m-2">
          <Link
            to="/7"
            className="inline-block text-sm mr-6 px-4 py-2 leading-none border rounded text-gray-700  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            3 строки высотой и шириной - экран  разных цветов красный зеленый и синий. Пользователь должен способен проскролить три экрана независимо от того это мобильный телефон иди десктоп
          </Link>
        </div>
        <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          <Link
            to="/8"
            className="inline-block text-sm mr-6 px-4 py-2 leading-none border rounded text-gray-700  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            6 карточек шириной 100 пикселей и высотой 100 пикселей, которые перестраиваются в зависимости от ширины страницы с параметром flex-wrap . отступ между карточками два процента марджина. текст внутри каждого элемента должен быть центрирован, как по вертикали, так и по горизонтали
          </Link>
        </div>
        <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          <Link
            to="/9"
            className="inline-block text-sm mr-6 px-4 py-2 leading-none border rounded text-gray-700  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Квадрат в центре экрана с тремя невидимыми строками. В каждой строке по квадрату. В первой слева. Во второй по центру. В третьей справа
          </Link>
        </div>
      </div>

    </div>
  )
}



export default Body
