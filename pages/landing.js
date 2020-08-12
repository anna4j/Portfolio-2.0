import Head from "next/head"
import Link from 'next/link'
import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'
import SkillBar from '../components/SkillBar'


const testData = [
    { bgcolor: "#cfa4ed", completed: 80, text: "Data Structures and Algorithms in C++" },
    { bgcolor: "#aa6bd6", completed: 85, text: "Git/GitHub" },
    { bgcolor: "#8035b5", completed: 85, text: "HTML5, CSS3, BootStrap" },
    { bgcolor: "#cfa4ed", completed: 70, text: "JavaScript (ES6)" },
    { bgcolor: "#aa6bd6", completed: 65, text: "React.js" },
    { bgcolor: "#8035b5", completed: 85, text: "Node.js" },
    { bgcolor: "#cfa4ed", completed: 60, text: "MongoDB" },

];


export default () => (



    <Layout>
        <Head>
            <title>Landing Page</title>
            <meta name="description" content="Landing Page" />
        </Head>

        <div>
            <BannerLanding />

            <div id="main">


                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Highlights</h2>
                        </header>
                        <p>- Won the First Prize at Smart India Hackathon 2020 Software Edition</p>
                        <p>- Recipient of the Google APAC Women Techmakers Scholarship 2020</p>
                        <p>- Open Source Contributor at AnitaB.Org</p>

                    </div>
                </section>

                <section id="two" className="spotlights">

                    <section>
                        <Link href="">
                            <a className="image"><img src="/static/images/pic08.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>All things Professional</h3>
                                </header>
                                <p>I'm a MERN Stack Developer from New Delhi, India. I have previously worked with the GirlScript Foundation as a Web Developer and Project Manager. I am an Open Source Contributor at AnitaB.Org Open Source on their React-Native and Python Projects. I have also worked in the Machine Learning domain as an Intern at Predikly Technologies, Pune.</p>
                                <ul className="actions">
                                    <li><Link href="https://drive.google.com/file/d/1gunvU74IUDkg0LL8Te7JmFGWyEIug-_2/view?usp=sharing"><a target="_blank" className="button">My Résumé  </a></Link></li>
                                </ul>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">My Projects</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>



                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic06.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Skills and Interests</h3>
                                </header>
                                <div >
                                    {testData.map((item, idx) => (
                                        <SkillBar key={idx} bgcolor={item.bgcolor} completed={item.completed} text={item.text} />
                                    ))}
                                </div>
                                <br />
                                <br />

                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
