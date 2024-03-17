import React from 'react'
import img_23 from '../../assets/single-property.jpg'
import { Button_information, FeaturedCard_information, Total_information, sectionHead_information } from '../../Data'
import total from '../../assets/deal-01.jpg'
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard'
import './PropertyDetails.css'
import { FaCalendar } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import TotalCard from '../../components/TotalCard/TotalCard'
import SectionHead from '../../components/SectionHead/SectionHead'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
const PropertyDetails = () => {
  return (
    <>
      <div>
        <div className='OF-pre'>
          <p>Home / Single Property</p>
          <span className='text-center'>Single Property</span>
        </div>
        <div className='flex justify-around  gap-5 flex-wrap sm:my-20 my-10'>
          <div className='xl:max-w-[60%] sm:px-0 px-5'>
            <img src={img_23} alt="" className='lg:mx-auto'/>
            <div className='OS  px-5'>
              <span>Apparment</span>
              <h2>24 New Street Miami, OR 24560</h2>
              <p>Get <strong> the best villa agency </strong>
                HTML CSS Bootstrap Template for your company website. TemplateMo provides you the
                in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.
                <br />
                <br />
                When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.
              </p>
            </div>
          </div>
          <div className='OFthird'>
            {
              FeaturedCard_information.map((item, index) => (
                <>
                  <div key={index} className='flex gap-10'>
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
        </div>
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
      </div>
      <Footer />
    </>
  )
}

export default PropertyDetails