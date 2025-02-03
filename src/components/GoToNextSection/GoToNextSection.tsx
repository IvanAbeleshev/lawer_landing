import Image from "next/image"
import Link from "next/link"

interface IPropsGoToNextSection{
  nextSectionTitle: string,
  anchor: string
  isShow: boolean
}

export default function GoToNextSection({ nextSectionTitle, isShow, anchor }:IPropsGoToNextSection) {
  if(!isShow || !nextSectionTitle){
    return null
  }

  return(
    <Link href={`#${anchor}`} className="w-fit fixed bottom-2 left-1/2 text-light -translate-x-1/2">
      <div className="flex gap-2 animate-bounce">
        <Image
          src={'/icons/chevron-down.svg'}
          alt="chevron-down"
          width={10}
          height={10}
        ></Image>
        Перейти до {nextSectionTitle}
      </div>
    </Link>
  )
}