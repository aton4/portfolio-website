import React from 'react'
import GridItem from '../../components/GridItem'
import GridText from '../../components/GridText'
import { Paper, Box, Typography } from '@mui/material/'
import { skills } from './skillsData'
import CheckCircle from '@mui/icons-material/CheckCircle'
import { screenBreakpoint, customTheme } from '../../theme'

const theme = customTheme[screenBreakpoint]

function Skills() {
  return (
    <section id="skills">
      <Paper sx={{ backgroundColor: '#1a202c' }}>
        <Typography variant="h3" pt={20} pb={10} sx={{ ...theme.header1, color: 'white', textAlign: 'center' }}>
          Skills & Technologies
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: theme.gap,
            width: '50%',
            margin: '0 auto 0 auto',
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          {skills.map((skill) => (
            <GridItem>
              <Box
                pt={theme.pt}
                pb={theme.pt}
                pl={theme.pl}
                pr={theme.pr}
                sx={{
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyItems: 'left',
                  borderRadius: '0.25rem',
                  display: 'flex',
                }}
              >
                <CheckCircle sx={{ fontSize: 'large', color: '#66ff66' }} />
                <GridText sx={{ ...theme.header3 }} text={skill.name} />
              </Box>
            </GridItem>
          ))}
        </Box>
      </Paper>
    </section>
  )
}

export default Skills
