import Image from "next/image"

const About = () => {
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
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-3xl font-semibold my-5'>
                    the lore
                </p>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <p className='md:w-[85%] text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum eius accusantium vero quas atque ab veniam minima saepe veritatis corrupti, quia sapiente. Iusto optio vel recusandae. Libero veritatis hic non et dolore, consectetur officia.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About