
const FeaturedCard = ({ img, title, text }) => {
    return (
        <>
            <img src={img} alt="this is icon" />
            <p className='OF-Icon-p'>
                {title} <br />    
                <span className='OF-Icon-span'>{text}</span>
            </p>
        </>

    )
}
export default FeaturedCard
