import "./Contact.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeCircleCheck, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className="contact">
            <p className="contact-text">If you want to contact me:</p>
            <div className="contact-text-type">
                <FontAwesomeIcon icon={faEnvelopeCircleCheck}></FontAwesomeIcon>
                <span> ivan.semov.44gmail.com</span>
            </div>
            <div className="contact-text-type">
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                <span> 0884121050</span>
            </div>
        </div>
    )
}

export default Contact;