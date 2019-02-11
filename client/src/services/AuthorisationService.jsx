import HTTPClient from './HTTPClient';

class PermissionTypes {
  Type = {};
}

export const Permission = new PermissionTypes();

const PERMISSION_DATA = 'permission_data';
const ALL_PERMISSION_DATA = 'all_permission_data';

class AuthorisationService {
  Permissions = [];

  Initialise() {
    // Retrieve our data from the session storage
    const allPermmisionData = JSON.parse(sessionStorage.getItem(ALL_PERMISSION_DATA));

    // If data is not null
    if (allPermmisionData) {
      // Initialise
      this.Permissions = allPermmisionData;
    }

    // Retrieve our data from the session storage
    const permmisionData = JSON.parse(sessionStorage.getItem(PERMISSION_DATA));

    // If data is not null
    if (permmisionData) {
      // Initialise
      Permission.Type = permmisionData;
    }
  }

  GetAllPermissions() {
    return HTTPClient.Get('authorisation/permissions/all')
      .then((response) => {
        const listOfPerm = response.data;
        listOfPerm.forEach((perm, _index) => {
          Permission.Type[perm.name] = perm.permissionId;
        });
        sessionStorage.setItem(PERMISSION_DATA, JSON.stringify(Permission.Type));
      });
  }

  GetPermissions() {
    return HTTPClient.Get('authorisation/permissions')
      .then((response) => {
        const permissions = response.data;
        this.Permissions = permissions.map(item => item.permissionId);
        sessionStorage.setItem(ALL_PERMISSION_DATA, JSON.stringify(this.Permissions));
      });
  }

  CheckPermissions(...args) {
    return args.every(permission => this.Permissions.includes(permission));
  }
}

const authorisationService = new AuthorisationService();
export default authorisationService;

