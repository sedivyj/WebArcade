import React from 'react'
import PropTypes from 'prop-types'

const Score = ({ score, rank }) => (
        <tr className={'tblRow'}>
            <td className={'rowNum'}>{rank}</td>
            <td className={'initials'}>{score.initial}</td>
            <td className={'score'}>{score.score}</td>
        </tr>
)

export default Score
