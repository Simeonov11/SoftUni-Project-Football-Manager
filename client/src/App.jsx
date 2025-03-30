import './App.css'
import { Routes, Route } from 'react-router'

import UserProvider from './components/providers/UserProvider.jsx'

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
import Logout from './components/logout/Logout.jsx'
import AuthGuard from './components/guards/AuthGuard.jsx'
import MatchInfoProvider from './components/providers/MatchInfoProvider.jsx'

function App() {
    return (
        <>
            <UserProvider>
            <MatchInfoProvider>
                <Header />
                <main id="main">
                    <Routes>
                        <Route element={<AuthGuard />}>
                            <Route path="/matches/create" element={<MatchCreate />}/>
                            <Route path="/matches/:matchId/edit" element={<MatchEdit />} />
                            <Route path="/players/create" element={<PlayerCreate />} />
                            <Route path="/players/:playerId/edit" element={<PlayerEdit />} />
                            <Route path="/logout" element={<Logout />} />
                        </Route>
                        <Route path="/" element={<Matches />} />
                        <Route path="/players" element={<Players />} />
                        <Route path="/matches/:matchId/details" element={<MatchDetails />} />
                        <Route path="/players/:playerId/details" element={<PlayerDetails />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="*" element={<PageNotFound404 />} />
                    </Routes>
                </main>
                <Footer />
            </MatchInfoProvider>
            </UserProvider>
        </>
    )
}

export default App
