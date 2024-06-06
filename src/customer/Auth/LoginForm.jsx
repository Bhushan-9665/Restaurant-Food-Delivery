import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const initialvalues = {
  email: '',
  password: '',
}

const LoginForm=() => {
  const navigate = useNavigate()
  const handlesubmit = ()=>{

  }
  return (
    <div>
      <Typography variant='h5' className='text-center'>
        Login
      </Typography>

      <Formik onSubmit={handlesubmit} initialValues={initialvalues}>
        <Form>
        <Field 
                  label="email"
                  fullWidth
                  variant="outlined"
                  name="email" 
                  as={TextField} 
                  margin="normal"
                  />
        <Field 
                  label="password"
                  fullWidth
                  variant="outlined"
                  name="password" 
                  as={TextField} 
                  margin="normal"
                  />
                  <Button sx={{mt:2,padding:"1rem"}} fullWidth type='submit' variant='contained'>Login

                  </Button>
        </Form>
      </Formik>

      <Typography variant='body2' align='center' sx={{mt:3}}>
        Don't have an account?
      <Button size='small' onClick={() => navigate('/account/register')}>Register</Button>
      </Typography>
    </div>
  )
}
export default LoginForm