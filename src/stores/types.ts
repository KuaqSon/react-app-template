export interface IUser {
  gender: string;
  name: string;
  email: string;
  birthday: string;
  phone: string;
  cell: string;
  id: number;
  nat: string;
  photo: string;
  title: string;
  address: string;
}

export interface IAuthState {
  authorize: Function;
  isLoggedIn: boolean;
  user: IUser | null;
}

export interface IAppState {
  isSideBarOpen: boolean;
  isFlyBarOpen: boolean;
}
