import React, { Component,PropTypes } from 'react';

import { connect } from 'react-redux';
import Cover from './components/Cover';
import Main from './components/Main';

export default class App extends Component {

      render() {
        const { dispatch } = this.props;
        return (
          <div className="mainContainer">
            <Cover />
            <Main />
        </div>
        );
      }
}

// //Map Rudux state to component props
// const mapStateToProps = state => ({ ...state.cropper});


// //Map Redux actions to component props

// export default connect(mapStateToProps)(App);