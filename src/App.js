import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../src/Component/Navbar';
import Home from '../src/Component/Home';
import AboutUs from '../src/Component/AboutUs';
import Blogs from '../src/Component/Blogs';
import Faq from '../src/Component/Faq';
import Gallery from '../src/Component/Gallery';
import Profile from '../src/Component/Profile';
import Projects from '../src/Component/Projects';
import ContactUs from '../src/Component/ContactUs';
import PaymentForm from '../src/Component/PaymentForm';
import FilterCategory from './Component/FilterCategory'
import LoginPage from '../src/Component/LoginPage';
import DeliveryAddress from '../src/Component/DeliveryAddress';
import Privacy from '../src/Component/Privacy';
import TermsCondition from '../src/Component/TermsCondition';
import Footer from '../src/Component/Footer';
import SingleProduct from './Component/SingleProduct';
import ErrorPage from './Component/ErrorPage';
import Crud from './Component/Crud';
import Add from './Component/Add';
import Update from './Component/Update';
import CartsSingleProduct from './Component/CartsSingleProduct';
import CategorySingle from './Component/CategorySingle';
import HeaderTopNav from './Component/HeaderTopNav';

function App() {

  return (
    <>
      <Router>
        <HeaderTopNav />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/create" element={<Add />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/filtercategory" element={<FilterCategory />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/deliveryaddress" element={<DeliveryAddress />} />
          <Route path="/paymentform" element={<PaymentForm />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<TermsCondition />} />
          <Route path="/categorysingle" element={<CategorySingle />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cartsingleproduct" element={<CartsSingleProduct />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
