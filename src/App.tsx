import {
  aria,
  beemo,
  chart,
  coffee,
  discord,
  figma,
  hand,
  pockeball,
  rocket,
  tao,
  turtle
} from '@assets/index'
import { Chevron, Github, Mail, Ticket, Twitter } from '@components/icons/index'
import {
  Bubble,
  Form,
  Header,
  Rounded,
  Section,
  SocialButton,
  Stat
} from '@components/index'
import { githubCommits, githubRepos } from '@interceptors/index'
import githubRequest from '@models/githubRequest.model'
import { useEffect, useState } from 'react'

export default function App(): JSX.Element {
  const [repos, setRepos] = useState<githubRequest>({ value: 0 })
  const [commits, setCommits] = useState<githubRequest>({ value: 0 })

  useEffect(() => {
    githubRepos().then(data => {
      setRepos(data)
    })

    githubCommits().then(data => {
      setCommits(data)
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
          <div className='flex justify-center gap-1 smallPhone:gap-5 tablet:gap-10 w-full h-auto '>
            <SocialButton
              alt={'github'}
              route={'https://github.com/santiagohernandezs'}
              text
              viweBox='0 0 57 55'>
              <Github />
            </SocialButton>
            <SocialButton
              alt={'mail'}
              route={'mailto:santiagooheernandez@gmail.com'}
              viweBox='0 0 59 43'
              text>
              <Mail />
            </SocialButton>
            <SocialButton
              alt={'twitter'}
              route={'https://twitter.com/SuperDuperTao'}
              text
              viweBox='0 0 47 39'>
              <Twitter />
            </SocialButton>
          </div>
        </div>

        <div className='flex justify-center items-center flex-col gap-4 '>
          <Rounded />
          <Chevron width={35} height={35} viewBox='0 0 35 39' fill='#232323' />
        </div>
      </Section>

      <Section bgColor='blue/primary' gap={10}>
        <Header text='About Me' color='white' icon={hand} alt='hand' />
        <div className='grid -1 -2 tablet:grid-cols-3 tablet:grid-rows-2 gap-6 w-10/12  tablet:w-2/4'>
          <Bubble
            icon={figma}
            alt='figma'
            text='Hi, is Santiago A.K.A Tao. I’m a Frontend developer with aspiration to be a Fullstack Developer studying Computer Science in Universidad Alejandro de Humboldt, I really love to design things and make it them real through code.'
            link='https://www.figma.com/@santiagohernand'
            rstart={1}
            primary
            position='left'
          />
          <Bubble
            link='https://discordapp.com/users/467156285327147018'
            icon={discord}
            alt='discord'
            text='If it’s related to code, I might like it. You can add me on Discord if you want to talk anything code related.'
            rstart={2}
            position='right'
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
            value={repos?.value}
            text={`Actualmente tiene ${repos?.value} repositorios en Github.`}
          />
          <Stat
            variable='commits'
            value={commits?.value}
            text={`${commits?.value} commits, hasta la fecha.`}
          />
        </div>
        <span className='font-montserrat font-medium text-gray/primary text-sm'>
          From GitHub.com with GitHub API
        </span>
      </Section>

      <Section bgColor='white/primary' gap={28} minHeight={30}>
        <Header text="Let's Get in Touch" color='black' icon={hand} alt='hand' />
        <div className='flex items-center justify-center w-10/12 tablet:w-3/4 gap-16 h-[50vh]'>
          <Ticket viewBox='0 0 1743 934' width={290} height={170} />
          <span className='text-black/primary font-bold text-3xl hidden laptop:block'>
            O
          </span>
          <Form />
        </div>
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
