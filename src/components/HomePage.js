import React from 'react';
import Box from './Box'; // Import Box component
import Navbar from './Navbar';





const HomePage = () => {
    return (
        <div>
            <div className='home'>
                <img src='homee.png' alt="Home Icon" />
                <div className="overlay">
                    <h4>Welcome to You&Me Shop !</h4>
                    <p>Shop now, Enjoy later!</p>
                    <h1>Find your perfect match, Shop with confidence!</h1>
                    <button> Shop now</button>
                </div>
            </div>
            <div className='all-box'>
                <Box imgLink={"cloth.png"} title={"45% Cashback"} />
                <Box imgLink={"sv"} title={"Save Money"} />
                <Box imgLink={"sale"} title={"Happy Sale"} />
                <Box imgLink={"diss"} title={"15% Discount"} />
                <Box imgLink={"supp"} title={"Support/Help"} />
            </div>

            <div className='newsletter'>
                <div className="newstext">
                    <h4>Sign Up For Newsletter</h4>
                    <p>Get Email Updates about our latest Shop and <span>Special Offer</span></p>
                </div>
                <div className="form">
                    <input type="text" placeholder="Enter Your Email Address" />
                    <button>Sign Up</button>
                </div>
            </div>
            <div className="last-banner">
                <div className="last-box1">
                    <h4>Today's Deals</h4>
                    <h2>Buy 1 Get 1 Free</h2>
                    <span>The Best Sale Right Now</span>
                    <button>Click Here</button>
                </div>
                <div className="last-box1 sec">
                    <h4>Updated Products</h4>
                    <h2>Coming Soon new Trending Materials</h2>
                    <span>The Best Sale Right Now</span>
                    <button>Click Here</button>
                </div>
            </div>
            <footer className="footer">
                <div className="col">
                    <h1>You&Me Shop</h1>
                    <h4>Contact Us</h4>
                    <p><strong>Address:</strong> Zara Residency Memon Wada Rd, </p>
                    <p>Bhendi Bazaar Mumbai 400003</p>
                    <p><strong>Phone No:</strong> 9142002770</p>
                    <p><strong>Github:</strong> <a href="https://github.com/sayyed-aftab">sayyed-aftab</a></p>
                    <div className="follow">
                        <h4>Follow On </h4>
                        <div className="icon">
                            <i className="fab fa-whatsapp"></i>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h4>About</h4>
                    <a href="#">About Us</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Delivery Info</a>
                    <a href="#">Contacts Us</a>
                </div>
                <div className="col">
                    <h4>Accounts</h4>
                    <a href="#">Sign In</a>
                    <a href="#">Track My Order</a>
                    <a href="#">View Cart</a>
                    <a href="#">My Favorite List</a>
                    <a href="#">Support</a>
                </div>
                <div className="col Install">
                    <h4>Install & Payment</h4>
                    <p>From App Store Or Play Store</p>
                    <div className="row">
                        <img src="apps.png" alt="" />
                        <img src="plays.png" alt="" />
                    </div>
                    <div className="payment">
                        <h2>Payment Methods</h2>
                        <img src="paym.png" alt="" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
