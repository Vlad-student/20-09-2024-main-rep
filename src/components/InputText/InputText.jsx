import { useState } from 'react';

const InputText = () => {
  const [valueEnter, setValueEnter] = useState('');
  const changeValueEnter = (event) => {
    setValueEnter(event.target.value);
  };
  return (
    <>
      <label>
        enter text:
        <input type='text' value={valueEnter} 
        onChange={changeValueEnter} />
      </label>
    </>
  );
};

// text, password, email, date, color, time
// checkbox
// radio
// select
// textarea

export default InputText;
