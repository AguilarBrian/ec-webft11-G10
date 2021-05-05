import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {Typography,Paper,Link,Grid,Button,CssBaseline,RadioGroup,FormLabel,MenuItem,FormGroup,FormControl,FormControlLabel,} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,TimePicker,DatePicker,} from '@material-ui/pickers';
import { useState } from 'react';

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
  if (!values.category) {
    errors.category = 'Required';
  }
  if (!values.price) {
    errors.price = 'Required';
  }
  if (!values.stock) {
    errors.stock = 'Required';
  }
  
  return errors;
};
    
const reset = values => {
    values.productName=''
    values.description=''
    values.category=''
    values.price=''
    values.stock=''
}

function AddProduct() {
    
    const [name, setName] = useState('nombre');

    return (
        <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      
      <Form
        onSubmit={onSubmit}
        reset={reset}
        initialValues={{}}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
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
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="category"
                    component={Select}
                    label="Selecciona la categoria"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="blabla">Rojo</MenuItem>
                    <MenuItem value="blabla">Negro</MenuItem>
                    <MenuItem value="blabla">Azul</MenuItem>
                  </Field>
                </Grid>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid item xs={6}>
                    <Field
                      name="price"
                      type='number'
                      component={TextField}
                      fullWidth
                      margin="normal"
                      label="Precio"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      name="stock"
                      type='number'
                      component={TextField}
                      fullWidth
                      margin="normal"
                      label="Stock"
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={reset(values)}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
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

export default AddProduct;
