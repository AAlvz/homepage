import React, { PropTypes } from "react";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      this.props.children
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;