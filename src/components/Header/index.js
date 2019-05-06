import React, { PureComponent } from 'react';
import classNames from '../../classNames';
import states from '../../states';
import Container from '../Container';
import PrimaryNav from './PrimaryNav';
import SecondaryNav from './SecondaryNav';
import Svg from '../Svg/';

const styles = {
  root: `
    group
    bg-color-neutral-0
    shadow-500
  `,
  container: `
    display-flex
    justify-content-space-between
    position-relative
    bp-1040--justify-content-flex-start
  `,
  logo: 'color-blue-600',
  logo__icon: `
    icon-size-logo
    margin-r-400
    margin-v-400
  `,
  hamburger: `
    align-self-center
    border-radius-1000
    padding-300
    bp-1040--display-none
    group__is-open--bg-color-neutral-300
    hocus--bg-color-neutral-300
  `,
  hamburger__icon: `
    icon-size-200
    svg-fill-color-neutral-700
  `,
  nav: `
    bg-color-neutral-0
    display-none
    pos-l-0
    pos-r-0
    pos-t-100
    position-absolute
    bp-1040--display-flex
    bp-1040--justify-content-space-between
    bp-1040--position-static
    bp-1040--width-100
    bp-1040-pseudo-before--display-none
    group__is-open--display-block
    group__bp-1040-is-open--display-flex
    pseudo-before--dropdown-shadow-500
  `,
};

class Header extends PureComponent {
  state = {
    menuIsOpen: false,
  };

  toggleMenu = () => {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  }

  render() {
    return (
      <header className={classNames(
        styles.root,
        this.state.menuIsOpen && states.isOpen,
      )}>
        <Container className={styles.container}>
          <a
            aria-label="Hireup"
            className={styles.logo}
            href="/"
          >
            <Svg
              className={styles.logo__icon}
              name="hireup"
            />
          </a>

          <button
            aria-label="Open navigation"
            aria-pressed={this.state.menuIsOpen}
            className={styles.hamburger}
            onClick={this.toggleMenu}
          >
            <Svg
              className={styles.hamburger__icon}
              name="hamburger"
            />
          </button>

          <nav className={styles.nav}>
            <PrimaryNav selectedIndex={2} />
            <SecondaryNav user="Jennifer W" />
          </nav>
        </Container>
      </header>
    );
  }
};

export default Header;