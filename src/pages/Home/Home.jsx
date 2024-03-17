import React from 'react'
import Hero from '../../components/Hero/Hero'
import img_1 from '../../assets/featured.jpg'
import icon_5 from '../../assets/featured-icon.png'
import video from '../../assets/video-frame.jpg'
import total from '../../assets/deal-01.jpg'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import { FaCalendar, FaPlay } from "react-icons/fa";
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard'
import NumberCard from '../../components/NumberCard/NumberCard'
import SectionHead from '../../components/SectionHead/SectionHead'
import Button from '../../components/Button/Button'
import TotalCard from '../../components/TotalCard/TotalCard'
import phone from '../../assets/phone-icon.png'
import Footer from '../../components/Footer/Footer'
import { NavLink } from 'react-router-dom'
import {
  sectionHead_information,
  FeaturedCard_information,
  NumberCard_information,
  Button_information,
  Total_information,
  Property_Card_Information
} from '../../Data'

import './Home.css'
import Accordion_com from '../../components/Accordion/Accordion_com'
const Home = () => {


  return (
    <>
      <div>
        <Hero />
        <section className='max-w-[80%] mx-auto py-20 flex flex-wrap lg:justify-normal justify-center gap-10'>
          <div className='relative'>
            <img src={img_1} alt="this is image" />
            <div className='bg-my-orange OF-icon_5 p-3 absolute bottom-[-15px] left-[-15px]'>
              <img className='w-10 h-10' src={icon_5} alt="this is icon" />
            </div>
          </div>
          <div>
            <SectionHead
              title={sectionHead_information[0].title}
              text={sectionHead_information[0].text}
              dec={sectionHead_information[0].dec}
            />
            <Accordion_com />
          </div>
          <div className='OFthird'>
            {
              FeaturedCard_information.map((item, index) => (
                <>
                  <div key={index} className='flex gap-8'>
                    <FeaturedCard
                      img={item.img}
                      title={item.title}
                      text={item.text}
                    />
                  </div>
                  <hr />
                </>
              ))
            }
          </div>
        </section>
        <section class="OF-video-section">
          <div className='text-center pt-10 OF-above-filter'>
            <SectionHead
              title={sectionHead_information[1].title}
              text={sectionHead_information[1].text}
              OFclass={sectionHead_information[1].OFclass}
            />
          </div>
          <div className='OF-video'>
            <img src={video} alt="this is video" />
            <div className='OF-youtube'>
              <a href="https://www.youtube.com/"><FaPlay /></a>
            </div>
          </div>
        </section>
        <section className='OF-number flex max-w-[70%] mx-auto  justify-center lg:justify-between flex-wrap gap-10 lg:gap-0'>
          {
            NumberCard_information.map((item, index) => (
              <>
                <div key={index} className='OF-number-card flex justify-between'>
                  <NumberCard
                    title={item.title}
                    text={item.text}
                  />
                </div>
              </>
            ))
          }
        </section>
        <section className=' bg-[#fafafa]'>
          <div className='max-w-[80%] mx-auto my-10 py-10'>
            <div className='flex flex-wrap lg:gap-0 gap-5 justify-between items-end'>
              <SectionHead
                title={sectionHead_information[2].title}
                text={sectionHead_information[2].text}
              />
              <div className='flex flex-wrap gap-3'>
                <Button content={Button_information[0].content}
                  OfButtonClass={Button_information[0].OfButtonClass}
                />
                <Button content={Button_information[1].content} />
                <Button content={Button_information[2].content} />
              </div>
            </div>
            <div className='flex flex-wrap  gap-5 lg:justify-between justify-center lg:mt-20 mt-10'>
              <div className='OF-Total'>
                {Total_information.map((item, index) => (
                  <div key={index}>
                    <TotalCard
                      title={item.title}
                      text={item.text}
                    />
                  </div>
                ))}
              </div>
              <div>
                <img src={total} alt="this is image" />
              </div>
              <div className='OF-Total-third lg:w-[300px]  w-[90%]'>
                <h2>Extra Info About Property</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
                  <br />
                  <br />
                  When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.
                </p>
                <NavLink className={({ isActive }) => isActive ? 'OF-Total-icon-button mt-5 bg-black text-white flex justify-center items-center gap-3 pr-5 rounded-[20px]' : 'OF-Total-icon-button bg-black text-white flex justify-center items-center gap-3 pr-5 rounded-[20px]'}>
                  <div className='bg-my-orange p-3 rounded-[50%]'>
                    <FaCalendar className='text-white' />
                  </div>
                  Schedule a visit
                </NavLink>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='text-center'>
            <SectionHead
              title={sectionHead_information[3].title}
              text={sectionHead_information[3].text}
            />
          </div>
          <div className='flex flex-wrap justify-center gap-10 mt-10'>
            {Property_Card_Information.map((item, index) => (
              <div key={index} className='OF-Card-parent'>
                <PropertyCard img={item.img} />
              </div>
            ))}
          </div>
        </section>
        <section className='OF-contact-section mt-10'>
          <div className='text-center pt-20'>
            <SectionHead title={sectionHead_information[4].title}
              text={sectionHead_information[4].text}
              OFclass={sectionHead_information[4].OFclass}
            />
          </div>
          <div className='flex flex-wrap justify-center gap-20 3xl:mt-[300px] mt-[150px]'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22375.60268068973!2d36.32973554290677!3d33.52340127435489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6e892dfeb23%3A0xd533119047981584!2z2LPYp9it2Kkg2KfZhNi52KjYp9iz2YrZitmG!5e0!3m2!1sar!2snl!4v1698159468035!5m2!1sar!2snl"
              allowFullScreen=""
              loading="lazy"
              width="50%"
              height="500px"
              referrerPolicy="no-referrer-when-downgrade"
              title='Responsive Google Map'
              className='shadow-lg rounded-[10px]  lg:w-[40%] w-[90%]'
            >
            </iframe>
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
          <div className='flex flex-wrap  gap-8 md:mt-3 mt-10 md:justify-normal justify-center md:ml-[170px]'>
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
        </section>
      </div>
      <div className='xl:mt-[600px] lg:mt-[900px]  mt-[1700px]'>
        <Footer />
      </div>
    </>
  )
}

export default Home