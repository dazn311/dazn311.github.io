const newsService = () => {
    const urlAPI = "https://api.chucknorris.io/jokes/random";
    const emtyObj = {
        id: 'data.id',
        value: 'not data from fetch',
        icon_url: '',
        isFavorite: false
    };
    return {
        constgetResource: async () => {
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

            // const transformData = (data) => {
            //     return {
            //         id: data.id,
            //         value: data.value,
            //         icon_url: data.icon_url,
            //         isFavorite: false
            //     }
            // }
            // const res = await this.getResource(this.urlAPI, '?category=dev')
            try {
                // const res = await this.getResource()
                const res = await fetch(urlAPI);
                // console.log(' --res', res);
                if (res.status === 200) {
                    // const resJson = await res.json();
                    // return transformData(resJson);
                    return await res.json();
                } else {
                    console.log('Нет ответа от сервера - Попробуйте обновить подключение к интернету.');
                    return emtyObj;
                }

            } catch (e) {
                console.log(e.name + ': ' + e.message + ' --daz');
            }
            // const res = await this.getResource()
            return emtyObj;
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

}

export default newsService;// getAnegdotRandom;