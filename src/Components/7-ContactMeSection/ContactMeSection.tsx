import ContactOptionModel from "../../Models/ContactOptionModel";
import "./ContactMeSection.scss";
import ContactOption from "./ContactOption/ContactOption";
import Form from "./Form/Form";
function ContactMeSection(): JSX.Element {

    const contactOptions: ContactOptionModel[] = [
        new ContactOptionModel("Phone", "(+972)50-814-5431", "tel:0508145431", "person_icon.png"),
        new ContactOptionModel("Email", "alexandervjr1@gmail.com", "mailto:alexandervjr1@gmail.com", "email_icon.png"),
        new ContactOptionModel("LinkedIn", "alexander-vasilenko99", "https://www.linkedin.com/in/alexander-vasilenko99/", "linkedin_icon.png"),
    ]

    return (
        <div className="ContactMeSection" id="contact">
            <div className="left-col">
                <p className="reach-out">
                    Reach out today to make your dream website a reality!
                </p>
                <hr />
                <Form />
            </div>
            <div className="right-col">
                {contactOptions.map(co =>
                    <ContactOption
                        key={co.header}
                        header={co.header}
                        content={co.content}
                        redirect={co.redirect}
                        image_name={co.image_name}
                    />)}
            </div>
        </div>
    );
}

export default ContactMeSection;
