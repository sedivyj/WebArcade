import RatingButton from './RatingButton.js'
import React from 'react'
// import { getById, postData } from '../utility/api-tools'

const RatingComponent = ({positivePercentage}) => {
  const positivePercentageColor = () => {
    const percentage = positivePercentage
    let textColor
    if (percentage >= 70.0) {
      textColor = 'green'
    } else if (percentage >= 50.0) {
      textColor = 'yellow'
    } else {
      textColor = 'red'
    }
    return textColor
  }

  const percentageColor = positivePercentageColor()

  return (

      <div>
        <RatingButton isPositve={ false }/>
          <span style={{ color: percentageColor }}>{positivePercentage}%</span>
        <RatingButton isPositive={ true }/>
      </div>
  )
}
