import React from 'react'
import ResumoItem from '../ResumoItem'
import * as c from './styled'
import{
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from 'react-icons/fa'

const Resumo = ({income, expense, total}) => {
  return (
    <c.Container>
        <ResumoItem title="Entradas" Icon = {FaRegArrowAltCircleUp} value={income}/>
        <ResumoItem title="Saídas" Icon = {FaRegArrowAltCircleDown} value={expense}/>
        <ResumoItem title="Total" Icon = {FaDollarSign} value={total} />
    </c.Container>
  )
}

export default Resumo
