import React, { Component, PropTypes } from 'react';
import Header from './components/Header';
import style from './app.scss';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <Header/>

        <section className={style.content}>
          {this.props.children}
        </section>
      </div>
    );
  }
}
