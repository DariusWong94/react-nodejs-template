import { observable, action } from 'mobx';

import HTTPClient from 'services/HTTPClient';

class UsersStore {
  
  @observable state =  {
    User: [],
    username: "" ,
    roles: "",
  } 
  // Store to get JSON from GetUsers API
  @action GetUserById() {
    const id = JSON.parse(sessionStorage.session_data).user._id;
    return HTTPClient.Get(`user/${id}`)
      .then((res) => {
        this.state.User = res.data;
        this.state.username = res.data.username;
        this.state.roles = res.data.roles;

        // console.log(res.data);
        // console.log(this.state.Users);
      });
  }


}

const usersStore = new UsersStore();
export default usersStore;
