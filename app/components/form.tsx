import { State } from '@hookstate/core';
import { Button, debounce } from '@mui/material';
import * as React from 'react';
import { Dispatch, useCallback } from 'react';

import { SelectComponent } from './select-comp';
import { MyCompTextField } from './text-field';
import { PostBodyForm } from './textfields-form';
import { ErrorTextFileds, FormDataSetter } from '../types';
import { IsInt } from "../utility/validations-utils"

const onChangeFunc = (statePopUpWindowErr: any, statePopUpWindowData: any) => {
  statePopUpWindowErr(undefined);
  statePopUpWindowData(undefined);
}

type Props = {
  stateFormData: State<FormDataSetter, {}>,
  statePopUpWindowData: Dispatch<React.SetStateAction<JSX.Element | undefined>>;
  statePopUpWindowErr: Dispatch<React.SetStateAction<JSX.Element | undefined>>;
  submitFunc: (e: React.FormEvent) => Promise<void>;
  stateErrs: State<ErrorTextFileds, {}>
};

export const Form: React.FC<Props> = ({
  stateFormData,
  statePopUpWindowData,
  statePopUpWindowErr,
  stateErrs,
  submitFunc,
}) => {
  const idComp = 'outlined-required';
  const labels = {
    name: { err: 'Error', withoutErr: 'Username' },
    newName: { err: 'Error', withoutErr: 'New username' },
    likes: { err: 'Error', withoutErr: 'Count of likes' },
    photos: { err: 'Error', withoutErr: 'Count of photos' },
    subs: { err: 'Error', withoutErr: 'Count of subscribers' },
  };
  const options = [
    { value: 'CREATE', label: 'Create profile' },
    { value: 'DELETE', label: 'Delete profile' },
    { value: 'GET', label: 'Get profile' },
    { value: 'UPDATE', label: 'Update profile' },
  ];

  const operation = stateFormData.operation.get()

  const postBody = useCallback(
    (operation: string | null) => {

      const textFieldName = (
        <MyCompTextField
          required={true}
          typeComp="text"
          idComp={idComp}
          labelComp={labels.name}
          funcComp={(e) => stateFormData.name.set(e.trim())}
          error={stateErrs.errName}
        />
      );

      const textFieldNewName = (
        <MyCompTextField
          required={false}
          typeComp="text"
          idComp={idComp}
          labelComp={labels.newName}
          funcComp={(e) => stateFormData.nameNew.set(e.trim())}
          error={stateErrs.errNameNew}
        />
      );

      const textFieldLikes = (
        <MyCompTextField
          required={true}
          typeComp="number"
          idComp={idComp}
          labelComp={labels.likes}
          funcComp={(e) => stateFormData.likes.set(IsInt(e, 0))}
          error={stateErrs.errLikes}
        />
      );

      const textFieldPhotos = (
        <MyCompTextField
          required={true}
          typeComp="number"
          idComp={idComp}
          labelComp={labels.photos}
          funcComp={(e) => stateFormData.photos.set(IsInt(e, 0))}
          error={stateErrs.errPhotos}
        />
      );

      const textFieldSubs = (
        <MyCompTextField
          required={true}
          typeComp="number"
          idComp={idComp}
          labelComp={labels.subs}
          funcComp={(e) => stateFormData.subs.set(IsInt(e, 0))}
          error={stateErrs.errSubs}
        />
      );

      return (
        <PostBodyForm
          operation={operation}
          textfieldName={textFieldName}
          textfieldNewName={textFieldNewName}
          textfieldLike={textFieldLikes}
          textfieldPhotos={textFieldPhotos}
          textfieldSubs={textFieldSubs}
        />
      );
    },
    [operation],
  );

  return (
    <form
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
      onSubmit={submitFunc}
      onChange={debounce(() => {
        onChangeFunc(statePopUpWindowErr, statePopUpWindowData)
      }, 300)}
    >
      <div>
        <SelectComponent
          options={options}
          paragraph="Choose operation"
          state={stateFormData.operation}
          error={stateErrs.errOperation.get()}
          statePopUpWindowData={statePopUpWindowData}
          statePopUpWindowErr={statePopUpWindowErr}
          stateErrs={stateErrs}
        />
      </div>
      {postBody(operation)}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};
