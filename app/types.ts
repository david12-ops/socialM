import { State } from "@hookstate/core";

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

