import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import Map from '../../components/Map'
import { Box, Button, TextField, Typography } from '@mui/material/'
import validator from 'validator'
import { screenBreakpoint, customTheme } from '../../theme'

const theme = customTheme[screenBreakpoint]
const styles = {
  section: {
    paddingTop: theme.sectionTop,
    paddingBottom: theme.sectionBottom,
    backgroundColor: '#1a202c',
  },
}

function Contact() {
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
    <section id="contact" style={styles.section}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '3fr 2fr',
          gap: theme.gap,
          width: '90%',
          margin: '0 auto 0 auto',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        <Map />
        <Box component="form" sx={{ display: 'grid', justifyItems: 'left' }} onSubmit={handleSubmit} autoComplete="off">
          <Typography variant="h3" sx={{ ...theme.header1, paddingBottom: 0.3, color: 'white', textAlign: 'left' }}>
            Contact Me
          </Typography>
          <Typography variant="h5" sx={{ ...theme.header3, paddingBottom: 3, color: '#cbd5e0', textAlign: 'left' }}>
            Send a message to my email, aton4@uci.edu, below!
          </Typography>
          <Typography variant="h5" sx={{ ...theme.header3, color: '#cbd5e0', textAlign: 'left' }}>
            Name (optional)
          </Typography>
          <TextField
            variant="filled"
            color="secondary"
            inputProps={{ style: { ...theme.textInput, color: 'white' } }}
            FormHelperTextProps={{ style: { ...theme.textInput } }}
            sx={{ marginTop: 1, marginBottom: 5, backgroundColor: '#2d3748', color: 'white', borderRadius: '0.25rem' }}
            onInput={(e) => setName(e.target.value)}
            onKeyPress={(e) => {
              e.key === 'Enter' && e.preventDefault()
            }}
            fullWidth
          />
          <Typography variant="h5" sx={{ ...theme.header3, color: '#cbd5e0', textAlign: 'left' }} onChange={handleEmailChange}>
            Email
          </Typography>
          <TextField
            variant="filled"
            error={emailError !== '' ? true : false}
            helperText={emailError}
            mb={5}
            color="secondary"
            inputProps={{ style: { ...theme.textInput, color: 'white' } }}
            FormHelperTextProps={{ style: { ...theme.textInput } }}
            sx={{ marginTop: 1, marginBottom: 5, backgroundColor: '#2d3748', color: 'white', borderRadius: '0.25rem' }}
            onInput={(e) => setEmail(e.target.value)}
            onKeyPress={(e) => {
              e.key === 'Enter' && e.preventDefault()
            }}
            fullWidth
          />
          <Typography variant="h5" sx={{ ...theme.header3, color: '#cbd5e0', textAlign: 'left' }}>
            Message
          </Typography>
          <TextField
            variant="filled"
            error={messageError !== '' ? true : false}
            helperText={messageError}
            mb={5}
            color="secondary"
            inputProps={{ style: { ...theme.textInput, color: 'white' } }}
            FormHelperTextProps={{ style: { ...theme.textInput } }}
            sx={{ marginTop: 1, marginBottom: 5, backgroundColor: '#2d3748', color: 'white', borderRadius: '0.25rem' }}
            onInput={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => {
              e.key === 'Enter' && e.preventDefault()
            }}
            fullWidth
          />
          <Button
            sx={{ ...theme.header3, backgroundColor: '#48bb78', textTransform: 'none', color: 'primary', justifySelf: 'center' }}
            type="submit"
          >
            Send
          </Button>
        </Box>
      </Box>
    </section>
  )
}

export default Contact
