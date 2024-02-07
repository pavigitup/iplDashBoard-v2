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
      <>
        <h1 className="latest-name-head">Latest Matches</h1>
        <div className="latest-match-content-con">
          <div className="res">
            <div className="capital-con">
              <p className="team-head">{updatedData.competingTeam}</p>
              <p className="date">{updatedData.date}</p>
              <p className="latest-paras">{updatedData.venue}</p>
              <p className="latest-paras">{updatedData.result}</p>
            </div>
            <div className="latest-match-logo-con">
              <img
                src={updatedData.competingTeamLogo}
                alt={`latest match ${updatedData.competingTeam}`}
                className="latest-match-logo"
              />
            </div>
          </div>

          <div className="latest-paras-con">
            <p className="latest-paras">First Innings</p>
            <p className="latest-paras">{updatedData.firstInnings}</p>
            <p className="latest-paras">Second Innings</p>
            <p className="latest-paras">{updatedData.secondInnings}</p>
            <p className="latest-paras">Man Of The Match</p>
            <p className="latest-paras">{updatedData.manOfTheMatch}</p>
            <p className="latest-paras">Umpires</p>
            <p className="latest-paras">{updatedData.umpires}</p>
          </div>
        </div>
      </>
    )
  }
}

export default LatestMatch
