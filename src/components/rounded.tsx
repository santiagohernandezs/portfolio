import { rounded } from '@/assets'

export default function Rounded(): JSX.Element {
  return (
    <div className='animate-spin-slow'>
      <img src={rounded} alt='rounded' height={100} width={100} />
    </div>
  )
}
