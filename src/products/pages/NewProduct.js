import React, { useCallback, useReducer } from 'react';

import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators';
import './NewProduct.css';

const formReducer = (currState, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in currState.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && currState.inputs[inputId].isValid;
        }
      }
      return {
        ...currState,
        inputs: {
          ...currState.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };
    default:
      return currState;
  }
};

const NewProduct = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      name: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    isValid: false
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE', 
      value: value, 
      isValid: isValid, 
      inputId: id
    });
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  }

  return (
    <React.Fragment>
      <form className='product-form' onSubmit={submitHandler}>
        <Input 
          id="name"
          element="input" 
          type="text" 
          label="Name" 
          validators={[VALIDATOR_REQUIRE()]} 
          errorText="Please enter a valid Name!"
          onInput={inputHandler}
        />
        <Input 
          id="description"
          element="textarea" 
          label="Description" 
          validators={[VALIDATOR_REQUIRE()]} 
          errorText="Please enter a valid Description!"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Create Product
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NewProduct;
