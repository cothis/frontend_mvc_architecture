import MainView from './view/main/MainView';
import AnotherView from './view/another/AnotherView';
import MenuView from './view/menu/MenuView';

const app: HTMLElement = document.querySelector('#App')!;

const mainView = new MainView(app);
mainView.render();

const anotherView = new AnotherView(app);
anotherView.render();

const menuView = new MenuView(app);
menuView.render();
