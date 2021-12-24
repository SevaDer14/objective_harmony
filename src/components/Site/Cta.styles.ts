import palette from 'src/theme/palette.theme'

const styles = {
  cta: {
    '&:hover': {
      backgroundColor: palette.primary.light,
    },
  },
} as const

export default styles
