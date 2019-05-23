import React from 'react';
import classNames from '../../classNames';
import states from '../../states';

const navItems = [
  'Dashboard',
  'Search',
  'Bookings',
  'Job board',
  'How to guide',
];

const styles = {
  root: `
    display-flex
    flex-direction-column
    height-100
    padding-b-300
    padding-h-400
    mq-1040--flex-direction-row
    mq-1040--padding-l-0
    mq-1040--padding-v-0
  `,
  item: 'display-flex',
  link: `
    align-items-center
    color-blue-1000
    display-flex
    flex-grow-1
    font-weight-700
    line-height-100
    padding-400
    transition-duration-300
    transition-easing-ease
    transition-property-bg-color
    hocus--bg-color-neutral-300
    is-selected--bg-color-blue-300
  `,
};

const PrimaryNav = (props) => {
  return (
    <ul className={styles.root}>
      {navItems.map((item, index) => (
        <li
          className={styles.item}
          key={item}
        >
          <a
            aria-current={props.selectedIndex === index}
            className={classNames([
              styles.link,
              props.selectedIndex === index && states.isSelected,
            ])}
            href={`#${item}`}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PrimaryNav;