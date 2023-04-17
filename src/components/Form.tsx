import emailjs from '@emailjs/browser'
import { useRef } from 'react'

export default function Form(): JSX.Element {
  const formData = useRef() as React.MutableRefObject<HTMLFormElement>

  const handleSubmit = (e: any) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text)
        },
        function (error) {
          console.log('FAILED...', error)
        }
      )
  }

  return (
    <div className='flex flex-col gap-4 w-10/12 laptop:w-2/6 h-full py-6'>
      <h2 className='text-2xl self-center font-bold text-black/primary hidden laptop:block'>
        Fill this form
      </h2>
      <form
        onSubmit={handleSubmit}
        ref={formData}
        className='flex flex-col justify-center self-center h-3/4 w-full gap-4 px-6 py-6 bg-white/primary rounded-xl shadow-2xl'>
        <div>
          <label
            className='text-xl font-semibold text-black/primary transition-colors ease-in'
            htmlFor='name'>
            Name
          </label>
          <input
            className='w-full font-semibold text-black/primary bg-gray-100 rounded-lg p-2 py-1 border-[1px] border-gray-300 focus:outline-none focus:border-blue/primary focus:ring-2 focus:ring-bl transition-colors ease-in '
            type='text'
            name='name'
            placeholder='Jhon Doe'
            inputMode='text'
          />
        </div>
        <div>
          <label
            className='text-xl font-semibold text-black/primary transition-colors ease-in'
            htmlFor='email'>
            Email
          </label>
          <input
            className='w-full font-semibold text-black/primary bg-gray-100 rounded-lg p-2 py-1 border-[1px] border-gray-300 focus:outline-none focus:border-blue/primary focus:ring-2 focus:ring-bl transition-colors ease-in invalid:ring-2 invalid:ring-pink-500 invalid:text-pink-600'
            type='email'
            name='email'
            placeholder='email@domain.com'
            inputMode='email'
          />
        </div>
        <div>
          <label
            className='text-xl font-semibold text-black/primary transition-colors ease-in'
            htmlFor='phone'>
            Phone
          </label>
          <input
            className='w-full font-semibold text-black/primary bg-gray-100 rounded-lg p-2 py-1 border-[1px] border-gray-300 focus:outline-none focus:border-blue/primary focus:ring-2 focus:ring-bl transition-colors ease-in invalid:ring-2 invalid:ring-pink-500 invalid:text-pink-600'
            type='tel'
            name='phone'
            placeholder='+0 000 000 0000'
            inputMode='tel'
          />
        </div>
        <input
          type='submit'
          className='mt-auto self-center bg-blue/primary px-6  rounded-lg py-2 font-semibold text-white/primary transition-all ease-in-out'
          value={'Send'}
        />
      </form>
    </div>
  )
}
