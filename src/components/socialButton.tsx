type SocialButtonProps = {
  image: string
  alt: string
  route: string
}

export default function SocialButton({
  image,
  alt,
  route
}: SocialButtonProps): JSX.Element {
  return (
    <a
      href={route}
      role='link'
      accessKey={alt.at(0)}
      aria-label={`link to my ${alt}`}
      className='border-4 border-black/primary rounded-full w-20 h-16 bigPhone:w-24 bigPhone:h-14 flex justify-center items-center hover:w-28 transition-all ease-in'>
      <img src={image} alt={alt} width={25} height={25} />
    </a>
  )
}
