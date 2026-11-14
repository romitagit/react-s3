function Contact() {
    return (
        <div className="page-container">
            <div className="content-card">
                <h1>Contact Us</h1>

                <form className="contact-form">
                    <input type="text" placeholder="Enter your name" />
                    <input type="email" placeholder="Enter your email" />
                    <textarea placeholder="Enter your message" rows="5" />

                    <button type="button" className="primary-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;