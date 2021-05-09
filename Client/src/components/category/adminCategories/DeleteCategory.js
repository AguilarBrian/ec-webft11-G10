import React, { useState, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { Select } from 'final-form-material-ui';
import { Paper, Grid, MenuItem, Button, CssBaseline, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import { putDeleteCategory } from '../../../store/category/category.actions'
import { getCategory } from '../../../store/category/category.actions'
import CheckIcon from '@material-ui/icons/Check';

const validate = values => {
    const errors = {};
    if (!values.categoryId) {
        errors.categoryId = 'Required';
    }
    return errors;
};

function DeleteCategory() {
    const dispatch = useDispatch()
    const statusPost = useSelector(state => state.categoryReducer.postState)
    const categories = useSelector(state => state.categoryReducer.category)

    const [status, setStatusPost] = useState('')

    const checkCategory = (categories) => {
        if (categories && categories[0]) {
            let categoryList = []
            for (let i in categories) {
                if (categoryList.find(e => e === categories[i].name)) {
                    continue
                } else {
                    categoryList.push(categories[i])
                }
            }
            return categoryList
        }
    }

    let categoryList = checkCategory(categories)

    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch]);

    const deleteCategoryPost = (values) => {
        onSubmit(values)
    }

    const onSubmit = async values => {
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        await sleep(300);
        dispatch(putDeleteCategory(values))
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
                                <Grid item xs={12}>
                                    <Field
                                        fullWidth
                                        name="categoryId"
                                        component={Select}
                                        label="Selecciona la categoria"
                                        formControlProps={{ fullWidth: true }}
                                    >
                                        {(!categoryList) ?
                                            (<Typography >No se encontraron categorias</Typography>)
                                            :
                                            (categoryList.map(category => {
                                                return (
                                                    <MenuItem value={category.id}>{category.name}</MenuItem>
                                                )
                                            })
                                            )}
                                    </Field>
                                </Grid>
                                <Grid item style={{ marginTop: 16 }}>
                                    <Button onClick={() => deleteCategoryPost(values.categoryId)} variant="contained" color="primary" type="submit" disabled={submitting}>
                                        Eliminar
                                    </Button>
                                    {(status && status.data) ? (status.data === 'no se puede agregar la categoría porque falta el "name"') ? (
                                        <Typography>no se puede agregar la categoría porque falta completar datos</Typography>
                                    ) : ((status === '') ? (<Typography></Typography>) : (<CheckIcon />)) : (<Typography></Typography>)
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

export default DeleteCategory;