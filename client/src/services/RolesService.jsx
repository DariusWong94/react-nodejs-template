import { observable, action } from 'mobx';

import HTTPClient from 'services/HTTPClient';

const PROFILE_DATA = 'profile_data';

class RolesService {
  @observable Profile = []
  @observable Roles = 0;

  @action GetRoles() {
	const id = JSON.parse(sessionStorage.session_data).user._id;
    return HTTPClient.Get(`user/${id}`)
      .then((res) => {
        this.Roles = res.data.roles;
      });
  }
}

const rolesService = new RolesService();
export default rolesService;
