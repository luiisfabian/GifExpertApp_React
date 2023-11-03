export const getGifts = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=4psUe2ChaoVMtOOdwiAUTDOUo1U1qr2p&q=${category}&limit=25`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gift = data.map((img) => ({
      id: img.id,
      title: img.title,
      urlImg: img.images.downsized_medium.url
    }));
      return gift;
    // const { data } = await resp.json;
  }