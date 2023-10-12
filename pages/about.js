import Image from "next/image"

const About = () => {
    return (
        <div className='flex flex-col justify-center items-center mx-[5%] md:mx-[10%] py-8'>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-3xl font-semibold'>
                    who am I?
                </p>
                <div className='my-2 flex flex-col items-center md:flex-row md:mx-4 lowercase'>
                    <div>
                        <p>
                            first and foremost, I&#39;m a delhi boy trapped in bombay. a full time software engineer, part time radiohead enjoyer.
                        </p>
                        <p className="mx-0.5">
                            I work for <span className='text-blue-600'>Macha.ai</span>, I enjoy building mind boggling and fun products (even if they are borderline weird).
                        </p>
                        <p>
                            going forward, i want to be in places where i meet people who are passionate about solving a problem big enough to change the way we interact with technology. even if it is not a problem, it could be a gap in the market, an opportunity big enough or just fun for people to use.
                        </p>
                        <p>
                            if you&#39;re builing something and need any help, you know where to find me.
                        </p>
                    </div>
                    <Image src="/images/harsh_mathur.jpg" width={200} height={200} className='rounded-lg m-5 md:mx-5' />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-3xl font-semibold my-5'>
                    things i will talk about if you buy me coffee
                </p>
                <p>
                    formula 1. coffee (brewing, taste, ph level, instant coffee, great places). spectacular ux. decentrealized web. retro tech (everything from typewriters and jukeboxes to psp, ipods and windows vista). the state of the economy. movies. very good podcasts (recommendations are welcome). how dapps should have easier onboarding for native web2 users. how much I love biryani. why lando norris is the next big thing in f1. why having adhd is great but disgusting. minimal design maximal design and the sweet spot in between. how the social network is the best movie of the 21st century (yet).
                </p>
                <p>
                    there&#39;s obviously more but i&#39;ll leave those for the coffee table
                </p>
            </div>
        </div>
    )
}
export default About