import './index.css'
import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameItem from '../PaperItem'
import {Button} from './styledcom'

class RockPapers extends Component {
  state = {
    score: 0,
    playView: true,
    result: false,
    you: '',
    oponent: '',
    rtext: '',
  }

  getItem = (id, choicesList) => {
    const item = choicesList.filter(each => each.id === id)
    const yourrurl = item[0].imageUrl
    console.log(id, item[0])
    const num = Math.floor(Math.random() * 3)
    const opitem = choicesList[num]
    const opUrl = opitem.imageUrl
    if (id === 'ROCK') {
      if (opitem.id === 'ROCK') {
        this.setState({
          playView: false,
          result: true,
          you: yourrurl,
          oponent: opUrl,
          rtext: 'IT IS DRAW',
        })
      } else if (opitem.id === 'SCISSORS') {
        this.setState(prev => ({
          score: prev.score + 1,
          playView: false,
          result: true,
          you: yourrurl,
          oponent: opUrl,
          rtext: 'YOU WON',
        }))
      } else {
        this.setState(prev => ({
          score: prev.score - 1,
          playView: false,
          result: true,
          you: yourrurl,
          oponent: opUrl,
          rtext: 'YOU LOSE',
        }))
      }
    } else if (id === 'SCISSORS') {
      if (opitem.id === 'SCISSORS') {
        this.setState({
          playView: false,
          result: true,
          you: yourrurl,
          oponent: opUrl,
          rtext: 'IT IS DRAW',
        })
      } else if (opitem.id === 'PAPER') {
        this.setState(prev => ({
          score: prev.score + 1,
          playView: false,
          result: true,
          you: yourrurl,
          oponent: opUrl,
          rtext: 'YOU WON',
        }))
      } else {
        this.setState(prev => ({
          score: prev.score - 1,
          playView: false,
          result: true,
          you: yourrurl,
          oponent: opUrl,
          rtext: 'YOU LOSE',
        }))
      }
    } else if (id === 'PAPER') {
      if (opitem.id === 'PAPER') {
        this.setState({
          playView: false,
          result: true,
          you: yourrurl,
          oponent: opUrl,
          rtext: 'IT IS DRAW',
        })
      } else if (opitem.id === 'ROCK') {
        this.setState(prev => ({
          score: prev.score + 1,
          playView: false,
          result: true,
          you: yourrurl,
          oponent: opUrl,
          rtext: 'YOU WON',
        }))
      } else {
        this.setState(prev => ({
          score: prev.score - 1,
          playView: false,
          result: true,
          you: yourrurl,
          oponent: opUrl,
          rtext: 'YOU LOSE',
        }))
      }
    }
  }

  playAgain = () => {
    this.setState({
      playView: true,
      result: false,
      you: '',
      oponent: '',
      rtext: '',
    })
  }

  render() {
    const {choicesList} = this.props
    const {score, playView, result, you, oponent, rtext} = this.state
    return (
      <div className="bgContainer">
        <div className="gameCard">
          <div>
            <h1 className="candate">
              Rock <br />
              Paper
              <br />
              Scissors
            </h1>
          </div>
          <button type="button" className="button">
            <p className="score"> Score</p>
            <p className="score1">{score}</p>
          </button>
        </div>
        {playView && (
          <div className="buttons">
            {choicesList.map(each => (
              <GameItem
                item={each}
                key={each.id}
                func={this.getItem}
                choicesList={choicesList}
              />
            ))}
          </div>
        )}
        {result && (
          <div className="results">
            <div className="horizontal">
              <div className="first">
                <h1 className="headings">YOU</h1>
                <img src={you} alt="your choice" className="image" />
              </div>
              <div className="second">
                <h1 className="headings">OPPONENT</h1>
                <img src={oponent} alt="opponent choice" className="image" />
              </div>
            </div>
            <p className="heading">{rtext}</p>
            <Button type="button" onClick={this.playAgain}>
              Play Again
            </Button>
          </div>
        )}
        <Popup
          modal
          trigger={
            <div className="triggerbtn">
              <button className="trigger-button" type="button">
                RULES
              </button>
            </div>
          }
        >
          {close => (
            <>
              <div className="closeright">
                <button
                  type="button"
                  className="closebtn"
                  onClick={() => close()}
                >
                  <RiCloseLine className="close-icon" />
                </button>
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                  className="rulesview"
                />
              </div>
            </>
          )}
        </Popup>
      </div>
    )
  }
}
export default RockPapers
