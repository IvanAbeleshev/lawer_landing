export default function SectionMain() {
  return (
    <section id="main" className="w-full h-dvh text-light relative snap-start pt-20">
      <div className="w-full h-full flex justify-end items-center bg-main-books bg-cover bg-center pr-10">
        <div className="flex flex-col gap-5 items-end">
          <h2 className="text-3xl font-semibold">Професійна юридична допомога</h2>
          <p className="text-xl text-right mb-5">Ваш надійний партнер у світі права.<br/> Захист прав і свободи – наша справа!</p>
          <button className="rounded-lg bg-orange-md px-3 py-2 font-medium">Отримати консультацію</button>
        </div>
      </div>  
    </section>
  )
}