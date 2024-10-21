import { useState } from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
  const { list } = props;
  const [selectOption, setSelectOption] = useState('ua');
  const showOption = (elem) => (
    <option key={elem.value} value={elem.value}>
      {elem.label}
    </option>
  );
  const changeSelectOption = (event)=>{
    setSelectOption(event.target.value)
  }
  return (
    <>
      <select value={selectOption} 
      onChange={changeSelectOption}>
        <option value="" disabled>choose</option>
        {list.map(showOption)}
        </select>
    </>
  );
};

Select.propTypes = {
  list: PropTypes.array,
};

export default Select;
