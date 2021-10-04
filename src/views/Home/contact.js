import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import Map from '../../components/Map'
import { Box, Button, TextField, Typography } from '@mui/material/'
import validator from 'validator'

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
  formText: {
    color: 'white',
  },
  forma: {
    color: 'white',
  },
}))

function Contact() {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [message, setMessage] = useState('')
  const [messageError, setMessageError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    let validEmail = true
    let validMessage = true

    if (email.trim() === '') {
      validEmail = false
      setEmailError('Missing email field.')
    } else if (!validator.isEmail(email)) {
      validEmail = false
      setEmailError('Invalid email format.')
    }
    if (message.trim() === '') {
      validMessage = false
      setMessageError('Empty message, please write a message.')
    }

    if (validEmail) setEmailError('')
    if (validMessage) setMessageError('')
  }

  function handleEmailChange(event) {
    event.preventDefault()
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
        <Box component="form" sx={{ display: 'grid', justifyItems: 'left' }} onSubmit={handleSubmit} autoComplete="off">
          <Typography variant="h3" sx={{ paddingBottom: 0.3, color: 'white', textAlign: 'center' }}>
            Contact Me
          </Typography>
          <Typography variant="h5" sx={{ paddingBottom: 3, color: '#cbd5e0', textAlign: 'center' }}>
            Send a message to my email, aton4@uci.edu, below!
          </Typography>
          <Typography variant="h5" sx={{ color: '#cbd5e0', textAlign: 'center' }}>
            Name (optional)
          </Typography>
          <TextField
            variant="filled"
            color="secondary"
            inputProps={{ style: { fontSize: 20, color: 'white' } }}
            sx={{ marginTop: 1, marginBottom: 5, backgroundColor: '#2d3748', color: 'white', borderRadius: '0.25rem' }}
            onInput={(e) => setName(e.target.value)}
            onKeyPress={(e) => {
              e.key === 'Enter' && e.preventDefault()
            }}
            fullWidth
          />
          <Typography variant="h5" sx={{ color: '#cbd5e0', textAlign: 'center' }} onChange={handleEmailChange}>
            Email
          </Typography>
          <TextField
            variant="filled"
            error={emailError !== '' ? true : false}
            helperText={emailError}
            mb={5}
            color="secondary"
            inputProps={{ style: { fontSize: 20, color: 'white' } }}
            sx={{ marginTop: 1, marginBottom: 5, backgroundColor: '#2d3748', color: 'white', borderRadius: '0.25rem' }}
            onInput={(e) => setEmail(e.target.value)}
            onKeyPress={(e) => {
              e.key === 'Enter' && e.preventDefault()
            }}
            fullWidth
          />
          <Typography variant="h5" sx={{ color: '#cbd5e0', textAlign: 'center' }}>
            Message
          </Typography>
          <TextField
            variant="filled"
            error={messageError !== '' ? true : false}
            helperText={messageError}
            mb={5}
            color="secondary"
            inputProps={{ style: { fontSize: 20, color: 'white' } }}
            sx={{ marginTop: 1, marginBottom: 5, backgroundColor: '#2d3748', color: 'white', borderRadius: '0.25rem' }}
            onInput={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => {
              e.key === 'Enter' && e.preventDefault()
            }}
            fullWidth
          />
          <Button sx={{ fontSize: 20, backgroundColor: '#48bb78', color: 'primary', justifySelf: 'center' }} type="submit">
            Send
          </Button>
        </Box>
      </Box>
    </section>
  )
}

export default Contact
