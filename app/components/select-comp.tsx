import { State } from '@hookstate/core';
import { MenuItem, TextField } from '@mui/material';
import { Dispatch } from 'react';
import { ErrorTextFileds } from '../types'

type Props = {
  options: Array<{ value: string; label: string }>;
  state: State<string | null, {}>
  paragraph: string;
  error: string | undefined;
  statePopUpWindowData: Dispatch<React.SetStateAction<JSX.Element | undefined>>;
  statePopUpWindowErr: Dispatch<React.SetStateAction<JSX.Element | undefined>>;
  stateErrs: State<ErrorTextFileds, {}>
};

const onChangeFunc = (statePopUpWindowData: any, statePopUpWindowErr: any, errors: any) => {
  statePopUpWindowData(undefined);
  statePopUpWindowErr(undefined);
  errors.set({
    errOperation: undefined,
    errLikes: undefined,
    errNameNew: undefined,
    errName: undefined,
    errPhotos: undefined,
    errSubs: undefined
  })
}

export const SelectComponent: React.FC<Props> = ({
  options,
  state,
  paragraph,
  error,
  statePopUpWindowData,
  statePopUpWindowErr,
  stateErrs
}) => {
  return !error ? (
    <TextField
      id="outlined-select"
      select
      label={paragraph}
      placeholder={'CREATE/UPDATE/DELETE/GET'}
      required
      helperText={`Choose from options CREATE/UPDATE/DELETE/GET`}
      onChange={(selectedOption) => {
        state.set(selectedOption ? selectedOption.target.value : '');
        onChangeFunc(statePopUpWindowData, statePopUpWindowErr, stateErrs)
      }
      }
      value={state.get()}
    >
      {options.map((option: { value: string; label: string }) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  ) : (
    <TextField
      id="outlined-select"
      select
      error
      label={'Error'}
      placeholder={'CREATE/UPDATE/DELETE/GET'}
      required
      helperText={`Choose from options CREATE/UPDATE/DELETE/GET`}
      onChange={(selectedOption) => {
        state.set(selectedOption ? selectedOption.target.value : '');
        onChangeFunc(statePopUpWindowData, statePopUpWindowErr, stateErrs)
      }
      }
    >
      {options.map((option: { value: string; label: string }) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
