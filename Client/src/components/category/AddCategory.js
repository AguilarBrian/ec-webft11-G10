import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextField} from 'final-form-material-ui';
import {Paper,Grid,Button,CssBaseline} from '@material-ui/core';

const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const validate = values => {
  const errors = {};
  if (!values.productName) {
    errors.productName = 'Required';
  }
  if (!values.description) {
    errors.description = 'Required';
  }  
  return errors;
};

function AddCategory() {
    
    return (
        <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      
      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        validate={validate}
        render={({ handleSubmit, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="productName"
                    component={TextField}
                    type="text"
                    label="Nombre del Producto"
                  />                
                </Grid>
                
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="description"
                    component={TextField}
                    multiline
                    label="Descripcion"
                  />
                </Grid>            
        
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
}

export default AddCategory;
