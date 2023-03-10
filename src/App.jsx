import { useState, useEffect } from 'react'
import From from './componentes/From'
import Grid from './componentes/Grid'
import Header from './componentes/Header'
import Resumo from './componentes/Resumo'
import Global from './styles/globalStyled'


const App = () => {
  const data = localStorage.getItem("transactions")
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  )
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2)
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2)

    const total = Math.abs(income - expense).toFixed(2)

    setIncome(`R$ ${income}`)
    setExpense(`R$ ${expense}`)
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`)

  }, [transactionsList]);

  const handleAdd = (transaction) =>{
    const newArryTrasactions = [...transactionsList,transaction ];

    setTransactionsList(newArryTrasactions)

    localStorage.setItem("transactions", JSON.stringify(newArryTrasactions))
  };

  return(
    <>
    <Header />
    <Resumo income={income} expense={expense} total={total} />
    <From handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList}/>
    <Grid />
    <Global />
    </>

  )
}

export default App
