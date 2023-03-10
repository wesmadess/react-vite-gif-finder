import PropTypes from 'prop-types';
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}: any) => { 

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h3>{ category }</h3>    
      {
        // isLoading
        // ? (<h2>Cargando...</h2>)
        // : null
        isLoading && (<h2>Cargando...</h2>)        
      }

      <div className="card-grid">
        {
          images.map( (image: any) => (
            <GifItem 
              key={ image.id }
              { ...image }
            />
            // <li key={id}>{title}</li>
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}