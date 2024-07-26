import "./About.scss";

function About(): JSX.Element {
    return (
        <div className="About">
            <div className="who-we-are">
                <h3>We Are Yanshuf Books!</h3>
                <p>
                    <b><i>Yanshuf Books</i></b> offers second-hand books on a wide selection of topics,
                    in both English and Hebrew. We will be delighted to recommend to you a
                    good read or help you find the book you are looking for. A particularly
                    exciting section is "Ha'martef" - the ultimate fantasy and science-fiction
                    shop, with role playing games, comic books, shirts, miniatures, posters
                    and,of course, books. Thousands of them! "Ha'martef" is also where we
                    conduct our many events, movie shows, courses, and more... These are
                    announced here prior to their occurrence.
                </p>
            </div>
            <div className="logistics">
                <div className="left-col">
                    <h5>Opening Hours & Location</h5>
                    <p>
                        <b>2 Hankin street, Raanana</b><br />(corner of 102
                        Ahuza street, opposite to the city hall).
                        <br /><br />
                        <b>
                            Sunday to Thursday: 10:00-20:00.<br />
                            Friday: 09:00-15:00
                        </b>
                    </p>
                </div>

                <div className="right-col">
                    <h5>Get In Touch!</h5>
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
        </div>
    );
}

export default About;
