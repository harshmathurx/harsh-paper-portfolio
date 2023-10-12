import ReccoCard from "@/components/ReccoCard"

const Recommendations = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-[5%] md:mx-[10%] py-8 text-center'>
      <div className='flex flex-col justify-center items-center'>
        <div className='mb-5 flex flex-row justify-center flex-wrap items-center'>
          <ReccoCard imageSrc="/images/creativity_inc.jpg" reccoLink="https://www.goodreads.com/book/show/18077903-creativity-inc" />
          <ReccoCard imageSrc="/images/steal_like_an_artist.png" reccoLink="https://www.goodreads.com/book/show/13099738-steal-like-an-artist?ref=nav_sb_ss_1_16" />
          <ReccoCard imageSrc="/images/show_your_work.jpg" reccoLink="https://www.goodreads.com/book/show/18290401-show-your-work?ref=nav_sb_ss_1_14" />
          <ReccoCard imageSrc="/images/shoe_dog.jpg" reccoLink="https://www.goodreads.com/book/show/27220736-shoe-dog?from_search=true&from_srp=true&qid=lykvZjFr3q&rank=1" />
          <ReccoCard imageSrc="/images/build_tony.jpg" reccoLink="https://www.goodreads.com/book/show/59696349-build?ref=nav_sb_ss_1_10" />
          <ReccoCard imageSrc="/images/everyone_you_hate.jpg" reccoLink="https://www.goodreads.com/book/show/52693712-everyone-you-hate-is-going-to-die?ref=nav_sb_ss_3_12" />
          <ReccoCard imageSrc="/images/india_a_history.jpg" reccoLink="https://www.goodreads.com/book/show/174501.India?ref=nav_sb_ss_2_15" />
          <ReccoCard imageSrc="/images/how_to_build_a_car.jpg" reccoLink="https://www.goodreads.com/book/show/35657708-how-to-build-a-car?ref=nav_sb_ss_5_10" />
          <ReccoCard imageSrc="/images/the_design_of_everyday_things.png" reccoLink="https://www.goodreads.com/book/show/840.The_Design_of_Everyday_Things?ref=nav_sb_ss_1_14" />
          <ReccoCard imageSrc="/images/ultimate_hitchhiker.jpg" reccoLink="https://www.goodreads.com/book/show/13.The_Ultimate_Hitchhiker_s_Guide_to_the_Galaxy?ref=nav_sb_ss_1_12" />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-semibold'>
          and more
        </p>
        <div className='mb-5 flex flex-row justify-center flex-wrap items-center'>
          <ReccoCard imageSrc="/images/the_bear.jpg" reccoLink="https://www.imdb.com/title/tt14452776/?ref_=nv_sr_srsg_0_tt_3_nm_5_q_the%2520bear" />
          <ReccoCard imageSrc="/images/the_social_network.png" reccoLink="https://www.imdb.com/title/tt1285016/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_the%2520soci" />
          <ReccoCard imageSrc="/images/bojack.jpg" reccoLink="https://www.imdb.com/title/tt3398228/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_bojack" />
          <ReccoCard imageSrc="/images/barry.jpg" reccoLink="https://www.imdb.com/title/tt5348176/?ref_=nv_sr_srsg_0_tt_3_nm_5_q_barry" />
          <ReccoCard imageSrc="/images/fleabag.jpg" reccoLink="https://www.imdb.com/title/tt5687612/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_fleabag" />
          <ReccoCard imageSrc="/images/succession.jpg" reccoLink="https://www.imdb.com/title/tt7660850/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_succession" />
          <ReccoCard imageSrc="/images/superpumped.jpg" reccoLink="/" />
          <ReccoCard imageSrc="/images/ted_lasso.jpg" reccoLink="https://www.imdb.com/title/tt10986410/?ref_=nv_sr_srsg_0_tt_5_nm_3_q_ted%2520lasso" />
          <ReccoCard imageSrc="/images/seinfeld.png" reccoLink="https://www.imdb.com/title/tt0098904/?ref_=nv_sr_srsg_0_tt_5_nm_3_q_seinfeld" />
          <ReccoCard imageSrc="/images/new_girl.jpg" reccoLink="https://www.imdb.com/title/tt1826940/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_new%2520girl" />
          <ReccoCard imageSrc="/images/got.jpg" reccoLink="https://www.imdb.com/title/tt0944947/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_game%2520of%2520thrones" />
          <ReccoCard imageSrc="/images/fargo.jpg" reccoLink="https://www.imdb.com/title/tt0116282/?ref_=nv_sr_srsg_3_tt_5_nm_3_q_fargo" />
          <ReccoCard imageSrc="/images/the_end_of_the.jpg" reccoLink="https://www.imdb.com/title/tt6257970/?ref_=nv_sr_srsg_1_tt_5_nm_2_q_the%2520end%2520of%2520the%2520" />
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