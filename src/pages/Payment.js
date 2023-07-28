import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';

const Payment = () => {
  return (
    <Fragment>
        <Menu/>

        <div class="evebanner">
            <img src="img/banner/Payment.png" alt="Payment Banner"/>
        </div>

        <div class="container">
                <div class="row">
                    <div class="paymentsection col-lg-8">
                        <h2>Account Details</h2>
                        <p><strong>Account Holder's Name:- </strong>Mangosorange Training and Technical Services Pvt. Ltd. <br/>
                           <strong>Account Number:- </strong>003105031758 <br/>
                           <strong>IFSC Code:- </strong>ICIC0000031
                        </p> 
                    </div>
                    <div class="col-lg-4">
                        <img class="paymentsection" src="img/resources/qrcode.jpg" alt="QR Code" />
                    </div>
                </div>
            </div>

        <Footer/>
    </Fragment>
  )
}

export default Payment
