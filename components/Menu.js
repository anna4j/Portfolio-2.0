import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="/"><a><span onClick={props.onToggleMenu}>Home</span></a></Link></li>
                <li><Link href="/landing"><a><span onClick={props.onToggleMenu}>About</span></a></Link></li>
                <li><Link href="/generic"><a><span onClick={props.onToggleMenu}>Work</span></a></Link></li>
                <li><Link href="/elements"><a><span onClick={props.onToggleMenu}>Contact</span></a></Link></li>
            </ul>

        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
