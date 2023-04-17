import emailjs from '@emailjs/browser'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

//asignar a cada propiedad un objeto de tipo {value: string, error: boolean}
interface inputs {
  name: string
  email: string
  phone: string
}

export default function Form(): JSX.Element {
  const [inputs, setInputs] = useState<inputs>({ name: '', email: '', phone: '' })

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (inputs.name && inputs.email && inputs.phone) {
      toast.promise(
        emailjs.send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          {
            ...inputs
          },
          import.meta.env.VITE_PUBLIC_KEY
        ),
        {
          loading: 'Loading',
          success: 'Got the data',
          error: 'Error when fetching'
        }
      )
    } else {
      toast('Fill all the fields', {
        icon: '🚨'
      })
    }
  }

  return (
    <div className='flex flex-col gap-4 w-10/12 laptop:w-2/6 h-full py-6'>
      <h2 className='text-2xl self-center font-bold text-black/primary hidden laptop:block'>
        Fill this form
      </h2>
      <form
        onChange={handleChange}
        onSubmit={handleSubmit}
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
          className={`mt-auto cursor-pointer self-center bg-blue/primary ${
            !inputs.name || !inputs.email || !inputs.phone
              ? 'opacity-50 cursor-not-allowed'
              : null
          } px-6  rounded-lg py-2 font-semibold text-white/primary transition-all ease-in-out`}
          value={'Send'}
        />
      </form>
      <Toaster position='bottom-right' gutter={8} />
    </div>
  )
}
