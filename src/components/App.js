import React, {Component} from 'react';
import Header from './common/Header.js';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired
};

export default App;
