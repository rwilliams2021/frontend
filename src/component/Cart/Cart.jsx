import React from 'react';
import CartItem from './CartItem';
import { Box, Button, Card, Divider, Grid, Modal, TextField } from '@mui/material';
import AddressCard from './AddressCard';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    outline: 'none'
};

const initialValues = {
    streetAddress: '',
    city: '',
    state: '',
    pincode: ''
};

const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required('Street address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    pincode: Yup.string().required('Pincode is required')
});

const items = [1, 1, 1, 1];

const Cart = () => {
    const createOrderUsingSelectedAddress = () => {
        // Function logic here
    };

    const handleOpenAddressModal = () => {
        setOpen(true);
    };

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const handleSubmit = (values) => {
        console.log("form values", values);
    };

    return (
        <div className="container p-4">
            <main className="lg:flex justify-between">
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                    {items.map((item, index) => (
                        <CartItem key={index} />
                    ))}
                    <Divider />
                    <div className='billDetails px-5 text-sm'>
                        <p className='font-extralight py-5'>Bill Details</p>
                        <div className='space-y-3'>
                            <div className='flex justify-between text-gray-400'>
                                <p>Item Total</p>
                                <p>€50.00</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>Delivery Fee</p>
                                <p>€5.00</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>GST and Restaurant Charges</p>
                                <p>€33.00</p>
                            </div>
                        </div>
                        <Divider className='my-3' />
                        <div className='flex justify-between text-gray-400 font-bold'>
                            <p>Total</p>
                            <p>€88.00</p>
                        </div>
                    </div>
                </section>
                <Divider orientation='vertical' flexItem />
                <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                    <div>
                        <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery Address</h1>
                        <div className='flex gap-5 flex-wrap justify-center'>
                            {[1, 1, 1, 1, 1].map((item, index) => (
                                <AddressCard
                                    key={index}
                                    handleSelectAddress={createOrderUsingSelectedAddress}
                                    item={item}
                                    showButton={true}
                                />
                            ))}
                            <Card className="flex gap-5 w-64 p-5 items-center">
                                <AddLocationIcon />
                                <div className='space-y-3 text-gray-500'>
                                    <h1 className='font-semibold text-lg'>Add New Address</h1>
                                </div>
                                <Button variant='contained' fullWidth onClick={handleOpenAddressModal}>
                                    Add
                                </Button>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}>
                        {() => (
                            <Form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="streetAddress"
                                            label="Street Address"
                                            fullWidth
                                            variant='outlined'
                                            error={!!ErrorMessage('streetAddress')}
                                            helperText={
                                                <ErrorMessage name="streetAddress">
                                                    {msg => <span>{msg}</span>}
                                                </ErrorMessage>
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="city"
                                            label="City"
                                            fullWidth
                                            variant='outlined'
                                            error={!!ErrorMessage('city')}
                                            helperText={
                                                <ErrorMessage name="city">
                                                    {msg => <span>{msg}</span>}
                                                </ErrorMessage>
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="state"
                                            label="State"
                                            fullWidth
                                            variant='outlined'
                                            error={!!ErrorMessage('state')}
                                            helperText={
                                                <ErrorMessage name="state">
                                                    {msg => <span>{msg}</span>}
                                                </ErrorMessage>
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="pincode"
                                            label="Pincode"
                                            fullWidth
                                            variant='outlined'
                                            error={!!ErrorMessage('pincode')}
                                            helperText={
                                                <ErrorMessage name="pincode">
                                                    {msg => <span>{msg}</span>}
                                                </ErrorMessage>
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button fullWidth variant='contained' type='submit' color='primary'>
                                            Deliver Here
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Modal>
        </div>
    );
}

export default Cart;
