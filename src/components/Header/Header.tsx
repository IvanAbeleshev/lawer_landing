'use client'

import { INavigationListItem } from "@interfaces"
import { useState } from "react"

const navLinks: INavigationListItem[] = [
  {
    index: 0,
    anchorID: 'main',
    title: 'Головна'
  },
  {
    index: 1,
    anchorID: 'about',
    title: 'Про адвоката'
  },
  {
    index: 2,
    anchorID: 'services',
    title: 'Послуги'
  },
  {
    index: 3,
    anchorID: 'achievements',
    title: 'Досягнення'
  },
  {
    index: 4,
    anchorID: 'contacts',
    title: 'Контакти'
  }
]

export default function Header() {
  const [currentMenu, setCurrentMenu] = useState<INavigationListItem>(navLinks[0])

  return (
    <header className="px-10 h-20 flex items-center justify-between text-light sticky top-0 z-30">
      <div>IB</div>
      <nav>
        <ul className="flex justify-end items-center gap-5 text-gray-xs relative">
          {
            navLinks.map(el => 
              <li 
                key={el.anchorID}
                className={`w-28 text-center cursor-pointer h-8 transition-all duration-500 ${el === currentMenu && 'text-light font-bold'}`}
                onClick={() => setCurrentMenu(el)}
              >
                {el.title}
              </li>
            )
          }
          <li 
            className="absolute h-full border-b-2 border-b-light top-0 left-0 w-28 transition-all duration-500 ease-in-out"
            style={{left: `${currentMenu.index*8.25}rem`}}
          ></li>
        </ul>
      </nav>
    </header>
  )
}