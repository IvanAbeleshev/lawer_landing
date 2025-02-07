import Image from "next/image";

export default function FloatButtonCommunication() {
  return (
    <button className="fixed bottom-5 right-5 rounded-full bg-orange-md w-14 h-14 flex items-center justify-center">
      <Image
        src={'/icons/envelope.svg'}
        alt='write-us'
        width={30}
        height={30}
      ></Image>
    </button>
  )
}