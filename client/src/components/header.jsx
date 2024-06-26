import React, { useState, useRef, useEffect } from 'react';
import glazerLogo from '../components/images/glazerLogo.webp'; // Corrected import path
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const closeNavbar = () => {
        navRef.current.classList.remove("responsive_nav");
    };

    const toggleNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <Link to="/" onClick={closeNavbar}>
                <img src={glazerLogo} alt="Logo" className='header-img' />
            </Link>
            <nav ref={navRef}>
                <Link to="/playstyles" onClick={closeNavbar}>Learn to Play</Link>
                <Link to="/playPlaces" onClick={closeNavbar}>Places to Play</Link>
                <Link to="/userMap" onClick={closeNavbar}>Map</Link>
                <Link to="/Resources" onClick={closeNavbar}>Resources</Link>

                <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
