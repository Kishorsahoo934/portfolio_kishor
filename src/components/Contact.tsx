import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { MdArrowOutward, MdCopyright, MdCheckCircle, MdError } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    emailjs
      .sendForm(
        'service_gwh8xex', // Service ID
        'template_e2jauv8', // Template ID
        formRef.current,
        {
          publicKey: 'Z62dfooXbDLswpQqV', // Public Key
        }
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus("success");
          formRef.current?.reset();
          setTimeout(() => setSubmitStatus("idle"), 5000);
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitStatus("error");
          console.error("FAILED...", error.text);
          setTimeout(() => setSubmitStatus("idle"), 5000);
        }
      );
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:kishorsahoo7894@gmail.com" data-cursor="disable">
                kishorsahoo7894@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>Btech Computer Science</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/raxx21"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/kishor-kumar-sahoo-1052b2294/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/m_r_k_i_s_h_o_r_04/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>

          <div className="contact-box contact-form-box">
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input type="text" name="user_name" id="user_name" required placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input type="email" name="user_email" id="user_email" required placeholder="your.email@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows={4} required placeholder="Hello! I'd like to talk about..."></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === "success" && (
                <p className="status-msg success-msg">
                  <MdCheckCircle /> Message sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="status-msg error-msg">
                  <MdError /> Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
