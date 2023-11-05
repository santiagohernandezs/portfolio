import { tao } from '@assets/index'
export default function Footer(): JSX.Element {
  return (
    <footer className='flex flex-col items-center justify-center min-h-[30vh] p-8 bg-blue/primary'>
      <img src={tao} alt='tao' width={90} height={90} />
      <span className='font-montserrat font-bold text-white/primary text-3xl tablet:text-4xl'>
        That’s it, for now.
      </span>
    </footer>
  )
}
