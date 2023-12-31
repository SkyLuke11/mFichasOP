import React, { useEffect, useState } from "react";
import { Body, Container, Footer, Header } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import {Input} from '../../../../../../components/Input'
import {InputImg} from '../../../../../../components/InputImg'
import {TextArea} from '../../../../../../components/TextArea'
import { api } from "../../../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../../hooks/auth";
import { Preview } from "../../../../../../components/Preview";

export function ModalEditArma({data, lista, setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [nome, setnome] = useState(data.nome)
  const [tipo, settipo] = useState(data.tipo)
  const [alcance, setalcance] = useState(data.alcance)
  const [recarga, setrecarga] = useState(data.recarga)
  const [especial, setespecial] = useState(data.especial)
  const [ataque, setataque] = useState(data.ataque)
  const [margem, setmargem] = useState(data.margem)
  const [dano, setdano] = useState(data.dano)
  const [critico, setcritico] = useState(data.critico)
  const [espaco, setespaco] = useState(data.espaco)
  const [prestigio, setprestigio] = useState(data.prestigio)
  const [quantidade, setquantidade] = useState(data.quantidade)
  const [descricao, setdescricao] = useState(data.descricao)
  const [foto, setfoto] = useState(data.foto ? data.foto : '')

  let pattern = /^([+-]?((100|\d{1,2}|\/[ADCEFGINOPRTV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ADCEFGINOPRTV]{3,4}\/))?)|(\d{0,3}|1000))([+-]((100|\d{1,2}|\/[ADCEFGINOPRTV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ADCEFGINOPRTV]{3,4}\/))?)|([+-]\d{0,3}|1000)?)*$/g;

  async function updateFichaAPI(e) {

    e.preventDefault()

    if (!ataque.match(pattern)) {
      toast.error('Dado "Teste" inválido.')
      return
    }

    if (!dano.match(pattern)) {
      toast.error('Dado "Dano" inválido.')
      return
    }

    if (!critico.match(pattern)) {
      toast.error('Dado "Dano Crítico" inválido.')
      return
    }

    const response = await api.post('/', {
      query: 'fichas_info_update',
      sessid: token,
      token: id,
      dados: {
        armas: [{
          id: data.id,
          nome,
          tipo,
          alcance,
          recarga,
          especial,
          ataque,
          margem,
          dano,
          critico,
          espaco,
          prestigio,
          quantidade,
          descricao,
          foto,
        }]
      }
    })

    if (response.data.success) {
      
      const armaAEditar = lista.filter(arma => arma.id == data.id)[0]

      armaAEditar.nome = nome
      armaAEditar.tipo = tipo
      armaAEditar.alcance = alcance
      armaAEditar.recarga = recarga
      armaAEditar.especial = especial
      armaAEditar.ataque = ataque
      armaAEditar.margem = margem
      armaAEditar.dano = dano
      armaAEditar.critico = critico
      armaAEditar.espaco = espaco
      armaAEditar.prestigio = prestigio
      armaAEditar.quantidade = quantidade
      armaAEditar.descricao = descricao
      armaAEditar.foto = foto

      setModalClose()
      toast.success("Alterado com sucesso!")
    }

  }

  return (
    <Container>

      <form onSubmit={updateFichaAPI}>

        <Header>

          <h1>Editar Arma</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input required maxLength={50} name="nome" label={'Nome'} valor={nome} setValor={setnome}/>
          <Input required maxLength={30} name="tipo" label={'Tipo'} valor={tipo} setValor={settipo}/>
          <Input required maxLength={30} name="alcance" label={'Alcance'} valor={alcance} setValor={setalcance}/>
          <Input maxLength={30} name="recarga" label={'Recarga'} valor={recarga} setValor={setrecarga}/>
          <Input maxLength={30} name="especial" label={'Especial'} valor={especial} setValor={setespecial}/>
          <Input maxLength={30} isDado name="ataque" label={'Teste'} valor={ataque} setValor={setataque}/>
          <Input maxLength={30} isDado name="dano" label={'Dano'} valor={dano} setValor={setdano}/>
          <Input min={1} max={20} type='number' name="margem" label={'Margem Crítico'} valor={margem} setValor={setmargem}/>
          <Input maxLength={30} isDado name="critico" label={'Dano Crítico'} valor={critico} setValor={setcritico}/>
          <Input required min={-10} max={30} type='number' name="categoria" label={'Categoria'} valor={prestigio} setValor={setprestigio}/>
          <Input required min={-10} max={30} step={'0.1'} type='number' name="espaco" label={'Espaços'} valor={espaco} setValor={setespaco}/>
          <Input required max={30} type='number' name="quantidade" label={'Quantidade'} valor={quantidade} setValor={setquantidade}/>
          <InputImg maxLength={255} label={'Foto'} valor={foto} setValor={setfoto}/>
          
          <TextArea label={'Descrição'} valor={descricao} setValor={setdescricao}/>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>

    </Container>
  );
}