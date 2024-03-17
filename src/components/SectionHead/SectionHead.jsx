
const SectionHead = ({title, text, OFclass, dec}) => {
    return (
        <div>
            <h2 className='OF-featured-style'>{title}  </h2>
            <h2 className= {`${OFclass} OF-best-style`}>{text} <br/><h2>{dec}</h2></h2>
        </div>
    )
}
export default SectionHead
