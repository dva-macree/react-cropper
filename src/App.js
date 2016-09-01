import React, { Component,PropTypes } from 'react';

import { connect } from 'react-redux';
import Cover from './containers/Cover';
import Main from './containers/Main';

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