import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{ backgroundImage: `url('/static/images/pic01.jpg')` }}>
                        <header className="major">
                            <h3>About Me</h3>
                            <p>A glimpse of what makes me a Developer.</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{ backgroundImage: `url('/static/images/pic02.jpg')` }}>
                        <header className="major">
                            <h3>Projects</h3>
                            <p>I love using Technology to help others!</p>
                        </header>
                        <Link href="/generic"><a className="link primary"></a></Link>
                    </article>
                    <article style={{ backgroundImage: `url('/static/images/pic03.jpg')` }}>
                        <header className="major">
                            <h3>Skills and Interests</h3>
                            <p>Everything that I do On and Off my laptop.</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{ backgroundImage: `url('/static/images/pic04.jpg')` }}>
                        <header className="major">
                            <h3>My Blogs</h3>
                            <p>I'm a Writer in the making.</p>
                        </header>
                        <Link href="https://medium.com/@AnushkaJadhav"><a target="_blank" className="link primary"></a></Link>
                    </article>
                </section>
            </div>
        </div>
    </Layout>
)
