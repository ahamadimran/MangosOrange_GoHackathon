import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';

const Payment_Agitech = () => {
  return (
    <Fragment>
        <Menu/>

        <div class="evebanner">
            <img src="img/banner/Payment.png" alt="Agritech Payment Banner"/>
        </div>

        <div class="container">
                <div class="row">
                    <div class="paymentsection col-lg-8">
                        <h2>Account Details</h2>
                        <p><strong>Account Holder's Name:- </strong>Mangosorange Agritech India Pvt. Ltd. <br/>
                           <strong>Account Number:- </strong>003105041846 <br/>
                           <strong>IFSC Code:- </strong>ICIC0000031
                        </p> 
                    </div>
                    <div class="col-lg-4">
                        <img class="paymentsection" src="img/resources/agritech-qrcode.jpg" alt="Agritech QR Code" />
                    </div>
                </div>
            </div>

        <Footer/>
    </Fragment>
  )
}

export default Payment_Agitech
