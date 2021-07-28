import { userStore, State } from '../model/UserStore';
import View from '../view/view';

class UserController {
  private subscribers: Map<View, Function>;

  constructor() {
    this.subscribers = new Map();
  }

  subscribe(view: View, cb: Function) {
    this.subscribers.set(view, cb);
  }

  unsubscribe(view: View) {
    this.subscribers.delete(view);
  }

  async notify() {
    const user = await this.requestGetUser();
    this.subscribers.forEach((cb, view) => {
      cb.call(view, user);
    });
  }

  async requestSetUser(user: Partial<State>) {
    const result = await userStore.setUser(user);
    if (result) this.notify();
  }

  async requestGetUser() {
    return await userStore.getUser();
  }
}

export const userController = new UserController();
