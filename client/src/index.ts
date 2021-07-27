import MainView from './view/main/MainView';
import AnotherView from './view/another/AnotherView';

const app: HTMLElement = document.querySelector('#App')!;

const mainView = new MainView(app);
mainView.render();

const anotherView = new AnotherView(app);
anotherView.render();

const anotherView2 = new AnotherView(app);
anotherView2.render();
