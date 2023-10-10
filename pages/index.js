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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, praesentium itaque odit ab accusantium delectus quidem. Dolores omnis impedit neque, saepe ut eos reprehenderit, nihil voluptates iusto aliquam non optio!
          </p>
        </div>
        <div className=''>
          <RedirectButton link="/about" btnText="know more about me" />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-semibold my-5'>
          some of my work
        </p>
        <div className='flex flex-row flex-wrap'>
          <ProjectCard imageSrc="/products/thewalls.gif" demoLink="https://thewalls.vercel.app/" githubLink="https://github.com/harshmathurx/thewalls" projectName="the walls">
            <div>
              <p className='my-0.5 lowercase'>
                The Walls is a new platform that seamlessly integrates with Spotify to provide users with an innovative way to curate and share their musical journey and their most loved tracks.
              </p>
              <p className='my-0.5 lowercase'>
                With The Walls, users can create a customized virtual wall that reflects their musical taste in a few clicks. They can personalize their wall with a variety of gradient and media options, including their own uploaded images/media in the background. The Walls also highlights the user&#39;s music journey with their most-played songs, organized into Last Month, Last 6 Months, and All-Time categories.
              </p>
            </div>
          </ProjectCard>
          <ProjectCard imageSrc="/products/dianomi.png" demoLink="https://dianomi.vercel.app/" githubLink="https://github.com/harshmathurx/dianomi" projectName="dianomi">
            <div>
              <p className='my-0.5 lowercase'>
                Dianomi is a developer tool that connects app/game creators with ideal beta testers and streamlines the testing process using a unique incentive system based on desired ERC20/ERC721 tokens. It also orchestrates exclusive token-gated live streams through Huddle01 for app/game creators to interact directly with their most enthusiastic supporters. Additionally, Dianomi has pioneered a launchpad platform on Web3, enabling app/game creators to raise funds and distribute assets to their communities.
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
          <ReccoCard imageSrc="/images/ted_lasso.jpg" reccoLink="/" />
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
