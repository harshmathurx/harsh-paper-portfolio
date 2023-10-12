import ReccoCard from "@/components/ReccoCard"

const Recommendations = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-[5%] md:mx-[10%] py-8 text-center'>
      <div className='flex flex-col justify-center items-center'>
        <div className='mb-5 flex flex-row justify-center flex-wrap items-center'>
          <ReccoCard imageSrc="/images/creativity_inc.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/steal_like_an_artist.png" reccoLink="/" />
          <ReccoCard imageSrc="/images/show_your_work.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/shoe_dog.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/build_tony.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/everyone_you_hate.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/india_a_history.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/how_to_build_a_car.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/the_design_of_everyday_things.png" reccoLink="/" />
          <ReccoCard imageSrc="/images/ultimate_hitchhiker.jpg" reccoLink="/" />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-semibold'>
          and more
        </p>
        <div className='mb-5 flex flex-row justify-center flex-wrap items-center'>
          <ReccoCard imageSrc="/images/the_bear.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/the_social_network.png" reccoLink="/" />
          <ReccoCard imageSrc="/images/bojack.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/barry.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/fleabag.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/succession.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/superpumped.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/ted_lasso.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/seinfeld.png" reccoLink="/" />
          <ReccoCard imageSrc="/images/new_girl.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/got.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/fargo.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/the_end_of_the.jpg" reccoLink="/" />
        </div>
      </div>
      {/* <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-semibold my-5'>
          youtube channels / videos
        </p>
        <div className='mb-5 flex flex-row justify-center flex-wrap items-center'>
          <div className="m-2">
            <iframe width="275" height="200" src="https://www.youtube.com/embed/qURieQJVZIs?si=MKz3ILWBUFS0BN5Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="m-2">
            <iframe width="275" height="200" src="https://www.youtube.com/embed/gIxEkX_2kt8?si=2yR1f-orWFifR_Af" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div> */}
    </div>
  )
}
export default Recommendations