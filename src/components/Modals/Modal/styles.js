import { Dialog } from "@headlessui/react";
import { keyframes, styled } from "../../../stitches.config";

export const Container = styled(Dialog, {
  position: "relative",
});

export const ContentContainer = styled("div", {

  position: "fixed",
  inset: 0,
  display: "flex",
  justifyContent: 'center',
  backgroundColor: "#00000095",
  overflowY: 'auto',
  overflowX: 'hidden',

});

const animation = keyframes({
  '0%': {
    opacity: 0,
    position: 'relative',
    top: -100
  },
  '100%': {
    opacity: 1,
    position: 'relative',
    top: 0
  }
})

const animation2 = keyframes({
  '0%': {
    opacity: 1,
    position: 'relative',
    top: 0
  },
  '100%': {
    opacity: 0,
    position: 'relative',
    top: -100
  }
})


export const Content = styled(Dialog.Panel, {

  height: 'fit-content',
  display: 'flex',
  margin: 'auto',
  animation: `${animation} .3s`,

  variants: {
    animation: {
      false: {
        animation: `${animation2} .15s`,
        animationFillMode: 'forwards'
      }
    }
  }

});
