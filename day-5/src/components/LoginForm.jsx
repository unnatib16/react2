import React from "react";
import { useFormik } from 'formik';
import { TextField, Button, Container, CssBaseline} from '@mui/material';

function LoginForm(){
    const formik =useFormik({
        initialValues: {
            email: '',
            age: '',
        },
        validate: values=> {
            const errors = {};
            if(!values.email){
                errors.email='Required';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.age) {
        errors.age = 'Required';
      } else if (isNaN(Number(values.age))) {
        errors.age = 'Must be a number';
      }

      return errors;
    },
    onSubmit: async values => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          console.log('Login successful');
        } else {
          console.error('Login failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          {...formik.getFieldProps('email')}
          margin="normal"
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          label="Age"
          variant="outlined"
          {...formik.getFieldProps('age')}
          margin="normal"
          error={formik.touched.age && !!formik.errors.age}
          helperText={formik.touched.age && formik.errors.age}
        />
        <Button type="submit" variant="contained" color="primary">
          Log In
        </Button>
      </form>
    </Container>
  );
}

export default LoginForm;