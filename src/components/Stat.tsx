import { useState } from 'react'
import Tooltip from './Tooltip'

type statProps = {
  value: any
  variable: string
  text: string
}

export default function Stat({ variable, value, text }: statProps): JSX.Element {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className='relative flex flex-col items-center w-28 '>
      {showTooltip && <Tooltip text={text} />}
      <span
        onMouseEnter={() => {
          setShowTooltip(true)
        }}
        onMouseLeave={() => {
          setShowTooltip(false)
        }}
        className='font-montserrat font-bold text-black/primary w-28 text-center text-6xl cursor-help hover:text-blue/primary transition-colors ease-in tablet:text-5xl'>
        {value}
      </span>
      <span className='font-montserrat font-bold text-gray/primary text-xl tablet:text-2xl'>
        {variable}
      </span>
    </div>
  )
}
