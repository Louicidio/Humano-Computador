import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <h2>Pedro</h2>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/contato'>Contato</Link>
            </div>
        </header>
    );
}

export default Header;