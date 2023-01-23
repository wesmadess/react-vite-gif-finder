export const getGifs = async(category: string) => {    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=z4DYpLBP30dEEnslxKKRckVYYLLLfDQe&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const gifs = data.map( (img: any) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    
    return gifs;
  }
