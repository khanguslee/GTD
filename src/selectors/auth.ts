import { AuthState } from '../models/user';
import { RootState } from '../store';

const getAuth = (store: RootState): AuthState => store.auth;

const getName = (store: RootState) => getAuth(store).user?.profile.name || '';

const getUser = (store: RootState) => getAuth(store).user;

export { getAuth, getName, getUser };
