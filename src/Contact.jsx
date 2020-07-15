import React from 'react'
import './Contact.css'


function Contact() {
    return (
        <div className="root-div">
            <div className="container">
                <h2>Contact Us</h2>
                <div className="row100">
                    <div className="col">
                        <div className="inputBx">
                            <input type="text" name="" required/>
                            <span className="text">First Name</span>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="inputBx">
                            <input type="text" name="" required />
                            <span className="text">Last Name</span>
                            <span className="line"></span>
                        </div>
                    </div>
                </div>
                <div className="row100">
                    <div className="col">
                        <div className="inputBx">
                            <input type="text" name="" required />
                            <span className="text">Email</span>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="inputBx">
                            <input type="text" name="" required />
                            <span className="text">Mobile</span>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="row100">
                        <div className="col">
                            <div className="inputBx textarea">
                                <textarea required></textarea>                                
                                <span className="text">Type your message here...</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row100">
                        <div className="col">
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
