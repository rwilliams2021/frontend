import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const initialValues = {
    fullname: "",
    email: "",
    password: "",
    role: ""
}
const RegisterForm = () => {
    const navigate = useNavigate();
    const handleSubmit = (values) => {
        console.log("form values", values);
    }
    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Register
            </Typography>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form>
                    <Field
                        as={TextField}
                        name='fullname'
                        label='fullname'
                        fullWidth
                        variant='outlined'
                        margin='normal'
                    />
                    <Field
                        as={TextField}
                        name='email'
                        label='Email'
                        fullWidth
                        variant='outlined'
                        margin='normal'
                    />
                    <Field
                        as={TextField}
                        name='password'
                        label='Password'
                        type='password'
                        fullWidth
                        variant='outlined'
                        margin='normal'
                    />
                    <FormControl fullWidth margin='normal' >
                        <InputLabel id="role-simple-select-label">Role</InputLabel>
                        <Field
                            as={Select}
                            labelId="role-simple-select-label"
                            id="role-simple-select"
                            name='role'
                        >
                            <MenuItem value={"CUSTOMER"}>Customer</MenuItem>
                            <MenuItem value={"RESTURANT_OWNER"}>Restuarant Owner</MenuItem>
                        </Field>
                    </FormControl>
                    <Button sx={{ mt: 2, padding: '1rem' }} fullWidth type='submit' variant='contained' >Register</Button>
                </Form>
            </Formik>
            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
                Already have an account?
                <Button size='small' onClick={() => navigate('/account/login')}>
                    Login
                </Button>
            </Typography>
        </div>
    )
}

export default RegisterForm