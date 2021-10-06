import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { screenBreakpoint, customTheme } from '../../theme'
import { Box, Grid, Typography } from '@mui/material'
import { Code } from '@mui/icons-material'
import { projects } from './projectsData'

const theme = customTheme[screenBreakpoint]

const useStyles = makeStyles((theme) => ({
  section: {
    width: '100%',
    backgroundColor: '#1a202c',
    color: '#cbd5e0',
  },
  projects: {
    width: '100%',
  },
  introduction: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  codeIcon: {
    margin: '250px 0px 0px 0px',
    '& .Code-icon': {
      fontSize: 4000,
    },
  },
  projectsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    width: '100%',
    height: '100%',
    color: '#444',
  },
  singleProjectContainer: {
    display: 'flex',
    width: '100%',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
  },
  singleProjectDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  projectData: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

const styles = {
  project: {
    width: '100%',
    height: theme.projectImage.height,
    objectFit: 'contain',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.2)',
      border: '5px solid blue',
    },
  },
  clickedProject: {
    width: '100%',
    height: theme.projectImage.height,
    transform: 'scale(1.2)',
    border: '5px solid blue',
    objectFit: 'contain',
  },
}

function Projects() {
  const classes = useStyles()
  const [projectData, setProjectData] = useState({
    title: 'Project Details',
    description: 'Click on a project on the right to view more details.',
  })
  const [selectedProject, setSelectedProject] = useState('')

  function handleOnClickProject(event, project) {
    event.preventDefault()
    setProjectData({ title: project.title, description: project.description })
    setSelectedProject(project.title)
  }

  return (
    <section id="projects" className={classes.section}>
      <div className={classes.projects}>
        <div className={classes.introduction}>
          <Code className={classes.codeIcon} sx={{ fontSize: 100 }} />
          <Typography variant="h3" sx={{ ...theme.header1, marginBottom: '1rem', color: 'white', textAlign: 'left' }}>
            Apps I've Built
          </Typography>
          <Typography
            variant="h5"
            sx={{ ...theme.header3, margin: '10px 0px 100px 0px', lineHeight: 1.625, color: '#cbd5e0', textAlign: 'center' }}
          >
            These are the various web applications that I've created so far, mainly using React and Node.js
          </Typography>
        </div>
        <Grid
          container
          xs={12}
          className={classes.projectsContainer}
          style={{
            fontFamily: 'Old Newspaper',
            marginLeft: '4px',
            marginRight: '4px',
          }}
        >
          <Grid item xs={5}>
            <div className={classes.projectData}>
              <Typography
                variant="h3"
                sx={{
                  textAlign: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  justifyItems: 'center',
                  color: 'white',
                  fontSize: theme.header2,
                  lineHeight: 1.625,
                }}
              >
                {projectData.title}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  margin: '30px 10px 0px 10px',
                  textAlign: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  justifyItems: 'center',
                  color: '#cbd5e0',
                  ...theme.header3,
                  lineHeight: 1.625,
                }}
              >
                {projectData.description}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={7}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: theme.gap,
                width: '90%',
                alignItems: 'right',
              }}
            >
              {projects.map((project) => {
                const projectStyles = project.title === selectedProject ? styles.clickedProject : styles.project
                return (
                  <img
                    title={project.title}
                    style={projectStyles}
                    src={project.image}
                    alt="test"
                    onClick={(e) => handleOnClickProject(e, project)}
                  />
                )
              })}
            </Box>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

export default Projects
