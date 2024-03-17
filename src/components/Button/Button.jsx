
const Button = ({ content, OfButtonClass }) => {
  return (
    <>
      {
        OfButtonClass ? <button className={`${OfButtonClass}`}>{content}</button>
          : <button className={`${OfButtonClass} OF-button-black`}>{content}</button>
      }
    </>
  )
}
export default Button
