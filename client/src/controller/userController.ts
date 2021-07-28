import { userStore, State as UserState } from '../model/UserStore';
import View from '../view/view';

class UserController {
  private subscribers: Map<[string, View], Function>;

  constructor() {
    this.subscribers = new Map();
  }

  subscribe<State>(view: View, cb: Function, key: keyof State) {
    this.subscribers.set([key as string, view], cb);
  }

  unsubscribe(view: View) {
    // this.subscribers.delete(view);
  }

  async notify() {
    const user = await this.requestGetUser();
    this.subscribers.forEach((cb, [key, view]) => {
      console.log(key, view);
      cb.call(view, user);
    });
  }

  async requestSetUser(user: Partial<UserState>) {
    const result = await userStore.setUser(user);
    if (result) this.notify();
  }

  async requestGetUser() {
    return await userStore.getUser();
  }
}

export const userController = new UserController();
