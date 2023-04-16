import { useRef } from 'react'

export default function Form(): JSX.Element {
  let name = useRef<HTMLInputElement>(null)
  let email = useRef<HTMLInputElement>(null)

  const sendContent = (e: any) => {
    e.preventDefault()
    console.log(
      `${name?.current?.value} esta interesado, su email es: ${email?.current?.value}`
    )
  }

  return (
    <div className='flex flex-col gap-4 w-10/12 laptop:w-2/6 h-full py-6'>
      <h2 className='text-2xl self-center font-bold text-black/primary hidden laptop:block'>
        Llena el formulario
      </h2>
      <form className='flex flex-col justify-center self-center h-3/4 w-full gap-4 px-6 py-6 bg-white/primary rounded-xl shadow-2xl'>
        <div>
          <label
            className='text-xl font-semibold text-black/primary transition-colors ease-in'
            htmlFor='name'>
            Name
          </label>
          <input
            className='w-full font-semibold text-black/primary bg-gray-100 rounded-lg p-2 py-1 border-[1px] border-gray-300 focus:outline-none focus:border-blue/primary focus:ring-2 focus:ring-bl transition-colors ease-in '
            ref={name}
            type='text'
            name='name'
            placeholder='Jhon Doe'
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
            ref={email}
            type='email'
            name='email'
            placeholder='email@domain.com'
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
            ref={email}
            type='tel'
            name='phone'
            placeholder='+0 000 000 0000'
          />
        </div>
        <button
          className='mt-auto self-center bg-blue/primary px-6  rounded-lg py-2 font-semibold text-white/primary transition-all ease-in-out'
          onClick={sendContent}>
          Send
        </button>
      </form>
    </div>
  )
}
