'use client'
import useIntersectionObserver from "@/hooks/useIntersectionObserver"
import { IServiceItem } from "@interfaces"
import Link from "next/link"

const cardsData:IServiceItem[] = [
  {
    id:0,
    title: 'Юридичні консультації',
    description: 'індивідуальний підхід до кожного клієнта',
    bgImageSrc: 'legal-right.webp',
    animationAppearance: 'left'
  },
  {
    id:1,
    title: 'Судовий супровід ',
    description: 'професійна підтримка у судових спорах',
    bgImageSrc: 'court-support.png',
    animationAppearance: 'right'
  },
  {
    id:2,
    title: 'Цивільні справи ',
    description: 'вирішення питань власності, договорів та інших цивільних спорів',
    bgImageSrc: 'handshake.webp',
    animationAppearance: 'left'
  },
  {
    id:3,
    title: 'Сімейне право',
    description: 'підтримка у справах про розлучення, аліменти та інші сімейні питання',
    bgImageSrc: 'family-right.jpg',
    animationAppearance: 'right'
  },
  {
    id:4,
    title: 'Адміністративні справи',
    description: 'представництво інтересів у взаємодії з державними органами',
    bgImageSrc: 'admin-right.jpg',
    animationAppearance: 'bottom'
  },
]

export default function SectionServices() {
  const [ref, isVisible] = useIntersectionObserver(0.1)
  return (
    <section
      className="px-10 w-full h-dvh pt-20 pb-10 text-light overflow-hidden snap-start"
      ref={ref}
    >
      <h2 className="text-3xl font-semibold mb-10 text-center">Наші послуги</h2>
      <ul className="grid grid-cols-2 gap-5 place-items-center mb-5 overflow-hidden h-3/4 mx-32">
        {
          cardsData.map(el => 
            <li 
              key={el.id}
              className={`
                w-full
                h-full  
                border 
                border-gray-xs 
                rounded-lg 
                transition-all
                duration-500
                bg-center
                bg-cover
                overflow-hidden
                group
                relative
                ${el.animationAppearance === 'left' && (!isVisible ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100')}
                ${el.animationAppearance === 'right' && (!isVisible ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100')}
                ${el.animationAppearance === 'bottom' && (!isVisible ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100')}
                ${el.animationAppearance === 'top' && (!isVisible ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100')}
                ${el.id === cardsData.length - 1 && 'col-span-2'}`
              }
              style={{
                transitionDelay: `${(isVisible ? 0.3 : 0)  * el.id}s`,
                backgroundImage: `url(/img/${el.bgImageSrc})`
              }}
              onClick={() => scrollTo({})}
            >
              <div className="-z-10 w-full h-full group-hover:bg-black/60 absolute transition-colors duration-300" />
              <Link href='#contact' className="w-full h-full p-3 z-10 flex flex-col justify-between">
                <h3 className={`font-semibold text-xl ${el.animationAppearance === 'right' ? 'text-right':'text-left'}`}>
                  {el.title}
                </h3>
                <p
                  className='translate-y-[200%] group-hover:translate-y-0 transition-transform duration-300'
                >
                  {el.description}
                </p>
              </Link>
            </li>
          )
        }
      </ul>
      <p 
        className={`
          text-center 
          text-balance 
          text-gray-xs 
          ${!isVisible ? 'duration-0 opacity-0 translate-y-full' : 'transition-all duration-[2s] opacity-100 translate-y-0'}`
          }
          style={{transitionDelay: `${(isVisible ? 0.3 : 0) * cardsData.length}s`}}
        >
        <i>
          Кожна справа розглядається індивідуально з урахуванням ваших потреб. Ми гарантуємо конфіденційність, уважність до деталей та професійний підхід на кожному етапі співпраці.
        </i>
      </p>
    </section>
  )
}