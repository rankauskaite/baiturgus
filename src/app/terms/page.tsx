import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Ban, CircleFadingPlus, CircleUserRound, HandCoins, LandPlot, RefreshCwOff, ShoppingBasket, TicketX } from "lucide-react";

const collect = [
  {
    name: "Eligibility",
    Icon: TicketX,
    description: "You must be at least 18 years old and capable of entering into a legally binding agreement to use the Platform. By accessing or using the Platform, you represent and warrant that you meet these eligibility requirements.",
  },
  {
    name: "User Accounts",
    Icon: CircleUserRound,
    description: "You may be required to create an account to access certain features of the Platform. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
  },
]
const collect2 = [
    {
      name: "Prohibited Activities",
      Icon: Ban,
    },
  ]

const using = [
    {
      name: "User Content",
      Icon: CircleFadingPlus,
      description: "You may submit content, including text, images, videos, and other materials (\"User Content\") to the Platform. By submitting User Content, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content in connection with the operation of the Platform.",
    },
    {
      name: "Intellectual Property",
      Icon: LandPlot,
      description: "All content and materials available on the Platform, including but not limited to text, graphics, logos, button icons, images, audio clips, and software, are the property of BaiTurgus or its licensors and are protected by copyright, trademark, and other intellectual property laws.",
    },
  ]

const sharing = [
    {
      name: "Purchases",
      Icon: ShoppingBasket,
      description: "If you wish to purchase products or services through the Platform, you may be required to provide certain information relevant to your purchase, including your billing and shipping address, payment information, and contact details. You represent and warrant that any information you provide in connection with a purchase is accurate, complete, and current.",
    },
    {
      name: "Payment",
      Icon: HandCoins,
      description: "All payments made through the Platform are processed by third-party payment processors. You agree to pay all applicable fees and charges associated with your purchases, and you authorize us to charge your chosen payment method for any such amounts.",
    },
    {
        name: "Refunds",
        Icon: RefreshCwOff,
        description: "Refunds may be subject to our refund policy, which is available on the Platform. We reserve the right to refuse or issue refunds in our sole discretion.",
      },
  ]

export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <h1 className='text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl'>
            Terms and Conditions
        </h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
            These Terms and Conditions ("Terms") govern Your access to and use of{' '}
            <span className="text-xl text-pink-600 font-semibold">
                BaiTurgus{' '}
            </span>
             (the "Platform"), operated by{' '} 
             <span className="text-xl text-pink-600 font-semibold">
                Green&White solutions{' '}
            </span>
            ("we," "us," or "our"). 
            By accessing or using the Platform, You agree to be bound by these Terms. 
            If You do not agree to these Terms, You may not access or use the Platform.
          </p>
      </div>
    </MaxWidthWrapper>

    <section className='border-t border-pink-200 bg-pink-50'>
      <MaxWidthWrapper className='py-20'>
        <h3 className="text-center md:flex md:items-start md:text-left lg:block lg:text-center text-xl font-semibold mb-10">
            Use of the Platform
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
        <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 lg:gap-x-8 lg:gap-y-0 mt-5'>
          {collect2.map((col) => (
            <div key={col.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
              <div className='md:flex-shrink-0 flex justify-center'>
                <div className='h-16 w-16 flex items-center justify-center rounded-full bg-pink-200 text-pink-900'>
                  {<col.Icon className='w-1/3 h-1/3' />}
                </div>
              </div>
              <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                <h3 className='font-medium text-gray-900 text-lg'>
                  {col.name}
                  </h3>
                  <p className='mt-3 text-base text-muted-foreground'>
                        You agree not to engage in any activity that:<br/>
                        <span className="text-sm">
                            <strong>1.</strong> Violates these Terms or any applicable laws or regulations;<br/>
                            <strong>2.</strong> Infringes upon the rights of others, including intellectual property rights;<br/>
                            <strong>3.</strong> Harasses, threatens, or harms others;<br/>
                            <strong>4.</strong> Interferes with or disrupts the operation of the Platform;<br/>
                            <strong>5.</strong> Attempts to gain unauthorized access to the Platform or any user accounts;<br/>
                            <strong>6.</strong> Engages in fraudulent or deceptive conduct.
                        </span>
                    </p>
              </div>
            </div>
          ))}
        </div>

        <section className='border-t border-pink-200 bg-pink-50 mt-5 mb-5'/>

        <h3 className="text-center md:flex md:items-start md:text-left lg:block lg:text-center text-xl font-semibold mb-10 mt-10">
            Content
        </h3>
        <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0'>
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
            Transactions
        </h3>
        <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
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
            Disclaimer of Warranties
        </h3>
        <div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
        THE PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. 
        WE DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </div>

        <section className='border-t border-pink-200 bg-pink-50 mt-5 mb-5'/>

        <h3 className="text-center md:flex md:items-start md:text-left lg:block lg:text-center text-xl font-semibold mb-10 mt-10">
            Limitation of Liability
        </h3>
        <div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
            OR PUNITIVE DAMAGES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE PLATFORM, 
            WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, 
            EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </div>

        <section className='border-t border-pink-200 bg-pink-50 mt-5 mb-5'/>

        <h3 className="text-center md:flex md:items-start md:text-left lg:block lg:text-center text-xl font-semibold mb-10 mt-10">
            Indemnification
        </h3>
        <div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            You agree to indemnify, defend, and hold harmless <strong>BaiTurgus</strong> and its affiliates, officers, 
            directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, 
            expenses, or fees (including reasonable attorneys' fees) arising out of or in connection with your use of the Platform or any violation of these Terms.
        </div>

        <section className='border-t border-pink-200 bg-pink-50 mt-5 mb-5'/>

        <h3 className="text-center md:flex md:items-start md:text-left lg:block lg:text-center text-xl font-semibold mb-10 mt-10">
            Modifications to the Terms
        </h3>
        <div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            We reserve the right to modify or update these Terms at any time, without prior notice. 
            Any changes to the Terms will be effective immediately upon posting the revised Terms on the Platform. 
            Your continued use of the Platform after the posting of the revised Terms constitutes your acceptance of the changes.
        </div>

        <section className='border-t border-pink-200 bg-pink-50 mt-5 mb-5'/>

        <h3 className="text-center md:flex md:items-start md:text-left lg:block lg:text-center text-xl font-semibold mb-10 mt-10">
            Governing Law
        </h3>
        <div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            These Terms shall be governed by and construed in accordance with the laws of {' '}
            <strong>Lithuania's jurisdiction</strong>, without regard to its conflict of law principles.
        </div>

        <section className='border-t border-pink-200 bg-pink-50 mt-5 mb-5'/>

        <h3 className="text-center md:flex md:items-start md:text-left lg:block lg:text-center text-xl font-semibold mb-10 mt-10">
            Contact Us
        </h3>
        <div className='mt-3 text-lg text-muted-foreground text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            If you have any questions or concerns about these Terms, please contact us at{' '}
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