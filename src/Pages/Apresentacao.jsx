import SidebarDois from '../Components/SidebarDois'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import '../Styles/Pages/apresentacao.css'

const Apresentacao = () => {
    return (
        <>
            <SidebarDois />
            <main className='main'>
                <div className='main-apresentacao'>
                    <img className='img-apresentacao' src="https://avatars2.githubusercontent.com/u/70062295?s=460&u=e42d665dcd5cca07e1bc5ce2b09559dedc3ec53b&v=4" alt="imagem Mariana Seidel"/>
                    <h1>Olá, sou Mariana Seidel!</h1>
                </div>
                <div className='p-apresentacao'>
                    <p>Sou de Recife, tenho 25 anos e sou formada em Arquitetura e Urbanismo. Atualmente estou fazendo o curso de Front-End da Reprograma, e cada dia querendo aprender um pouco mais sobre tecnologia! Trabalho na In Loco, em um time operacional como analista de places, qualificando a base de dados da empresa por meio da análise de informações e distribuição de dados de forma integrada com outras equipes.</p>
                    </div>
                <div className='links-apresentacao'>
                    <a className='link' target='blank' href='https://www.linkedin.com/in/mariana-seidel-444023193/'>
                        <AiFillLinkedin size={35} color='#1e4263'/>
                        <h4>Linkedin</h4>
                    </a>    
                    <a className='link' target='blank' href='https://www.instagram.com/marianaseidel/'>
                        <AiFillInstagram size={35} color='#1e4263'/>
                        <h4>Instagram</h4>
                    </a>   
                    <a className='link' target='blank' href='https://www.facebook.com/mariana.seidel'>
                        <AiFillFacebook size={35} color='#1e4263'/>
                        <h4>Facebook</h4>
                    </a>   
                    <a className='link' target='blank' href='https://github.com/marianaseidel'>
                        <AiFillGithub size={35} color='#1e4263'/>
                        <h4>GitHub</h4>
                    </a>   
                </div>
            </main>
        </>
    )

}

export default Apresentacao