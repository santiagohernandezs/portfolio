type TooltipsProps = {
  text: string
}

export default function Tooltip({ text }: TooltipsProps): JSX.Element {
  return (
    <div className='absolute w-44 h-auto bg-black/primary/90 p-2 rounded-lg cursor-default -top-14 -left-8 animate-appear'>
      <p className='font-montserrat text-gray/primary text-sm'>{text}</p>
    </div>
  )
}
