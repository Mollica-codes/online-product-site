import React from 'react'

function Footer() {
    return (
        <div className="footer-wrapper">
        <h2>BeautyCo</h2>
        <div className="footer-info-wrapper">
            <div>
                <h3>Customer Care</h3>
                <p>Contact Us</p>
                <p>FAQs</p>
                <p>Returns and Exchanges</p>
                <p>Cancelling or Changing an Order</p>
            </div>
            <div>
                <h3>Company</h3>
                <p>About Us</p>
                <p>Magazine</p>
                <p>Wholesale</p>
            </div>
            <div>
                <h3>My Account</h3>
                <p>Sign In/Register</p>
                <p>My Cart</p>
            </div>
        </div>
        <div className="footer-privacy-wrapper">
            <p>Terms and Conditions</p>
            <p>Private Policy</p>
            <p>Supplier Code of Conduct</p>
            <p>Accessibility Statement</p>
            <p>ESG and CSR</p>
        </div>
        <p className="copyright">@2022 BeautyCo</p>
        </div>

    )
}

export default Footer