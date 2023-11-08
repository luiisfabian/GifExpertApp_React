import PropTypes from "prop-types";


export const GiftItem = ({title, urlImg}) => {
  return (
    <div className="card">
        <img src={urlImg} alt={title} />
        <p>{title}</p>
    </div>
  )
}


GiftItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

