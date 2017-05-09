import { actionCreator } from '../rxred';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/dom/ajax';
import { map } from 'lodash';
import { setDeviceType, switchPage, loadGithubFollowers} from './responsive'
import { copyStore, changeDevInfo, disconnect, reconnect} from './mqtt'

const changeName = actionCreator((payload) => ({
  type: 'NAME_CHANGED',
  payload
}));
const changePage = actionCreator((payload) => ({
  type: 'PAGE_CHANGED',
  payload
}));

export {setDeviceType, changePage, changeName, switchPage, loadGithubFollowers, copyStore, disconnect, reconnect, changeDevInfo}