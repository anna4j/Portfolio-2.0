import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import ProjectLanding from '../components/ProjectLanding'


export default () => (
    <Layout>
        <Head>
            <title>Projects</title>
            <meta name="description" content="Projects" />
        </Head>

        <div>
            <ProjectLanding />

            <div id="main">

                <section id="two" className="spotlights">
                    <section>
                        <Link href="">
                            <a className="image"><img src="/static/images/pic10.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Farm Aid Application</h3>
                                </header>
                                <h4>Technology Stack</h4>

                                <p> Uses ARIMA Time Series Forecasting to predict district wise Crop Yield in advance, for major produced crops in India.</p>
                                <p> Remote sensing NDVI data available for various Indian Districts was used for model-training. Attained MSE less than 0.2</p>
                                <p> Uses Android for User-Interface and Flask for Model API deployment. API hosted on Azure platform.</p>
                                <p> Uses DialogFlow chatbot by Google Cloud for answering user queries.</p>


                                <ul className="actions">
                                    <li><Link href="https://docs.google.com/presentation/d/1f2-bG_s6g5MnjcBrruXQkoc5zLp4T6DfQV6S4CrUZJM/edit?usp=sharing"><a target="_blank" className="button">Learn More</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic09.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h4>Impact – To improve current condition of Indian Farmers
                                        </h4></header>
                                <p> Impactful for Government officials to prepare a proper procurement plan and manage ground-level logistics duringharvesting season.</p>

                                <p> Can improve Food Security and help prevent Famine in India.</p>
                                <ul className="actions">
                                    <li><Link href="https://docs.google.com/presentation/d/1f2-bG_s6g5MnjcBrruXQkoc5zLp4T6DfQV6S4CrUZJM/edit?usp=sharing"><a target="_blank" className="button">Learn More</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
