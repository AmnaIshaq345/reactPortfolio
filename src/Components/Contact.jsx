import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
const style = {
    backgroundColor: '#F2F3F4 '
}
const message = () => {
    console.log("Message Submitted") 
   }
function Contact() {
    return (
        <>
            <section className="mb-4 mt-6 ml-6" style= {{style}}>
                <h2 className="h1-responsive font-weight-bold text-center my-1">GET IN Touch</h2>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 my-4 mb-5 mt-5">
                        <form id="contact-form" class="my-4" name="contact-form" action="mail.php" method="POST">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control" />
                                        <label for="name" className="">Name</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control" />
                                        <label for="email" className="">Email</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" className="form-control" />
                                        <label for="subject" className="">Subject</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                        <label for="message">Your message</label>
                                    </div>

                                </div>
                            </div>
                        </form>
                        <div className="text-center text-md-left">
                            <button onClick={message} className="btn btn-primary" >Your Message</button>
                        </div>
                        <div className="status"></div>
                    </div>
                    <div className="col-md-3 text-center mx-8">
                        <div>
                            <LocationOnIcon />
                            <h5>Our Address</h5>
                            <p>Chakwal, Punjab</p>
                        </div>
                        <div>
                            <PhoneAndroidIcon />
                            <h5>Our Phone</h5>
                            <p>+92xxxxxxxxx</p>
                        </div>
                        <div>
                            <EmailIcon />
                            <h5>Our Email</h5>
                            <p>info@gmail.com</p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
