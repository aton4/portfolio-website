import React from 'react'
import { makeStyles } from '@mui/styles'
import { Code } from '@mui/icons-material'

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
    fontSize: '1.875rem',
    fontWeight: 500,
    marginBottom: '1rem',
  },
  introductionDescription: {
    lineHeight: 1.625,
    fontSize: '1rem',
  },
  projectsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    width: '100%',
    color: '#444',
  },
  projectDescription: {
    color: '#444',
    textAlign: 'center',
  },
  viewProjects: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
  },
}))

function Projects() {
  const classes = useStyles()
  const projects = [1, 2, 3, 4]

  return (
    <section id="projects" className={classes.section}>
      <div className={classes.projects}>
        <div className={classes.introduction}>
          <Code className={classes.codeIcon} sx={{ fontSize: 100 }} />
          <h1 className={classes.introductionTitle}>Apps I've Built</h1>
          <p className={classes.introductionDescription}>Projects description</p>
        </div>
        <div className={classes.projectsContainer}>
          <text className={classes.projectDescription}>single project description</text>
          <div className={classes.viewProjects}>
            {projects.map((project) => (
              <text> test </text>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
