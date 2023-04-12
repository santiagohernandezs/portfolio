type HeaderProps = {
  text: string
  icon: string
  alt: string
  color: 'black' | 'white'
}

export default function Header({ text, icon, alt, color }: HeaderProps): JSX.Element {
  return (
    <div className='flex items-center gap-4'>
      <h2
        className={`text-2xl tablet:text-3xl desktop:text-4xl text-${
          color ? color : 'white'
        }/primary font-semibold`}>
        {text}
      </h2>
      <img src={icon} alt={alt} width={40} height={40} />
    </div>
  )
}
