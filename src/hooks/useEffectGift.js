import { useEffect, useState } from "react";
import { getGifts } from "../helpers/GetGifs";

export const useEffectGift = (category) => {


    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifts(category);
        setImages(newImages)
        setIsLoading(false);
    }

    useEffect(() => {

        // getGifts(category).then((newImages) =>  setImages(newImages));
        getImages();
    }, [])

    return {
        images: images,
        isLoading
    }
}
