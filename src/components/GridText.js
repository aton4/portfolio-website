import * as React from 'react'
import Typography from '@mui/material/Typography'

function GridItem(props) {
  const { sx, text } = props
  return (
    <Typography
      variant="h5"
      p={2}
      sx={{
        display: 'inline-flex',
        color: 'white',
      }}
    >
      {props.text}
    </Typography>
  )
}

export default GridItem
