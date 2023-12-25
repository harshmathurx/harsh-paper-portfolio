import ProjectCard from "@/components/ProjectCard"

const Work = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-[5%] md:mx-[10%] py-8'>
      {/* <div className='flex flex-col justify-center items-center'>
                <p className='text-3xl font-semibold my-5'>
                    blogs
                </p>

            </div> */}
      <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-semibold my-5'>
          projects
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
          <ProjectCard imageSrc="/products/productji.png" demoLink="https://productji.vercel.app" githubLink="https://github.com/harshmathurx/productji-web" projectName="productji">
            <div>
              <p className='my-0.5 lowercase'>
                Productji is a one-stop solution for local and small businesses to create and manage their online store, reach a wider customer base, and boost their sales.
              </p>
              <p className='my-0.5 lowercase'>
                Productji is an online marketplace for local and small businesses to expand their reach and sell products effectively. It offers a subscription model with Razorpay, giving sellers flexible payment options on a monthly or quarterly basis. Productji also simplifies the migration process for Instagram/WhatsApp stores, enabling sellers to transition effortlessly to a real marketplace environment.
              </p>
            </div>
          </ProjectCard>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-semibold my-5'>
          some of the things I created while learning how to code
        </p>
        <div className='flex flex-row flex-wrap'>
          <ProjectCard imageSrc="/products/crescendo.png" demoLink="https://crescendo-music.onrender.com" githubLink="https://github.com/harshmathurx/crescendo" projectName="crescendo">
            <div>
              <p className='my-0.5 lowercase'>
                just a cool app created using the spotify api.
              </p>
              <p className='my-0.5 lowercase'>
                crescendo displays the user&#39;s top played track or the top played artist (based on the selection). the final result is a tweet by the spotify account.
              </p>
              <p className='my-0.5 lowercase'>
                go ahead, try it.
              </p>
            </div>
          </ProjectCard>
          <ProjectCard imageSrc="/products/solana-faucet.png" demoLink="https://sol-airdrop-faucet.vercel.app/" githubLink="https://github.com/harshmathurx/sol-airdrop-faucet" projectName="solana airdrop faucet">
            <div>
              <p className='my-0.5 lowercase'>
                just a solana airdrop faucet I created when I was learning about web3 and solana. 
              </p>
            </div>
          </ProjectCard>
          <ProjectCard imageSrc="/products/medium-clone.png" demoLink="https://medium-clone-harsh.vercel.app" githubLink="https://github.com/harshmathurx/medium-clone" projectName="medium clone">
            <div>
              <p className='my-0.5 lowercase'>
                lmao I created this to learn about firebase auth and firestore.
              </p>
            </div>
          </ProjectCard>
          <ProjectCard imageSrc="/products/hacker-news.png" demoLink="https://hacker-news-f0w.pages.dev/" githubLink="https://github.com/harshmathurx/hacker-news" projectName="hacker news">
            <div>
              <p className='my-0.5 lowercase'>
                Hacker News provides a simple and easy-to-use interface for browsing and searching news articles. You can browse the latest articles, or search for articles on specific topics.
              </p>
            </div>
          </ProjectCard>
          <ProjectCard imageSrc="/products/covid-tracker.png" demoLink="https://covid-19-tracker-399be.web.app" githubLink="https://github.com/harshmathurx/covid-19-tracker-web" projectName="covid tracker">
            <div>
              <p className='my-0.5 lowercase'>
              The COVID-19 Live Cases Tracker app is a React-based application that provides users with real-time data on the global COVID-19 pandemic. Users can view worldwide and country-based cases, recoveries, and deaths, as well as see how cases have fluctuated over time with an interactive line chart. Clicking on markers on the map shows country statistics.
              </p>
            </div>
          </ProjectCard>
          <ProjectCard imageSrc="/products/hulu-clone.png" demoLink="https://harsh-makes-hulu.vercel.app/" githubLink="https://github.com/harshmathurx/hulu-v2" projectName="hulu clone">
            <div>
              <p className='my-0.5 lowercase'>
              another little clone I created to learn more about react, api methods and frontend styling in general.
              </p>
            </div>
          </ProjectCard>
          <ProjectCard imageSrc="/products/amazon-clone.png" demoLink="https://challenge-42e39.web.app" githubLink="https://github.com/harshmathurx/amazon-clone-web" projectName="amazon clone">
            <div>
              <p className='my-0.5 lowercase'>
              just a little amazon clone. made for fun.
              </p>
            </div>
          </ProjectCard>
        </div>
      </div>
    </div>
  )
}
export default Work