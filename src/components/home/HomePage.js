import React, {Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React and Redux for ballers homie.</p>
        <Link to="about" className="btn btn-primary">About</Link>
      </div>
    )
  }
}

export default HomePage;
