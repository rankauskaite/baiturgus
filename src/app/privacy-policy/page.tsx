import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowRightLeft, CircleUserRound, Database, ExternalLink, Headset, Import, Scale, Speech, SquareMousePointer, UserSearch } from "lucide-react";

const collect = [
  {
    name: "Personal Information",
    Icon: CircleUserRound,
    description: "When you register an account, make a purchase, or interact with our platform, we may collect personal information such as your name, email address, billing address, payment information, and other contact details.",
  },
  {
    name: "Usage Data",
    Icon: Database,
    description: "We may also collect information about your interactions with our platform, including your browsing activity, search queries, IP address, device information, and other usage data.",
  },
]

const using = [
    {
      name: "To Provide Services",
      Icon: SquareMousePointer,
      description: "We use your personal information to process transactions, deliver digital products, and provide customer support.",
    },
    {
      name: "To Improve Our Platform",
      Icon: Import,
      description: "We may analyze usage data to understand user preferences, optimize our platform, and develop new features and functionalities.",
    },
    {
        name: "To Communicate With You",
        Icon: Speech,
        description: "We may send you transactional emails, newsletters, promotional offers, and other communications related to your account or our products and services.",
      },
  ]

const sharing = [
    {
      name: "Third-Party Service Providers",
      Icon: ExternalLink,
      description: "We may share your information with third-party service providers who help us operate our platform, process payments, or deliver digital products.",
    },
    {
      name: "Legal Compliance",
      Icon: Scale,
      description: "We may disclose your information when required by law or in response to legal requests or investigations.",
    },
  ]

  const choices = [
    {
      name: "Account Settings",
      Icon: UserSearch,
      description: "You can update your account information and communication preferences by accessing your account settings.",
    },
    {
      name: "Opt-Out",
      Icon: ArrowRightLeft,
      description: "You can opt-out of receiving promotional emails by following the unsubscribe instructions included in the email or contacting us directly.",
    },
    {
        name: "Access and Rectification",
        Icon: Headset,
        description: "You can request access to, or correction of, your personal information by contacting us using the information provided below.",
      },
  ]

export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <h1 className='text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl'>
            Privacy Policy
        </h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
        <span className="text-xl text-pink-600 font-semibold">
            BaiTurgus{' '}
        </span>
        is committed to protecting the privacy and security of Your personal information. 
        This Privacy Policy outlines how we collect, use, disclose, and protect the 
        information You provide to us when You use our digital product marketplace platform.
          </p>
      </div>
    </MaxWidthWrapper>

    <section className='border-t border-pink-200 bg-pink-50'>
      <MaxWidthWrapper className='py-20'>
        <h3 className="text-center md:flex md:items-start md:text-left lg:block lg:text-center text-xl font-semibold mb-10">
            Information We Collect
        </h3>
        <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0'>
          {collect.map((col) => (
            <div key={col.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
              <div className='md:flex-shrink-0 flex justify-center'>
                <div className='h-16 w-16 flex items-center justify-center rounded-full bg-pink-200 text-pink-900'>
                  {<col.Icon className='w-1/3 h-1/3' />}
                </div>
              </div>
              <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                <h3 className='text-base font-medium text-gray-900'>
                  {col.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {col.description}
                  </p>
              </div>
            </div>
          ))}
        </div>

        <section className='border-t border-pink-200 bg-pink-50 mt-5 mb-5'/>

        <h3 className="text-center md:flex md:items-start md:text-left lg:block lg:text-center text-xl font-semibold mb-10 mt-10">
            How We Use Your Information
        </h3>
        <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
          {using.map((use) => (
            <div key={use.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
              <div className='md:flex-shrink-0 flex justify-center'>
                <div className='h-16 w-16 flex items-center justify-center rounded-full bg-pink-200 text-pink-900'>
                  {<use.Icon className='w-1/3 h-1/3' />}
                </div>
              </div>
              <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                <h3 className='text-base font-medium text-gray-900'>
                  {use.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {use.description}
                  </p>
              </div>
            </div>
          ))}
        </div>

        <section className='border-t border-pink-200 bg-pink-50 mt-5 mb-5'/>

        <h3 className="text-center md:flex md:items-start md:text-left lg:block lg:text-center text-xl font-semibold mb-10 mt-10">
            Information Sharing and Disclosure
        </h3>
        <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0'>
          {sharing.map((share) => (
            <div key={share.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
              <div className='md:flex-shrink-0 flex justify-center'>
                <div className='h-16 w-16 flex items-center justify-center rounded-full bg-pink-200 text-pink-900'>
                  {<share.Icon className='w-1/3 h-1/3' />}
                </div>
              </div>
              <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                <h3 className='text-base font-medium text-gray-900'>
                  {share.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {share.description}
                  </p>
              </div>
            </div>
          ))}
        </div>

        <section className='border-t border-pink-200 bg-pink-50 mt-5 mb-5'/>

        <h3 className="text-center md:flex md:items-start md:text-left lg:block lg:text-center text-xl font-semibold mb-10 mt-10">
            Data Security
        </h3>
        <div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            We implement appropriate technical and organizational measures to protect your personal 
            information from unauthorized access, disclosure, alteration, or destruction.
        </div>

        <section className='border-t border-pink-200 bg-pink-50 mt-10 mb-5'/>

        <h3 className="text-center md:flex md:items-start md:text-left lg:block lg:text-center text-xl font-semibold mb-10 mt-10">
            Your Choices and Rights
        </h3>
        <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
          {choices.map((use) => (
            <div key={use.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
              <div className='md:flex-shrink-0 flex justify-center'>
                <div className='h-16 w-16 flex items-center justify-center rounded-full bg-pink-200 text-pink-900'>
                  {<use.Icon className='w-1/3 h-1/3' />}
                </div>
              </div>
              <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                <h3 className='text-base font-medium text-gray-900'>
                  {use.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {use.description}
                  </p>
              </div>
            </div>
          ))}
        </div>

        <section className='border-t border-pink-200 bg-pink-50 mt-5 mb-5'/>

        <h3 className="text-center md:flex md:items-start md:text-left lg:block lg:text-center text-xl font-semibold mb-10 mt-10">
            Changes to This Privacy Policy
        </h3>
        <div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
            We encourage you to review this policy periodically for any updates.
        </div>

        <section className='border-t border-pink-200 bg-pink-50 mt-5 mb-5'/>

        <h3 className="text-center md:flex md:items-start md:text-left lg:block lg:text-center text-xl font-semibold mb-10 mt-10">
            Contact Us
        </h3>
        <div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            If you have any questions, concerns, or complaints about our Privacy Policy or data practices, please contact us at{' '}
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
