import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { Code } from '@mui/icons-material'
import { projects } from './projectsData'

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
  introductionTitle: {
    color: 'white',
    fontSize: '3rem',
    fontWeight: 500,
    marginBottom: '1rem',
  },
  introductionDescription: {
    margin: '10px 0px 100px 0px',
    lineHeight: 1.625,
    fontSize: '1.5rem',
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
  projectTitle: {
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
    color: 'white',
    fontSize: '2.5rem',
    lineHeight: 1.625,
  },
  projectDescription: {
    margin: '30px 10px 0px 10px',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
    color: '#cbd5e0',
    fontSize: '1.5rem',
    lineHeight: 1.625,
  },
}))

const styles = {
  project: {
    margin: '0px 20px 0px 20px',
    height: '500px',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.2)',
      border: '5px solid blue',
    },
  },
  clickedProject: {
    margin: '0px 20px 0px 20px',
    height: '500px',
    transform: 'scale(1.2)',
    border: '5px solid blue',
  },
}

function Projects() {
  const classes = useStyles()
  const [projectData, setProjectData] = useState({
    title: 'Project Details',
    description: 'Click on a project on the left to view more details.',
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
          <div className={classes.introductionTitle}>Apps I've Built</div>
          <div className={classes.introductionDescription}>
            These are the various web applications that I've created so far, mainly using React and Node.js
          </div>
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
              <div className={classes.projectTitle}>{projectData.title}</div>
              <div className={classes.projectDescription}>{projectData.description}</div>
            </div>
          </Grid>
          <Grid item xs={7}>
            <Grid container gap={7}>
              {projects.map((project) => {
                const projectStyles = project.title === selectedProject ? styles.clickedProject : styles.project
                return (
                  <Grid
                    title={project.title}
                    item
                    xs={5}
                    sx={projectStyles}
                    style={{ backgroundImage: `url(${project.image})` }}
                    onClick={(e) => handleOnClickProject(e, project)}
                  />
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

export default Projects
