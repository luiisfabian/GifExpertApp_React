import { useState, useEffect } from "react";
import { getGifts } from "../helpers/GetGifs";
import { GiftItem } from "./GiftItem";
import { useEffectGift } from "../hooks/useEffectGift";
import PropTypes from "prop-types"

export const GifGrid = ({ category }) => {

  const {images, isLoading} = useEffectGift(category);

  return (
    <>
      <h3>{category} </h3>
      {
        isLoading && <h2>Cargando</h2>
      }
      
      <div className="card-grid">
        {
          images.map((image) => {
            // return  <li key={image.id}>{image.title}</li>
            return  <GiftItem key={image.id} {...image}/>
          })
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

