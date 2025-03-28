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
import MatchEdit from './components/match-edit/MatchEdit.jsx'
import PageNotFound404 from './components/page-not-found/PageNotFound404.jsx'
import PlayerDetails from './components/player-details/PlayerDetails.jsx'
import PlayerEdit from './components/player-edit/PlayerEdit.jsx'
import { useState } from 'react'

function App() {
    const [email, setEmail] = useState();

    const userLoginHandler = (authData) => {
        setEmail(authData.email);
        console.log(authData);
    };

    return (
        <>
            <Header />
            <main id="main">
                <Routes>
                    <Route path="/" element={<Matches />} />
                    <Route path="/players" element={<Players />} />
                    <Route path="/matches/create" element={<MatchCreate />} />
                    <Route path="/matches/:matchId/details" element={<MatchDetails email={email} />} />
                    <Route path="/matches/:matchId/edit" element={<MatchEdit />} />
                    <Route path="/players/create" element={<PlayerCreate />} />
                    <Route path="/players/:playerId/details" element={<PlayerDetails />} />
                    <Route path="/players/:playerId/edit" element={<PlayerEdit />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login onLogin={userLoginHandler} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<PageNotFound404 />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default App
