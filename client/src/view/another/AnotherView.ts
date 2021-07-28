import View from '../view';
import html from '../../utils/jsx';
import { userController } from '../../controller/UserController';
import { State } from '@/model/UserStore';

export default class AnotherView extends View {
  private state: State;

  constructor(root: HTMLElement) {
    super(root);
    this.state = {
      id: '여기 바인딩 되어야 합니다.',
      name: 'hihi',
    };
    userController.subscribe<State>(this, this.setState, 'id');
  }

  setState(newState: State) {
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
