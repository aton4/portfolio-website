import React from 'react'
import { makeStyles } from '@mui/styles'
import portfolioPhoto from '../../images/portfolioPhoto.jpg'

const useStyles = makeStyles((theme) => ({
  about: {
    width: '100%',
    backgroundColor: '#1a202c',
    display: 'table',
  },
  summary: {
    display: 'flex',
    flexDirection: 'column',
    margin: '75px 10px 75px 50px',
    justifyContent: 'center',
    float: 'left',
  },
  introduction: {
    display: 'flex',
    fontSize: '1.75rem',
    fontWeight: 500,
    color: 'white',
    marginBottom: '1rem',
  },
  details: {
    display: 'flex',
    marginBottom: '2rem',
    lineHeight: 1.625,
  },
  fragmentLinksContainer: {
    display: 'flex',
  },
  contactFragmentLink: {
    display: 'inline-flex',
    padding: '5px 15px 5px 15px',
    borderRadius: '0.25rem',
    textDecoration: 'none',
    backgroundColor: '#48bb78',
    color: 'white',
    '&:hover': {
      backgroundColor: '#38a169',
    },
  },
  workFragmentLink: {
    display: 'inline-flex',
    margin: '0px 0px 0px 15px',
    padding: '5px 15px 5px 15px',
    backgroundColor: '#2d3748',
    color: '#cbd5e0',
    borderRadius: '0.25rem',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#4a5568',
    },
  },
  photoContainer: {
    display: 'flex',
    margin: '50px 300px 20px 0px',
    float: 'right',
  },
  photo: {
    display: 'flex',
    borderRadius: '5rem',
  },
}))

function About() {
  const classes = useStyles()

  return (
    <section id="about">
      <div className={classes.about}>
        <summary className={classes.summary}>
          <text className={classes.introduction}>
            Hi, I'm Andrew Ton.
            <br /> I'm a UCI senior year student, learning full stack software development.
          </text>
          <text className={classes.details}>
            From a couple interships during my time at UCI, I have acquired skills in the DevOps, Backend and Frontend areas of
            software development.
          </text>
          <links className={classes.fragmentLinksContainer}>
            <a href="#contact" className={classes.contactFragmentLink}>
              Contact Me
            </a>
            <a href="#work" className={classes.workFragmentLink}>
              View My Past Work
            </a>
          </links>
        </summary>
        <div className={classes.photoContainer}>
          <img alt="profilePic" className={classes.photo} src={portfolioPhoto} />
        </div>
      </div>
    </section>
  )
}

export default About
