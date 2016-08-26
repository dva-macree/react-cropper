import React, { Component,PropTypes } from 'react';

import { connect } from 'react-redux';
import Cover from './components/Cover';
import Main from './components/Main';

class App extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }
      render() {
        const { dispatch } = this.props;
        return (
          <div>
            <Cover dispatch={dispatch} />
            <Main dispatch={dispatch} />
        </div>
        );
      }
}

const mapStateToProps = state => ({ ...state.cropper});

export default connect(mapStateToProps)(App);