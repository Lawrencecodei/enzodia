import React from 'react';
import './terms.css';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='app__terms section__padding'>
            <h1>Terms and Conditions</h1>
            <p>
            <h4>Last Updated: October 21, 2023</h4>
            <h4>1. Introduction</h4>

Welcome to SureG Media, a service provided by SureG Media Group, LTD. These Terms and Conditions govern your use of our website and services. By using our website and services, you agree to be bound by these terms.

<h4>2. Use of Services</h4>

You agree to use our services for lawful purposes and in a manner consistent with all applicable local, national, and international laws and regulations.

<h4>3. Intellectual Property</h4>

All content on our website, including text, graphics, logos, images, and software, is the property of SureG Media Group, LTD and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use this content without our express written permission.

<h4>4. Privacy</h4>

Your use of our website and services is also governed by our <Link to="/privacy">Privacy Policy</Link> . Please review this policy to understand our data collection and processing practices.

<h4>5. Limitation of Liability</h4>

We provide our services on an "as is" and "as available" basis. We do not guarantee the availability, accuracy, or reliability of our services. We shall not be liable for any indirect, special, incidental, or consequential damages, whether or not such damages are foreseeable, and regardless of the form of action.

<h4>6. Termination</h4>

We reserve the right to terminate or suspend your access to our services at our discretion. We may do so without notice, and it may be due to a violation of these Terms and Conditions.

<h4>7. Changes to Terms and Conditions</h4>

We may update these Terms and Conditions to reflect changes in our services or for legal reasons. Any updates will be posted on our website with the date of the last modification.

<h4>8. Contact Us</h4>

If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
<br />
SureG Media Group, LTD <br />
Address: <br /> Abuja, Nigeria <br />
Email: info@suregmedia.com

 
            </p>
        </div>
    );
}

export default Terms;
