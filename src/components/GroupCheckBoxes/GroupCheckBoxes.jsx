import { useState } from 'react';
import PropTypes from 'prop-types';

const GroupCheckBoxes = (props) => {
  const { list } = props;
  const initialState = list.reduce((acc, item) => {
    acc[item] = false;
    return acc;
  }, {});
  const [items, setItems] = useState(initialState);
  const changeInterests = (event) => {
    setItems({ ...items, [event.target.name]: event.target.checked });
  };
  const showItem = (item) => (
    <label key={item} style={{ display: 'block' }}>
      <input
        type="checkbox"
        name={item}
        checked={items[{ item }]}
        onChange={changeInterests}
      />
      {item}
    </label>
  );
  return (
    <div>
      {list.map(showItem)}
      <p>
        Your choose:{' '}
        {Object.keys(items)
          .filter((key) => items[key])
          .join(',') || 'Nothing'}
      </p>
    </div>
  );
};

GroupCheckBoxes.propTypes = {
  list: PropTypes.array,
};

export default GroupCheckBoxes;
