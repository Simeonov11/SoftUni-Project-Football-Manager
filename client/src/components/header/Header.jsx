
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';


export default function Header() {
    const {isAuthenticated, username} = useAuth();

    return (
        <>
            <header id="header">
                <nav className="bg-[#c6ff0a]">
                    <ul className="flex justify-center text-xl">
                        <li><Link to="/" className="mx-auto flex items-center justify-center px-8 py-3 hover:bg-green-300 rounded-lg">Matches</Link></li>
                        <li><Link to="/players" className="mx-auto flex items-center justify-center px-3 py-3 hover:bg-green-300 rounded-lg">Players</Link></li>
                        <li><Link to="about" className="mx-auto flex items-center justify-center px-3 py-3 hover:bg-green-300 rounded-lg">About</Link></li>
                        <li><Link to="contacts" className="mx-auto flex items-center justify-center px-3 py-3 hover:bg-green-300 rounded-lg">Contacts</Link></li>
                        {!isAuthenticated
                            ? (
                                <>
                                    <li><Link to="login" className="mx-auto flex items-center justify-center px-3 py-3 hover:bg-green-300 rounded-lg">Login</Link></li>
                                    <li><Link to="register" className="mx-auto flex items-center justify-center px-3 py-3 hover:bg-green-300 rounded-lg">Register</Link></li>
                                </>
                            )
                            : (
                                <>
                                    <li><Link to="/matches/create" className="mx-auto flex items-center justify-center px-3 py-3 hover:bg-green-300 rounded-lg">Create Match</Link></li>
                                    <li><Link to="players/create" className="mx-auto flex items-center justify-center px-3 py-3 hover:bg-green-300 rounded-lg">Create Player</Link></li>
                                    <li><Link to="logout" className="mx-auto flex items-center justify-center px-3 py-3 hover:bg-green-300 rounded-lg">Logout</Link></li>
                                    <li className="underline px-3 py-3">{username}</li>
                                </>
                            )
                        }
                    </ul>
                </nav>
            </header>
        </>
    );
}