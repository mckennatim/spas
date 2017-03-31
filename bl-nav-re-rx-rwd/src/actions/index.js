import { actionCreator } from '../rxred';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/dom/ajax';
import { map } from 'lodash';
import { setDeviceType, switchPage} from './Responsive'

const loadGithubFollowers = actionCreator((payload) => {
  const url = `https://api.github.com/users/${payload.username}/followers`;
  return {
    type: 'GITHUB_FOLLOWERS_LOADING',
    payload: Observable.ajax(url)
      .map((xhr) => map(xhr.response, 'login'))
      .map((followers) => ({
        type: 'GITHUB_FOLLOWERS_LOADED',
        payload: followers
      }))
  };
});

const changeName = actionCreator((payload) => ({
  type: 'NAME_CHANGED',
  payload
}));
const changePage = actionCreator((payload) => ({
  type: 'PAGE_CHANGED',
  payload
}));

export {setDeviceType, changePage, changeName, switchPage}