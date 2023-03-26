import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../services/api"
import { Modal } from "../Modals/Modal"
import { ModalDadoRolado } from "../ModalDadoRolado"
import { Container, Top, Bot, Mid, Img } from "./styles"
import AtributosImg from '../../assets/imgs/AtributosImg.png'

export function AtributoButton({ agi, int, vig, pre, forca, ...rest }) {

  const [modalDadoRoladoIsOpen, setModalDadoRoladoIsOpen] = useState(false)

  const [data, setData] = useState({
    nome: '',
    valor: '',
    isDano: false
  })

  return (
    <Container>

      <Modal isOpen={modalDadoRoladoIsOpen} setClose={() => setModalDadoRoladoIsOpen(false)}>
        <ModalDadoRolado setModalEditIsOpenFalse={() => setModalDadoRoladoIsOpen(false)} data={data} />
      </Modal>

      <Top>
        <button onClick={() => {
          setModalDadoRoladoIsOpen(true);

          setData({
            nome: "Agilidade",
            valor: `${agi}d20`,
            isDano: false
          })
        }}>{agi}</button>
      </Top>

      <Mid>
        <button onClick={() => {
          setModalDadoRoladoIsOpen(true)

          setData({
            nome: 'Força',
            valor: `${forca}d20`,
            isDano: false
          })
        }}>{forca}</button>

        <button onClick={() => {
          setModalDadoRoladoIsOpen(true)

          setData({
            nome: 'Intelecto',
            valor: `${int}d20`,
            isDano: false
          })
        }}>{int}</button>
      </Mid>

      <Bot>
        <button onClick={() => {
          setModalDadoRoladoIsOpen(true)

          setData({
            nome: 'Presença',
            valor: `${pre}d20`,
            isDano: false
          })
        }}>{pre}</button>

        <button onClick={() => {
          setModalDadoRoladoIsOpen(true)

          setData({
            nome: 'Vigor',
            valor: `${vig}d20`,
            isDano: false
          })
        }}>{vig}</button>
      </Bot>

      <Img {...rest} src={AtributosImg} />

    </Container>
  )
}