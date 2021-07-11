import { TextField } from '@material-ui/core';
import React from 'react'

export const CustomTextField = (props) => {

    const {name, label, variant, value, onChange} = props;

    return (
        <TextField name={name} value={value} label={label} variant={variant || "outlined"} onChange={onChange} {...props} />
    )

}