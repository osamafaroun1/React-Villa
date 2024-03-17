import './Properties.css'
import Button from '../../components/Button/Button'
import { Button_information } from '../../Data'
import { Property_Card_Information } from '../../Data'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import Footer from '../../components/Footer/Footer'
// import { SlArrowRight } from "react-icons/sl";

const Properties = () => {
   return (
      <>
         <div>
            <div className='OF-pre'>
               <p>Home / Properties</p>
               <span>Properties</span>
            </div>
            <div>
               <div className='mx-auto sm:my-20 my-10 max-w-[800px] flex flex-wrap justify-center gap-5'>
                  {
                     Button_information.map((item, index) => (
                        <Button
                           key={index}
                           content={item.content}
                           OfButtonClass={item.OfButtonClass}
                        />
                     ))
                  }
               </div>
               <div className='flex flex-wrap justify-center gap-10 mt-10'>
                  {Property_Card_Information.map((item, index) => (
                     <div key={index} className='OF-Card-parent'>
                        <PropertyCard img={item.img} />
                     </div>
                  ))}
               </div>
               <ul className='text-center my-20'>
                  <li><a href="">1</a></li>
                  <li><a href="">2</a></li>
                  <li><a href="">3</a></li>
                  {/* <li className='OF-after'><a href=""><SlArrowRight /></a></li> */}
               </ul>
            </div>
         </div>  
         <Footer/>
      </>
   )
}

export default Properties
