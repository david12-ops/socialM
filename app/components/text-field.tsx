import { InputAdornment, TextField } from '@mui/material';
import { TextFieldProps } from '../types';

const lComp = (input: string) => {
    switch (input) {
        case 'Name': {
            return 'Enter username';
        }
        case 'Likes': {
            return 'Enter count of likes';
        }
        case 'Photos': {
            return 'Choose photo';
        }
        case 'Subscribers': {
            return 'Enter count of subscribers';
        }
        default: {
            return '';
        }
    }
};
export const MyCompTextField: React.FC<TextFieldProps> = ({
    typeComp,
    idComp,
    labelComp,
    placeholderComp,
    funcComp,
    errorComp,
    valueComp,
    helpTexterComp,
    required
}) => {
    return errorComp === '' ? (
        <TextField
            type={typeComp}
            label={labelComp.withoutErr}
            required={required}
            id={idComp}
            sx={{ m: 1, width: '25ch' }}
            onChange={(e) => funcComp(e.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">{placeholderComp}</InputAdornment>
                ),
            }}
            helperText={helpTexterComp || lComp(labelComp.withoutErr)}
            value={valueComp}
        />
    ) : (
        <TextField
            type={typeComp}
            label={labelComp.err}
            required
            id={idComp}
            helperText={errorComp}
            error
            sx={{ m: 1, width: '25ch' }}
            onChange={(e) => funcComp(e.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">{placeholderComp}</InputAdornment>
                ),
            }}
        />
    );
};
