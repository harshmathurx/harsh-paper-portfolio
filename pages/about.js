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
                            first and foremost, I&#39;m a delhi boy trapped in bombay. a full software engineer, part time radiohead enjoyer.
                        </p>
                        <p className="mx-0.5">
                            I work for <span className='text-blue-600'>Macha.ai</span>, apart from that I enjoy building mind boggling and addictive products (even if they are borderline wrong).
                        </p>
                        <p>
                            going forward, i want to be in places where i meet people who are passionate about solving a problem big enough to change the way we interact with technology. even if it is not a problem, it could be a gap in the market, an opportunity big enough.
                        </p>
                        <p>
                            if you&#39;re builing something and need some help, you need where to find me. check the footer if you don&#39;t
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
                    formula 1. coffee (brewing, taste, ph level, instant coffee, great places). spectacular ux. decentrealized web. retro tech (everything from typewriters and jukeboxes to psp, ipods and windows vista). the state of the economy. movies. very good podcasts (recommendations are welcome).
                </p>
                <p>
                    there&#39;s obviously more but i can&#39;t remember rn.
                </p>
            </div>
        </div>
    )
}
export default About