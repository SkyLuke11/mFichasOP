import { styled } from "../../../../stitches.config";

export const Container = styled('div', {

  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgb(20,20,20)',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'hidden',

  hr: {
    borderColor: '#ffffff90'
  },

  form: {
    height: '100%'
  },
})

export const Header = styled('div', {

  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  padding: '1.5rem 2.5rem',
  color: 'white',

  h1: {
    fontSize: '2rem',
    paddingBottom: '.3rem',
    fontFamily: 'Special Elite'
  },
  
  button: {
    background: 'none',
    border: "none",
    color: '#ffffff90',
    fontSize: '2.5rem',
    transition: '0.2s',
    padding: '0 10px 2px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  'button:hover': {
    opacity: 0.5,
  },

   

});

export const Body = styled('div', {

  height: 'calc(100% - 130px)',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  color: '#ffffff90',
  padding: '2rem',
  gap: '2rem',
  overflowY: 'auto',
  overflowX: 'hidden',

  variants: {
    isLoading: {
      true: {
        opacity: 0
      }
    }
  }

});

export const Card = styled('div', {

  width: '100%',
  border: '2px solid grey',
  borderRadius: '5px',

  h1: {
    textAlign: 'left',
    fontSize: '2rem',
    padding: '1rem',
    fontFamily: 'El Messiri',
    height: '45px'
  },

  '.div': {
    padding: '2rem 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '2rem'
  }

});

export const Footer = styled('div', {

  padding: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  button: {
    background: 'none',
    borderRadius: '5px',
    border: '2px solid #00ff88',
    color: '#00ff88',
    fontFamily: 'Acme',
  fontSize: '2rem',
    width: '90%',
    padding: '.4rem',
    transition: '.3s'
  },

  'button:hover': {
    background: '#00ff8850'
  }

});