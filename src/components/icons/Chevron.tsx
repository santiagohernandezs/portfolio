type ChevronProps = {
  height: number
  width: number
  viewBox: string
  fill: string
}

export default function Chevron({
  height,
  width,
  viewBox,
  fill,
  ...props
}: ChevronProps): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
      className='animate-goDown aease-in-out 2s infinite alternate'>
      <path
        d='M32.0608 22.3313L17.5 36.4875M17.5 36.4875L2.93933 22.3313M17.5 36.4875L17.5 2.51251'
        stroke='#282828'
        stroke-width='4.71875'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  )
}
