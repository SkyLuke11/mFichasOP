import { useEffect, useState } from "react";
import { Container, Content, ContentContainer } from "./styles";
export function Modal({ isOpen, setClose, children }) {

  const [realIsOpen, setRealIsOpen] = useState(isOpen)

  useEffect(() => {

    if (isOpen) {
      setRealIsOpen(true)
    } else {
      setTimeout(() => {
        setRealIsOpen(false)
      }, 170);
    }

  }, [isOpen])

  return (
    <Container open={realIsOpen} onClose={setClose}>
      <ContentContainer>
        <Content animation={isOpen}>{children}</Content>
      </ContentContainer>
    </Container>
  );
}