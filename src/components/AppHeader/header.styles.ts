import palette from 'src/theme/palette.theme'

const styles = {
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: palette.background.contrast,
  },
  logo: {
    color: palette.background.contrast,
    textShadow: `0 0 8px ${palette.background.contrastSemi}`,
    fontSize: '1.3rem',
  },
} as const

export default styles
