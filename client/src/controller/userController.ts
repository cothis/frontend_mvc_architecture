import { UserStore } from '../model/UserStore';
import View from '../view/view';

class UserController {
  private userStore: UserStore;
  private subscribers: Map<View, Function>;

  constructor(userStore: UserStore) {
    this.userStore = userStore;
    this.subscribers = new Map();
  }

  subscribe(view: View, cb: Function) {
    this.subscribers.set(view, cb);
  }

  unsubscribe(view: View) {
    this.subscribers.delete(view);
  }

  async notify() {
    const id = await this.requestGetId();
    this.subscribers.forEach((cb, view) => {
      cb.call(view, id);
    });
  }

  async requestSetId(id: string) {
    const result = await this.userStore.setId(id);
    if (result) this.notify();
  }

  async requestGetId() {
    return await this.userStore.getId();
  }
}

export const userController = new UserController(UserStore.getInstance());
