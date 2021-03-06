import React from 'react';
import PropTypes from 'prop-types';

export function Engine({ type }) {
  return (
    <div>
      <span id='engine--type'>{type} type</span>
    </div>
  );
}
Engine.propTypes = {
  type: PropTypes.oneOf(['gasoline', 'diesel']).isRequired,
};
export default Engine;
