import Footer from '@/components/Footer'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
        <title>harsh mathur</title>
        <meta name="description" content="A software engineer that specializes in frontend working for Macha.ai, making it easier for people to use tech. I love bringing spectacular design to life, creating products which change the way people interact with technology." />

        {/*These are need for PWA*/}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="harsh mathur" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tap-highlight" content="no" />

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <link rel="canonical" href="https://harshmathur.vercel.app" />
        <meta httpEquiv="content-language" content="en-us" />

        <link rel="preconnect" href="https://harshmathur.vercel.app" />

        <link rel="dns-prefetch" href="https://harshmathur.vercel.app" />

        <meta name="author" content="harsh mathur" />

        <link rel="alternate" hrefLang="en" href="https://harshmathur.vercel.app" />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        <meta property="og:title" content="harsh mathur" key="title" />
        <meta property="og:description" content="A software engineer that specializes in frontend working for Macha.ai, making it easier for people to use tech. I love bringing spectacular design to life, creating products which change the way people interact with technology." />
      
        <meta property="og:image" content="/images/harsh_mathur.jpg" />
        <meta property="og:image:secure_url" content="/images/harsh_mathur.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="harsh mathur" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content="https://harshmathur.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:profile" content="https://github.com/harshmathurx" />
        <meta property="og:site_name" content="harsh mathur" />
        <meta property="og:locale" content="en_US" />


        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://twitter.com/harshwhere" />
        <meta name="twitter:title" content="harsh mathur" />
        <meta name="twitter:description" content="A software engineer that specializes in frontend working for Macha.ai, making it easier for people to use tech. I love bringing spectacular design to life, creating products which change the way people interact with technology." />
        <meta name="twitter:image" content="/images/harsh_mathur.jpg" />
        <meta name="twitter:creator" content="https://twitter.com/harshwhere" />
        <meta name="twitter:domain" content="https://harshmathur.vercel.app" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "harsh mathur",
          "url": "https://harshmathur.vercel.app",
          "sameAs": [
            "https://github.com/harshmathurx",
            "https://www.linkedin.com/in/harshmathurx",
            "https://twitter.com/harshwhere",
          ]
        }`
          }}
        />


        {/*Edit this to your according FAQ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who is harsh mathur?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A software engineer that specializes in frontend working for Macha.ai, making it easier for people to use tech. I love bringing spectacular design to life, creating products which change the way people interact with technology."
                }
              }
            ]
          }
        `,
        }} />
        <meta name="google-site-verification" content="ufjB4lpFxeLeyrleMdoU3BtoNleUMd-Wb53g-gZzEiQ" />

        {/* <meta name="keywords" content="
    harsh mathur, Full Stack Engineer, Full Stack Developer, DevOps Engineer, Software Engineer,
    Programmer, Software Developer, Portfolio Website, Web Developer, Coding, Full Stack Development,
    Technology Enthusiast, Software Development, Computer Science, Programming Projects,
    Frontend Developer, Backend Developer, Software Development Portfolio, Student,
    Full Stack Web Developer, harsh mathur Portfolio, Coding Projects, Tech Portfolio,
    Web Development, DevOps Professional, harsh mathur Projects, Software Engineer Portfolio,
    IT Professional, Technology Projects, Software Development Engineer, Computer Programmer,
    Code Portfolio, Technology Student, Software Architect, Cloud Computing,
    DevOps Specialist, Software Engineering Projects, Coding Portfolio,
    Full Stack Engineer Portfolio, harsh mathur Web Developer,
    Software Development Student, Coding Enthusiast, DevOps Portfolio, Programming Portfolio,
    harsh mathur DevOps, IT Portfolio, Web Developer Portfolio, harsh mathur Developer,
    Full Stack Engineer harsh mathur, harsh mathur Coding, harsh mathur IT,
    harsh mathur Full Stack Developer, harsh mathur Software Engineer, harsh mathur DevOps Engineer,
    harsh mathur Programming, harsh mathur Software Development, harsh mathur Coding Projects,
    harsh mathur Tech Portfolio, harsh mathur IT Portfolio, harsh mathur Software Engineer Portfolio,
    harsh mathur Web Developer Portfolio, harsh mathur DevOps Portfolio, harsh mathur Full Stack Engineer,
    harsh mathur Full Stack Developer Portfolio, harsh mathur Coding Portfolio, harsh mathur Programming Portfolio,
    harsh mathur Software Development Portfolio, harsh mathur Technology Projects,
    harsh mathur Computer Science, harsh mathur Cloud Computing, harsh mathur IT Professional,
    harsh mathur Technology Enthusiast, harsh mathur Computer Programmer, harsh mathur Code Portfolio,
    harsh mathur Technology Student, harsh mathur Software Architect,fiaz,fiaz portfolio,fiaz devops,fiaz devops engineer,
    fiaz devops portfolio,fiaz devops projects,fiaz devops specialist,fiaz devops professional,fiaz devops engineer portfolio,
    fiaz devops engineer projects,fiaz devops engineer specialist,fiaz devops engineer professional,fiaz devops engineer coding,
    fiaz devops engineer coding projects,fiaz devops engineer coding portfolio,fiaz devops engineer coding specialist,
    Open Source Contributor,open source,open source projects,open source portfolio,open source contributions,
    open source contributions portfolio,open source contributions projects,open source contributions coding,
    open source contributions coding projects,open source contributions coding portfolio,open source contributions coding specialist,
    open source contributions coding professional,open source contributions coding engineer,open source contributions coding developer,
    open source contributions coding student,open source contributions coding enthusiast,open source contributions coding architect,
    open source contributions coding projects portfolio,open source contributions coding projects specialist," /> */}
      </Head>
      <body className='flex flex-col min-h-screen'>
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
