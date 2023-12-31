import { styled } from '../../stitches.config';

export const Container = styled('div', {
  height: '100vh',
  display: 'flex',

  '.hoverdesactive': {
    background: 'none !important',
    border: 'none !important'
  }
})

export const ContentWrapper = styled('main', {
  width: '100%',
  position: 'fixed',
  top: '6rem',

  variants: {
    auth: {
      true: {
        height: 'calc(100% - 140px)',
      },
      trueficha: {
        height: 'calc(100% - 120px)',
      },
      false: {
        height: 'calc(100% - 60px)',
      },
    }
  }

})