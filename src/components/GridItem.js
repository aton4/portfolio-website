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
        justifyContent: 'center',
        fontSize: 19,
        fontWeight: '700',
        width: '100%',
        ...sx,
      }}
      {...other}
    />
  )
}

export default GridItem
