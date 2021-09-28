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
    fontSize: '2rem',
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
  viewProjects: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '500px 500px',
    gridGap: '30px',
    margin: '0px 100px 0px 0px',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
  },
  link: {
    display: 'flex',
  },
  item: {
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
    '&:hover': {
      '&>a': {
        color: 'green',
        opacity: 0.5,
      },
    },
  },
  item2: {
    margin: '0px 20px 0px 20px',
    height: '500px',
    '&:hover': {
      '&>a': {
        color: 'green',
        opacity: 0.5,
      },
    },
  },
}))

// singleProjectDetails: {
//   display: 'flex',
//   flexDirection: 'column',
//   alignContent: 'center',
//   justifyContent: 'center',
// },

const styles = {
  paperContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
    opacity: 0.5,
    backgroundColor: 'transparent',
    '&:hover': { transform: 'scale3d(1.05, 1.05, 1)', opacity: 1 },
  },
}

function Projects() {
  const classes = useStyles()
  const [projectData, setProjectData] = useState({
    title: 'Project Details',
    description: 'Click on a project on the left to view more details.',
  })

  return (
    <section id="projects" className={classes.section}>
      <div className={classes.projects}>
        <div className={classes.introduction}>
          <Code className={classes.codeIcon} sx={{ fontSize: 100 }} />
          <text className={classes.introductionTitle}>Apps I've Built</text>
          <text className={classes.introductionDescription}>
            These are the various web applications that I've created so far, mainly using React and Node.js
          </text>
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
          <Grid item xs={5} className={classes.item}>
            <div className={classes.projectData}>
              <text className={classes.projectTitle}>{projectData.title}</text>
              <text className={classes.projectDescription}>{projectData.description}</text>
            </div>
          </Grid>
          <Grid item xs={7} className={classes.item}>
            <Grid container gap={7}>
              {projects.map((project) => (
                <Grid
                  item
                  xs={5}
                  className={classes.item2}
                  style={{ backgroundImage: `url(${project.image})` }}
                  onClick={() => setProjectData({ title: project.title, description: project.description })}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

// https://stackoverflow.com/questions/64721468/having-trouble-creating-onhover-on-grid-item-component-materialui
// https://stackoverflow.com/questions/63539865/spacing-in-material-ui-grid-not-working-as-expected
export default Projects
