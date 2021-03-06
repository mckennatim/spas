require('./mqttws31.js')
import { actionCreator } from '../rxflux';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/dom/ajax';
import { map } from 'lodash';

export const loadGithubFollowers = actionCreator((payload) => {
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

export const changeName = actionCreator((payload) => ({
  type: 'NAME_CHANGED',
  payload
}));
export const changePage = actionCreator((payload) => ({
  type: 'PAGE_CHANGED',
  payload
}));

