
export const GiftItem = ({title, urlImg}) => {
  return (
    <div className="card">
        <img src={urlImg} alt={title} />
        <p>{title}</p>
    </div>
  )
}
