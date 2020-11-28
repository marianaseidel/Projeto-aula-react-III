import { BiHome } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import '../Styles/Components/sidebar.css'

const SidebarDois = () => {
    return(
        <aside className='app-sidebar'>
            <footer>
                <Link to='/'>
                    <BiHome size={26} color='#FFF'/>
                </Link>
            </footer>
        </aside>
    )
}

export default SidebarDois