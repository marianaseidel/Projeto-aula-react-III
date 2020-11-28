import { useState, useEffect } from 'react'
import filmes from '../Services/dados'
import Sidebar from '../Components/Sidebar'
import { CgSearchLoading } from 'react-icons/cg'
import '../Styles/Pages/filmes.css'


const Filmes = () => {
    const [busca, setBusca] = useState('')
    const [filtro, setFiltro] = useState([])

    useEffect(() => {
        setFiltro(
            filmes.filter(
                filme => {
                    return filme.nome.includes(busca)
            })
        )
    },[busca])

    const handleBusca = (e) =>{
        setBusca(e.target.value)      
    }

    return (
        <>
            <Sidebar />
            <div className='quadro-input'>
                <CgSearchLoading size={36} className='icone-lupa' />
                <input
                    type='text'
                    placeholder='  Faça sua busca de filmes e séries!'
                    className='input-filmes'
                    onChange={handleBusca}
                />
            </div>
            <div id='container'>
                {
                    filtro.map(filme => {
                        return (
                            <div key={filme.id} className='card'>
                                <h3>Título: {filme.nome}</h3>
                                <p>Gênero: {filme.descricao}</p>
                                <img src={filme.imagem} alt='capa de filme' />
                            </div>
                        )
                    })
                }
                <div className='quadro-filmes'>
                    <a target='blank' href='http://www.adorocinema.com/'>
                        <h3 className='texto-filmes'>Quer saber mais sobre lançamentos de filmes?</h3>
                        <h4 className='texto-filmes'>Acesse aqui!</h4>
                    </a>
                    <div className='img-filmes'></div>
                </div>
            </div>
        </>
    )
}

export default Filmes