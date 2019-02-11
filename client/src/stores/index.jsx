import rootStore from './RootStore';

// Admin Imports
import usersStore from './admin/UsersStore';


/** This class contains a reference to all the stores used in the application */
class Stores {
  RootStore = rootStore

  // Admin
  UsersStore = usersStore;

}

const stores = new Stores();
export default stores;

