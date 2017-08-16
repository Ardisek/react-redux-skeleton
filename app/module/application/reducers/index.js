import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import announcements from '../../announcement/reducers/announcements';
import home from '../../home/reducers/home';
import users from '../../user/reducers/users';
import auth from './auth';
import register from '../../user/reducers/register';

export default combineReducers({
  announcements,
  home,
  form,
  auth,
  users,
  register,
});
