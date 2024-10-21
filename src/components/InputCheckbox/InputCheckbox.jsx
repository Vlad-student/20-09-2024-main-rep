import { useState } from 'react';

const InputCheckbox = () => {
  const [isCheck, setIsCheck] = useState(false);
  const changeIsCheck = (event) => {
    setIsCheck(event.target.checked);
  };
  return (
    <label>
      checkbox:
      <input type="checkbox" checked={isCheck} onChange={changeIsCheck} />
      {isCheck ? 'yes' : 'no'}
    </label>
  );
};

export default InputCheckbox;
