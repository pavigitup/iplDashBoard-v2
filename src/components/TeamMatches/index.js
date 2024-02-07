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

  bgClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'sh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  renderCardsItemDetails = () => {
    const {cardData} = this.state
    const {latestMatchDetails, recentMatches} = cardData
    console.log('kkk', recentMatches)

    return (
      <div className={`matches-bg ${this.bgClassName()}`}>
        <div className="match-bg-con">
          <img
            src={cardData.teamBannerUrl}
            alt="team banner"
            className="team_banner_url"
          />
        </div>
        <div className="latest-bg">
          <LatestMatch data={latestMatchDetails} />
        </div>

        <ul className="match-card-con">
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
          <div data-testid="loader">
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
