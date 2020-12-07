const newsService = {
    // urlAPI: "https://api.chucknorris.io/jokes/random",
    // getResource: async (url, category) => {
    getResource: async () => {
        // console.log('getRes ');
        // const res = await fetch(url + category),
        const res = await fetch("https://api.chucknorris.io/jokes/random"),
            anegdot = await res.json();
        // console.log("getResource - res:", res);
        // console.log("getResource - fetchData:", anegdot);

        return anegdot;
    },
    //eslint-disable-next-line
    getAnegdotRandom: async () => {
        // console.log('getAnegdotRandom ');

        const transformData = (data) => {
            // console.log('transformData data ', data);
            return {
                id: data.id,
                value: data.value,
                icon_url: data.icon_url,
                isFavorite: false
            }
        }
        // const res = await this.getResource(this.urlAPI, '?category=dev')
        try {
            // const res = await this.getResource()
            const res = await fetch("https://api.chucknorris.io/jokes/random")
            // console.log(' --res', res);
            if (res.status === 200) {
                const resJson = await res.json();
                return transformData(resJson);
            } else {
                console.log('Нет ответа от сервера - Попробуйте обновить подключение к интернету.');
                return {
                    id: 'data.id',
                    value: 'not data from fetch',
                    icon_url: '',
                    isFavorite: false
                }
            }

        } catch (e) {
            console.log(e.name + ': ' + e.message + ' --daz');
        }
        // const res = await this.getResource()
        return {
            id: 'data.id',
            value: 'not data from fetch',
            icon_url: '',
            isFavorite: false
        }
    },

    transformDataR: (data) => {
        console.log('transformDataR data ', data);
        return {
            id: data.id,
            value: data.value,
            icon_url: data.icon_url,
            isFavorite: false
        }
    }




}

export default newsService;