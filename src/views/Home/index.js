import React from 'react'
import About from './about'
import Projects from './projects'
import Contact from './contact'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#1a202c',
    color: '#cbd5e0',
  },
}))

function Home() {
  const classes = useStyles()

  return (
    <home className={classes.root}>
      <About />
      <Projects />
      <Contact />
    </home>
  )
}

export default Home
