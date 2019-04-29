import React, { PureComponent } from 'react';
import objStr from 'obj-str';
import Svg from '../Svg/';

const userNavItems = [
  {
    icon: 'bust',
    label: 'Profile',
  },
  {
    icon: 'clipboard',
    label: 'Support Plan',
  },
  {
    icon: 'cog',
    label: 'Settings',
  },
  {
    icon: 'warning-sign',
    label: 'Report Incident',
  },
  {
    icon: 'key',
    label: 'Log out',
  },
];

const styles = {
  root: `
    padding-b-300
    padding-h-400
    position-relative
    bp-1040--display-flex
    bp-1040--padding-0
    bp-1040--margin-r-n600
  `,
  button: `
    color-blue-1000
    display-flex
    font-weight-700
    line-height-100
    padding-400
    transition-duration-300
    transition-easing-ease
    transition-property-bg-color
    hocus--bg-color-neutral-300
  `,
  buttonMessages: "align-items-center",
  buttonUser: `
    border-t-color-neutral-400
    border-t-style-solid
    border-t-width-100
    justify-content-space-between
    width-100
  `,
  buttonUserIsActive: `
    is-active
    is-active--bg-color-blue-300
  `,
  button__inner: `
    align-items-center
    display-flex
  `,
  button__caret: `
    icon-size-100
    margin-l-200
  `,
  icon: `
    icon-size-100
    margin-r-300
  `,
  userNav: `
    bg-color-neutral-0
    display-none
    bp-1040--pin-r-0
    bp-1040--pin-t-100
    bp-1040--position-absolute
    bp-1040-pseudo-before--dropdown-shadow-600
  `,
  userNavIsOpen: `
    is-open
    is-open--display-block
  `,
  userNav__item: `
    border-t-color-neutral-400
    border-t-style-solid
    border-t-width-100
  `,
  userNav__link: `
    align-items-center
    display-flex
    color-neutral-700
    padding-h-400
    padding-v-300
    bp-1040--padding-h-500
    bp-1040--padding-v-400
    transition-duration-200
    transition-easing-ease
    transition-property-all
    hocus--bg-color-neutral-200
    hocus--color-neutral-900
  `,
};

class SecondaryNav extends PureComponent {
  state = {
    menuIsOpen: false,
  };

  toggleMenu = (type) => {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  }

  render() {
    return (
      <div className={styles.root}>
        <a
          className={objStr({
            [styles.button]: true,
            [styles.buttonMessages]: true,
          })}
          href="#messages"
        >
          <Svg
            className={styles.icon}
            name="envelope"
          />
          Messages
        </a>
        <button
          className={objStr({
            [styles.button]: true,
            [styles.buttonUser]: true,
            [styles.buttonUserIsActive]: this.state.menuIsOpen,
          })}
          onClick={this.toggleMenu}
        >
          <span className={styles.button__inner}>
            <img
              alt=""
              className={styles.icon}
              src="https://hireuptest.s3.amazonaws.com/storage/main/profile-pics/default-profile_dj6pzn777.png"
            />
            {this.props.user}
          </span>
          <Svg
            className={styles.button__caret}
            name="caret-down"
          />
        </button>

        <ul className={objStr({
          [styles.userNav]: true,
          [styles.userNavIsOpen]: this.state.menuIsOpen,
        })}>
          {userNavItems.map((item) => (
            <li
              className={styles.userNav__item}
              key={item.label}
            >
              <a
                className={styles.userNav__link}
                href={`${item.label}`}
              >
                <Svg
                  className={styles.icon}
                  name={item.icon}
                />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default SecondaryNav;