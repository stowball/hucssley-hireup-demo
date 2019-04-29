import React from 'react';
import objStr from 'obj-str';

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
      className={objStr({
        [styles]: true,
        [props.className]: props.className
      })}
      focusable="false"
      role="img"
    >
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};

export default Svg;