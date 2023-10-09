import ProjectCard from '@/components/ProjectCard'
import ReccoCard from '@/components/ReccoCard'
import RedirectButton from '@/components/RedirectButton'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center mx-[5%] md:mx-[10%] py-8'>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-semibold my-5'>
          who am I?
        </p>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <Image src="/images/harsh_mathur.jpg" width={150} height={150} className='rounded-full md:w-[15%] mx-10 my-5' />
          <p className='md:w-[85%] text-center'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi perspiciatis quis officiis omnis error eius, magnam, excepturi distinctio deleniti nostrum dolores consequatur placeat neque, vero maxime minus autem itaque molestiae dignissimos? Asperiores laborum praesentium consequuntur, cumque delectus numquam esse voluptatum consectetur voluptate, reprehenderit repellat. Deserunt voluptatum animi sequi consequuntur unde, labore adipisci beatae odit consequatur ratione. Earum perferendis dolorem atque deserunt explicabo asperiores voluptates quod eaque dicta, quae culpa nulla cum eveniet facere a porro libero qui voluptatem deleniti non? Nihil, vero cupiditate ad, eligendi, architecto eveniet inventore non ducimus quibusdam voluptatem iste soluta? Repudiandae accusantium illo voluptatibus nostrum laborum.
          </p>
        </div>
        <div className='mt-5'>
          <RedirectButton link="/about" btnText="know more about me" />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-semibold my-5'>
          some of my work
        </p>
        <div className='flex flex-row flex-wrap'>
          <ProjectCard imageSrc="/images/project_placeholder.jpg" demoLink="/" githubLink="/" projectName="some project">
            <div>
              <p className='my-0.5'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam veniam eveniet iusto ea earum voluptates suscipit voluptatum itaque ad sequi repellat harum nemo minima eos aut, perspiciatis facilis magni nostrum possimus maxime! Earum cum neque dolorem ipsum accusantium voluptates minus totam repudiandae, placeat temporibus dolore obcaecati, similique reprehenderit nesciunt cupiditate.
              </p>
            </div>
          </ProjectCard>
          <ProjectCard imageSrc="/images/project_placeholder.jpg" demoLink="/" githubLink="/" projectName="some project">
            <div>
              <p className='my-0.5'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam veniam eveniet iusto ea earum voluptates suscipit voluptatum itaque ad sequi repellat harum nemo minima eos aut, perspiciatis facilis magni nostrum possimus maxime! Earum cum neque dolorem ipsum accusantium voluptates minus totam repudiandae, placeat temporibus dolore obcaecati, similique reprehenderit nesciunt cupiditate.
              </p>
            </div>
          </ProjectCard>
        </div>
        <RedirectButton link="/work" btnText="check out more of my work" />
      </div>
      <div className='flex flex-col justify-center items-center text-center'>
        <p className='text-3xl font-semibold my-5'>
          some of my reccomendations
        </p>
        <div className='mb-5 flex flex-row justify-center flex-wrap items-center'>
          <ReccoCard imageSrc="/images/barry.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/fleabag.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/superpumped.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/show_your_work.jpg" reccoLink="/" />
          <div className="m-2">
            <iframe width="275" height="200" src="https://www.youtube.com/embed/gIxEkX_2kt8?si=2yR1f-orWFifR_Af" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        <RedirectButton link="/recommendations" btnText="learn about my cultured tastebuds" />
      </div>
    </div>
  )
}
