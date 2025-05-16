import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/home'
import Navbar from './layouts/navbar'
import ErrorPage from './pages/error/error'
import GameDetails from './pages/games/games'
import { GameProvider } from './context/GameContext'

const App = () => {
  return (
    <GameProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </GameProvider>
  )
}

export default App