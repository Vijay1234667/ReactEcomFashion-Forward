import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../src/Component/Navbar'
import Home from '../src/Component/Home'
import AboutUs from '../src/Component/AboutUs'
import Blogs from '../src/Component/Blogs'
import Portfolio from '../src/Component/Portfolio'
import Cart from '../src/Component/Cart';
import Faq from '../src/Component/Faq';
import SignUp from '../src/Component/SignUp';
import Gallery from '../src/Component/Gallery';
import Profile from '../src/Component/Profile';
import Projects from '../src/Component/Projects';
import AddToCart from '../src/Component/AddToCart';
import ContactUs from '../src/Component/ContactUs';
import PaymentForm from '../src/Component/PaymentForm';
import FilterCategory from './Component/FilterCategory'
import OurTeam from '../src/Component/OurTeam';
import PaymentSuccessfull from '../src/Component/PaymentSuccessfull';
import LoginPage from '../src/Component/LoginPage';
import DeliveryAddress from '../src/Component/DeliveryAddress';
import Categories from '../src/Component/Categories';
import Privacy from '../src/Component/Privacy';
import TermsCondition from '../src/Component/TermsCondition';
import Footer from '../src/Component/Footer'

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<AboutUs />}/>
      <Route path="/blogs" element={<Blogs />}/>
      <Route path="/portfolio" element={<Portfolio />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/ourteam" element={<OurTeam/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/filtercategory" element={<FilterCategory/>}/>
      <Route path="/addtocart" element={<AddToCart/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/paymentsuccessfull" element={<PaymentSuccessfull/>}/>
      <Route path="/deliveryaddress" element={<DeliveryAddress/>}/>
      <Route path="/paymentform" element={<PaymentForm/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/privacy" element={<Privacy/>}/>
      <Route path="/terms" element={<TermsCondition/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
