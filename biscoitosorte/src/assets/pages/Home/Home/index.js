import { Link } from 'react-router-dom';
    
    function Home(){
        return (
            <div> 
                <h1>Bem-vindo à página HOME</h1>

                <lINK tO='/sobre'>Sobre</lINK>
                <lINK tO='/contato'>Contato</lINK>

            </div>
        )
    }

    export default Home;