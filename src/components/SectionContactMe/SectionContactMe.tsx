'use client'
import { ConfigProvider, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Button } from "antd/es/radio";
import { ChangeEventHandler, useState } from "react";

export default function SectionContactMe() {
  const [formValues, setFormValues] = useState(
    {
      contactInfo: '',
      textInfo: ''
    }
  )

  const handleInputChange:ChangeEventHandler = (event) => {
    const { id, value } = event.target as HTMLInputElement
    setFormValues((prev) => {
      const updatedValues = { ...prev, [id]: value }
      return updatedValues
    })
  }

  return(
    <section 
      id="contact"
      className="px-10 w-full h-dvh pt-20 pb-10 text-light overflow-hidden snap-start"
    >
      <h2 className="text-3xl font-semibold mb-10 text-center">Зв'яжіться з нами</h2>
      <p className="text-gray-xs text-center text-balance mb-10">
        <i>
          Якщо у вас виникли питання або потрібна консультація – ми завжди готові допомогти. Залиште свої контактні дані або зателефонуйте нам, і ми оперативно зв’яжемося з вами.
        </i>
      </p>

      <form
        className="w-2/3 bg-light text-gray-md rounded-lg flex flex-col gap-5 p-10 mx-auto"
      >
        <label htmlFor="contactInfo">
          Ваш email або телеграм<span className="text-red-600 uppercase">*</span>
          <Input 
            placeholder="@telegram-username або example@gmail.com"
            id="contactInfo"
            size="large"
            value={formValues.contactInfo}
            onChange={handleInputChange}
          ></Input>
        </label>
        <label htmlFor="textInfo">
          Текст звернення<span className="text-red-600 uppercase">*</span>
          <TextArea 
            placeholder="Текст Вашого звернення"
            id="textInfo"
            size="large"
            rows={5}
            value={formValues.textInfo}
            onChange={handleInputChange}
          ></TextArea>
        </label>
        
        <button className="bg-orange-md text-light px-5 py-3 w-fit">
          Відправити
        </button>
      </form>

    </section>
  )
}