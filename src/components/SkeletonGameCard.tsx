import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const SkeletonGameCard = () => {
  return (
    <Card borderRadius={10} overflow={'hidden'} width={'300px'}>
        <Skeleton height={'230px'} />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default SkeletonGameCard