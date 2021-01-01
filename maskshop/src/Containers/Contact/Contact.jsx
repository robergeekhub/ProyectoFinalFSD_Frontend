import React, { Component } from 'react';
import './Contact.scss';


class Contact extends Component {
    render(){
        return (
                <div className="rowcontact1">
                    <div className="containercontact"></div>
                        <div className="containerdescriptionforcontact">
                            <h1>Contact</h1>
                            <p>Shop specializing in the sale of masks</p>
                            <p>For more information on the products offered and to obtain technical assistance on any problem with the order, please contact the company by e-mail: info@themaskshop.com</p>
                            <div className="containerlink">
                                <div className="containermail">
                                    <a className="Linktomail" href="mailto:info@themaskshop.com">Contact with The Mask Shop</a>
                            </div>
                            </div>
                        </div>
                </div>
        )
    }
}

export default Contact;