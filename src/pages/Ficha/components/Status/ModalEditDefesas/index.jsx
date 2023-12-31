import React, { useEffect, useState } from "react";
import { Body, Container, Footer, Header } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import {Input} from '../../../../../components/Input'
import { api } from "../../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../hooks/auth";

export function ModalEditDefesas({data, setData, setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [passiva, setpassiva] = useState(data.passiva)
  const [esquiva, setesquiva] = useState(data.esquiva)
  const [bloqueio, setbloqueio] = useState(data.bloqueio)
  const [sanidade, setsanidade] = useState(data.sanidade)
  const [morte, setmorte] = useState(data.morte)
  const [sangue, setsangue] = useState(data.sangue)
  const [energia, setenergia] = useState(data.energia)
  const [conhecimento, setconhecimento] = useState(data.conhecimento)
  const [balistica, setbalistica] = useState(data.balistica)
  const [corte, setcorte] = useState(data.corte)
  const [eletricidade, seteletricidade] = useState(data.eletricidade)
  const [fisico, setfisico] = useState(data.fisico)
  const [fogo, setfogo] = useState(data.fogo)
  const [frio, setfrio] = useState(data.frio)
  const [impacto, setimpacto] = useState(data.impacto)
  const [perfuracao, setperfuracao] = useState(data.perfuracao)
  const [quimico, setquimico] = useState(data.quimico)

  async function updateFichaAPI(e) {

    e.preventDefault()

    const response = await api.post('/', {
      query: 'fichas_info_update',
      sessid: token,
      token: id,
      dados: {
        passiva: passiva, 
        esquiva: esquiva, 
        bloqueio: bloqueio, 
        mental: sanidade, 
        morte: morte, 
        sangue: sangue, 
        energia: energia, 
        conhecimento: conhecimento, 
        balistica: balistica, 
        corte: corte, 
        eletricidade: eletricidade, 
        fisica: fisico, 
        fogo: fogo, 
        frio: frio, 
        impacto: impacto, 
        perfuracao: perfuracao, 
        quimico: quimico, 
      }
    })

    if (response.data.success) {
      setData(prevState => ({
        ...prevState,
        defesas: {
          passiva: passiva ? passiva : 0,
          esquiva: esquiva ? esquiva : 0,
          bloqueio: bloqueio ? bloqueio : 0,
          sanidade: sanidade ? sanidade : 0,
          morte: morte ? morte : 0,
          sangue: sangue ? sangue : 0,
          energia: energia ? energia : 0,
          conhecimento: conhecimento ? conhecimento : 0,
          balistica: balistica ? balistica : 0,
          corte: corte ? corte : 0,
          eletricidade: eletricidade ? eletricidade : 0,
          fisico: fisico ? fisico : 0,
          fogo: fogo ? fogo : 0,
          frio: frio ? frio : 0,
          impacto: impacto ? impacto : 0,
          perfuracao: perfuracao ? perfuracao : 0,
          quimico: quimico ? quimico : 0,
        }
      }))
      setModalClose()
      toast.success("Alterado com sucesso!")
    }

  }

  return (
    <Container>

      <form onSubmit={updateFichaAPI}>

        <Header>

          <h1>Defesas</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

        <div className='grid2'>
            <Input type='number' max={99} label={'Passiva'} valor={passiva} setValor={setpassiva} />
            <Input type='number' max={99} label={'Esquiva'} valor={esquiva} setValor={setesquiva} />
          </div>

          <div className='grid2'>
            <Input type='number' max={99} label={'Bloqueio'} valor={bloqueio} setValor={setbloqueio} />
            <Input type='number' max={99} label={'Sanidade'} valor={sanidade} setValor={setsanidade} />
          </div>

          <hr />

          <div className='grid2'>
            <Input type='number' max={99} label={'Morte'} valor={morte} setValor={setmorte} />
            <Input type='number' max={99} label={'Sangue'} valor={sangue} setValor={setsangue} />
          </div>

          <div className='grid2'>
            <Input type='number' max={99} label={'Energia'} valor={energia} setValor={setenergia} />
            <Input type='number' max={99} label={'Conhecimento'} valor={conhecimento} setValor={setconhecimento} />
          </div>

          <hr />

          <div className='grid3'>
            <Input type='number' max={99} label={'Balística'} valor={balistica} setValor={setbalistica} />
            <Input type='number' max={99} label={'Corte'} valor={corte} setValor={setcorte} />
            <Input type='number' max={99} label={'Eletricidade'} valor={eletricidade} setValor={seteletricidade} />

            <Input type='number' max={99} label={'Físico'} valor={fisico} setValor={setfisico} />
            <Input type='number' max={99} label={'Fogo'} valor={fogo} setValor={setfogo} />
            <Input type='number' max={99} label={'Frio'} valor={frio} setValor={setfrio} />

            <Input type='number' max={99} label={'Impacto'} valor={impacto} setValor={setimpacto} />
            <Input type='number' max={99} label={'Perfuração'} valor={perfuracao} setValor={setperfuracao} />
            <Input type='number' max={99} label={'Químico'} valor={quimico} setValor={setquimico} />
          </div>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>

    </Container>
  );
}