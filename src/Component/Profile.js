import React from 'react'
import { Container } from 'react-bootstrap-v5'

import AddCircleIcon from '@mui/icons-material/AddCircle';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';
import AboutPerson from './assets/AboutPerson.jpg'
import BreadcrumbFixedTop from './BreadcrumbFixedTop'
import { Link } from 'react-router-dom';
const ProfilePage = () => {
    return (
        <>
        <BreadcrumbFixedTop Title="Profile" Subtitle="Profile"/>
            <section className="main-profile-wrapper-body">
                <Container>
                    <div className="profile-area">
                        <div className="main-profile d-flex justify-content-between align-items-center">
                            <div className='d-flex align-items-center'>
                                <div className="main-owner">
                                    <img className="rounded-circle" src={AboutPerson} width="100px" alt="profile-image" />
                                </div>
                                <div className="profile-detail mx-2">
                                    <h6 className="name">Hello Vijaykumar Yadav.</h6>
                                    <span className="profile-detail-id"> Since Sep 2023</span>
                                </div>
                            </div>
                            <div className='transparent-btn'>
                                <Link to="/crud" className='btn text-nowrap'>ALL PRODUCT</Link>
                            </div>
                        </div>
                        <hr />

                        <div className="title-bar">
                            <h4  className="mb-3 font-h4">Account Settings</h4>
                        </div>
                        <div className="account-setting-body">
                            <ul className="p-0">
                                <li className="d-flex mb-3">
                                    <div className="dz-inner">
                                        <AccountCircleIcon />
                                        <span className="title ms-2">Edit Profile</span>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="/">
                                            <AddCircleIcon />
                                        </a>
                                    </div>
                                </li>

                                <hr />
                                <li className="d-flex  mb-3">
                                    <div className="dz-inner">
                                        <BusinessIcon />
                                        <span className="title ms-2">
                                            Saved Addresses</span>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="/" className="edit-profil">
                                            <AddCircleIcon />
                                        </a>
                                    </div>
                                </li>

                                <hr />
                                <li className="d-flex  mb-3">
                                    <div className="dz-inner">
                                        <LanguageIcon />
                                        <span className="title ms-2">
                                            Select Language</span>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="/" className="edit-profil">
                                            <AddCircleIcon />
                                        </a>
                                    </div>
                                </li>

                                <hr />
                                <li className="d-flex  mb-3">
                                    <div className="dz-inner">
                                        <NotificationsActiveIcon />
                                        <span className="title ms-2">Notification Setting</span>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="/" className="edit-profil">
                                            <AddCircleIcon />
                                        </a>
                                    </div>
                                </li>

                                <span className="hrtag mb-3"></span>
                                <li className="d-flex  mb-3">
                                    <div className="dz-inner">
                                        <LogoutIcon />
                                        <span className="title ms-2">Log Out</span>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="Login-page.html" className="edit-profil">
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ProfilePage
