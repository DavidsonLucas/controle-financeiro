import { useState } from 'react'
import Grid from '../Grid'
import * as c from './styled'

const From = ({handleAdd, transactionsList, setTransactionsList}) => {
    const [desc , setDesc] = useState("")
    const [amount , SetAmount] = useState("")
    const [isExpense , setExpense] = useState(false)

    const generateID = () =>Math.round( Math.random() *1000)

    const handeleSave = () => {
        if(!desc|| !amount){
        alert("Informe a descrição e o Valor!")
        return
        }else if(amount < 1){
        alert("O Valor tem que ser positivo!")
        return
    }
    
    const transaction =  {
        id:generateID(),
        desc:desc,
        amount:amount,
        expense:isExpense,
    };

    handleAdd(transaction)

    setDesc("")
    SetAmount("")
    }
  return (
    <>
    <c.Container>
        <c.InputContent>
            <c.Label>Descrição</c.Label>
            <c.Input value={desc} onChange={(e) => setDesc(e.target.value)}/>
        </c.InputContent>

        <c.InputContent>
            <c.Label>Valor</c.Label>
            <c.Input value={amount}
            type="number" 
            onChange={(e) => SetAmount(e.target.value)}/>
        </c.InputContent>

        <c.RadioGrup>
            <c.Input 
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
            />
            <c.Label htmlFor='rIncome'>Entrada</c.Label>
          
            <c.Input 
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}/>
            <c.Label htmlFor='rExpenses'>Saida</c.Label>
        </c.RadioGrup>
        <c.Button onClick={handeleSave}>ADICIONAR</c.Button>
    </c.Container> 
    <Grid  itens={transactionsList} setItens={setTransactionsList} />
    </>
  )
}

export default From
