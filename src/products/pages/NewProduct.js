import React, { useCallback, useReducer } from 'react';

import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators';
import { useHttpClient } from '../../customHooks/http-hook';

import ImageUpload from '../../shared/components/FormElements/ImageUpload';

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
      },
      price: {
        value: NaN,
        isValid: false
      },
      quantity: {
        value: NaN,
        isValid: false
      },
      availableDate: {
        value: '',
        isValid: false
      },
      images: {
        value: [],
        isValid: false
      },
      tags: {
        value: [],
        isValid: true
      }
    },
    isValid: false
  });

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE', 
      value: value, 
      isValid: isValid, 
      inputId: id
    });
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', formState.inputs.name.value);
      formData.append('description', formState.inputs.description.value);
      formData.append('price', formState.inputs.price.value);
      formData.append('quantity', formState.inputs.quantity.value);
      formData.append('available_date', formState.inputs.availableDate.value);
      for (let img of formState.inputs.images.value) {
        formData.append('images', img);
      }
      formData.append('tags', formState.inputs.tags.value);

      const responseData = await sendRequest(
        'http://localhost:5000/api/products',
        'POST',
        formData
      )
    } catch (err) {}
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
        <Input 
          id="price"
          element="input" 
          type="number" 
          label="Price" 
          validators={[VALIDATOR_REQUIRE()]} 
          errorText="Please enter a valid Price!"
          onInput={inputHandler}
        />
        <Input 
          id="quantity"
          element="input" 
          type="number" 
          label="Quantity" 
          validators={[VALIDATOR_REQUIRE()]} 
          errorText="Please enter a valid Quantity!"
          onInput={inputHandler}
        />
        <Input 
          id="availableDate"
          element="input" 
          type="text" 
          label="Available Date (YYYY/MM/DD)" 
          validators={[VALIDATOR_REQUIRE()]} 
          errorText="Please enter a valid Date!"
          onInput={inputHandler}
        />
        <ImageUpload 
          id="images" 
          label="Image"  
          onInput={inputHandler}
          center
        />
        <Button type="submit" disabled={!formState.isValid}>
          Create Product
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NewProduct;
