import React, { Component } from 'react';
import './App.css';
import { Field, reduxForm } from 'redux-form'


class App extends Component {
  render() {
    return (
      <div className="App">
          <form onSubmit={()=>{}}>
              <div>
                  <label>First Name</label>
                  <div>
                      <Field
                          name="firstName"
                          component="input"
                          type="text"
                          placeholder="First Name"
                      />
                  </div>
              </div>
            </form>
      </div>
    );
  }
}

export default reduxForm({
    form: 'simple' // a unique identifier for this form
})(App)
