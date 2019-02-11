import { observable, action } from 'mobx';

class RemarksBoxService {
  @observable isUploadBoxOpened = false;
  @observable isRecordAudioOpened = false;
  trumbowyg = null;

  @action
  reset() {
    this.isUploadBoxOpened = false;
    this.isRecordAudioOpened = false;
    this.trumbowyg = null;
  }
}

const remarksBoxService = new RemarksBoxService();
export default remarksBoxService;
