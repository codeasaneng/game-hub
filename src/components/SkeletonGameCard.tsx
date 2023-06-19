import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const SkeletonGameCard = () => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
        <Skeleton height="230px" />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default SkeletonGameCard