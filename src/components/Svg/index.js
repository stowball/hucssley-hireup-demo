import React from 'react';
import classNames from '../../classNames';

const styles = `
  display-inline-block
  pointer-events-none
  svg-fill-color-current
  svg-fill-rule-even-odd
  vertical-align-bottom
`;

const Svg = (props) => {
  return (
    <svg
      className={classNames([styles, props.className])}
      focusable="false"
      role="img"
    >
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};

export default Svg;