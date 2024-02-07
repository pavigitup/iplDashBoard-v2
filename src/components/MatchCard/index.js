import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {matchCard} = this.props
    console.log(matchCard.match_status)

    const statusClassName = status =>
      status === 'Won' ? 'match-won' : 'match-lost'
    const matchStatusClassName = `match-status ${statusClassName(
      matchCard.match_status,
    )}`

    const updatedData = {
      competingTeamLogo: matchCard.competing_team_logo,
      matchStatus: matchCard.match_status,
      competingTeam: matchCard.competing_team,
      result: matchCard.result,
      id: matchCard.id,
    }

    return (
      <li key={updatedData.id} className="match-card">
        <img
          src={updatedData.competingTeamLogo}
          alt={`competing team ${updatedData.competingTeam}`}
          className="competing_team_logo"
        />
        <p className="competing-team">{updatedData.competingTeam}</p>
        <p className="result">{updatedData.result}</p>
        <p className={matchStatusClassName}>{updatedData.matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
