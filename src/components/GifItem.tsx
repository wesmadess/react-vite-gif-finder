import PropTypes from "prop-types";
import { Items } from "../helpers/interfaces";

export const GifItem = ({title, url, id}: Items) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

GifItem.prototype = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
