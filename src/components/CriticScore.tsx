import { Badge } from '@chakra-ui/react'
import React from 'react'

interface Props {
    criticScore: number
}

const CriticScore = ({ criticScore } : Props) => {

    let color = criticScore > 90 ? 'green' : criticScore > 60 ? 'yellow' : '';
  return (
    <Badge fontSize={'14px'} paddingX={2} borderRadius={'4px'} colorScheme={color}>{criticScore}</Badge>
  )
}

export default CriticScore