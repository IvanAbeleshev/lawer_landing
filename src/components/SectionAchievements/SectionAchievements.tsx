'use client'

const comments: IComment[] = [
  {
    id: 0,
    title: "Марина Ковальчук, Київ",
    comment: "Професійний підхід та уважність до деталей. Допоміг вирішити складну правову ситуацію з мінімальними втратами. Рекомендую всім, хто шукає експертну допомогу."
  },
  {
    id: 1,
    title: "Олександр Петров, Львів",
    comment: "Дуже вдячний за оперативну та кваліфіковану консультацію. Всі мої питання були детально пояснені, а справа вирішена швидко та ефективно. Чудовий адвокат!"
  },
  {
    id: 2,
    title: "Юлія Іванова, Одеса",
    comment: "Вражена рівнем професіоналізму та людяністю у підході до клієнтів. Кожен етап роботи був прозорим, а результат перевершив очікування. Рекомендую!"
  },
  {
    id: 3,
    title: "Сергій Мельник, Харків",
    comment: "Адвокат показав себе як справжній експерт у своїй галузі. Робота проходила без затримок, а інформація подавалася чітко та доступно. Радий, що обрав саме його."
  },
  {
    id: 4,
    title: "Олена Климова, Дніпро",
    comment: "Завдяки цьому фахівцю моя справа була успішно врегульована. Високий рівень комунікації, уважність до кожної деталі та професійний підхід створили відчуття повної безпеки. Рекомендую його послуги всім!"
  },
  {
    id: 5,
    title: "Ігор Сидоренко, Вінниця",
    comment: "Я скористався послугами цього адвоката, і можу сказати, що його компетентність та уважність до справи справді вражають. Всі процеси були прозорими, і я завжди відчував підтримку. Це було рішенням, яке я прийняв без жодних сумнівів."
  }
]
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import { IComment } from '@interfaces'
import type { StatisticProps } from 'antd'
import { Card, Statistic } from 'antd'
import CountUp from 'react-countup'
import Marquee from "react-fast-marquee"

const formatter: StatisticProps['formatter'] = (value) => (
  <CountUp end={value as number} separator=" " className='text-light' />
)

export default function SectionAchievements(){
  const [ref, isVisible] = useIntersectionObserver(0.1)
  return (
    <section 
      id="achievements"
      className="px-10 w-full h-dvh pt-20 pb-10 text-light overflow-hidden snap-start bg-gray-sm"
      ref={ref}
    >
      <h2 className="text-3xl font-semibold mb-10 text-center">Наші успіхи</h2>

      <p className="text-center text-balance mb-10">
        За роки практики ми здобули довіру сотень клієнтів. Понад 200 успішно завершених справ, високий відсоток виграних процесів та численні рекомендації свідчать про наш професіоналізм. Ми постійно вдосконалюємо свої навички та стежимо за останніми змінами в законодавстві, щоб забезпечити найкращий результат для кожного клієнта.
      </p>

      {
        isVisible &&
        <div className="flex justify-evenly items-end mb-20">
          <div className='flex flex-col gap-5 items-center'>
            <h3>Кількість справ</h3>
            <div className='flex justify-center items-center border border-light rounded-full w-28 h-28'>
              <Statistic value={500} formatter={formatter} /> 
              <span className='text-xl'>+</span>
            </div>
          </div>

          <div className='flex flex-col gap-5 items-center'>
            <h3>Років досвіду</h3>
            <div className='flex justify-center items-center border border-light rounded-full w-28 h-28'>
              <Statistic value={12} formatter={formatter} /> 
              <span className='text-xl'>+</span>
            </div>
          </div>
        
          <div className='flex flex-col gap-5 items-center'>
            <h3>Відгуків</h3>
            <div className='flex justify-center items-center border border-light rounded-full w-28 h-28'>
              <Statistic value={200} formatter={formatter} /> 
              <span className='text-xl'>+</span>
            </div>
          </div>        
        </div>
      }
      <Marquee 
        autoFill
        speed={20}
        pauseOnHover
      >
        {comments.map(el => 
          <Card 
            key={el.id}
            title={el.title}
            className='mx-10 max-w-[400px]'
          >
            <i>
              {el.comment}
            </i>
          </Card>
        )}
      </Marquee>
    </section>
  )
}