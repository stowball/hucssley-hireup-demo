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
    bg-color:neutral-0
    box-shadow:500
    position:relative
    z-index:100
  `,
  container: `
    bg-color:neutral-0
    display:flex
    justify-content:space-between
    @mq-1040--justify-content:flex-start
  `,
  logo: 'color:blue-600',
  logo__icon: `
    icon-size:logo
    margin-right:400
    margin-vertical:400
  `,
  hamburger: `
    align-self:center
    border-radius:1000
    padding:300
    group__is-open--bg-color:neutral-300
    &:hocus--bg-color:neutral-300
    @mq-1040--display:none
  `,
  hamburger__icon: `
    icon-size:200
    svg-fill-color:neutral-700
  `,
  nav: `
    bg-color:neutral-0
    display:none
    pos-left:0
    pos-right:0
    pos-top:100
    position:absolute
    group__is-open--display:block
    group__@mq-1040-is-open--display:flex
    @mq-until-1039:before--dropdown-shadow:500
    @mq-1040--display:flex
    @mq-1040--justify-content:space-between
    @mq-1040--position:static
    @mq-1040--width:100
    @mq-1040:before--display:none
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
      <header className={classNames([
        styles.root,
        this.state.menuIsOpen && states.isOpen,
      ])}>
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