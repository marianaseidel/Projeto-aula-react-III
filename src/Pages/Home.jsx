import { Link } from 'react-router-dom'
import { BsPerson } from 'react-icons/bs'
import { BiCameraMovie } from 'react-icons/bi'
import '../Styles/Pages/home.css'

const Home = () => {
    return(
        <div id='landing-page'>
            <div className='content-wrapper'>
                <main>
                    <h1>O que eu faço pra relaxar</h1>
                    <p>As melhores indicações de séries e filmes!</p>
                </main>
                <Link to='/filmes' className='enter-app'>
                    <BiCameraMovie size={35} color='#FFF'/>
                </Link>
                <Link to='/apresentacao' className='enter-apresentacao'>
                    <BsPerson size={35} color='#FFF'/>
                </Link>
            </div>
        </div>
    )
}

export default Home