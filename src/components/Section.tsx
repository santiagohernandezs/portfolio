type SectionProps = {
  bgColor: 'blue/primary' | 'white/primary'
  minHeight?: number | string
  gap: number
  children: JSX.Element[]
}

export default function Section({
  minHeight,
  bgColor,
  gap,
  children
}: SectionProps): JSX.Element {
  return (
    <section
      className={`flex justify-center items-center flex-col py-8 bg-${bgColor} ${
        minHeight ? `min-h-[${minHeight}vh]` : 'min-h-screen'
      } ${gap ? `gap-${gap}` : 'gap-16'}`}>
      {children}
    </section>
  )
}
