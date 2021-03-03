export enum AuthenticationType {
  GOOGLE = 'GOOGLE',
}

export interface User {
  id: string;
  name: string;
}

export interface AuthState {
  user: User;
}
