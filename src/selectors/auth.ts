import { AuthState } from '../models/user';
import { RootState } from '../store';

const getAuth = (store: RootState): AuthState => store.auth;

const getName = (store: RootState) => getAuth(store).user.name;

export { getAuth, getName };
