'use client'
import useIntersectionObserver from "@/hooks/useIntersectionObserver"
import { IServiceItem } from "@/shared/interfaces/services/service-list-item.interface"

const cardsData:IServiceItem[] = [
  {
    id:0,
    title: 'Юридичні консультації',
    description: 'індивідуальний підхід до кожного клієнта',
    bgImageSrc: '',
    animationAppearance: 'left'
  },
  {
    id:1,
    title: 'Судовий супровід ',
    description: 'професійна підтримка у судових спорах',
    bgImageSrc: '',
    animationAppearance: 'right'
  },
  {
    id:2,
    title: 'Цивільні справи ',
    description: 'вирішення питань власності, договорів та інших цивільних спорів',
    bgImageSrc: '',
    animationAppearance: 'left'
  },
  {
    id:3,
    title: 'Адміністративні справи',
    description: 'представництво інтересів у взаємодії з державними органами',
    bgImageSrc: '',
    animationAppearance: 'right'
  },
  {
    id:4,
    title: 'Сімейне право',
    description: 'підтримка у справах про розлучення, аліменти та інші сімейні питання',
    bgImageSrc: '',
    animationAppearance: 'bottom'
  }
]

export default function SectionServices() {
  const [ref, isVisible] = useIntersectionObserver(0.1)
  return (
    <section
      className="px-10 w-full h-dvh pt-20 pb-10 text-light overflow-hidden snap-start"
      ref={ref}
    >
      <h2 className="text-3xl font-semibold mb-10 text-center">Наші послуги</h2>
      <ul className="grid grid-cols-2 gap-5 place-items-center mb-5 overflow-hidden">
        {
          cardsData.map(el => 
            <li 
              key={el.id}
              className={`
                w-full 
                h-40 
                border 
                border-gray-xs 
                rounded-lg 
                p-3 
                transition-transform
                duration-500
                ${el.animationAppearance === 'left' && (!isVisible ? '-translate-x-full' : 'translate-x-0')}
                ${el.animationAppearance === 'right' && (!isVisible ? 'translate-x-full' : 'translate-x-0')}
                ${el.animationAppearance === 'bottom' && (!isVisible ? 'translate-y-full' : 'translate-y-0')}
                ${el.animationAppearance === 'top' && (!isVisible ? '-translate-y-full' : 'translate-y-0')}
                ${el.id === cardsData.length - 1 && 'col-span-2'}`
              }
              style={{transitionDelay: `${(isVisible ? 0.3 : 0)  * el.id}s`}}
            >
              {el.title}
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