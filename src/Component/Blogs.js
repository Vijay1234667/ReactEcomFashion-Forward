
import b1img from './assets/b1img.jpg'
import b2img from './assets/b2img.jpg'
import b3img from './assets/b3img.jpg'
import b4img from './assets/b4img.jpg'

import blogfurniture1 from './assets/blogfurniture1.jpg'
import blogfurniture2 from './assets/blogfurniture2.jpg'
import blogfurniture3 from './assets/blogfurniture3.jpg'
import blogfurniture4 from './assets/blogfurniture4.jpg'
import blogfurniture5 from './assets/blogfurniture5.jpg'

import BreadcrumbFixedTop from './BreadcrumbFixedTop';
import BlogsLeftCard from './BlogsLeftCard';
import BlogsRightCard from './BlogsRightCard';
import HomeNewslaterSection from './HomeNewslaterSection';


function BlogPage() {
    return (
        <>
            <BreadcrumbFixedTop Title="Blogs" Subtitle="Blogs" />
            <section className="blog-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <BlogsLeftCard Image={b1img} Heading="You How All This Mistaken Idea Of Denouncing Pleasure" Paragraph="Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain." Btn="Read More" />
                            <BlogsLeftCard Image={b2img} Heading="You How All This Mistaken Idea Of Denouncing Pleasure" Paragraph="Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain." Btn="Read More" />
                            <BlogsLeftCard Image={b3img} Heading="You How All This Mistaken Idea Of Denouncing Pleasure" Paragraph="Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain." Btn="Read More" />
                            <BlogsLeftCard Image={b4img} Heading="You How All This Mistaken Idea Of Denouncing Pleasure" Paragraph="Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain." Btn="Read More" />
                        </div>

                        <div className="col-lg-4">
                            <div className="card border-0 bg-transparent px-1">
                                <div className="mb-2 latest-post">
                                    <h4 className="">Latest Post</h4>
                                </div>
                                <BlogsRightCard Image={blogfurniture1} PostName="Home Design Here" Posttext="11 December, 2022" />
                                <BlogsRightCard Image={blogfurniture2} PostName="Home Design Here" Posttext="11 December, 2022" />
                                <BlogsRightCard Image={blogfurniture3} PostName="Home Design Here" Posttext="11 December, 2022" />
                                <BlogsRightCard Image={blogfurniture4} PostName="Home Design Here" Posttext="11 December, 2022" />
                                <BlogsRightCard Image={blogfurniture5} PostName="Home Design Here" Posttext="11 December, 2022" />

                                <div className="popular-tags">
                                    <h4 className="mb-3 h4color">Popular Tags</h4>
                                    <ul className="p-0 ">
                                        <li><a href="/">CLOTHS</a></li>
                                        <li><a href="/">ELECTRONIC</a></li>
                                        <li><a href="/">Furniture</a></li>
                                        <li><a href="/">FURNITURE</a></li>
                                        <li><a href="/">LAPTOP</a></li>
                                        <li><a href="/">MEN WEAR</a></li>
                                        <li><a href="/">TOP WEAR</a></li>
                                        <li><a href="/">HEADPHONES</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <HomeNewslaterSection />
        </>
    );
}
export default BlogPage;
