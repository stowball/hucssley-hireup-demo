import React from 'react';
import classNames from '../../classNames';

const styles = `
  margin-h-auto
  max-width-container
  padding-h-600
`;

const Container = (props) => {
  const El = props.as;

  return (
    <El className={classNames([styles, props.className])}>
      {props.children}
    </El>
  );
};

Container.defaultProps = {
  as: 'div',
};

export default Container;