import { State } from '@hookstate/core';
import { MenuItem, TextField } from '@mui/material';

type Props = {
    options: Array<{ value: string; label: string }>;
    state: State<string>
    paragraph: string;
    error: string;
};

export const SelectComponent: React.FC<Props> = ({
    options,
    state,
    paragraph,
    error,
}) => {
    return error === '' ? (
        <TextField
            id="outlined-select"
            select
            label={paragraph}
            placeholder={'CREATE/UPDATE/DELETE/GET'}
            required
            helperText={`Choose from options CREATE/UPDATE/DELETE/GET`}
            onChange={(selectedOption) => state.set(selectedOption ? selectedOption.target.value : '')}
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
            onChange={(selectedOption) => state.set(selectedOption ? selectedOption.target.value : '')}
        >
            {options.map((option: { value: string; label: string }) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
};