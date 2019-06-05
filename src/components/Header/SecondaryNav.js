import React, { PureComponent } from 'react';
import classNames from '../../classNames';
import states from '../../states';
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
    padding-bottom:300
    padding-horizontal:400
    position:relative
    @mq-1040--display:flex
    @mq-1040--padding:0
    @mq-1040--margin-right:-600
  `,
  button: `
    color:blue-1000
    display:flex
    font-weight:700
    line-height:100
    padding:400
    transition-duration:300
    transition-easing:ease
    transition-property:background-color
    &:hocus--background-color:neutral-300
  `,
  buttonMessages: `
    align-items:center
    flex-shrink:0 // ie11
  `,
  buttonUser: `
    border-top-color:neutral-400
    border-top-style:solid
    border-top-width:100
    justify-content:space-between
    width:100
    is-active--background-color:blue-300
  `,
  button__inner: `
    align-items:center
    display:flex
  `,
  button__caret: `
    align-self:center // ie11
    icon-size:100
    margin-left:200
  `,
  icon: `
    border-radius:1000
    icon-size:100
    margin-right:300
  `,
  userNav: `
    background-color:neutral-0
    display:none
    is-open--display:block
    @mq-1040--border-top-width:0
    @mq-1040--pos-right:0
    @mq-1040--pos-top:100
    @mq-1040--position:absolute
    @mq-1040:before--dropdown-shadow:600
  `,
  userNav__item: `
    border-top-color:neutral-400
    border-top-style:solid
    border-top-width:100
  `,
  userNav__link: `
    align-items:center
    display:flex
    color:neutral-700
    padding-horizontal:400
    padding-vertical:300
    transition-duration:200
    transition-easing:ease
    transition-property:all
    @mq-1040--padding-horizontal:500
    @mq-1040--padding-vertical:400
    &:hocus--background-color:neutral-200
    &:hocus--color:neutral-900
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
          className={classNames([styles.button, styles.buttonMessages])}
          href="#messages"
        >
          <Svg
            className={styles.icon}
            name="envelope"
          />
          Messages
        </a>
        <button
          aria-pressed={this.state.menuIsOpen}
          className={classNames([
            styles.button,
            styles.buttonUser,
            this.state.menuIsOpen && states.isActive,
          ])}
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

        <ul className={classNames([
          styles.userNav,
          this.state.menuIsOpen && states.isOpen,
        ])}>
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