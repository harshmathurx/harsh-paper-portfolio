import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center mx-[5%] md:mx-[10%] py-10'>
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
      </div>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-semibold my-5'>
          what do I do?
        </p>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam earum ipsam, quasi, accusamus culpa, ratione incidunt eos repudiandae optio a itaque voluptate ex debitis. Ratione optio corporis fuga voluptas doloremque consectetur recusandae expedita vel natus ipsum! Accusantium numquam laboriosam animi odio, sint, fugit dolorem eligendi deserunt dolores modi facere.
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-semibold my-5'>
          my journey
        </p>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam earum ipsam, quasi, accusamus culpa, ratione incidunt eos repudiandae optio a itaque voluptate ex debitis. Ratione optio corporis fuga voluptas doloremque consectetur recusandae expedita vel natus ipsum! Accusantium numquam laboriosam animi odio, sint, fugit dolorem eligendi deserunt dolores modi facere.
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-semibold my-5'>
          some of my work
        </p>
        <div className='flex flex-col md:flex-row justify-center items-center my-5'>
          <Image src='/images/project_placeholder.jpg' className='rounded-sm mx-5 my-5 md:my-2' width={250} height={150} />
          <div>
            <p className='text-xl font-bold'>project title</p>
            <p className='my-0.5'>
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quas, error sapiente nostrum.
            </p>
            <p className='my-0.5'>
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quas, error sapiente nostrum.
            </p>
            <p className='my-0.5'>
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quas, error sapiente nostrum.
            </p>
            <p className='my-0.5'>
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quas, error sapiente nostrum.
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center my-5'>
          <Image src='/images/project_placeholder.jpg' className='rounded-sm mx-5 my-5 md:my-2' width={250} height={150} />
          <div>
            <p className='text-xl font-bold'>project title</p>
            <p className='my-0.5'>
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quas, error sapiente nostrum.
            </p>
            <p className='my-0.5'>
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quas, error sapiente nostrum.
            </p>
            <p className='my-0.5'>
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quas, error sapiente nostrum.
            </p>
            <p className='my-0.5'>
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quas, error sapiente nostrum.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
