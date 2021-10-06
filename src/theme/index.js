import { createTheme } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      bgColor: '#2d3748',
      text: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      bgColor: '#2d3748',
      text: '#cccccc',
    },
  },
})

const { innerWidth } = window
console.log(innerWidth)
let screenBreakpoint = 'md'
if (innerWidth < 300) {
  screenBreakpoint = 'xs'
} else if (innerWidth < 601) {
  screenBreakpoint = 'sm'
} else if (innerWidth < 901) {
  screenBreakpoint = 'md'
} else if (innerWidth < 1601) {
  screenBreakpoint = 'lg'
} else {
  screenBreakpoint = 'xl'
}
console.log(screenBreakpoint)

const customTheme = {
  xl: {
    header1: {
      fontSize: '3rem',
    },
    header2: {
      fontSize: '2rem',
    },
    header3: {
      fontSize: '1.5rem',
    },
    textInput: {
      fontSize: '1.3rem',
    },
    projectImage: {
      height: '25rem',
    },
    icon: {
      fontSize: 'large',
    },
    margin: '0 auto 0 auto',
    gap: 7,
    pl: 3,
    pt: 2.5,
    pb: 2.5,
    pr: 3,
  },
  lg: {
    header1: {
      fontSize: '2.5rem',
    },
    header2: {
      fontSize: '1.535rem',
    },
    header3: {
      fontSize: '1.3rem',
    },
    textInput: {
      fontSize: '1.1rem',
    },
    projectImage: {
      height: '15rem',
    },
    icon: {
      fontSize: 'large',
    },
    margin: '0 auto 0 auto',
    gap: 6,
    pl: 3,
    pt: 2.5,
    pb: 2.5,
    pr: 3,
  },
  md: {
    header1: {
      fontSize: '2rem',
    },
    header2: {
      fontSize: '1.235rem',
    },
    header3: {
      fontSize: '0.8rem',
    },
    textInput: {
      fontSize: '0.6rem',
    },
    projectImage: {
      height: '10rem',
    },
    icon: {
      fontSize: 'medium',
    },
    margin: '0 auto 0 auto',
    gap: 4,
    pl: 2,
    pt: 2.2,
    pb: 2.2,
    pr: 2,
  },
  sm: {
    header1: {
      fontSize: '1.5rem',
    },
    header2: {
      fontSize: '0.935rem',
    },
    header3: {
      fontSize: '0.5rem',
    },
    textInput: {
      fontSize: '0.4rem',
    },
    projectImage: {
      height: '5.5rem',
    },
    icon: {
      fontSize: 'small',
    },
    margin: '0 auto 0 auto',
    gap: 2,
    pl: 1,
    pt: 1.7,
    pb: 1.7,
    pr: 1,
  },
  xs: {
    header1: {
      fontSize: '1rem',
    },
    header2: {
      fontSize: '0.635rem',
    },
    header3: {
      fontSize: '0.3rem',
    },
    textInput: {
      fontSize: '0.2rem',
    },
    projectImage: {
      height: '4rem',
    },
    icon: {
      fontSize: 'small',
    },
    margin: '0 auto 0 auto',
    gap: 1,
    pl: 0.2,
    pt: 0.3,
    pb: 0.3,
    pr: 0.2,
  },
}

export { theme, screenBreakpoint, customTheme }
