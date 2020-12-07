
const newsService = () => {
    const urlAPI = "https://api.chucknorris.io/jokes/random";
    //eslint-disable-next-line
    const getAnegdotRandom = () => {
        return fetch(urlAPI)
            .then(response => response.json())

    };
    const transformDataR = (data) => {
        console.log('newsService transformDataR  data', data);
        return {
            id: data.id,
            value: data.value,
            icon_url: data.icon_url,
            isFavorite: false
        }
    }

    // return { isLoading, hasError, data, getResource, getAnegdotRandom, transformDataR };
    return { getAnegdotRandom, transformDataR };
}

export default newsService;