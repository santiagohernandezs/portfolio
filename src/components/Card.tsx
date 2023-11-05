import cn from 'classnames'

export default function Card(): JSX.Element {
  const styles = {
    card: cn('flex gap-2 flex-col', 'bg-transparent border-[#27272a] border h-[30rem] rounded-xl p-4')
  }

  return (
    <div className={styles.card}>
      <h2 className='text-3xl font-semibold '>Build experiences</h2>
      <span>Build experiences that users love designing and coding web apps.</span>
      <div className='bg-black h-full'></div>
      {/* <img src='' alt='' /> */}
    </div>
  )
}
