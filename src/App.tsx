import {
  aria,
  beemo,
  chart,
  cligth,
  coffee,
  discord,
  figma,
  glight,
  hand,
  mlight,
  pockeball,
  rocket,
  tao,
  tlight,
  turtle
} from '@assets/index'
import { Bubble, Header, Rounded, SocialButton, Stat } from '@components/index'
import { lazy, useEffect, useState } from 'react'
const Section = lazy(() => import('@components/Section'))

interface IData {
  public_repos: number
  company: string
}

export default function App(): JSX.Element {
  const [data, setData] = useState<IData>({ public_repos: 0, company: '' })
  useEffect(() => {
    fetch('https://api.github.com/users/santiagohernandezs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
  }, [])

  return (
    <div className='min-h-screen bg-white/primary'>
      <Section bgColor='white/primary' gap={16}>
        <div className='flex justify-center items-center flex-col gap-8 mt-16'>
          <div className='flex justify-center items-center flex-col md:gap-1 xl:gap-2'>
            <span className='text-blue/primary text-4xl font-semibold font-poppins  bigPhone:text-4xl md:text-6xl xl:text-7xl'>
              Hello!
            </span>
            <span className='text-black/primary text-4xl font-bold font-sora  bigPhone:text-5xl md:text-7xl xl:text-8xl'>
              I’m Santiago<span className='text-blue/primary'>.</span>
            </span>
            <span className='text-3xl text-center w-11/12 text-gray/primary font-poppins  bigPhone:text-3xl  md:text-4xl xl:text-5xl'>
              I <span className='text-blue/primary font-semibold'>design things</span> and
              make it real with{' '}
              <span className='text-blue/primary font-semibold'>code</span>
            </span>
          </div>
          <div className='flex justify-center gap-5 bigPhone:gap-10 w-full h-auto '>
            <SocialButton
              image={glight}
              alt={'github'}
              route={'https://github.com/santiagohernandezs'}
            />
            <SocialButton
              image={mlight}
              alt={'mail'}
              route={'mailto:santiagooheernandez@gmail.com'}
            />
            <SocialButton
              image={tlight}
              alt={'twitter'}
              route={'https://twitter.com/SuperDuperTao'}
            />
          </div>
        </div>

        <div className='flex justify-center items-center flex-col gap-4 '>
          <Rounded />
          <img src={cligth} alt='chevron' width={40} height={40} />
        </div>
      </Section>

      {/* le falta un padding vertical -> py8 */}

      <Section bgColor='blue/primary' gap={10} minHeight={50}>
        <Header text='About Me' color='white' icon={hand} alt='hand' />
        <div className='grid -1 -2 tablet:grid-cols-3 tablet:grid-rows-2 gap-6 w-10/12  tablet:w-2/4'>
          <Bubble
            icon={figma}
            alt='figma'
            text='Hi, is Santiago A.K.A Tao. I’m a Frontend developer with aspiration to be a Fullstack Developer studying Computer Science in Universidad Alejandro de Humboldt, I really love to design things and make it them real through code.'
            link='https://www.figma.com/@santiagohernand'
            rstart={1}
            primary
          />
          <Bubble
            link='https://discordapp.com/users/467156285327147018'
            icon={discord}
            alt='discord'
            text='If it’s related to code, I might like it. You can add me on Discord if you want to talk anything code related.'
            // width={50}
            rstart={2}
          />
        </div>
      </Section>

      <Section bgColor='white/primary' gap={4} minHeight={'auto'}>
        <Header text='My Work' color='black' icon={rocket} alt='rocket' />
        <div className='grid w-10/12 cursor-pointer grid-rows-4 grid-cols-2 items-center gap-4 tablet:grid tablet:grid-cols-2 tablet:grid-rows-4 tablet:w-2/4 desktop:grid-cols-4 desktop:grid-rows-2 desktop:my-8'>
          <div className='bg-[#FFBE0B] col-span-2 w-full h-[160px] flex justify-center items-center gap-4  flex-row-reverse rounded-lg relative drop-shadow-2xl'>
            <img
              className='max-w-[50%] h-[80%] drop-sdas-2xl'
              src={beemo}
              alt='beemo'
              height={100}
              width={100}
            />
            <div className='flex flex-col items-center justify-center w-[45%] h-full text-black/primary mx-2'>
              <span className='italic font-semibold text-5xl font-surco'>Beemo</span>
              <span className='text-xs text-center'>
                La mejor forma de trabajar en equipo
              </span>
            </div>
          </div>

          <div className='flex justify-center cursor-pointer items-center bg-[#282828] h-full w-full rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 drop-shadow-2xl'>
            <span className='font-montserrat font-bold text-white/primary text-4xl'>
              Lua
            </span>
          </div>

          <div className='flex flex-col cursor-pointer justify-center items-center bg-white/primary h-full w-full rounded-lg drop-shadow-2xl'>
            <img src={aria} alt='aria' width={75} height={75} />
            <span className='font-montserrat font-bold text-black/primary text-4xl'>
              Aria
            </span>
          </div>

          <div className='flex cursor-pointer desktop:col-start-3 desktop:row-start-2 col-span-2 justify-center items-center gap-3 bg-[#F1E1D8] h-full w-full rounded-lg drop-shadow-2xl'>
            <img
              src={coffee}
              className='drop-shadow-2xl'
              alt='aria'
              width={100}
              height={100}
            />
            <div className='flex flex-col items-center'>
              <span className='font-arsenica font-bold text-black/secondary text-5xl'>
                KALDI
              </span>
              <span className='text-sm'>Un sabor para cada gusto</span>
            </div>
          </div>

          <div className='flex flex-col cursor-pointer col-start-1 justify-center items-center bg-white/primary h-full w-full rounded-lg drop-shadow-2xl'>
            <img src={turtle} alt='aria' width={75} height={75} />
            <span className='font-montserrat text-black/primary text-4xl'>Turtle</span>
          </div>

          <div className='flex flex-col cursor-pointer justify-center items-center bg-black/primary h-full w-full rounded-lg drop-shadow-2xl'>
            <img src={pockeball} alt='aria' width={75} height={75} />
            <span className='font-montserrat font-medium text-white/primary text-2xl'>
              Pocke API
            </span>
          </div>
        </div>
      </Section>

      <Section bgColor='white/primary' gap={16} minHeight={20}>
        <Header color='black' text='My Stats' alt='stats' icon={chart} />
        <div className='flex items-center justify-center gap-10  tablet:gap-32 w-11/12'>
          <Stat
            variable='repos'
            value={data?.public_repos}
            text='Actualmente tiene 20 repositorios en Github'
          />
          <Stat variable='commits' value={301} text='301 commits, hasta la fecha' />
        </div>
        <span className='font-montserrat font-medium text-gray/primary text-sm'>
          From GitHub.com with GitHub API
        </span>
      </Section>

      <footer className='flex flex-col items-center justify-center min-h-[30vh] p-8 bg-blue/primary'>
        <img src={tao} alt='tao' width={90} height={90} />
        <span className='font-montserrat font-bold text-white/primary text-3xl tablet:text-4xl'>
          That’s it, for now.
        </span>
      </footer>
    </div>
  )
}
