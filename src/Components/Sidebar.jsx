import { useHistory } from 'react-router-dom'
import { BiHome } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import '../Styles/Components/sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const { goBack } = useHistory()

    return(
        <aside className='app-sidebar'>
            <footer>
                <button type='button' onClick={goBack}>            
                    <BiHome size={26} color='#FFF'/>
                </button>
            </footer>
            <Link to='/apresentacao' className='button-sidebar'>
                    <BsPerson size={28} color ='#FFF'/>
            </Link>
        </aside>
    )
}

export default Sidebar