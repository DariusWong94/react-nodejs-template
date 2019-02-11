import { observable, action } from 'mobx';

import HTTPClient from 'services/HTTPClient';

const PROFILE_DATA = 'profile_data';

class ProfileService {
  @observable Profile = []
  @observable Points = 0;

  Initialise() {
    // Retrieve our data from the session storage
    const profileData = JSON.parse(sessionStorage.getItem(PROFILE_DATA));

    // If data is not null
    if (profileData) {
      // Initialise
      this.Profile = profileData;
    }
  }

  @action GetProfile() {
    return HTTPClient.Get('profile')
      .then((res) => {
        this.Profile = res.data;
        sessionStorage.setItem(PROFILE_DATA, JSON.stringify(res.data));
      });
  }

  @action UpdateProfile(profile) {
    return HTTPClient.Put('profile', profile)
      .then((_res) => {
        this.GetProfile();
      });
  }

  @action GetPoints() {
    return HTTPClient.Get('profile/points')
      .then((res) => {
        this.Points = res.data.points;
      });
  }
}

const profileService = new ProfileService();
export default profileService;
