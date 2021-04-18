import React from 'react';

const useForm = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);
  const onChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };
  const setNewValue = (data) => setValue(data);
  const clear = () => setValue(initialValue);
  return {
    bind: { value, onChange, setNewValue },
    value,
    clear,
  };
};

export default useForm;
