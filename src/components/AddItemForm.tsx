import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {Button, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


export type  SuperInputType = {
    callback: (title: string)=> void
}

export function AddItemForm(props: SuperInputType) {
    const [newTitle, setNewTitle] = useState('')
    const [error, setError] = useState<string | null>(null)


    const addTaskHandler =  () => {
        if(newTitle.trim() !== '') {
            props.callback(newTitle)
            setNewTitle('')
        } else {
            setError(' Title is required')
        }
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const onKeyPressInputHandler =  (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if(e.key === 'Enter') {
            addTaskHandler()
        }
    }
    return (
        <div>
            <TextField
                color={'primary'}
                size={'small'}
                // label={'NewTask'}
                variant={'outlined'}
                error={!!error}
                placeholder={'New text'}
                value={newTitle}
                onKeyPress={onKeyPressInputHandler}
                onChange={onChangeInputHandler}/>
            <Button
                size={'large'}
                variant={'contained'}
                onClick={addTaskHandler}
                color={'primary'}><AddIcon/></Button>

            {error && <div className={'error-message'}>{error}</div>}
        </div>
    );
};
