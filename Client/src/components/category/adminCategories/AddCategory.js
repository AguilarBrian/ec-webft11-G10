import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import { Paper, Grid, Button, CssBaseline, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import {postAddCategory} from '../../../store/category/category.actions'
import CheckIcon from '@material-ui/icons/Check';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.description) {
    errors.description = 'Required';
  }
  return errors;
};

function AddCategory() {
  const dispatch = useDispatch()
  const statusPost = useSelector(state => state.categoryReducer.postState)
  
  const [status, setStatusPost]=useState('')

  const addCategoryPost = (values) => {
    onSubmit(values)  
  }

  const onSubmit = async values => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(300);
    dispatch(postAddCategory(values))
    setStatusPost(statusPost)
    console.log(status)
  };

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
                    name="name"
                    component={TextField}
                    type="text"
                    label="Nombre de la categoria"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="description"
                    component={TextField}
                    multiline
                    label="Descripción"
                  />
                </Grid>

                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    onClick={()=>addCategoryPost(values)}
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Agregar
                  </Button>
                  {
                    (status && status.data)?(status.data==='no se puede agregar la categoría porque falta el "name"')?(
                      <Typography>no se puede agregar la categoría porque falta completar datos</Typography>
                    ):((status==='')?(<Typography></Typography>):(<CheckIcon />)):(<Typography></Typography>)
                  }
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
