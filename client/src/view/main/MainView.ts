import View from '../view';
import html from '../../utils/jsx';
import { userController } from '../../controller/UserController';

export default class MainView extends View {
  constructor(root: HTMLElement) {
    super(root);
  }

  onInput(e: Event) {
    const value: string = (<HTMLInputElement>e.target).value;
    console.log(value);
    userController.requestSetUser({ id: value });
  }

  onInputName(e: Event) {
    const value: string = (<HTMLInputElement>e.target).value;
    console.log(value);
    userController.requestSetUser({ name: value });
  }

  createDom(): HTMLElement {
    return html`<div>
      메인화면입니다.
      <div>첫번째 블록입니다.</div>
      <div>두번째 블록입니다.</div>
      <div>
        <label>
          <span>유저 아이디</span>
          <input type="text" onInput=${this.onInput} />
        </label>
        <label>
          <span>유저 이름</span>
          <input type="text" onInput=${this.onInputName} />
        </label>
        <button type="button">controller 호출</button>
      </div>
    </div>`;
  }
}
