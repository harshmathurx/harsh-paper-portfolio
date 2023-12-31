import ProjectCard from '@/components/ProjectCard'
import ReccoCard from '@/components/ReccoCard'
import RedirectButton from '@/components/RedirectButton'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center mx-[5%] md:mx-[10%] py-8 '>
      <div className='flex flex-col justify-center items-center'>
        <div className='my-2 flex flex-col items-center md:flex-row md:mx-4 lowercase'>
          <div>
            <p className='text-3xl font-semibold mb-1'>hi, I&#39;m harsh mathur</p>
            <p>
              A software engineer that specializes in frontend working for <span className='text-blue-600'>Macha.ai</span>, making it easier for people to use tech. I love bringing spectacular design to life, creating products which change the way people interact with technology.
            </p>
            <p className='my-0.5'>
              when not building, you can find me being a geek, watching sports, reading, obsessing about a movie, painting a frame i liked from a movie, listening to podcasts in the park or just in a corner talking about something people forgot about in 2007. all of this (professional or personal) comes with me having an unhealthy obsession of coffee.
            </p>
          </div>
          <Image src="/images/harsh_mathur.jpg" width={200} height={200} className='rounded-lg m-5 md:mx-5' />
        </div>
        <div className=''>
          <RedirectButton link="/about" btnText="know more about me" />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-semibold mt-5'>
          some of my work
        </p>
        <div className='flex flex-row flex-wrap'>
          <ProjectCard imageSrc="/products/thewalls.gif" demoLink="https://thewalls.vercel.app/" githubLink="https://github.com/cokelemonice/thewalls" projectName="the walls">
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
          some of my recommendations
        </p>
        <div className='mb-5 flex flex-row justify-center flex-wrap items-center'>
        <ReccoCard imageSrc="/images/the_bear.jpg" reccoLink="https://www.imdb.com/title/tt14452776/?ref_=nv_sr_srsg_0_tt_3_nm_5_q_the%2520bear" />
        <ReccoCard imageSrc="/images/bojack.jpg" reccoLink="https://www.imdb.com/title/tt3398228/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_bojack" />
        <ReccoCard imageSrc="/images/succession.jpg" reccoLink="https://www.imdb.com/title/tt7660850/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_succession" />
        <ReccoCard imageSrc="/images/creativity_inc.jpg" reccoLink="https://www.goodreads.com/book/show/18077903-creativity-inc" />
          <ReccoCard imageSrc="/images/steal_like_an_artist.png" reccoLink="https://www.goodreads.com/book/show/13099738-steal-like-an-artist?ref=nav_sb_ss_1_16" />
        </div>
        <RedirectButton link="/recommendations" btnText="learn about my cultured tastebuds" />
      </div>
    </div>
  )
}
