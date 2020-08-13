import PropTypes from 'prop-types';

const Contact = (props) => (


    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Do you like my work?</h1>
            </header>
            <div className="content">
                <p>I'm looking for opportunities to colabborate on! Especially Machine Learning problems and Web Development projects. </p>
                <nav>
                    <ul className="actions">
                        <li> <a href="mailto:anushkajadhav004@gmail.com" className="button next scrolly">Get in Touch</a></li>
                    </ul>
                </nav>

            </div>
        </div>
    </section>
)
Contact.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Contact
