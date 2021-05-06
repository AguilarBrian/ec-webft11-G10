import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import UploadImage from '../UploadImage';
import { Paper, Grid, Button, CssBaseline, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

const onSubmit = async values => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
};

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    }
    if (!values.lastName) {
        errors.lastName = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required';
    }
    return errors;
};

function LogIn() {

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
                            <Grid container alignItems="flex-start" spacing={6}>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        required
                                        name="firstName"
                                        component={TextField}
                                        type="text"
                                        label="Nombre"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        required
                                        name="lastName"
                                        component={TextField}
                                        type="text"
                                        label="Apellido"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="email"
                                        fullWidth
                                        required
                                        component={TextField}
                                        type="email"
                                        label="Email"
                                    />
                                </Grid>
                                <Grid item
                                    xs={12}
                                    style={{ marginTop: 16 }}>
                                    <Button
                                        to="/Home"
                                        component={Link}
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={submitting}
                                    >
                                        LogIn
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

export default LogIn;
