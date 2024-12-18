import "./About.scss";
import img1 from '../../../Assets/Images/GalleryImages/yan1.jpg'; //13,2
import img2 from '../../../Assets/Images/GalleryImages/yan2.jpg';

function About(): JSX.Element {
    return (
        <div className="About">
            <div className="who-we-are">
                <h3>We Are Yanshuf Books!</h3>
                <p>
                    <b><i>Yanshuf Books</i></b> offers second-hand books on a wide selection of topics,
                    in both English and Hebrew. <br /><br />We will be delighted to recommend to you a
                    good read or help you find the book you are looking for. <br /><br />A particularly
                    exciting section is "Ha'martef" - the ultimate fantasy and science-fiction
                    shop, with role playing games, comic books, shirts, miniatures, posters
                    and,of course, books. Thousands of them!
                </p>
            </div>
            <div className="images">
                <hr />
                <img src={img1} alt="store1" />
                <img src={img2} alt="store2" />
            </div>
            <div className="logistics">
                <div className="left-col">
                    <hr />
                    <h5>Opening Hours & Location</h5>
                    <hr />
                    <p>
                        <b>2 Hankin street, Raanana</b><br />
                        {/* (corner of 102 Ahuza street, opposite to the city hall). */}
                        <br /><br />
                        <b>
                            Sunday to Thursday: 10:00-20:00.<br />
                            Friday: 09:00-15:00
                        </b>
                    </p>
                </div>

                <div className="right-col">
                    <hr className="hide-mobile"/>
                    <h5 className="hide-mobile">Get In Touch!</h5>
                    <hr className="hide-mobile"/>
                    <p>
                        For general queries, orders and book searching please feel
                        free to reach us at any time!
                        <br /><br />
                        <a href="tel:0775600434">Phone: 077-5600434</a><br />
                        <a href="tel:0507115112">Cell: 050-7115112</a><br />
                        <a href="mailto:yanshufbooks@gmail.com">Email: yanshufbooks@gmail.com</a>
                    </p>
                </div>
            </div>
            <div className="images images-second">
                <hr />
                <img src={img2} alt="store2" />
                <img src={img1} alt="store1" />
                <hr />
            </div>
            <div className="write-to-us">
                <h5>Write to us!</h5>
                <p>
                    We’d love to hear from you! Whether you have questions, suggestions, or just want to say hello,
                    feel free to reach out.<br /><br />
                    Your feedback helps us improve and continue providing the best experience for our readers.
                    <br /><br />
                    Fill out the form below, and we’ll get back to you as soon as possible!
                </p>
                <form className="write-us-form">
                    <div className="means-of-contact">
                        <label>Name</label>
                        <label>Phone number</label>
                        <input type="text" />
                        <input type="tel" />
                    </div>
                    <div className="message">
                        <label>Your message:</label>
                        <textarea />
                        <button>Send!</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default About;
