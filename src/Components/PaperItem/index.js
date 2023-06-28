import './index.css'
import {Component} from 'react'

class GameItem extends Component {
  render() {
    const {item, func, choicesList} = this.props
    const yourItem = () => {
      func(item.id, choicesList)
    }
    let testid = ''
    switch (item.id) {
      case 'ROCK':
        testid = 'rockButton'
        break
      case 'SCISSORS':
        testid = 'scissorsButton'
        break
      default:
        testid = 'paperButton'
        break
    }
    return (
      <div>
        <button
          type="button"
          className="imgbtn"
          onClick={yourItem}
          data-testid={testid}
        >
          <img src={item.imageUrl} alt={item.id} className="image" />
        </button>
      </div>
    )
  }
}
export default GameItem
