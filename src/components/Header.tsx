export default function Header(): JSX.Element {
  return (
    <header className='flex justify-center items-start flex-col px-3 pt-8 mobile/l:p-4 gap-1 xl:gap-2 w-full'>
      <span className='text-white/primary text-3xl font-semibold font-poppins bigPhone:text-4xl md:text-6xl xl:text-7xl'>
        Tao, <span className='text-white/primary opacity-40 text-xl'>Full-stack</span>
      </span>
      <span className='text-sm text-gray/primary font-poppins  bigPhone:text-3xl  md:text-4xl xl:text-5xl'>
        I <span className='text-blue/primary font-semibold'>design things</span> and make it real with{' '}
        <span className='text-blue/primary font-semibold'>code.</span>
      </span>
    </header>
  )
}
