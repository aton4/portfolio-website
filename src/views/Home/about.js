import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box, Typography } from '@mui/material/'
import portfolioPhoto from '../../images/portfolioPhoto.jpg'

const useStyles = makeStyles((theme) => ({
  summary: {
    margin: '100px 0px 0px 200px',
    justifyContent: 'center',
    float: 'left',
  },
  introduction: {
    display: 'flex',
    fontSize: '2.5rem',
    fontWeight: 500,
    color: 'white',
    marginBottom: '1rem',
  },
  details: {
    display: 'flex',
    marginBottom: '2rem',
    fontSize: '1.5rem',
    lineHeight: 1.625,
  },
  fragmentLinksContainer: {
    display: 'flex',
    margin: '50px 0px 0px 50px',
  },
  contactFragmentLink: {
    display: 'inline-flex',
    padding: '5px 15px 5px 15px',
    borderRadius: '0.25rem',
    textDecoration: 'none',
    fontSize: '1.5rem',
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
    fontSize: '1.5rem',
    backgroundColor: '#2d3748',
    color: '#cbd5e0',
    borderRadius: '0.25rem',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#4a5568',
    },
  },
  photoContainer: {
    float: 'right',
  },
  photo: {
    objectFit: 'cover',
    margin: '100px 300px 0px 0px',
    borderRadius: '5rem',
  },
}))

function About() {
  const classes = useStyles()

  return (
    <section id="about">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 5,
          textAlign: 'center',
          alignItems: 'center',
          backgroundColor: '#1a202c',
        }}
      >
        <div className={classes.summary}>
          <div className={classes.introduction}>
            Hi, I'm Andrew Ton.
            <br /> I'm a UCI senior year student, learning full stack software development.
          </div>
          <div className={classes.details}>
            I've worked on the DevOps, Backend, and Frontend sides of web development during the internships I've taken throughout
            my time at UCI. On the Backend, I'm familar with creating GraphQL and RESTful APIs for the frontend to communicate
            with databases such as MongoDB, PostgreSQL, etc. On the Frontend, I'm skilled in using React with
            Javascript/Typescript to create webpages. As for DevOps, I'm mainly experienced with using Docker to build container
            images, saving those images in AWS ECR, then deploying through Kubernetes. Currently, I'm learning to adapt to Amazon
            Elastic Kubernetes Service to maintain clusters and Kubernetes recently removing Docker as a container runtime.
          </div>
          <div className={classes.fragmentLinksContainer}>
            <a href="#contact" className={classes.contactFragmentLink}>
              Contact Me
            </a>
            <a href="#projects" className={classes.workFragmentLink}>
              View My Past Work
            </a>
          </div>
        </div>
        <div className={classes.photoContainer}>
          <img alt="profilePic" className={classes.photo} src={portfolioPhoto} />
        </div>
      </Box>
    </section>
  )
}

export default About
