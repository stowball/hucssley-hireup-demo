import React from 'react';
import classNames from '../../classNames';
import Button from '../Button/';

const styles = {
  root: `
    bg-color:blue-100
    padding:500
  `,
  callout: `
    align-items:center
    bg-color:neutral-0
    border-color:neutral-500
    border-radius:500
    border-style:solid
    border-width:100
    display:flex
    flex-direction:column
    padding:500
    text-align:center
    @mq-768--flex-direction:row
    @mq-768--text-align:left
  `,
  imageWrapper: `
    align-items:center
    display:flex
    justify-content:center
    margin-bottom:400
    width:50
    @mq-600--width:30
    @mq-768--margin-bottom:0
    @mq-768--margin-right:500
    @mq-768--width:20
    @mq-1040--width:16
  `,
  image: `
    bg-color:blue-600
    border-color:neutral-500
    border-radius:1000
    border-style:solid
    border-width:200
  `,
  title: `
    font-size:600
    font-weight:700
    line-height:200
    @mq-768--font-size:800
  `,
  link: 'margin-top:400',
};

const Callout = (props) => {
  return (
    <div className={classNames([styles.root, props.className])}>
      <div className={styles.callout}>
        <div className={styles.imageWrapper}>
          <img
            alt=""
            className={styles.image}
            src={props.image}
          />
        </div>
        <div>
          <p className={styles.title}>
            {props.title}
          </p>
          {(props.linkHref && props.linkLabel) && (
            <Button
              shape="rounded"
              className={styles.link}
              href={props.linkHref}
            >
              {props.linkLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Callout;