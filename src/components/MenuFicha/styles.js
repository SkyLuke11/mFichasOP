import { Link } from "react-router-dom";
import { styled } from "../../stitches.config";

export const Container = styled("div", {
    position: 'absolute',
    height: "60px",
    width: '100%',
    textAlign: "center",
    overflow: "hidden",

    button: {
        margin: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        background: 'none',
        border: 'none'
    },
});

export const Header = styled("div", {

    width: '100%',
    height: '6rem',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    background: 'rgb(15,15,15)',
    borderBottom: '2px solid white',

    h1: {
        width: '100%',
        color: '#005da4',
        textOverflow: 'ellipsis',
        fontFamily: 'Fredoka One',
        letterSpacing: '.2rem',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        paddingRight: '7.5rem',
        fontSize: '3rem',
        textShadow: "1px 1px 10px #00d5ff4d",
    },

});