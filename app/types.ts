import { State } from "@hookstate/core";

export type User = {
  [key: string]: {
    photos: number;
    likes: number;
    subscribers: number;
  };
};

export type DataUser = {
  name: string | undefined;
  nameNew: string | undefined;
  photos: number | undefined;
  likes: number | undefined;
  subscribers: number | undefined;
};

export type DataUserPost = {
  name: string;
  photos: number;
  likes: number;
  subscribers: number;
};

export type Data = {
  users: Array<User>;
};

export type PostData = {
  data: DataUser;
  method: 'DELETE' | 'CREATE' | 'UPDATE';
};

export type TextFieldProps = {
  typeComp: string;
  idComp: string;
  labelComp: { err: string; withoutErr: string };
  placeholderComp?: string;
  funcComp: (inputVal: string) => void;
  error: State<string | undefined, {}>;
  valueComp?: string | number;
  helpTexterComp?: string;
  required: boolean | undefined;
};

export type FormDataSetter = {
  name: string | undefined;
  nameNew: string | undefined;
  likes: number | undefined;
  photos: number | undefined;
  subs: number | undefined;
  operation: string | null;
}

export type ErrorTextFileds = {
  errName: string | undefined;
  errNameNew: string | undefined;
  errLikes: string | undefined;
  errPhotos: string | undefined;
  errSubs: string | undefined;
  errOperation: string | undefined;
}
