
import { Link } from 'react-router';

export default function Header() {
    return (
        <>
            <header id="header">
                <nav className="bg-[#c6ff0a]">
                    <ul className="flex justify-center text-xl">
                        <li><Link to="/" className="mx-auto flex items-center justify-center px-8 py-3 hover:bg-green-300">Matches</Link></li>
                        <li><Link to="/matches/create" className="mx-auto flex items-center justify-center px-3 py-3 hover:bg-green-300">Create Match</Link></li>
                        <li><Link to="/players" className="mx-auto flex items-center justify-center px-3 py-3 hover:bg-green-300">Players</Link></li>
                        <li><Link to="players/create" className="mx-auto flex items-center justify-center px-3 py-3 hover:bg-green-300">Create Player</Link></li>
                        <li><Link to="contacts" className="mx-auto flex items-center justify-center px-3 py-3 hover:bg-green-300">Contacts</Link></li>
                        <li><Link to="about" className="mx-auto flex items-center justify-center px-3 py-3 hover:bg-green-300">About</Link></li>
                        <li><Link to="login" className="mx-auto flex items-center justify-center px-3 py-3 hover:bg-green-300">Login</Link></li>
                        <li><Link to="register" className="mx-auto flex items-center justify-center px-3 py-3 hover:bg-green-300">Register</Link></li>
                        <li><Link to="logout" className="mx-auto flex items-center justify-center px-3 py-3 hover:bg-green-300">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}