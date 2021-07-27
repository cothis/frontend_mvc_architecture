export class UserStore {
  private static instance: UserStore;
  private id: string;

  private constructor() {
    this.id = '';
  }

  static getInstance() {
    if (!UserStore.instance) {
      UserStore.instance = new UserStore();
    }
    return UserStore.instance;
  }

  getId = () => {
    return new Promise<string>((resolve) =>
      setTimeout(() => resolve(this.id), 300)
    );
  };

  setId = (id: string) => {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        this.id = id;
        resolve(true);
      }, 500);
    });
  };
}
