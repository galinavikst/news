import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '4f1dc67ece5040ae8397699d10e3cda2', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
