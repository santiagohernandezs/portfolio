import cn from 'classnames'

type SectionProps = {
  bgColor: 'blue/primary' | 'white/primary'
  minHeight?: number | string
  gap: number
  children: JSX.Element | JSX.Element[]
}

export default function Section({ minHeight, bgColor, gap, children }: SectionProps): JSX.Element {
  const styles = {
    section: cn(
      'flex justify-center items-center flex-col py-8',
      `bg-${bgColor}`,
      minHeight ? `min-h-[${minHeight}vh]` : 'min-h-screen',
      gap ? `gap-${gap}` : 'gap-16'
    )
  }

  return <section className={styles.section}>{children}</section>
}
