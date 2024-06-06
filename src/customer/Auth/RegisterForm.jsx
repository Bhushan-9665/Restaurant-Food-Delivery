import { Button, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const initialvalues = {
  fullname: '',
  email: '',
  password: '',
  role: '',
}

export const RegisterForm = () => {
  const navigate = useNavigate()
  const handlesubmit = (values)=>{
      console.log('form submitted',values)
  }
  return (
    <div>
      <Typography variant='h5' className='text-center'>
        Register
      </Typography>

      <Formik onSubmit={handlesubmit} initialValues={initialvalues}>
        <Form>

        <Field 
                  label="Full Name"
                  fullWidth
                  variant="outlined"
                  name="fullname" 
                  as={TextField} 
                  margin="normal"
                  />

        <Field 
                  label="Email"
                  fullWidth
                  variant="outlined"
                  name="email" 
                  as={TextField} 
                  margin="normal"
                  />
        <Field 
                  label="Password"
                  fullWidth
                  variant="outlined"
                  name="password" 
                  type="password"
                  as={TextField} 
                  margin="normal"
                  />

                  <Field
                    label="Role"
                    fullWidth 
                    variant="outlined"
                    name="role"
                    as= {Select}
                    margin="normal"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"

                  >
                    <MenuItem value={"Role_Customer"}>Customer</MenuItem>
                    <MenuItem value={"Role_Restaurant_Owner"}>Restaurant Owner</MenuItem>
                  </Field>


                  <Button sx={{mt:2,padding:"1rem"}} fullWidth type='submit' variant='contained'>Register

                  </Button>
        </Form>
      </Formik>

      <Typography variant='body2' align='center' sx={{mt:3}}>
        I have an account?
      <Button size='small' onClick={() => navigate('/account/login')}>Login</Button>
      </Typography>
    </div>
  )
}

// 4.51 video reff

export default RegisterForm