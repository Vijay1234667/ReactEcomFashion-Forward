import Toptitlehead from "./Toptitlehead";
import PersonIcon from '@mui/icons-material/Person';
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import blogfurniture1 from './assets/blogfurniture1.jpg'
import blogfurniture2 from './assets/blogfurniture2.jpg'
import blogfurniture3 from './assets/blogfurniture3.jpg'
import blogfurniture4 from './assets/blogfurniture4.jpg'
import blogfurniture5 from './assets/blogfurniture5.jpg'

function BlogPage() {
    return (
        <>
            <Toptitlehead title="Blogs" />
            <section className="blog-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div>
                            <img class="img-fluid" src="https://ik.imagekit.io/gku4adhog/first-fly-travel/Illinois.jpg?updatedAt=1714374168020" alt="shopimage" />
                        </div>
                        <div>
                            <h2 class="fw-bolder mb-3 pt-2 text-primary">Delivering What Consumers Really Value?</h2>
                            <div class="d-flex align-items-center mb-4">
                                <div className="me-2">
                                    <PersonIcon /><span>Lara Joe</span>
                                </div>
                                <div class="mx-2">
                                    <CommentsDisabledIcon /><span>3 Comments</span>
                                </div>
                                <div className="ms-2">
                                    <HomeIcon /><span>Furniture</span>
                                </div>
                            </div>
                            <div class="blog-right-middle-para">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum porro alias, magnam
                                    nesciunt sapiente adipisci optio quos. Nulla ab at voluptatum, magni eos nobis
                                    eveniet ullam placeat voluptatem, error enim?
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum porro alias, magnam
                                    nesciunt sapiente adipisci optio quos. Nulla ab at voluptatum, magni eos nobis
                                    eveniet ullam placeat voluptatem, error enim?
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum porro alias, magnam
                                    nesciunt sapiente adipisci optio quos. Nulla ab at voluptatum, magni eos nobis
                                    eveniet ullam placeat voluptatem, error enim?
                                </p>
                            </div>
                            <div class="card mb-4 p-3 p-md-5 card-bottom-bg-blue">
                                <h5 class="mb-2 mb-md-4">Words can be like X-rays, if you use them properly—they’ll go
                                    through
                                    anything. You
                                    read and you’re pierced.</h5>
                                <h6> —Aldous Huxley</h6>
                            </div>

                            <div>
                                <h5>A Perfect product for you</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, impedit sed id aliquid
                                    dolores quam omnis, ipsum rerum iste voluptatibus quae vel sequi enim fugit. Id,
                                    ipsum? Ad, voluptatum vitae.
                                </p>
                            </div>
                            <div class="blog-right-bottom-social">
                                <ul class="d-flex p-0">
                                    <li>
                                        <a href="/"><FacebookOutlinedIcon/></a>
                                    </li>
                                    <li>
                                        <a href="/"><TwitterIcon/></a>
                                    </li>
                                    <li>
                                        <a href="/"><LinkedInIcon/></a>
                                    </li>
                                    <li>
                                        <a href="/"><LinkedInIcon/></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="d-flex justify-content-between article-next-prev-btn">
                                <div>
                                    <a href="/" class="btn  prev-btn">PREV ARTICLE</a>
                                </div>
                                <div>
                                    <a href="/" class="btn next-btn">NEXT ARTICLE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div class="card border-0 bg-transparent px-1">
                            <div>
                                <img class="rounded-circle m-auto d-block mb-2" src="https://ik.imagekit.io/gku4adhog/first-fly-travel/testimonial2img.png?updatedAt=1714374953317"
                                    alt="shopimage" height="70px" width="70px" />
                            </div>
                            <div class="text-center portfolio">
                                <h4>Shakespeare D. Willaim</h4>
                                <h6>Bloger / Photographer</h6>
                                <ul class="d-flex justify-content-center blog-about-star-sec">
                                    <li>
                                        <StarIcon />
                                    </li>
                                    <li>
                                        <StarBorderPurple500Icon />
                                    </li>
                                    <li>
                                        <StarHalfIcon />
                                    </li>
                                    <li>
                                        <StarIcon />
                                    </li>
                                    <li>
                                        <StarBorderPurple500Icon />
                                    </li>
                                </ul>
                            </div>

                            <div class="text-center blog-right-social">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis distinctio, odio
                                    eligendi suscipit reprehenderit atque
                                </p>
                                <ul class="d-flex justify-content-center blog-social-icons">
                                    <li>
                                        <a href="/"><FacebookOutlinedIcon/></a>
                                    </li>
                                    <li>
                                        <a href="/"><TwitterIcon/></a>
                                    </li>
                                    <li>
                                        <a href="/"><LinkedInIcon/></a>
                                    </li>
                                    <li>
                                        <a href="/"><InstagramIcon/></a>
                                    </li>
                                </ul>
                            </div>

                            <div class="blog-right-categories px-1">
                                <h4>Categories</h4>
                                <div>
                                    <ul class="p-0">
                                        <li>
                                            <a href="/">Womens Bag</a>
                                        </li>
                                        <li>
                                            <a href="/">Bottels</a>
                                        </li>
                                        <li>
                                            <a href="/">Mens Shoes</a>
                                        </li>
                                        <li>
                                            <a href="/">Toddler Dress</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="mb-2 latest-post">
                                <h4 class="">Latest Post</h4>
                            </div>
                            <div class="card   post-head mb-3 border-0 ">
                                <div class="row">
                                    <div class="col-3">
                                        <img class="img-fluid" src={blogfurniture1} alt="shopimage" />
                                    </div>
                                    <div class="col-8 ">
                                        <div class="card-body p-0">
                                            <h6>Modern furniture in velvet</h6>
                                            <span><i class="fa-solid fa-calendar-days pe-2"></i></span>11 December, 2022
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card bg-transparent post-head mb-3 border-0">
                                <div class="row">
                                    <div class="col-3">
                                        <img class="img-fluid" src={blogfurniture2} alt="shopimage" />
                                    </div>
                                    <div class="col-8">
                                        <div class="card-body p-0">
                                            <h6>Modern furniture in velvet</h6>
                                            <span><i class="fa-solid fa-calendar-days pe-2"></i></span>12 December, 2022
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card  post-head mb-3 border-0">
                                <div class="row">
                                    <div class="col-3">
                                        <img class="img-fluid" src={blogfurniture3} alt="shopimage" />
                                    </div>
                                    <div class="col-8">
                                        <div class="card-body p-0">
                                            <h6>Modern furniture in velvet</h6>
                                            <span><i class="fa-solid fa-calendar-days  pe-2"></i></span>13 December,
                                            2022
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card bg-transparent post-head mb-3 border-0">
                                <div class="row">
                                    <div class="col-3">
                                        <img class="img-fluid" src={blogfurniture4} alt="shopimage" />
                                    </div>
                                    <div class="col-8">
                                        <div class="card-body p-0">
                                            <h6>Modern furniture in velvet</h6>
                                            <span><i class="fa-solid fa-calendar-days pe-2"></i></span>23 December, 2022
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card post-head mb-3 border-0">
                                <div class="row">
                                    <div class="col-3">
                                        <img class="img-fluid" src={blogfurniture5} alt="shopimage" />
                                    </div>
                                    <div class="col-8">
                                        <div class="card-body p-0">
                                            <h6>Modern furniture in velvet</h6>
                                            <span><i class="fa-solid fa-calendar-days  pe-2"></i></span>25 December,
                                            2022
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="popular-tags">
                                <h4>Popular Tags</h4>
                                <ul class="p-0 ">
                                    <li><a href="/">Popular</a></li>
                                    <li><a href="/">agency</a></li>
                                    <li><a href="/">Furniture</a></li>
                                    <li><a href="/">creative</a></li>
                                    <li><a href="/">design</a></li>
                                    <li><a href="/">modern</a></li>
                                    <li><a href="/">Bag</a></li>
                                    <li><a href="/">Shoes</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </section>
        </>
    );
}
export default BlogPage;
