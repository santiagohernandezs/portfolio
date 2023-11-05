import { Footer, Header } from '@/components/index'
import cn from 'classnames'

type MainLayoutProps = {
  children: React.ReactNode | React.ReactNode[]
}

export default function MainLayout({ children }: MainLayoutProps): JSX.Element {
  const styles = {
    main: cn('grid gap-2', 'grid-cols-1', 'p-3 mobile/l:p-4')
  }

  return (
    <div className='flex flex-col min-h-screen bg-[#09090b]'>
      <Header />
      <main className='p-3 mobile/l:p-4 flex-grow h-full'>{children}</main>
      <Footer />
    </div>
  )
}
