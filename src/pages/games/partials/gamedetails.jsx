import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGameContext } from '../../../context/GameContext'

const GameDetails = () => {
    const { selectedGameId, getFullGameDetails } = useGameContext()
    const navigate = useNavigate()
    
    const game = getFullGameDetails(selectedGameId)
    
    if (!game) {
        return (
            <div className="error-container">
                <h1 className="error-h1">Game Not Found</h1>
                <p className="error-p">
                    Sorry, we couldn't find the game you're looking for. 
                    <a href="" onClick={(e) => { e.preventDefault(); navigate('/') }}> Return to homepage</a>
                </p>
            </div>
        )
    }

    return (
        <>
            <div className="gd-container">
                <div className="gd-cover" style={{ backgroundImage: `url(${game.cover})` }}>
                    <div className="gd-overlay">
                        <div className="gd-info">
                            <h1 className="gd-title">{game.title}</h1>
                            <p className="gd-description">{game.description}</p>
                            <div className="gd-infos">
                                <span><strong>Genre:</strong> {game.genre}</span>
                                <span><strong>Developer:</strong> {game.developer}</span>
                                <span><strong>Release:</strong> {game.release}</span>
                                <span><strong>Price:</strong> ${game.price}</span>
                                <span><strong>Platforms:</strong> {game.platforms.join(", ")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameDetails