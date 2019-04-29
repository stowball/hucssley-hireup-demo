import React from 'react';
import objStr from 'obj-str';

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
    bp-1040--flex-direction-row
    bp-1040--padding-v-0 
  `,
  item: "display-flex",
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
  `,
  linkIsSelected: `
    is-selected
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
            className={objStr({
              [styles.link]: true,
              [styles.linkIsSelected]: props.selectedIndex === index,
            })}
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