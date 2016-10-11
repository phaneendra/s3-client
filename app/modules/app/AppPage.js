import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from './index';

import Drawer from 'react-toolbox/lib/drawer';
import Header from './components/Header';

import style from './app.scss';


function mapStateToProps (state) {
  return {
    drawer: state.drawer
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(AppActions, dispatch);
}

class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  handleToggle = () => {
    this.setState({active: !this.state.active});
  };

  render() {
    const { drawer } = this.props;
    return (
      <div>
        <Header/>
        <section className={style.content}>
          <Drawer active={drawer.toggle} onOverlayClick={this.handleToggle}>
            <h5>This is your Drawer.</h5>
            <p>You can embed any content you want, for example a Menu.</p>
          </Drawer>
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);