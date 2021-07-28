import View from '../view';
import html from '../../utils/jsx';
import { userController } from '../../controller/MainController';
import { MenuState } from '../../model/MenuStore';

export default class MenuView extends View {
  private state: MenuState;

  constructor(root: HTMLElement) {
    super(root);
    this.state = {
      current: 'hi',
    };
    userController.subscribe(this, this.setState, 'menu');
  }

  setState(newState: MenuState) {
    const nextState = { ...this.state, ...newState };
    if (this.state === nextState) {
      return;
    }
    this.state = nextState;
    this.reRender();
  }

  createDom(): HTMLElement {
    return html`<div>
      menu View입니다.
      <div>
        <div>${this.state.current}</div>
      </div>
    </div>`;
  }
}
