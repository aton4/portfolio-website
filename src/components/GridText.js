import * as React from 'react'
import Typography from '@mui/material/Typography'

function GridText(props) {
  const { sx } = props
  return (
    <Typography
      variant="h5"
      sx={{
        ...sx,
        display: 'inline-flex',
        color: 'white',
      }}
    >
      {props.text}
    </Typography>
  )
}

export default GridText
