import cn from 'classnames'

export default function Card({ spanCol }: { spanCol: number | undefined }): JSX.Element {
  const styles = {
    card: cn(
      'flex gap-2 flex-col',
      'border-[#27272a] border h-[30rem] rounded-xl p-4',
      'bg-gradient-to-tr from-slate-800 via-30% via-slate-950 to-transparent',
      {
        spanCol: `col-span${spanCol}`
      }
    )
  }

  return (
    <div className={styles.card}>
      <h2 className='text-3xl font-semibold text-white/primary'>Build experiences</h2>
      <span className='text-white/primary'>
        Build experiences that users love designing and coding web apps.
      </span>
      <div className='bg-black h-full'></div>
      {/* <img src='' alt='' /> */}
    </div>
  )
}
