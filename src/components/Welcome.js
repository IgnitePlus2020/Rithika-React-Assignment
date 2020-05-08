import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class Welcome extends Component {
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
                    <h1>Welcome</h1>
                    <h2>Enter the products below</h2>
                </div>
                </AppBar> 
                
           {/* Details entered here */}
            <TextField
              label="Product 1"
              onChange={handleChange('item1')}
              defaultValue={values.item1}
            />
            <br />

            <TextField 
              label="Product 2"
              onChange={handleChange('item2')}
              defaultValue={values.item2}
            />
            <br />

            <TextField
              label="Product 3"
              onChange={handleChange('item3')}
              defaultValue={values.item3}
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

export default Welcome;
