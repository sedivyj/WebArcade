import React, { useState, useEffect } from 'react'
import RatingButton from './RatingButton'

import { getById } from '../utility/api-tools.js'

const RatingComponent = ({ gameid, isPlaying }) => {
  const [positivePercentage, setPositivePercentage] = useState(0)
  const [wasPositive, setWasPositive] = useState(null)

  useEffect(() => {
    if (gameid !== 0) {
      getById('/game/getOverallRating', gameid, setPercentage)
    }
  }, [isPlaying])

  const setPercentage = (response) => {
    console.log(response.positivePercent)
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
      <RatingButton isPositive={false} />
      <span className='ml-2 mr-2' style={{ color: positivePercentageColor() }}>{ratingValue()}</span>
      <RatingButton isPositive={true} />
    </div>
  )
}

export default RatingComponent

// export default class RatingComponent extends Component {
//   constructor(props) {
//     super(props)
//   }

//   positivePercentageColor () {
//     const percentage = this.props.positivePercentage
//     let textColor
//     if (percentage >= 70.0) {
//       textColor = 'green'
//     } else if (percentage >= 50.0) {
//       textColor = 'yellow'
//     } else {
//       textColor = 'red'
//     }
//     return textColor
//   }

//   ratingValue () {
//     if (this.props.positivePercentage) {
//       return `  ${this.props.positivePercentage.toFixed(1)}%  `
//     } else {
//       return '  No Ratings!  '
//     }
//   }

//   render () {
//     const percentageColor = this.positivePercentageColor()
//     const percentage = this.ratingValue()

//     return (
//       <div>
//         <RatingButton isPositive={false} />
//         <span className='ml-2 mr-2' style={{ color: percentageColor }}>{percentage}</span>
//         <RatingButton isPositive={true} />
//       </div>
//     );
//   }
// }
