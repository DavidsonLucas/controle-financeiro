import React from 'react'
import * as c from './styled'
import {
     FaRegArrowAltCircleUp,
     FaRegArrowAltCircleDown,
    }from 'react-icons/fa'


const GridItem = ({item , onDelete}) => {
  return (
    <c.Tr>
        <c.Td>{item.desc}</c.Td>
        <c.Td>{item.amount}</c.Td>
        <c.Td alignCenter>
            {item.expense ?(
                <FaRegArrowAltCircleDown color="red"/> 
            ):(
                <FaRegArrowAltCircleUp color="green"/>
            )}</c.Td>
            <c.Td alignCenter>
                <c.Trash onClick={() => onDelete(item.id)} />
            </c.Td>
    </c.Tr>
  )
}

export default GridItem
