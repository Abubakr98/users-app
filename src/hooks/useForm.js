import React from 'react';

const useForm = (initialValue) => {
    const [value, setValue] = React.useState(initialValue)
    const onChange = event => {
      setValue({...value, [event.target.name]: event.target.value})
    }
    const clear = () => setValue(initialValue)
    return {
      bind: {value, onChange},
      value,
      clear
    }
};

export default useForm