import { observable, action } from 'mobx';

/** This class is in change of storing HTTP errors */
class RootStore {
  @observable ActiveMenuItem = '';
  @observable ActiveMenu = '';

  @action SetActiveMenuItem(name) {
    this.ActiveMenuItem = name;
  }

  @action SetActiveMenu(name) {
    this.ActiveMenu = name;
  }
}

const rootStore = new RootStore();
export default rootStore;
