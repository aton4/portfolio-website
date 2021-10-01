import React from 'react'
import GridItem from '../../components/GridItem'
import GridText from '../../components/GridText'
import { Paper, Box, Typography } from '@mui/material/'
import { skills } from './skillsData'
import CheckCircle from '@mui/icons-material/CheckCircle'

function Skills() {
  return (
    <section id="skills">
      <Paper sx={{ backgroundColor: '#1a202c' }}>
        <Typography variant="h3" pt={20} pb={10} sx={{ color: 'white', textAlign: 'center' }}>
          Skills & Technologies
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 5, textAlign: 'center', alignItems: 'center' }}>
          {skills.map((skill) => (
            <GridItem>
              <Box
                pl={3}
                sx={{
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyItems: 'left',
                  width: '700px',
                  borderRadius: '0.25rem',
                  display: 'flex',
                  bgcolor: '#2d3748',
                }}
              >
                <CheckCircle sx={{ color: '#66ff66' }} />
                <GridText text={skill.name} />
              </Box>
            </GridItem>
          ))}
        </Box>
      </Paper>
    </section>
  )
}

export default Skills
