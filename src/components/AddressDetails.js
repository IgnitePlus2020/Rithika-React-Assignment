//Used material-ui library

import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class AddressDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
                    <h1>Enter Address Details</h1>
                </div>
                </AppBar> 
            {/* Details entered here */}
            <TextField
              placeholder="Enter Your address"
              label="Address"
              onChange={handleChange('address')}
              defaultValue={values.address}
            />
            <br />

            <TextField
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
            />
            <br />
            
            {/* Continue Button */}
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
            
            {/* Back Button */}
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default AddressDetails;
