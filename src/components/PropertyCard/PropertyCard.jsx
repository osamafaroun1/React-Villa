
const PropertyCard = ({img}) => {
    return (
            <div className='OF-card-property bg-[#fafafa]'>
                <img className='rounded-[10px]' src={img} alt="this is image" />
                <div className='OF-card-property-text flex justify-between'>
                    <p>Luxury Villa</p>
                    <span>$2.264.000</span>
                </div>
                <p>18 New Street Miami, OR 97219</p>
                <div className='flex flex-wrap gap-3'>
                    <span className=''>Bedrooms:<span className='text-[#1e1e1e] font-[600]'>5</span></span>
                    <span className=''>Bedrooms:<span className='text-[#1e1e1e] font-[600]'>4</span></span>
                    <span className=''>Area:<span className='text-[#1e1e1e] font-[600]'>225m2</span></span>
                    <span className=''>Floor:<span className='text-[#1e1e1e] font-[600]'>3</span></span>
                    <span className=''>Parking:<span className='text-[#1e1e1e] font-[600]'>10 spots</span></span>
                </div>
            </div>
    )
}
export default PropertyCard
