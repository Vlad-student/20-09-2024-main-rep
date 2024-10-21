import { useState } from 'react';
import Icon from '@mdi/react';
import {
  mdiArrowDownDropCircleOutline,
  mdiArrowUpDropCircleOutline,
} from '@mdi/js';
import { getRandomColor } from '../../utils';

const ToggleText = () => {
  const [color, setColor] = useState('maroon');
  const [close, setClose] = useState(true);
  const changeClose = () => {
    setClose(!close);
  };
  const changeColor = () => {
    setColor(getRandomColor());
  };
  return (
    <div style={{ backgroundColor: color }} onClick={changeColor}>
      <h2>
        Title
        <span onClick={changeClose}>
          {close ? (
            <Icon path={mdiArrowUpDropCircleOutline} size={1} color="pink" />
          ) : (
            <Icon path={mdiArrowDownDropCircleOutline} size={1} color="pink" />
          )}
        </span>
      </h2>
      {close && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sequi?
          Laboriosam impedit esse modi nemo maxime odio nulla praesentium quam
          incidunt, debitis, inventore, excepturi aut quibusdam cumque eum
          accusamus sit.
        </p>
      )}
    </div>
  );
};

export default ToggleText;
