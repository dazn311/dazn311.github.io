export default class GotService {

    constructor() {
        this._apiBase = "https://api.chucknorris.io/jokes";

    }

    transformDataR = (data) => {
        // console.log('newsService transformDataR  data', data);
        return {
            id: data.id,
            value: data.value,
            icon_url: data.icon_url,
            isFavorite: false
        }
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error('could not fetch' + url + `, received: ${res.status}`);
        }
        return await res.json();
    }

    getProductAll = () => {
        return this.getResource('/random');
    }

    getProductById = (id) => {
        return this.getResource(`/${id}`);
    }


}
