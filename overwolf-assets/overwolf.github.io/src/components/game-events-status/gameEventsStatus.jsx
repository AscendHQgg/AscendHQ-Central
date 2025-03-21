import React from 'react';
import { stateToCss } from './events-utils';
import './game-list.scss';

// ---------------------------------------------------------------------------
function GameListItem(props) {
  const { className, path, imgSrc, text, gameID } = props;
  return (
    <li className={className}>
      <a href={path}>
        <div className='game-box'>
          <div className='asset'>
            <img src={imgSrc}  /> 
          </div>
          <div className='content'>
            <span className='game-info'>{text}</span>
            <span className='game-id'>Game ID: <span>{gameID}</span></span>
          </div>
        </div>
        
      </a>
    </li>
  );
}
// ---------------------------------------------------------------------------

function renderGameList(gameListData, urlAsDocsPath) {

  const gameListItems = gameListData.map(game => {
    let className = 'game ' + stateToCss(game.state);

    return <GameListItem
      key={game.id}
      gameID={game.displayId || game.id}
      className={className}
      path={urlAsDocsPath ? game.docs : game.path}
      imgSrc={game.iconUrl}
      text={game.name}
    />
  });

  return gameListItems;

}
// ---------------------------------------------------------------------------

function GameEventsStatus(props) {
  const { gameListData, urlAsDocsPath } = props;

  const gameList = renderGameList(gameListData, urlAsDocsPath);

  gameList.sort((a, b) => {
    return a.props.text < b.props.text ? -1 : 1;
  })

  // ---------------------------------------------------------------------------
  return (
    <article>
      <div className="gep-games-list">
      <ul className="legend">
        <li className="good">Good to go</li>
        <li className="medium">May be unavailable</li>
        <li className="bad">Currently unavailable</li>
        <li className="unsupported">Unsupported</li>
      </ul>

        <ul className="list">
          {gameList}
        </ul>
      </div>
    </article>
  );

}

export default GameEventsStatus;

