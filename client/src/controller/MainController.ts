import { BaseState } from '@/model/store';
import { userStore, UserState } from '../model/UserStore';
import { menuStore, MenuState } from '../model/MenuStore';
import View from '../view/view';

interface State {
  user: UserState;
  menu: MenuState;
}

class MainController {
  private subscribers: Map<[string, View], Function>;

  constructor() {
    this.subscribers = new Map();
  }

  subscribe(view: View, cb: Function, key: keyof State) {
    this.subscribers.set([key as string, view], cb);
  }

  unsubscribe(view: View) {
    // this.subscribers.delete(view);
  }

  async notify(key: keyof State) {
    let newState: BaseState;
    if (key === 'user') {
      newState = await this.requestGetUser();
    } else if (key === 'menu') {
      newState = await this.requestGetMenu();
    } else return;

    this.subscribers.forEach((cb, [currentKey, view]) => {
      if (currentKey === key) cb.call(view, newState);
    });
  }

  /** UserStore */
  async requestSetUser(user: Partial<UserState>) {
    const result = await userStore.setUser(user);
    if (result) this.notify('user');
  }

  async requestGetUser() {
    return await userStore.getUser();
  }

  /** MenuStore */
  async requestSetMenu(menu: Partial<MenuState>) {
    const result = await menuStore.setMenu(menu);
    if (result) this.notify('menu');
  }

  async requestGetMenu() {
    return await menuStore.getMenu();
  }
}

export const userController = new MainController();
