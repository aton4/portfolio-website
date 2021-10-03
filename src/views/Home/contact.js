import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import Map from '../../components/Map'
import { Box, Button, TextField, Typography } from '@mui/material/'

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: '200px',
    backgroundColor: '#1a202c',
  },
  contactForm: {
    display: 'grid',
    width: '100%',
    justifyContent: 'left',
    justifyItems: 'left',
  },
  formLabel: {
    justifyContent: 'left',
    justifyItems: 'left',
  },
  formInput: {
    display: 'block',
    width: '100%',
  },
}))

function Contact() {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    console.log(name, email)
    // You should see email and password in console.
    // ..code to submit form to backend here...
  }

  return (
    <section id="contact" className={classes.section}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '65% 35%',
          gap: 5,
          width: '90%',
          margin: '0 auto 0 auto',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        <Map />
        <Box sx={{ display: 'grid', justifyItems: 'left' }}>
          <Typography variant="body" sx={{ color: 'white', textAlign: 'center' }}>
            Name
          </Typography>
          <TextField
            variant="filled"
            sx={{ backgroundColor: '#2d3748', borderRadius: '0.25rem' }}
            onInput={(e) => setName(e.target.value)}
            fullWidth
          />
          <Typography variant="body" sx={{ color: 'white', textAlign: 'center' }}>
            Email
          </Typography>
          <TextField
            variant="filled"
            sx={{ backgroundColor: '#2d3748', borderRadius: '0.25rem' }}
            onInput={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <Button type="submit">Login</Button>
        </Box>
      </Box>
    </section>
  )
}

export default Contact
