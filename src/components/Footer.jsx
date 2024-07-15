import logo from './assets/images/logo.png';

function Footer(){
    return(
        <footer className="wpo-site-footer">
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <a className="site-logo" href="index.php"><img src={logo} alt="" /></a>
                                </div>
                                <p>Welcome and open yourself to your truest love this year with us! With the Release Process</p>
                                <div className="social-icons">
                                    <ul>
                                        <li><a href="#"><i className="ti-facebook"></i></a></li>
                                        <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                        <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                        <li><a href="#"><i className="ti-pinterest"></i></a></li>
                                        <li><a href="#"><i className="ti-vimeo-alt"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-2 col-md-6 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Navigation</h3>
                                </div>
                                <ul>
                                    <li><a href="about.php">About us</a></li>
                                    <li><a href="contact.php">Contact us</a></li>
                                    <li><a href="Gallery.php">Gallery</a></li>
                                    <li><a href="Projects.php">Projects</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget link-widget service-link-widget">
                                <div className="widget-title">
                                    <h3>About Me</h3>
                                </div>
                                <ul>
                                    <li><a href="#">Web Design</a></li>
                                    <li><a href="#">Web Development</a></li>
                                    <li><a href="#">Brand Identity</a></li>
                                    <li><a href="#">Digital Marketing</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>Newsletter</h3>
                                </div>
                                <p>I am a creative and innovative thinker with a passion for problem-solving. I am always looking for new ways to improve processes and systems.</p>
                                <form action="https://formspree.io/f/mpzgpgrd" method="post">
                                    <div className="input-1">
                                        <input type="email" name="email" id="email" className="form-control" placeholder="Email Address *" required />
                                    </div>
                                    <div className="submit clearfix">
                                        <button type="submit"><i className="ti-email"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> {/* end container */}
                <div className="shadow-shape">
                    <svg width="1319" height="1567" viewBox="0 0 1319 1567" fill="none">
                        <g filter="url(#filter0_f_39_3833)">
                            <circle cx="803" cy="803" r="303" fill="#59C378" fillOpacity="0.5" />
                        </g>
                        <defs>
                            <filter id="filter0_f_39_3833" x="0" y="0" width="1606" height="1606" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_3832" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="separator"></div>
                        <p className="copyright">Copyright &copy; 2023 Suraj. All rights reserved.</p>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;