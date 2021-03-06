import View from '../view';
import html from '../../utils/jsx';
import { userController } from '../../controller/MainController';
import { UserState } from '@/model/UserStore';

export default class AnotherView extends View {
  private state: UserState;

  constructor(root: HTMLElement) {
    super(root);
    this.state = {
      id: '여기 바인딩 되어야 합니다.',
      name: 'hihi',
    };
    userController.subscribe(this, this.setState, 'user');
  }

  setState(newState: UserState) {
    const nextState = { ...this.state, ...newState };
    if (this.state === nextState) {
      return;
    }
    this.state = nextState;
    this.reRender();
  }

  createDom(): HTMLElement {
    return html`<div>
      또다른 View입니다.
      <div>
        <div>${this.state.id}</div>
        <div>${this.state.name}</div>
      </div>
    </div>`;
  }
}
