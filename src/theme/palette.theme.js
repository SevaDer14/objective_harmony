import * as colors from '@mui/material/colors'

const palette = {
  primary: {
    main: colors.lightGreen.A700,
    light: colors.lightGreen.A200,
    dark: colors.lightGreen[900],
    glow: colors.lightGreen[800],
    contrastText: colors.grey[900],
  },
  secondary: {
    main: colors.amber.A200,
    saturated: colors.amber[700],
    dark: colors.amber[900],
    glow: colors.amber[800],
    contrastText: colors.grey[900],
  },
  error: {
    main: colors.red[200],
  },
  background: {
    default: colors.grey[900],
    contrast: colors.grey[50],
    contrastSemi: colors.grey[800],
  },
}

export default palette
