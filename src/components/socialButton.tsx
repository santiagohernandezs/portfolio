import { useState } from 'react'

type SocialButtonProps = {
  alt: string
  route: string
  text?: boolean
  viweBox: string
  children: JSX.Element
}

export default function SocialButton({
  alt,
  route,
  text,
  viweBox,
  children
}: SocialButtonProps): JSX.Element {
  const [hoverd, setHoverd] = useState(false)
  return (
    <a
      href={route}
      role='link'
      accessKey={alt.at(0)}
      aria-label={`link to my ${alt}`}
      onMouseEnter={() => setHoverd(true)}
      onMouseLeave={() => setHoverd(false)}
      className={`border-4 border-black/primary rounded-full px-3 py-2 gap-2 bigPhone:gap-3 flex justify-center items-center hover:px-4 hover:bg-blue/primary transition-all ease-in`}>
      <svg
        className='transition-colors ease-in'
        xmlns='http://www.w3.org/2000/svg'
        width={20}
        height={20}
        fill={hoverd ? '#FAFAFA' : '#232323'}
        viewBox={viweBox}>
        {children}
      </svg>
      {text && (
        <span
          className={`${
            hoverd ? 'text-white/primary' : 'text-black/primary'
          } text-sm bigPhone:text-xl font-bold font-sora transition-colors ease-in`}>
          {alt}
        </span>
      )}
    </a>
  )
}
