import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer';

class Header extends React.Component {
    static propTypes = {
      icon: PropTypes.string,
    }

    static defaultProps = {
      icon: settings.header.headerIcon,
    }

    render() {
      const {icon} = this.props;
      return (
        <header className={styles.component}>
          <Container>
            <div className={styles.wrapper}>
              <Search />
              <Link className={styles.logo}
                to={'/'}>
                <Icon name={icon}/>
              </Link>
              <nav>
                <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                <NavLink exact to='/info' activeClassName='active'>Info</NavLink> 
                <NavLink exact to='/FAQ' activeClassName='active'>FAQ</NavLink> 
              </nav>
            </div>
          </Container>
        </header>
      );
    }
}

export default Header;