import React, { Fragment, useState } from 'react'
import CardItem from './CardItem'
import { Box, Button, Card, Divider, Grid, Modal, TextField } from '@mui/material'
import AddressCard from './AddressCard'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup"

const cardItem = [1,1,1,1] 
const Address = [1,1,1,1]
export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const initialValues = {
  streetAddress: '',
  state: '',
  pincode: '',
  city: '',
}

const validationSchema = Yup.object().shape({
  StreetAddress: Yup.string().required("Street Address is required"),
  state:Yup.string().required("State is required"),
  pincode: Yup.number().required("Pincode is required"),
  city: Yup.string().required("City is required"),
})
const Cart = () => {

  const [openAddressModel, setOpenAddressModel] = useState()
  const createOrderUsingSelectedAddress = (item)=>{
    console.log('create Oreder')
  }

  const handleOpenAddressModel = () =>{
    setOpenAddressModel(true)
  }

  const closeAddressModel = () =>{
    setOpenAddressModel(false)
  }
  // const handleSubmit = (values) => {

  //   console.log('Handle Submit -',values)
  // }

  const handleSubmit = (values, ) => {
    console.log('Form values:', values);
    // You can perform any actions you need with the form values here
    // Don't forget to reset the form after submission if needed
    // resetForm();{ resetForm }
  };
  
  return (
    <Fragment>
      <main className='lg:flex justify-between'>
        <section className='lg:w-[30%] min-h-screen pt-10'>

          <div className='space-y-6'>
          {cardItem.map((item)=> <CardItem/>)}
          </div>

          <Divider/>

          <div className='billDetails px-5 text-sm '>
            <p className='font-extralight py-5 '>Bill Details</p>

            <div className='spacce-y-3 '>
              <div className='flex justify-between text-gray-400'>
                <p>Item Total</p>
                <p>₹ 321</p>
              </div>

              <div className='flex justify-between text-gray-400'>
                <p>Delivery Fee</p>
                <p>₹ 321</p>
              </div>

              <div className='flex justify-between text-gray-400'>
                <p>Plateform Fee</p>
                <p>₹ 321</p>
              </div>

              <div className='flex justify-between text-gray-400'>
                <p>Item Total</p>
                <p>₹ 9</p>
              </div>

              <div className='flex justify-between text-gray-400'>
                <p>GST and Restarant Charges</p>
                <p>₹ 33</p>
              </div>
              <Divider/>

              <div className='flex justify-between text-gray-400'>
                <p>Total Pay</p>
                <p>₹ 6666</p>
              </div>
            </div>
          </div>
        </section>

        <Divider orientation='vertical' flexItem/>
        <section className='lg:w-[70%] px-5'>
          <h1 className='text-2xl font-semibold text-center py-10'>Choose Delivery Address</h1>

          <div className='flex flex-wrap justify-between'>

            {Address.map((item)=> <AddressCard item={item} showCard={true} handleSelectAddress={createOrderUsingSelectedAddress}/>)}

            <Card className='flex space-x-5 lg:w-64 m-5 p-5 rounded-md'>
              <AddLocationAltIcon/>
              <div className='text-gray-500 '>
                <p>Add New Location</p>
                <Button variant='contained' onClick={handleOpenAddressModel} fullWidth sx={{padding: '.7rem'}} >Add </Button>
              </div>
            </Card>

          </div>
        </section>
      </main>

      <Modal open={openAddressModel} onClose={closeAddressModel}>
        <Box sx={style}>
          <Formik
          initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit} 
          >
            <Form>
              <Grid constainer spacing={2}>
                <Grid item xs={12}>
                  <Field 
                  label="Street Address"
                  fullWidth
                  variant="outlined"
                  error={!ErrorMessage("streetAddress")}
                  name="streetAddress" as={TextField} helperText={<ErrorMessage name='streetAddress'>
                  {(msg)=><span  className='text-red-600'>{msg}</span>}
                </ErrorMessage>}/>
                  
                </Grid>
                <div className='flex space-x-3 mt-2'>
                <Grid item xs={6}>
                  <Field 
                  label="State"
                  // fullWidth
                  variant="outlined"
                  error={!ErrorMessage("state")}
                  name="state" as={TextField} helperText={<ErrorMessage name='state'>
                    {(msg)=><span className='text-red-600'>{msg}</span>}
                  </ErrorMessage>}/>
                </Grid>
                <Grid item xs={6}>
                  <Field 
                  label="Pincode"
                  // fullWidth
                  variant="outlined"
                  error={!ErrorMessage("pincode")}
                  name="pincode" as={TextField} helperText={<ErrorMessage name='pincode'>
                    {(msg)=><span className='text-red-600'>{msg}</span>}
                  </ErrorMessage>}/>
                </Grid>
                </div>  
                <div className='mt-2'>    
                <Grid item xs={12} >
                  <Field 
                  label="City"
                  fullWidth
                  variant="outlined"
                  error={!ErrorMessage("city")}
                  name="city" as={TextField} helperText={<ErrorMessage name='city'>
                    {(msg)=><span className='text-red-600'>{msg}</span>}
                  </ErrorMessage>}/>
                </Grid>
                </div>
                <Grid className='mt-3' sx={12}>
                  <Button type="Submit"
                  fullWidth
                  variant='contained' >
                    Deliver Here
                  </Button> 
                </Grid>
              </Grid>

            </Form>
          </Formik>
          {/* <Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
>
  {({ isSubmitting }) => (
    <Form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            label="Street Address"
            fullWidth
            variant="outlined"
            name="streetAddress"
            as={TextField}
            helperText={<ErrorMessage name='streetAddress' />}
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            label="State"
            fullWidth
            variant="outlined"
            name="state"
            as={TextField}
            helperText={<ErrorMessage name='state' />}
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            label="Pincode"
            fullWidth
            variant="outlined"
            name="pincode"
            as={TextField}
            helperText={<ErrorMessage name='pincode' />}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            label="City"
            fullWidth
            variant="outlined"
            name="city"
            as={TextField}
            helperText={<ErrorMessage name='city' />}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            Deliver Here
          </Button>
        </Grid>
      </Grid>
    </Form>
  )}
          </Formik> */}

        </Box>
      </Modal>
    </Fragment>

    
  )
}

export default Cart
