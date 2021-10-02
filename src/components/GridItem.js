import * as React from 'react'
import Box from '@mui/material/Box'

function GridItem(props) {
  const { sx, ...other } = props
  return (
    <Box
      sx={{
        display: 'grid',
        p: 1,
        borderRadius: 1,
        justifyContent: 'left',
        fontSize: 19,
        fontWeight: '700',
        width: '100%',
        bgcolor: '#2d3748',
        ...sx,
      }}
      {...other}
    />
  )
}

export default GridItem
