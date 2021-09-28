import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
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
  projectDescription: {
    textAlign: 'center',
    color: '#cbd5e0',
    fontSize: '1.5rem',
    lineHeight: 1.625,
  },
  viewProjects: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
  },
  link: {
    display: 'flex',
  },
}))

function Projects() {
  const classes = useStyles()
  const [projectDescription, setProjectDescription] = useState('Click on a project on the left to view more details.')

  return (
    <section id="projects" className={classes.section}>
      <div className={classes.projects}>
        <div className={classes.introduction}>
          <Code className={classes.codeIcon} sx={{ fontSize: 100 }} />
          <text className={classes.introductionTitle}>Apps I've Built</text>
          <text className={classes.introductionDescription}>
            These are the various web applications that I've created so far mainly using React and Node.js
          </text>
        </div>
        <div className={classes.projectsContainer}>
          <text className={classes.projectDescription}>{projectDescription}</text>
          <div className={classes.viewProjects}>
            {projects.map((project) => (
              <div className={classes.singleProjectContainer} onClick={() => setProjectDescription(project.description)}>
                <div className={classes.singleProjectDetails}>
                  <text>{project.title}</text>
                  <a href={project.link}>{project.linkType === 'GitHub' ? 'GitHub Link' : 'Website Link'}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
