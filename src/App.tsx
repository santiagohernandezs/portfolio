import cn from 'classnames'
import Card from './components/Card'
import MainLayout from './layouts/MainLayout'

export default function App(): JSX.Element {
  const styles = {
    grid: cn('grid gap-4 grid-cols-div', 'md:grid-cols-div/lg md:w-5/6 md:gap-6 m-auto')
  }

  return (
    <MainLayout>
      <>
        <div className={styles.grid}>
          {[...Array(2)].map((_, i) => (
            <Card spanCol={undefined} />
          ))}
          <Card spanCol={2} />
        </div>
      </>
    </MainLayout>
  )
}
