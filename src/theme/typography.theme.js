import palette from './palette.theme'

const typography = {
  fontFamily: 'Roboto Mono',
  h1: {
    color: palette.background.contrast,
    fontSize: '2.5rem',
    fontWeight: '500',
    textTransform: 'uppercase',
    textShadow: `3px 3px ${palette.primary.glow}`,
  },
  body1: {
    color: palette.background.contrast,
    fontSize: '1rem',
    fontWeight: '300',
    lineHeight: '2',
  },
}

export default typography
