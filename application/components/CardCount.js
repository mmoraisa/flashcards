import React from 'react'
import { Text } from 'react-native'

const CardCount = ({ countTo, ...props }) => (
    <Text {...props}>
        {
            countTo === 0
            && 'No cards'
        }
        {
            countTo == 1
            && '1 card'
        }
        {
            countTo > 1
            && countTo + ' cards'
        }
    </Text>
)

export default CardCount