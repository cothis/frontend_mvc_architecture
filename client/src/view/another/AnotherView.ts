import View from '../view';
import html from '../../utils/jsx';
import { userController } from '../../controller/UserController';

export default class AnotherView extends View {
  private state: {
    id: string;
  };

  constructor(root: HTMLElement) {
    super(root);
    this.state = {
      id: '여기 바인딩 되어야 합니다.',
    };
    userController.subscribe(this, this.setState);
  }

  setState(id: string) {
    this.state.id = id;
    this.reRender();
  }

  createDom(): HTMLElement {
    return html`<div>
      또다른 View입니다.
      <div>첫번째 블록입니다.</div>
      <div>두번째 블록입니다.</div>
      <div>
        <span>${this.state.id}</span>
      </div>
    </div>`;
  }
}
