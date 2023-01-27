import AppController from '../controller/controller';
import { AppView, IDrawNews, IDrawSources } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const source = document.querySelector('.sources') as HTMLElement;
        source.addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data?: IDrawNews) => this.view.drawNews(data))
        );
        this.controller.getSources((data?: IDrawSources) => this.view.drawSources(data));
    }
}

export default App;
