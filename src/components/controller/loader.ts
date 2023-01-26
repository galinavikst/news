type ApiKeyType = {
    readonly apiKey: string;
    [apiKey: number]: string;
};

type OptionsType = {} | SourcesType;
type SourcesType = Partial<ApiKeyType>;

enum ResStatus {
    NotLogged = 401,
    NotFound = 404,
}

interface IGetResp {
    endpoint: string;
    options?: OptionsType;
}
interface IResponse {
    json(): void;
    ok: boolean;
    status: ResStatus;
    statusText: string | undefined;
    url: string;
    redirected?: boolean;
}

class Loader {
    baseLink: string;
    options: ApiKeyType;

    constructor(baseLink: string, options: ApiKeyType) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: IGetResp,
        callback = (): void => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: IResponse): IResponse {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    private makeUrl(options: OptionsType, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key, i) => {
            url += `${key}=${urlOptions[i]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: Function, options: OptionsType): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
