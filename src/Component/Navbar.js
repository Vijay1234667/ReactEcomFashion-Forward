import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import {  Link } from "react-router-dom";
function NavBar() {
    return (
        <>
            <section className="navbar-section">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <a className="fs-3 hammer" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                            aria-controls="offcanvasExample">
                            <MenuIcon/>
                        </a>
                        <div className="nav-sign-btn">
                            <a href="index.html" className=""><img src="https://ik.imagekit.io/gku4adhog/first-fly-travel/Delta.svg?updatedAt=1714385080148" alt="logo" width="90px" /></a>
                        </div>
                        <div className="nav-sign-btn">
                            <Link to="login" className="btn">Login</Link>
                            <Link to="signup" className="btn ms-3">Register</Link>
                        </div>
                    </div>
                    <div className="offcanvas  offcanvas-start" tabindex="-1" id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasExampleLabel"><a href="/"><SearchIcon/></a></h5>
                            <button type="button" className="btn-close " data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="mb-3 border-2  d-flex align-items-center">
                                <img className="img-fluid rounded-circle" src="" alt="shopimage" width="100px" />
                                <div className="text-white  profile-owner ms-2">
                                    <h4>Personal Account</h4>
                                    <span>Personal Account</span>
                                </div>
                            </div>
                            <div className="view-site-or-profile">
                                <h5 className="">View site / profile</h5>
                            </div>
                            <ul className="p-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="profile.html">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="About-Us.html">About-us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="categories.html">Categeory</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="cart.html">Cart</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="Projects.html">Project</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="blog.html">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="Our-Team.html">Our Teem</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="faq.html">FAQ's</a>
                                </li>
                            </ul>
                            <ul className="offcanvas-social-icons p-0">
                                <li>
                                    <a href="/"><FacebookOutlinedIcon/></a>
                                </li>
                                <li>
                                    <a href="/"><FacebookOutlinedIcon/></a>
                                </li>
                                <li>
                                    <a href="/"><FacebookOutlinedIcon/></a>
                                </li>
                                <li>
                                    <a href="/"><FacebookOutlinedIcon/></a>
                                </li>
                            </ul>
                            <div className="offcanvas-left-call-btn">
                                <a href="/" className="btn"><img className="img-fluid" src=""
                                    alt="" width="50px" height="50px"/>Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <ul className="navbar-bottom-nav  border-top d-none d-md-flex ">
                        <div className="d-flex mx-auto">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="about">About Us</Link>
                            </li>
                            <li>
                                <Link to="blogs">Blogs</Link>
                            </li>
                            <li>
                                <Link to="projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="cart">Cart</Link>
                            </li>
                            <li>
                                <Link to="faq">FAQ's</Link>
                            </li>
                        </div>
                    </ul>
                    <div className="text-center header-input-body mx-auto py-2 py-md-0">
                        <input type="text" className="header-input" placeholder="Search Products Here" />
                        <div className="header-input-body-glass">
                            <a href="/" className="btn"><SearchIcon/></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NavBar;