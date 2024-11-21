import * as React from 'react';
import { MyCompTextField } from './text-field';
import { SelectComponent } from './select-comp';
import { State } from '@hookstate/core';
import { Button } from '@mui/material';
import { useCallback } from 'react';
import { PostBodyForm } from "./textfields-form";

type Props = {
    setter: State<{
        name: string;
        newName: string;
        like: number;
        photos: number;
        subs: number;
        operation: string;
    }, {}>
    setterData: React.Dispatch<React.SetStateAction<JSX.Element | undefined>>;
    setterErr: React.Dispatch<React.SetStateAction<JSX.Element | undefined>>;
    submitFunc: (e: React.FormEvent) => Promise<void>;
};

export const Form: React.FC<Props> = ({
    setter,
    setterData,
    setterErr,
    submitFunc
}) => {
    const idComp = 'outlined-required';
    const labels = {
        name: { err: 'Error', withoutErr: 'Username' },
        newName: { err: 'Error', withoutErr: 'New username' },
        likes: { err: 'Error', withoutErr: 'Count of likes' },
        photos: { err: 'Error', withoutErr: 'Count of photos' },
        subs: { err: 'Error', withoutErr: 'Count of subscribers' }
    };
    const options = [
        { value: 'CREATE', label: 'Create profile' },
        { value: 'DELETE', label: 'Delete profile' },
        { value: 'GET', label: 'Get profile' },
        { value: 'UPDATE', label: 'Update profile' },
    ];

    const postBody = useCallback((operation: string) => {
        const method = operation as "CREATE" | "DELETE" | "GET" | "UPDATE"
        return (
            <PostBodyForm
                operation={method}
                textfieldName={textFieldName}
                textfieldNewName={textFieldNewName}
                textfieldLike={textFieldLikes}
                textfieldPhotos={textFieldPhotos}
                textfieldSubs={textFieldSubs}
            />
        );
    }, [setter.operation])

    const textFieldName = (
        <MyCompTextField
            required={true}
            typeComp="text"
            idComp={idComp}
            labelComp={labels.name}
            funcComp={(e) => setter.name.set(e.trim())}
            errorComp=""
        />
    );

    const textFieldNewName = (
        <MyCompTextField
            required={false}
            typeComp="text"
            idComp={idComp}
            labelComp={labels.newName}
            funcComp={(e) => setter.newName.set(e.trim()) ?? undefined}
            errorComp=""
        />
    );

    const textFieldLikes = (
        <MyCompTextField
            required={true}
            typeComp="number"
            idComp={idComp}
            labelComp={labels.likes}
            funcComp={(e) => setter.like.set(parseInt(e.trim()) || 0)}
            errorComp=""
        />
    );

    const textFieldPhotos = (
        <MyCompTextField
            required={true}
            typeComp="number"
            idComp={idComp}
            labelComp={labels.photos}
            funcComp={(e) => setter.photos.set(parseInt(e.trim()) || 0)}
            errorComp=""
        />
    );

    const textFieldSubs = (
        <MyCompTextField
            required={true}
            typeComp="number"
            idComp={idComp}
            labelComp={labels.subs}
            funcComp={(e) => setter.subs.set(parseInt(e.trim()) || 0)}
            errorComp=""
        />
    );

    return (
        <form
            style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
            onSubmit={submitFunc}
            onChange={() => {
                setterErr(undefined);
                setterData(undefined);
            }}
        >
            <div>
                <SelectComponent
                    options={options}
                    paragraph="Choose operation"
                    state={setter.operation}
                    error=""
                />
            </div>
            {postBody(setter.operation.get())}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button type="submit">Submit</Button>
            </div>
        </form>
    );
};
