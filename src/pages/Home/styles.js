import {styled} from '../../stitches.config';
import bg from '../../assets/imgs/bg.webp'

export const Container = styled('div', {

  width: '100%',
  height: '100%',
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflowX: "hidden",
  overflowY: 'auto',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

});

export const Body = styled('div', {

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: 'auto',
  padding: '1rem 2rem'

});

export const DivTitle = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'

});

export const Title = styled('h1', {

  letterSpacing: '5px',
  marginBottom: '6rem',
  paddingTop: '1rem',
  color: 'white',
  fontSize: '5.8rem',
  fontFamily: 'Special Elite',
  textShadow: '0px 0px 10px #ffffff, 0px 0px 15px #ffffff25',

  '@sm': {
    fontSize: '7rem'
  },

  '@md': {
    fontSize: '8rem'
  }

});

export const SubTitles = styled('span', {

  color: 'white',
  marginTop: '-3rem',
  marginBottom: '4rem',
  fontFamily: 'El Messiri',
  fontSize: '2rem',
  textAlign: 'center'

});