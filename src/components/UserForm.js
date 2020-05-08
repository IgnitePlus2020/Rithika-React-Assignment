import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import AddressDetails from './AddressDetails';
import Confirm from './Confirm';
import Success from './Success';
import Welcome from './Welcome';

export class UserForm extends Component {
    // attributes
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    item1:'',
    item2:'',
    item3:''
  };

//   Next Step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

//   Previous Step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, address, city,item1,item2,item3} = this.state;
    const values = { firstName, lastName, email, address, city,item1,item2,item3};

    switch (step) {
        //Goes to FormUserDetails Component
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        //Goes to AddressDetails Component
      case 2:
        return (
          <AddressDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        //Goes to Welcome Component
        case 3:
            return(
                <Welcome
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            );
            //Goes to Confirm Component
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
        //Goes to Success Component
      case 5:
        return <Success />;
    }
  }
}

export default UserForm;
