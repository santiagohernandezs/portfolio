import { useState } from 'react'

type BubbleProps = {
  text: string
  icon: string
  alt: string
  link: string
  primary?: boolean
  rstart: number
}

export default function Bubble({
  text,
  icon,
  alt,
  link,
  primary,
  rstart
}: BubbleProps): JSX.Element {
  const [imageWidth, setImageWidth] = useState(50)
  return (
    <div
      className={`relative inline-grid h-[fit-content] min-w-[10rem] drop-shadow-2xl row-start-${rstart} ${
        primary ? 'tablet:col-[1_/_span_2]' : 'tablet:col-[2_/_span_2]'
      }
      p-[20px] font-poppins text-base bg-white/primary rounded-lg md:text-lg xl:text-xl`}>
      <span>{text}</span>
      <a href={link}>
        <img
          onMouseEnter={() => setImageWidth(60)}
          onMouseLeave={() => setImageWidth(50)}
          className='absolute -bottom-1 -right-5 rotate-12 transition-all 1s ease-in-out '
          src={icon}
          alt={alt}
          width={imageWidth}
        />
      </a>
    </div>
  )
}
// ${cols ? `col-start-${cols}` : null}
