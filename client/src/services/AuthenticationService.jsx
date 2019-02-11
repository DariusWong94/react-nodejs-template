import { observable, action } from 'mobx';

import HTTPClient from 'services/HTTPClient';
import UploadsService from './UploadsService';
import AuthorisationService from './AuthorisationService';
import RolesService from './RolesService';
const SESSION_DATA = 'session_data';

class AuthenticationService {
  @observable IsAuthenticated;

  constructor() {
    this.IsAuthenticated = false;
    this.User = {};

    // Retrieve our data from the session storage
    const sessionData = JSON.parse(sessionStorage.getItem(SESSION_DATA));
  // If data is not null
  if (sessionData) {
    // Initialise
    HTTPClient.SetAuthenticationToken(sessionData.token);
    HTTPClient.SetAuthenticationCallback(this.DeInitialise);
    this.IsAuthenticated = true;
    this.User = sessionData;
  }
  }

  // @action Login(authentication) {
  //   return (this.IsAuthenticated = true)

  // }

  @action Login(authentication){
    authentication.username = authentication.username.toLowerCase();

    return HTTPClient.Post('authentication/login', authentication)
    .then(async (response) => {
      if (response.status === 200) {
        // Pass our data to the session storage
        sessionStorage.setItem(SESSION_DATA, JSON.stringify(response.data));
        console.log("{sessionStorage}");
        console.log(sessionStorage);
        // Initialise
        HTTPClient.SetAuthenticationToken(response.data.token);
        HTTPClient.SetAuthenticationCallback(this.DeInitialise);
        this.User = response.data;

        // Debug print
        // console.log(`Authentication-Token: ${response.data.token}`);
        // console.log(`UserID: ${JSON.stringify(response.data)}`);
		
       //Call these functions before we login
       const promise1 = RolesService.GetRoles();

        Promise.all([promise1])
        .then(() => {
			// Login
			this.IsAuthenticated = true;
        });
      }
    });
  } 
  @action Logout() {
    return HTTPClient.Get('authentication/logout')
      .then((_response) => {
        sessionStorage.session_data = null;
        this.DeInitialise();
      });
  }

  @action DeInitialise() {
    // Clear the session storage
    sessionStorage.clear();

    // De-initialise
    HTTPClient.SetAuthenticationToken(null);
    this.IsAuthenticated = false;
    this.User = {};
  }



}

const authenticationService = new AuthenticationService();
export default authenticationService;
