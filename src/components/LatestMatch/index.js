import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {data} = this.props
    console.log('ll', data)

    const updatedData = {
      competingTeam: data.competing_team,
      date: data.date,
      venue: data.venue,
      competingTeamLogo: data.competing_team_logo,
      firstInnings: data.first_innings,
      secondInnings: data.second_innings,
      manOfTheMatch: data.man_of_the_match,
      umpires: data.umpires,
    }

    return (
      <div>
        <h1>Latest Matches</h1>
        <div>
          <div className="centre-con">
            <p>{updatedData.competingTeam}</p>
            <p>{updatedData.date}</p>
            <p>{updatedData.venue}</p>
            <p>{updatedData.result}</p>
          </div>
          <div>
            <img
              src={updatedData.competingTeamLogo}
              alt={`latest match ${updatedData.competingTeam}`}
              className="pp"
            />
          </div>
        </div>
        <div>
          <p>First Innings</p>
          <p>{updatedData.firstInnings}</p>
          <p>Second Innings</p>
          <p>{updatedData.secondInnings}</p>
          <p>Man Of The Match</p>
          <p>{updatedData.manOfTheMatch}</p>
          <p>Umpires</p>
          <p>{updatedData.umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
