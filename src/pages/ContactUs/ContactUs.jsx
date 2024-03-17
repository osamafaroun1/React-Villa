import './ContactUs.css'
import SectionHead from '../../components/SectionHead/SectionHead'
import phone from '../../assets/phone-icon.png'
import { sectionHead_information } from '../../Data'
import Footer from '../../components/Footer/Footer'
import Accordion_com from '../../components/Accordion/Accordion_com'

const ContactUs = () => {
  return (
    <>
      <div>
        <div className='OF-pre'>
          <p>Home / CONTACT US</p>
          <span className='text-center'>CONTACT US</span>
        </div>
        <div className='lg:flex mt-[50px] lg:px-20 px-5'>
          <div className='lg:w-[50%] w-[100%] mt-10'>
            <SectionHead
              title={sectionHead_information[0].title}
              text={sectionHead_information[0].text}
            />
            <p className='OF-cont'>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.</p>
            <div className='flex flex-col gap-5 mt-10 sm:items-start items-center'>
              <div className='OF-contactForm flex'>
                <img src={phone} alt="this is icon" />
                <div>
                  <p className='OfNumber'>010-020-0340</p>
                  <span className='OfNumberSpan'>Phone Number</span>
                </div>
              </div>
              <div className='OF-contactForm flex'>
                <img src={phone} alt="this is icon" />
                <div>
                  <p className='OfNumber'>010-020-0340</p>
                  <span className='OfNumberSpan'>Phone Number</span>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-[50%] w-[100%] lg:mt-0 mt-5'>
            <div class=" dark:bg-gray-900">
              <div class="w-full max-w-[90%] mx-auto">
                <div class="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-md border dark:border-gray-700">
                  <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Checkout</h1>
                  <div class="mb-6">
                    <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">Shipping Address</h2>
                    <div class="grid grid-cols-2 gap-4">
                      <div>
                        <label for="first_name" class="block text-gray-700 dark:text-white mb-1">First Name</label>
                        <input type="text" id="first_name" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                      </div>
                      <div>
                        <label for="last_name" class="block text-gray-700 dark:text-white mb-1">Last Name</label>
                        <input type="text" id="last_name" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                      </div>
                    </div>
                    <div class="mt-4">
                      <label for="address" class="block text-gray-700 dark:text-white mb-1">Address</label>
                      <input type="text" id="address" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                    </div>
                    <div class="mt-4">
                      <label for="city" class="block text-gray-700 dark:text-white mb-1">City</label>
                      <input type="text" id="city" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <label for="state" class="block text-gray-700 dark:text-white mb-1">State</label>
                        <input type="text" id="state" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                      </div>
                      <div>
                        <label for="zip" class="block text-gray-700 dark:text-white mb-1">ZIP Code</label>
                        <input type="text" id="zip" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                      </div>

                    </div>
                  </div>
                  <div class="mt-8 flex justify-end">
                    <button class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">Place Order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22375.60268068973!2d36.32973554290677!3d33.52340127435489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6e892dfeb23%3A0xd533119047981584!2z2LPYp9it2Kkg2KfZhNi52KjYp9iz2YrZitmG!5e0!3m2!1sar!2snl!4v1698159468035!5m2!1sar!2snl"
          allowFullScreen=""
          loading="lazy"
          width="90%"
          height="500px"
          referrerPolicy="no-referrer-when-downgrade"
          title='Responsive Google Map'
          className='shadow-lg rounded-[10px] mx-auto md:my-[100px] my-[50px]'
        >
        </iframe>
      </div>
      <Footer />
    </>
  )
}

export default ContactUs
