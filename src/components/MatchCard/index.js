import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {matchCard} = this.props

    const statusClassName = status =>
      status === 'Won' ? 'match-won' : 'match-lost'
    const matchStatusClassName = `match-status ${statusClassName(
      matchCard.matchStatus,
    )}`

    const updatedData = {
      competingTeamLogo: matchCard.competing_team_logo,
      matchStatus: matchCard.match_status,
      competingTeam: matchCard.competing_team,
      result: matchCard.result,
      id: matchCard.id,
    }

    return (
      <li key={updatedData.id}>
        <img
          src={updatedData.competingTeamLogo}
          alt={`competing team ${updatedData.competingTeam}`}
          className="competing_team_logo"
        />
        <p>{updatedData.competingTeam}</p>
        <p>{updatedData.result}</p>
        <p className={matchStatusClassName}>{updatedData.matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
