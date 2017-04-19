import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  render() {
    // regular comments outside the return...
    return (
      <form className="store-selector">
        { /* JSX comments in brackets - needs to be inside the parent element*/ }
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name"
          defaultValue={ getFunName() } />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
