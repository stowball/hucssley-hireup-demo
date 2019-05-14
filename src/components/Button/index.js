import React from 'react';
import classNames from '../../classNames';

const styles = {
  button: {
    base: `
      font-weight-700
      transition-duration-100
      transition-easing-ease
      transition-property-all
      hocus--scale-105
    `,
    type: {
      primary: `
        bg-color-blue-1000
        color-neutral-0
        hocus--bg-color-blue-600
      `,
      secondary: `
        bg-color-blue-300
        hocus--bg-color-blue-400
      `,
    },
    shape: {
      rounded: 'border-radius-1000',
      square: 'border-radius-300',
    },
    size: {
      medium: `
        padding-h-400
        padding-v-300
      `,
      large: `
        font-size-600
        padding-h-500
        padding-v-400
      `,
    },
  },
  span: `
    display-inline-block
    margin-b-50
  `,
};

const Button = (props) => {
  const El = props.href ? 'a' : 'button';
  
  return (
    <El
      className={classNames([
        styles.button.base,
        styles.button.shape[props.shape],
        styles.button.size[props.size],
        styles.button.type[props.type],
        props.className,
      ])}
      href={props.href}
    >
      <span className={styles.span}>
        {props.children}
      </span>
    </El>
  );
};

Button.defaultProps = {
  shape: 'square',
  size: 'medium',
  type: 'primary',
};

export default Button;