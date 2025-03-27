import './App.css'
import { Routes, Route } from 'react-router'

import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import Matches from './components/matches/Matches.jsx'
import Players from './components/players/Players.jsx'
import MatchCreate from './components/match-create/MatchCreate.jsx'
import PlayerCreate from './components/player-create/PlayerCreate.jsx'
import Contacts from './components/contacts/Contacts.jsx'
import About from './components/about/About.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import MatchDetails from './components/match-details/MatchDetails.jsx'

function App() {

    return (
        <>
            <Header />
            <main id="main">
                <Routes>
                    <Route path="/" element={<Matches />} />
                    <Route path="/players" element={<Players />} />
                    <Route path="/matches/create" element={<MatchCreate />} />
                    <Route path="/matches/:matchId/details" element={<MatchDetails />} />
                    <Route path="/player/create" element={<PlayerCreate />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default App
