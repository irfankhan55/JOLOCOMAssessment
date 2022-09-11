import { Country } from '../components/molecules/country-picker/types'
export class UserViewModel implements IUserViewModel {
  userEmail?: string | undefined;
  country?: Country | undefined;
  state?: string | undefined;
  status?: string | undefined;
  idTokenExpireOn?: number | undefined;
  accessToken?: string | undefined;
  expireOn?: number | undefined;
  isLoggedIn?: boolean | undefined;

  constructor(data?: UserViewModel) {
    if (data) {
      this.userEmail = data['userEmail'];
      this.country = data['country'];
      this.state = data['state'];
      this.status = data['status'];
      this.idTokenExpireOn = data['idTokenExpireOn'];
      this.accessToken = data['accessToken'];
      this.expireOn = data['expireOn'];
      this.isLoggedIn = false;
    }
  }

  init(_data?: any) {
    if (_data) {
      this.userEmail = _data['userEmail'];
      this.country = _data['country'];
      this.state = _data['state'];
      this.status = _data['status'];
      this.idTokenExpireOn = _data['idTokenExpireOn'];
      this.accessToken = _data['accessToken'];
      this.expireOn = _data['expireOn'];
      this.isLoggedIn = _data['isLoggedIn'];
    }
  }

  static fromJS(data: any): UserViewModel {
    data = typeof data === 'object' ? data : {};
    let result = new UserViewModel();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['userEmail'] = this.userEmail;
    data['country'] = this.country;
    data['state'] = this.state;
    data['status'] = this.status;
    data['idTokenExpireOn'] = this.idTokenExpireOn;
    data['accessToken'] = this.accessToken;
    data['expireOn'] = this.expireOn;
    data['isLoggedIn'] = this.isLoggedIn;
    return data;
  }
}

export interface IUserViewModel {
  userEmail?: string | undefined;
  country?: Country | undefined;
  state?: string | undefined;
  status?: string | undefined;
  idTokenExpireOn?: number | undefined;
  accessToken?: string | undefined;
  expireOn?: number | undefined;
  isLoggedIn?: boolean | undefined;
}
