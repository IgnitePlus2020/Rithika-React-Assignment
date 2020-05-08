//Used material-ui library

import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';  
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider >     
        <React.Fragment>
          <Dialog 
           open="true"
            fullWidth="true"
          >
            <AppBar align="center">
                <div>
                    <h1>Enter User Details</h1>
                </div>
                </AppBar> 

                {/* Details entered here */}
            <TextField
              placeholder="Enter Your First Name"
              label ="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
            />
            <br />

            <TextField 
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
            />
            <br />

            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
            />
            <br />

            {/* Continue button */}
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
