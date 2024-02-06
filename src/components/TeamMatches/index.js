import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const teamMatchesApiUrl = 'https://apis.ccbp.in/ipl/'

class TeamMatches extends Component {
  state = {
    cardData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`${teamMatchesApiUrl}${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      recentMatches: data.recent_matches,
      latestMatchDetails: data.latest_match_details,
    }

    this.setState({cardData: updatedData, isLoading: false})
  }

  renderCardsItemDetails = () => {
    const {cardData} = this.state
    const {latestMatchDetails, recentMatches} = cardData

    return (
      <div className="matches-bg">
        <div>
          <img
            src={cardData.teamBannerUrl}
            alt="team banner"
            className="team_banner_url"
          />
        </div>
        <LatestMatch data={latestMatchDetails} />
        <ul>
          {recentMatches.map(eachItem => (
            <MatchCard matchCard={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>{this.renderCardsItemDetails()}</div>
        )}
      </>
    )
  }
}

export default TeamMatches
