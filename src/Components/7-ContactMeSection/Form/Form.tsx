import { useForm } from '@formspree/react';
import "./Form.scss";

function Form(): JSX.Element {
    const [state, handleSubmit] = useForm("mqkrbbyk");
    if (state.succeeded) {
        return <p>Your information was received! We'll be in touch soon!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className="Form">
            <div>
                <div className="single-input">
                    <label htmlFor="name">
                        Name
                    </label>
                    <input
                        required
                        minLength={2}
                        maxLength={15}
                        id="name"
                        type="text"
                        name="name"
                    />
                </div>
                <div className="single-input">
                    <label htmlFor="tel">
                        Phone
                    </label>
                    <input
                        required
                        minLength={2}
                        maxLength={15}
                        id="tel"
                        type="tel"
                        name="tel"
                    />
                </div>
                <div className="single-input">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                        required
                        minLength={2}
                        maxLength={15}
                        id="email"
                        type="email"
                        name="email"
                    />
                </div>
                <div>
                </div>
            </div>
            <button type="submit" disabled={state.submitting}>
                Send
            </button>
        </form>
    );
}

export default Form;
