import React from 'react'
import * as c from './styled'

const ResumoItem = ({title , Icon , value}) => {
    return (
        <c.Container>
            <c.Header>
                <c.HeaderTitle>{title}</c.HeaderTitle>
                <Icon />
            </c.Header>
            <c.Total>{value}</c.Total>
        </c.Container>
    ) 
}

export default ResumoItem
