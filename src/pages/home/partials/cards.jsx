import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGameContext } from '../../../context/GameContext'

class Game {
    constructor(title, id, cover, price, genres, developer) {
        this.title = title
        this.id = id
        this.cover = cover
        this.price = price
        this.genres = genres
        this.developer = developer
    }
}

let gtaIvImg = "https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2FJason_and_Lucia_01_With_Logos_square.35d8f26b.jpg&w=1920&q=75"
let eldenRingImg = "https://i.pinimg.com/736x/7f/55/b7/7f55b7ec89f511c6b893764eb9c61eb7.jpg"
let cyberPunkImg = "https://i.pinimg.com/736x/6f/6c/b3/6f6cb3ba42bd3af60e4dc9b0166154df.jpg"
let theWitcherImg = "https://i.pinimg.com/736x/59/ea/0f/59ea0fd305be36d193f86f335f80fc63.jpg"
let redDeadRedemptionImg = "https://i.pinimg.com/736x/b2/9f/b7/b29fb78c642427d2e1e3c66fb63ce40b.jpg"
let hogwartsLegacyImg = "https://i.pinimg.com/736x/4b/49/fa/4b49fa5acc0dbebdbbeeb8ba249f0b04.jpg"
let godOfWarRagnarokImg = "https://i.pinimg.com/736x/ef/1d/29/ef1d29da15907dabb2b8d4258696c207.jpg"
let spiderManTwoImg = "https://i.pinimg.com/736x/fa/16/86/fa1686e854ade512a391cc437b9fb335.jpg"
let assassinsCreedMirageImg = "https://i.pinimg.com/736x/96/92/12/9692120bef88e98cde32d38aeb4ab4dd.jpg"
let residentEvilFourRemakeImg = "https://i.pinimg.com/736x/e5/19/4d/e5194d347a549a4d4aa594f3da7704ee.jpg"
let starfieldImg = "https://i.pinimg.com/736x/36/54/70/3654707055e715643635d855e9cbabea.jpg"
let alanWakeTwoImg = "https://i.pinimg.com/736x/88/80/5d/88805d3ad377a65adff3fcae8dc88523.jpg"
let fc25Img = "https://i.pinimg.com/736x/03/12/a8/0312a82b5a31474dab63f2a99e40eff6.jpg"
let forzaMotorsportImg = "https://i.pinimg.com/736x/83/61/7a/83617a2251c061ee3c6a7527c4b2706d.jpg"
let baldurGate3Img = "https://i.pinimg.com/736x/2e/7f/11/2e7f11673719ffb0251ae7ed465d0f0e.jpg"

let gtaIvObject = new Game("GTA VI", "gta6", gtaIvImg, 69.99, ["action", "adventure"], "Rockstar Games")
let eldenRingObject = new Game("Elden Ring", "eldenring", eldenRingImg, 59.99, ["rpg", "fantasy"], "FromSoftware")
let cyberPunkObject = new Game("Cyberpunk 2077", "cyberpunk2077", cyberPunkImg, 49.99, ["rpg", "sci-fi"], "CD Projekt Red")
let theWitcherObject = new Game("The Witcher 3", "witcher3", theWitcherImg, 39.99, ["rpg", "fantasy"], "CD Projekt Red")
let redDeadRedemptionObject = new Game("Red Dead Redemption 2", "rdr2", redDeadRedemptionImg, 59.99, ["action", "western"], "Rockstar Games")
let hogwartsLegacyObject = new Game("Hogwarts Legacy", "hogwartslegacy", hogwartsLegacyImg, 69.99, ["rpg", "fantasy"], "Avalanche Software")
let godOfWarRagnarokObject = new Game("God of War: Ragnarok", "gowragnarok", godOfWarRagnarokImg, 69.99, ["action", "adventure"], "Santa Monica Studio")
let spiderManTwoObject = new Game("Spider-Man 2", "spiderman2", spiderManTwoImg, 69.99, ["action", "superhero"], "Insomniac Games")
let AssassinsCreedMirageObject = new Game("Assassin's Creed Mirage", "acmirage", assassinsCreedMirageImg, 59.99, ["action", "stealth"], "Ubisoft")
let ResidentEvilFourRemakeObject = new Game("Resident Evil 4 Remake", "re4remake", residentEvilFourRemakeImg, 59.99, ["horror", "survival"], "Capcom")
let starfieldObject = new Game("Starfield", "starfield", starfieldImg, 69.99, ["rpg", "sci-fi"], "Bethesda Game Studios")
let alanWakeTwoObject = new Game("Alan Wake 2", "alanwake2", alanWakeTwoImg, 59.99, ["horror", "thriller"], "Remedy Entertainment")
let fc25Object = new Game("EA Sports FC 25", "fc25", fc25Img, 69.99, ["sports", "football"],"EA Sports")
let forzaMotorsportObject = new Game("Forza Motorsport", "forzamotorsport", forzaMotorsportImg, 69.99, ["racing", "simulation"], "Turn 10 Studios")
let baldurGate3Object = new Game("Baldur's Gate 3", "baldursgate3", baldurGate3Img, 59.99, ["rpg", "fantasy"], "Larian Studios")

let games = [
    gtaIvObject,
    eldenRingObject,
    cyberPunkObject,
    theWitcherObject,
    redDeadRedemptionObject,
    hogwartsLegacyObject,
    godOfWarRagnarokObject,
    spiderManTwoObject,
    AssassinsCreedMirageObject,
    ResidentEvilFourRemakeObject,
    starfieldObject,
    alanWakeTwoObject,
    fc25Object,
    forzaMotorsportObject,
    baldurGate3Object
]

const CardsSection = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const { setSelectedGameId } = useGameContext()

    const filteredGames = games.filter(game =>
        game.title.toLowerCase().includes(search.toLowerCase())
    )
    
    const handleGameClick = (e, gameId) => {
        e.preventDefault()
        setSelectedGameId(gameId)
        navigate('/games/' + gameId)
    }

    return (
        <>
            <h1 className='cards-title'>Discover Games</h1>
            <input className='cards-input' type="text" placeholder="Search games..." value={search} onChange={e => setSearch(e.target.value)}/>
            <div className="cards-container">
                {filteredGames.map((game) => (
                    <div className="card" key={game.id}>
                        <div className="card-img">
                            <img src={game.cover} alt={game.title} style={{ width: "100%", borderRadius: "8px 8px 0 0" }} />
                        </div>
                        <div className="card-details">
                            <div className="top-card-details">
                                <h2 className='game-title'>{game.title}</h2>
                                <p className='game-price'>Price: ${game.price}</p>
                            </div>
                            <p className='game-genre'>Genres: {game.genres.join(", ")}</p>
                            <p className='game-developer'>Developer: {game.developer}</p>
                            <a href="#" onClick={(e) => handleGameClick(e, game.id)} className="explore-btn">Explore More</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export { games }
export default CardsSection