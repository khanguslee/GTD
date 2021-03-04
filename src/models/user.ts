export enum AuthenticationType {
  GOOGLE = 'GOOGLE',
}
export interface AuthState {
  user: Realm.User | undefined;
  apiKey: string;
}
