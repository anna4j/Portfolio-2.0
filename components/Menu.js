import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="/"><a><span onClick={props.onToggleMenu}>Home</span></a></Link></li>
                <li><Link href="/landing"><a><span onClick={props.onToggleMenu}>About Me</span></a></Link></li>
                <li><Link href="/generic"><a><span onClick={props.onToggleMenu}>Projects</span></a></Link></li>
                <li><Link href="https://medium.com/@AnushkaJadhav"><a target="_blank"><span onClick={props.onToggleMenu}>My Blogs</span></a></Link></li>
                <li><Link href="mailto:anushkajadhav004@gmail.com"><a><span onClick={props.onToggleMenu}>Contact</span></a></Link></li>
            </ul>

        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
