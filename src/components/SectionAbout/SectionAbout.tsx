'use client'
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import Image from "next/image";

export default function SectionAbout() {
  const [ref, isVisible] = useIntersectionObserver(0.1)

  return (
    <section 
      id="about"
      className="px-10 flex justify-between items-center w-full h-dvh pt-20 pb-10 text-light overflow-hidden snap-start bg-gray-sm"
      ref={ref}
    >
      <div className="w-1/2">
        <h2 
          className={`
            text-3xl 
            font-semibold 
            mb-5 
            transition-transform   
            ${isVisible ? 'translate-x-0 delay-100 duration-700' : '-translate-x-full duration-0'}`
          }
        >
          Про мене
        </h2>
        <p 
          className={`
            text-balance 
            text-lg
            pr-2
            transition-transform   
            ${isVisible ? 'translate-x-0 delay-500 duration-700' : '-translate-x-full duration-0'}`
          }
        >
          Я, Ігор Биков, адвокат з понад 10-річним досвідом, спеціалізуюсь на вирішенні складних юридичних питань. Моя головна мета – забезпечити захист ваших прав та інтересів з максимальною відповідальністю та професіоналізмом. Постійне підвищення кваліфікації дозволяє мені знаходити найкращі рішення навіть у найскладніших справах.
        </p>
      </div>
      <div className="h-full w-1/2 perspective-1000">
        <Image
          className={`h-full w-full object-cover rounded-lg transition-transform ${isVisible && 'duration-700 delay-100'}`}
          style={{transform: `rotateY(${isVisible ? '0': '-90'}deg)`}}
          src={'/img/ighor-bukov.webp'}
          alt="igor bukov photo"
          height={1000}
          width={600}
        ></Image>
      </div>
    </section>
  )
}