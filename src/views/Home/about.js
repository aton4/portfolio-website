import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box, Typography } from '@mui/material/'
import portfolioPhoto from '../../media/portfolioPhoto.png'
import { screenBreakpoint, customTheme } from '../../theme'

const theme = customTheme[screenBreakpoint]

const useStyles = makeStyles((theme) => ({
  summary: {
    marginTop: '3.5rem',
    marginLeft: '2rem',
    justifyContent: 'center',
    float: 'left',
  },
  details: {
    display: 'flex',
    marginBottom: '2rem',
    fontSize: '1.5rem',
    lineHeight: 1.625,
  },
  fragmentLinksContainer: {
    display: 'flex',
    marginTop: '5rem',
    marginLeft: '2rem',
  },
  photoContainer: {
    float: 'right',
    display: 'inline-block',
    borderRadius: 5,
  },
}))

const styles = {
  photo: {
    width: '100%',
    height: theme.projectImage.height,
    objectFit: 'contain',
    borderRadius: '5rem',
  },
}

function About() {
  const classes = useStyles()

  return (
    <section id="about">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '3fr 2fr',
          gap: 5,
          textAlign: 'center',
          alignItems: 'center',
          backgroundColor: '#1a202c',
        }}
      >
        <div className={classes.summary}>
          <Typography
            variant="h3"
            sx={{ display: 'flex', ...theme.header1, fontWeight: 500, color: 'white', marginBottom: '1rem' }}
          >
            Hi, I'm Andrew Ton.
            <br /> I'm a UCI senior year student, learning full stack software development.
          </Typography>
          <Typography variant="h5" sx={{ display: 'flex', marginBottom: '2rem', ...theme.header3, lineHeight: 1.625 }}>
            I've worked on the DevOps, Backend, and Frontend sides of web development during the internships I've taken throughout
            my time at UCI. On the Backend, I'm familar with creating GraphQL and RESTful APIs for the frontend to communicate
            with databases such as MongoDB, PostgreSQL, etc. On the Frontend, I'm skilled in using React with
            Javascript/Typescript to create webpages, looking into learning .NET framework on the side. As for DevOps, I'm mainly
            experienced with using Docker to build container images, saving those images in AWS ECR, then deploying through
            Kubernetes. Currently, I'm learning to adapt to Amazon Elastic Kubernetes Service to maintain clusters and Kubernetes
            recently removing Docker as a container runtime.
          </Typography>
          <div className={classes.fragmentLinksContainer}>
            <a href="#contact" className={classes.contactFragmentLink}>
              <Typography
                variant="h5"
                sx={{
                  display: 'inline-flex',
                  padding: '5px 15px 5px 15px',
                  borderRadius: '0.25rem',
                  textDecoration: 'none',
                  ...theme.header3,
                  backgroundColor: '#48bb78',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#38a169',
                  },
                }}
              >
                Contact Me
              </Typography>
            </a>
            <a href="#projects" className={classes.workFragmentLink}>
              <Typography
                variant="h5"
                sx={{
                  display: 'inline-flex',
                  marginLeft: '2rem',
                  padding: '5px 15px 5px 15px',
                  ...theme.header3,
                  backgroundColor: '#2d3748',
                  color: '#cbd5e0',
                  borderRadius: '0.25rem',
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: '#4a5568',
                  },
                }}
              >
                View Past Work
              </Typography>
            </a>
          </div>
        </div>
        <div className={classes.photoContainer}>
          <img alt="A photograph of myself" style={styles.photo} src={portfolioPhoto} />
        </div>
      </Box>
    </section>
  )
}

export default About
