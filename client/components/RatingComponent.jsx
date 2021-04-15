import React, { useState, useEffect } from 'react'
import RatingButton from './RatingButton'

import { getById } from '../utility/api-tools.js'

const RatingComponent = ({ gameid, isPlaying }) => {
  const [positivePercentage, setPositivePercentage] = useState(0)
  const [wasPositive, setWasPositive] = useState(null)

  useEffect(() => {
    if (gameid !== 0) {
      getPercentage()
      // getById('/game/getOverallRating', gameid, setPercentage)
    }
  }, [isPlaying])

  const getPercentage = () => {
    getById('/game/getOverallRating', gameid, setPercentage)
  }

  const setPercentage = (response) => {
    if (response.wasPositive !== null) {
      setWasPositive(response.wasPositive)
    }
    setPositivePercentage(response.positivePercent)
  }

  const positivePercentageColor = () => {
    if (positivePercentage >= 70.0) {
      return 'green'
    } else if (positivePercentage >= 50.0) {
      return 'yellow'
    } else {
      return 'red'
    }
  }

  const ratingValue = () => {
    if (positivePercentage) {
      return `  ${positivePercentage.toFixed(1)}%  `
    } else {
      return '  No Ratings!  '
    }
  }

  return (
    <div>
      <RatingButton
        gameid={gameid}
        isPositive={false}
        wasPositive={wasPositive}
        setPercentagePostRate={getPercentage}
      />
      <span className='ml-2 mr-2' style={{ color: positivePercentageColor() }}>{ratingValue()}</span>
      <RatingButton
        gameid={gameid}
        isPositive={true}
        wasPositive={wasPositive}
        setPercentagePostRate={getPercentage}
      />
    </div>
  )
}

export default RatingComponent
