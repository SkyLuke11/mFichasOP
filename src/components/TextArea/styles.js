import { styled } from '../../stitches.config';

export const Container = styled('div', {

    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

})

export const InputB = styled('textarea', {

    width: '100%',
    minHeight: '10rem',
    maxHeight: '30rem',
    resize: 'vertical',
    marginTop: "0px",
    fontSize: "2rem",
    fontWeight: 100,
    fontFamily: 'arial',
    padding: "1.5rem",
    background: "none",
    borderRadius: "0.7rem",
    border: 'none',
    outline: 'solid 0.2rem white',
    color: 'white',

    variants: {
        menor: {
            true: {
                minHeight: '20rem',
                maxHeight: '60rem'
            }
        }
    }
})

export const LabelContainer = styled('label', {

    position: 'absolute',
    width: 'fit-content',
    top: '-1.4rem',
    textAlign: 'center',
    zIndex: '1',
    fontFamily: 'Cormorant Garamond',
    fontSize: '2.4rem',
    backgroundColor: 'rgb(20, 20, 20)',
    transition: '.3s',
    padding: '0px 1rem',
    color: '#ffffff90',

    variants: {
        active: {
            true: {
                transform: 'translateY(-0.25rem)',
                padding: '0px 1rem',
            },
        },
        menor: {
            true: {
                fontSize: '2rem'
            }
        }
    },

})