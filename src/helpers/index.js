const helpers = {}

helpers.getGif = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=2an3mIHkOKpVQRYL2AX4uYDa1Aoetdjm&q=${ encodeURI( category ) }&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    });

    return gifs;
}

export default helpers;
