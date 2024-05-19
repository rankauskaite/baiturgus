import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Chrome, Compass, Cookie } from "lucide-react";
import Link from "next/link";
import Image from "next/image"

const cookies = [
    {
        name: "What are cookies?",
        Icon: Cookie,
    },
  ]

const chrome = [
  {
    Icon: Chrome
  }
]

const safari = [
  {
    Icon: Compass
  }
]

export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <h1 className='text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl'>
            Cookie Policy
        </h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
        <span className="text-xl text-pink-600 font-semibold">
            BaiTurgus{' '}
        </span>
            ("us", "we", or "our") uses cookies on the{' '} 
            <span className="text-xl text-pink-600 font-semibold">
                BaiTurgus{' '}
            </span> 
            website (the "Service"). By using the Service, you consent to the use of cookies.
          </p>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Our Cookies Policy explains what cookies are, how we use cookies, how third-parties we may partner with 
          may use cookies on the Service, Your choices regarding cookies, and further information about cookies.
          </p>
      </div>
    </MaxWidthWrapper>

    <section className='border-t border-pink-200 bg-pink-50'>
      <MaxWidthWrapper className='py-20'>


      <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 lg:gap-x-8 lg:gap-y-0'>
          {cookies.map((col) => (
            <div className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
              <div className='md:flex-shrink-0 flex justify-center'>
                <div className='h-16 w-16 flex items-center justify-center rounded-full bg-pink-200 text-pink-900'>
                  {<col.Icon className='w-1/3 h-1/3' />}
                </div>
              </div>
              <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
              <h3 className='text-xl font-medium text-gray-900'>
                  {col.name}
                  </h3>
                  <p className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                    Cookies are small pieces of text sent by your web browser by a website you visit. 
                    A cookie file is stored in your web browser and allows the Service or a third-party 
                    to recognize you and make your next visit easier and the Service more useful to you.
                  </p>
                  <p className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                    Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer 
                    or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
                  </p>
              </div>
            </div>
          ))}
        </div>

        <section className='border-t border-pink-200 bg-pink-50 mt-5 mb-5'/>

        <h3 className="text-center md:flex md:items-start md:text-left lg:block lg:text-center text-xl font-semibold mb-10 mt-10">
            How <strong>BaiTurgus</strong> uses cookies
        </h3>
        <div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            When you use and access the Service, we may place a number of cookies files in your web browser.
        </div>
        <div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            We use cookies for the following purposes:
            <ul style={{ listStyleType: 'disc', textAlign: 'center', paddingLeft: '0', margin: 'auto', maxWidth: 'fit-content' }}>
                <li style={{ textAlign: 'left' }}>To enable certain functions of the Service</li>
                <li style={{ textAlign: 'left' }}>To provide analytics</li>
                <li style={{ textAlign: 'left' }}>To store your preferences</li>
                <li style={{ textAlign: 'left' }}>To enable advertisements delivery, including behavioral advertising</li>
            </ul>
        </div>
        <div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            We use both session and persistent cookies on the Service and we use different types of cookies to run the Service:
            <ul style={{ listStyleType: 'disc', textAlign: 'center', paddingLeft: '0', margin: 'auto', maxWidth: 'fit-content' }}>
                <li style={{ textAlign: 'left' }}><strong>Essential cookies</strong>: We may use essential cookies to authenticate users and prevent fraudulent use of user accounts.</li>
                <li style={{ textAlign: 'left' }}><strong>Third-party cookies</strong>: In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.</li>
            </ul>
        </div>

        <section className='border-t border-pink-200 bg-pink-50 mt-5 mb-5'/>

        <h3 className="text-center md:flex md:items-start md:text-left lg:block lg:text-center text-xl font-semibold mb-10 mt-10">
          What are your choices regarding cookies?
        </h3>
        <div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
          If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
        </div>
        <div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
          Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features 
          we offer, you may not be able to store your preferences, and some of our pages might not display properly.
        </div>

        <section className='border-t border-pink-200 bg-pink-50 mt-5 mb-5'/>

        <h3 className="text-center md:flex md:items-start md:text-left lg:block lg:text-center text-xl font-semibold mb-10 mt-10">
            Main Web Browsers and Cookies
        </h3>
        {chrome.map((col) => (
              <><div className='md:flex-shrink-0 flex justify-center'>
            <div className='h-16 w-16 flex items-center justify-center rounded-full bg-pink-200 text-pink-900'>
              {<col.Icon className='w-1/3 h-1/3' />}
            </div>
          </div><div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
              For the <strong>Chrome</strong> web browser, please visit this page from Google:<br />
              <Link href={"https://support.google.com/accounts/answer/32050"} className={buttonVariants({ variant: 'link', className: 'text-lg gap-1.5' })}>Support Google.com</Link>
            </div></>
        ))}
        
        <div className="md:flex-shrink-0 flex justify-center">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-pink-200 text-pink-900">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#D9779B" className="w-10 h-10 stroke-current fill-none stroke-2 stroke-linecap-round stroke-linejoin-round">
            <g data-name="Layer 5" id="Layer_5">
              <path className="cls-1" d="M16.8,31.81v-.15a15,15,0,0,1,8.55-13.52"/>
              <path className="cls-1" d="M38.65,18.37a15,15,0,0,1,8.07,13.28H36.62"/>
              <polyline className="cls-1" points="30.57 31.75 36.62 31.65 46.73 31.65"/>
              <line className="cls-1" x1="45.96" x2="36.29" y1="36.38" y2="36.38"/>
              <path className="cls-1" d="M49.92,20.69A4.43,4.43,0,0,0,49,16.77c-1.78-1.8-5.72-1-10.38,1.6a49.4,49.4,0,0,0-10,7.68h0l-.5.5-.05.05-.09.1a46.45,46.45,0,0,0-9.19,12.45c-1.77,3.77-2.09,6.85-.56,8.38,1.72,1.72,5.46,1.07,9.92-1.35"/>
              <path className="cls-1" d="M13.45,41.63C13.13,36,18,28.26,26.07,22.35c7.65-5.58,16-7.91,21.34-6.44l.42.13a2.56,2.56,0,0,1,.33.13"/>
              <path className="cls-1" d="M19.74,48.35h-.06"/>
              <path className="cls-1" d="M22.46,43.37a14.9,14.9,0,0,0,5.73,2.82,15.73,15.73,0,0,0,3.58.42A15,15,0,0,0,46,36.38H36.29a4.83,4.83,0,0,1-9,0,4.61,4.61,0,0,1-.33-1.73V29.79A4.85,4.85,0,0,1,28,26.71l.09-.1.05-.05h0a1.36,1.36,0,0,1,.33-.33l.14-.15h0a4.85,4.85,0,0,1,3.08-1.11,4.38,4.38,0,0,1,4.47,3.64"/>
              </g>
            </svg>
          </div>
      </div>
        <div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            For the <strong>Internet Explorer</strong> web browser, please visit this page from Microsoft:<br/>
            <Link href={"http://support.microsoft.com/kb/278835"} className={buttonVariants({variant: 'link', className: 'text-lg gap-1.5'})}>Support Microsoft.com</Link>
        </div>

        <div className="md:flex-shrink-0 flex justify-center">
          <div className="h-16 w-16 flex items-center justify-center rounded-full bg-pink-200 text-pink-900">
          <svg viewBox="0 0 64 64" fill="#D9779B" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 stroke-pink-900 fill-none stroke-linecap-round stroke-linejoin-round stroke-2">
            <g data-name="Layer 5" id="Layer_5">
            <path d="M21.5,16.44a16.29,16.29,0,0,1,18.25-1.88"/>
            <path d="M44.49,19.45A12.34,12.34,0,0,1,47,21.27c3.05,2.86,4.2,6.82,4.2,10.94a19.18,19.18,0,1,1-38.36,0A44.94,44.94,0,0,1,15.56,17.1l2,3.25h4.58c2.26-2.91,6.42-1.83,6.42-1.83-4.5,3.25-2.08,5.5-2.08,5.5h5.11l-4.95,4,2.6,2.58h-4.6c.5,7.34,11,3.59,11,3.59a6.84,6.84,0,0,1-3.67,3.89"/>
            <path d="M42.73,33.43c-.07.2-.16.39-.25.59A11.42,11.42,0,0,1,22.7,36.14"/>
            <path d="M44.49,19.45a10,10,0,0,0-3.92-1.3c-2.08-.21-4.65.13-6.34-1.38-.47-.42-.68,1.11-.69,1.28v.14a3.94,3.94,0,0,0,.08.77,5.34,5.34,0,0,0,.8,2c1.74,2.7,5.15,3.93,8.14,4.6l.18.07c1.24.62,1,2.19.94,3.32a15.92,15.92,0,0,1-1,4.52c-.07.2-.16.39-.25.59"/>
            <path d="M42,42.81a14.38,14.38,0,0,1-17.91,1.64"/>
            <circle cx="21.58" cy="34" r="1"/>
            </g>
            </svg>
          </div>
        </div>
        <div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            For the <strong>Firefox</strong> web browser, please visit this page from Mozilla:<br/>
            <Link href={"https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"} className={buttonVariants({variant: 'link', className: 'text-lg gap-1.5'})}>Support Mozilla.org</Link>
        </div>

        {safari.map((col) => (
              <><div className='md:flex-shrink-0 flex justify-center'>
            <div className='h-16 w-16 flex items-center justify-center rounded-full bg-pink-200 text-pink-900'>
              {<col.Icon className='w-1/3 h-1/3' />}
            </div>
          </div><div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
              For the <strong>Safari</strong> web browser, please visit this page from Apple:<br />
              <Link href={"https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"} className={buttonVariants({ variant: 'link', className: 'text-lg gap-1.5' })}>Support Apple.com</Link>
            </div></>
        ))}
        <div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            For any other web browser, please visit your web browser's official web pages.
        </div>

        <section className='border-t border-pink-200 bg-pink-50 mt-10 mb-5'/>

        <h3 className="text-center md:flex md:items-start md:text-left lg:block lg:text-center text-xl font-semibold mb-10 mt-10">
            Where can you find more information about cookies?
        </h3>
        <div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            You can learn more about cookies and the following third-party websites:<br/>
            <ul style={{ listStyleType: 'disc', textAlign: 'center', paddingLeft: '0', margin: 'auto', maxWidth: 'fit-content' }}>
                <li style={{ textAlign: 'left' }}><strong>AllAboutCookies</strong>: 
                <Link href={"http://www.allaboutcookies.org/"} className={buttonVariants({variant: 'link', className: 'text-lg gap-1.5'})}>www.allaboutcookies.org</Link>
                </li>
                <li style={{ textAlign: 'left' }}><strong>Network Advertising Initiative</strong>: 
                <Link href={"http://www.networkadvertising.org/"} className={buttonVariants({variant: 'link', className: 'text-lg gap-1.5'})}>www.networkadvertising.org</Link>
                </li>
            </ul>
        </div>

        <section className='border-t border-pink-200 bg-pink-50 mt-5 mb-5'/>

        <h3 className="text-center md:flex md:items-start md:text-left lg:block lg:text-center text-xl font-semibold mb-10 mt-10">
            Contact Us
        </h3>
        <div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            If you have any questions, concerns, or complaints about our Cookie Policy, please contact us at{' '}
            <span className="text-lg text-pink-600 font-semibold">
                baiturgus@gmail.com
            </span>
            .
        </div>
      </MaxWidthWrapper>
    </section>
    </>
  )
}