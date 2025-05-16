import React, { createContext, useContext, useState } from 'react'
import { games } from '../pages/home/partials/cards'

const GameContext = createContext()

export const useGameContext = () => {
    return useContext(GameContext)
}

export const GameProvider = ({ children }) => {
    const [selectedGameId, setSelectedGameId] = useState()

    const gamesMap = games.reduce((acc, game) => {
        acc[game.id] = game
        return acc
    }, {})

    const selectedGame = selectedGameId ? gamesMap[selectedGameId] : null

    const gameDetails = {
        gta6: {
            description: "Experience the next chapter in the Grand Theft Auto series with a sprawling open world, gripping story, and endless chaos.",
            release: "2025",
            platforms: ["PC", "PS5", "Xbox Series X/S"]
        },
        eldenring: {
            description: "Embark on a journey through the Lands Between in this epic fantasy action RPG.",
            release: "2022",
            platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
        },
        cyberpunk2077: {
            description: "A story-driven, open world RPG set in the vibrant and dangerous Night City.",
            release: "2020",
            platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
        },
        witcher3: {
            description: "Become Geralt of Rivia, a monster slayer for hire, in a vast, story-rich open world.",
            release: "2015",
            platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Switch"]
        },
        rdr2: {
            description: "An epic tale of life in America at the dawn of the modern age.",
            release: "2018",
            platforms: ["PC", "PS4", "Xbox One"]
        },
        hogwartslegacy: {
            description: "Experience Hogwarts in the 1800s and shape your own legacy.",
            release: "2023",
            platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Switch"]
        },
        gowragnarok: {
            description: "Join Kratos and Atreus as they face Ragnarok in the Norse realms.",
            release: "2022",
            platforms: ["PS4", "PS5"]
        },
        spiderman2: {
            description: "Swing through New York as Peter Parker and Miles Morales in this superhero adventure.",
            release: "2023",
            platforms: ["PS5"]
        },
        acmirage: {
            description: "Experience the story of Basim in a vibrant Baghdad.",
            release: "2023",
            platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
        },
        re4remake: {
            description: "A modern reimagining of the survival horror classic.",
            release: "2023",
            platforms: ["PC", "PS4", "PS5", "Xbox Series X/S"]
        },
        starfield: {
            description: "Explore the stars in Bethesda's first new universe in 25 years.",
            release: "2023",
            platforms: ["PC", "Xbox Series X/S"]
        },
        alanwake2: {
            description: "A psychological horror sequel with a gripping narrative.",
            release: "2023",
            platforms: ["PC", "PS5", "Xbox Series X/S"]
        },
        fc25: {
            description: "The next evolution of football gaming from EA Sports.",
            release: "2024",
            platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"]
        },
        forzamotorsport: {
            description: "Race with stunning realism in the latest Forza Motorsport.",
            release: "2023",
            platforms: ["PC", "Xbox Series X/S"]
        },
        baldursgate3: {
            description: "A next-generation RPG set in the world of Dungeons & Dragons.",
            release: "2023",
            platforms: ["PC", "PS5", "Mac"]
        }
    }

    const getFullGameDetails = (id) => {
        if (!id || !gamesMap[id] || !gameDetails[id]) return null

        const basicInfo = gamesMap[id]
        const extendedInfo = gameDetails[id]

        return {
            ...basicInfo,
            description: extendedInfo.description,
            release: extendedInfo.release,
            platforms: extendedInfo.platforms,
            genre: basicInfo.genres.join(", ")
        }
    }

    const value = {
        games,
        gamesMap,
        selectedGameId,
        setSelectedGameId,
        selectedGame,
        getFullGameDetails
    }

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}