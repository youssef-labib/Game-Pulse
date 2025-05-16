import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGameContext } from '../../context/GameContext'

// const allGames = {
//     gta6: {
//         title: "GTA VI",
//         cover: "https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2FJason_and_Lucia_01_With_Logos_landscape.8596f77a.jpg&w=1920&q=75",
//         description: "Experience the next chapter in the Grand Theft Auto series with a sprawling open world, gripping story, and endless chaos.",
//         genre: "Action, Adventure",
//         developer: "Rockstar Games",
//         price: "$69.99",
//         release: "2025",
//         platforms: ["PC", "PS5", "Xbox Series X/S"]
//     },
//     eldenring: {
//         title: "Elden Ring",
//         cover: "https://i.pinimg.com/736x/ed/f5/b9/edf5b9bf25c1d189b04e7c9ed6bee7aa.jpg",
//         description: "Embark on a journey through the Lands Between in this epic fantasy action RPG.",
//         genre: "RPG, Fantasy",
//         developer: "FromSoftware",
//         price: "$59.99",
//         release: "2022",
//         platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
//     },
//     cyberpunk2077: {
//         title: "Cyberpunk 2077",
//         cover: "https://i.pinimg.com/736x/73/f6/86/73f686e3c62e5982055ce34ed5c331b9.jpg",
//         description: "A story-driven, open world RPG set in the vibrant and dangerous Night City.",
//         genre: "RPG, Sci-Fi",
//         developer: "CD Projekt Red",
//         price: "$49.99",
//         release: "2020",
//         platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
//     },
//     witcher3: {
//         title: "The Witcher 3",
//         cover: "https://i.pinimg.com/736x/90/08/08/900808f5dd6f00757562d85d61323569.jpg",
//         description: "Become Geralt of Rivia, a monster slayer for hire, in a vast, story-rich open world.",
//         genre: "RPG, Fantasy",
//         developer: "CD Projekt Red",
//         price: "$39.99",
//         release: "2015",
//         platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Switch"]
//     },
//     rdr2: {
//         title: "Red Dead Redemption 2",
//         cover: "https://i.pinimg.com/736x/14/43/01/1443013dd13d5a9d7483e42ad9dae720.jpg",
//         description: "An epic tale of life in America at the dawn of the modern age.",
//         genre: "Action, Western",
//         developer: "Rockstar Games",
//         price: "$59.99",
//         release: "2018",
//         platforms: ["PC", "PS4", "Xbox One"]
//     },
//     hogwartslegacy: {
//         title: "Hogwarts Legacy",
//         cover: "https://i.pinimg.com/736x/2d/30/c6/2d30c6c47b35589382427b5bddf9b999.jpg",
//         description: "Experience Hogwarts in the 1800s and shape your own legacy.",
//         genre: "RPG, Fantasy",
//         developer: "Avalanche Software",
//         price: "$69.99",
//         release: "2023",
//         platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Switch"]
//     },
//     gowragnarok: {
//         title: "God of War: Ragnarok",
//         cover: "https://i.pinimg.com/736x/ce/8b/83/ce8b8349a2b94a043c2e3e2a1f2e32e4.jpg",
//         description: "Join Kratos and Atreus as they face Ragnarok in the Norse realms.",
//         genre: "Action, Adventure",
//         developer: "Santa Monica Studio",
//         price: "$69.99",
//         release: "2022",
//         platforms: ["PS4", "PS5"]
//     },
//     spiderman2: {
//         title: "Spider-Man 2",
//         cover: "https://i.pinimg.com/736x/cd/0d/05/cd0d0588e15b584d146560573104bf74.jpg",
//         description: "Swing through New York as Peter Parker and Miles Morales in this superhero adventure.",
//         genre: "Action, Superhero",
//         developer: "Insomniac Games",
//         price: "$69.99",
//         release: "2023",
//         platforms: ["PS5"]
//     },
//     acmirage: {
//         title: "Assassin's Creed Mirage",
//         cover: "https://i.pinimg.com/736x/39/21/8a/39218a22d0223c88c83efff0270e7fad.jpg",
//         description: "Experience the story of Basim in a vibrant Baghdad.",
//         genre: "Action, Stealth",
//         developer: "Ubisoft",
//         price: "$59.99",
//         release: "2023",
//         platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
//     },
//     re4remake: {
//         title: "Resident Evil 4 Remake",
//         cover: "https://i.pinimg.com/736x/f0/04/08/f0040864332165310fd9e890897e59c2.jpg",
//         description: "A modern reimagining of the survival horror classic.",
//         genre: "Horror, Survival",
//         developer: "Capcom",
//         price: "$59.99",
//         release: "2023",
//         platforms: ["PC", "PS4", "PS5", "Xbox Series X/S"]
//     },
//     starfield: {
//         title: "Starfield",
//         cover: "https://i.pinimg.com/736x/a3/e0/b2/a3e0b286750a89b66bf6facdcc9c04ca.jpg",
//         description: "Explore the stars in Bethesda's first new universe in 25 years.",
//         genre: "RPG, Sci-Fi",
//         developer: "Bethesda Game Studios",
//         price: "$69.99",
//         release: "2023",
//         platforms: ["PC", "Xbox Series X/S"]
//     },
//     alanwake2: {
//         title: "Alan Wake 2",
//         cover: "https://i.pinimg.com/736x/fa/1e/71/fa1e71d8344bd3dccd5425642ca8678a.jpg",
//         description: "A psychological horror sequel with a gripping narrative.",
//         genre: "Horror, Thriller",
//         developer: "Remedy Entertainment",
//         price: "$59.99",
//         release: "2023",
//         platforms: ["PC", "PS5", "Xbox Series X/S"]
//     },
//     fc25: {
//         title: "EA Sports FC 25",
//         cover: "https://wallpapercave.com/wp/wp14245616.jpg",
//         description: "The next evolution of football gaming from EA Sports.",
//         genre: "Sports, Football",
//         developer: "EA Sports",
//         price: "$69.99",
//         release: "2024",
//         platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
//     },
//     forzamotorsport: {
//         title: "Forza Motorsport",
//         cover: "https://wallpapercave.com/wp/wp11409994.jpg",
//         description: "Race with stunning realism in the latest Forza Motorsport.",
//         genre: "Racing, Simulation",
//         developer: "Turn 10 Studios",
//         price: "$69.99",
//         release: "2023",
//         platforms: ["PC", "Xbox Series X/S"]
//     },
//     baldursgate3: {
//         title: "Baldur's Gate 3",
//         cover: "https://wallpapercave.com/wp/wp7527536.jpg",
//         description: "A next-generation RPG set in the world of Dungeons & Dragons.",
//         genre: "RPG, Fantasy",
//         developer: "Larian Studios",
//         price: "$59.99",
//         release: "2023",
//         platforms: ["PC", "PS5", "Mac"]
//     }
// };

const GameDetails = () => {
    const { selectedGameId, setSelectedGameId, getFullGameDetails } = useGameContext()
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