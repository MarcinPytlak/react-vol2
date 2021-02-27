import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Columns from '../Column/Column'

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node,
        image: PropTypes.string,
        children: PropTypes.node,
    }
    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
    }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title}
            imageSource={this.props.image} />
        <div className={styles.description}>
            {this.props.children}
        </div>
        <div className={styles.columns}>
            <Columns title='Halo' />
            <Columns title='Haloss' />
            <Columns title='Haloasd' />

        </div>
      </section>
    )
  }
}

export default List;