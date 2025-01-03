import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap-v5'
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typed from "typed.js";
const HeaderTopNav = () => {
    useEffect(() => {
        const options = {
          strings: ["Sunglasses", "Bag", "Watch", "Shoes"],
          typeSpeed: 180,
          backSpeed: 180,
          loop: true,
        };
        const typed = new Typed(".auto-type-text", options);
    
        return () => {
          typed.destroy();
        };
      }, []);



    return (
        <>
            <section className='HeaderTopNav d-none d-md-block py-2'>
                <Container>
                    <div className='text-center d-flex align-items-baseline justify-content-between'>
                        <h6>10M+Users</h6>
                        <h6>Introductory Offer Get Upto <strong className='text-danger'>20% Off</strong> <span className='auto-type-text'>Buy Now</span></h6>
                        <div>
                            <AccountCircleRoundedIcon className=''/>
                            <LocalMallRoundedIcon className='ms-2'/>
                            <ShoppingCartRoundedIcon className='ms-3'/>
                            <FavoriteBorderIcon className='ms-2 fs-3'/>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default HeaderTopNav
