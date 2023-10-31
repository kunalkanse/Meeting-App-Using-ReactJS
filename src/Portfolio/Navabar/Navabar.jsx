

import './Navbar.css'

const Navbar = () => {
    return (
        <div className="main-div">
            <nav className="main-nav">
                <article className="main-article">
                    <section className="navsec1">
                        <h1 className="SD">SD</h1>
                    </section>

                    <section className="navsec2">
                        <div className="navsec2div">Home</div>
                        <div className="navsec2div">About</div>
                        <div className="navsec2div">Projects</div>
                        <div className="navsec2div">Contact</div>
                    </section>

                    <section className="navsec3">
                        <div className="navsec3div"><i class="fa-brands fa-facebook"></i></div>
                        <div className="navsec3div"><i class="fa-brands fa-linkedin"></i></div>
                        <div className="navsec3div"><i class="fa-brands fa-twitter"></i></div>
                    </section>
                </article>
            </nav>
        </div >
    )
}

export default Navbar