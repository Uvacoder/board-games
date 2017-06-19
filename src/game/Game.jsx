import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip'
import './Game.css';

class Game extends Component {
  render() {

    const {
        id,
        players,
        title,
        custom,
        expansions
    } = this.props;

    const renderPlayers = (players) => {
      let output = players.min;
      if (players.min !== players.max) {
        output += !players.max ? '+' : ` - ${players.max}`
      }
      return output;
    };
    
    const renderExpansions = (expansions) => {
      return expansions.map((expansion) => (`<div class="expansion">${expansion[0]}</div>`)).reduce((acc, val) => acc + val);
    };

    return (
        <div className="game">
          <div className="cover" >
            <img src={`cover/${id}.jpg`} alt={title}/>
          </div>
          <div className="description">
            <div className="title">
              {custom && title}
              {!custom && <a href={`https://boardgamegeek.com/boardgame/${id}`} target="_blank" rel="noopener noreferrer">{title}</a>}
            </div>

            <div className="meta">
              {expansions &&
              <div className="expansions" data-tip={renderExpansions(expansions)}>
                <img src="img/expansions.png" alt="Expansions" />
              </div>

              }
              <div className="players">
                {renderPlayers(players)}
              </div>
              <ReactTooltip
                  className="tooltip"
                  effect="solid"
                  place="bottom"
                  type="info"
                  html={true}/>
            </div>
          
          </div>
        </div>
    );
  }
}

export default Game;
