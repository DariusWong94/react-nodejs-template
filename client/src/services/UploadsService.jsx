import { observable, action } from 'mobx';

import HTTPClient from 'services/HTTPClient';

/* eslint import/no-extraneous-dependencies: "off" */
import Config from 'Config';

export const Upload = {
  Type: {
    Image: 'image',
    Audio: 'audio',
    Video: 'video',
  },
};

const UPLOADS_LIMIT_DATA = 'uploads_limit_data';

/** This class handles all HTTP requests. */
class UploadsService {
  baseURL = ''

  @observable Limits = {
    allowedTypes: [],
  }

  constructor() {
    this.baseURL = `${Config.baseURL}/api`;
  }

  Initialise() {
    // Retrieve our data from the session storage
    const uploadsLimitData = JSON.parse(sessionStorage.getItem(UPLOADS_LIMIT_DATA));

    // If data is not null
    if (uploadsLimitData) {
      // Initialise
      this.Limits = uploadsLimitData;
    }
  }

  @action GetLimits() {
    return HTTPClient.Get('uploads/limits')
      .then((response) => {
        // Pass our data to the session storage
        sessionStorage.setItem(UPLOADS_LIMIT_DATA, JSON.stringify(response.data));

        this.Limits = response.data;
      });
  }

  Upload(file) {
    const formData = new FormData();
    formData.append('file', file);
    return HTTPClient.Post('uploads', formData);
  }

  Get(identifier) {
    window.location = `${this.baseURL}/uploads/files/${identifier}`;
  }

  GetURL(identifier) {
    return `${this.baseURL}/uploads/files/${identifier}`;
  }

  GetThumbnailURL(identifier) {
    return `${this.baseURL}/uploads/files/${identifier}/thumbnail`;
  }

  Download(identifier) {
    window.location = `${this.baseURL}/uploads/files/${identifier}/download`;
  }

  DownloadURL(identifier) {
    return `${this.baseURL}/uploads/files/${identifier}/download`;
  }

  CheckSize(file) {
    const { maxFileSize } = this.Limits;
    return maxFileSize >= file.size;
  }

  CheckType(file, ...types) {
    const allowedTypes = this.Limits.allowedTypes.toJS();
    let filteredTypes = [];
    if (types.length) {
      filteredTypes = allowedTypes.filter((item) => {
        const type = item.split('/')[0];
        return types.includes(type);
      });
    } else {
      filteredTypes = allowedTypes;
    }
    return filteredTypes.includes(file.type);
  }
}

const uploadsService = new UploadsService();
export default uploadsService;
