import ReccoCard from "@/components/ReccoCard"

const Recommendations = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-[5%] md:mx-[10%] py-8 text-center'>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-semibold my-5'>
          movies
        </p>
        <div className='mb-5 flex flex-row justify-center flex-wrap items-center'>
          <ReccoCard imageSrc="/images/the_social_network.png" reccoLink="/" />
        
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-semibold my-5'>
          shows
        </p>
        <div className='mb-5 flex flex-row justify-center flex-wrap items-center'>
          <ReccoCard imageSrc="/images/barry.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/fleabag.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/seinfeld.png" reccoLink="/" />
          <ReccoCard imageSrc="/images/got.jpg" reccoLink="/" />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-semibold my-5'>
          books
        </p>
        <div className='mb-5 flex flex-row justify-center flex-wrap items-center'>
          <ReccoCard imageSrc="/images/show_your_work.jpg" reccoLink="/" />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-semibold my-5'>
          youtube channels / videos
        </p>

      </div>
    </div>
  )
}
export default Recommendations