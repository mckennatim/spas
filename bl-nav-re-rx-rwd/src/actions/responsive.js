import { actionCreator } from '../rxred';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/dom/ajax';
import { map } from 'lodash';

export const setDeviceType = actionCreator((payload) => {
  return {
    type: 'SET_DEVICE',
    payload
  }
});

export const switchPage = actionCreator((payload) => {
  return {
    type: 'PAGE_SWITCHED',
    payload
  }
});