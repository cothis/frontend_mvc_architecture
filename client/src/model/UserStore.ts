interface Base {}

export interface State {
  id: string;
  name: string;
}

class UserStore {
  private state: Base;

  constructor() {
    this.state = { id: '', name: '' };
  }

  getUser = <T extends Base>(): Promise<T> => {
    return new Promise<T>((resolve) =>
      setTimeout(() => resolve(<T>this.state), 300)
    );
  };

  setUser = <T extends Base>(user: T): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        this.state = user;
        resolve(true);
      }, 500);
    });
  };
}

export const userStore = new UserStore();
