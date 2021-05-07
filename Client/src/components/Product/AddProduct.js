import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Select } from 'final-form-material-ui';
import UploadImage from './UploadImage';
import { Paper, Grid, Button, CssBaseline, MenuItem } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useDispatch, useSelector } from 'react-redux'
import { postProducts } from '../../store/product/product.actions';

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

function AddProduct() {
  const dispatch = useDispatch()
  const productImg = useSelector(state => state.productsReducers.productImg)

  const onSubmit = async values => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(300);
    let productData={...values,productImg}
    window.alert(JSON.stringify(productData, 0, 2));
    dispatch(postProducts(JSON.stringify(productData, 0, 2)))
    
  };
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      <Paper style={{ padding: 16 }}>
        <UploadImage />
      </Paper>
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
                <Grid item xs={6}>

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
                    <MenuItem value="postre">postre</MenuItem>
                    <MenuItem value="pizza">Pizza</MenuItem>
                    <MenuItem value="hamburguesa">Hamburguesa</MenuItem>
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

                <Grid item
                  xs={12}
                  style={{ marginTop: 16 }}>
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
