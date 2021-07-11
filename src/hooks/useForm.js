import React, {useState, useEffect} from "react"

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues)

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name] : value
        })
    }

    return {
        values,
        handleInputChange,
        setValues
    }
}