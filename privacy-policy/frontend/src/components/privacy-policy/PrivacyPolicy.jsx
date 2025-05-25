import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="main">
      <div className="header">
        <h1>Privacy & Policy</h1>
      </div>
      <div className="main-underline" />
      <p className="effective-date">
        Effective Date: <span>01/05/2025</span>
      </p>
      <div className="privacy-container">
        <div className="privacy-section">
          <p className="privacy-text">
            At Banquethall.co, we are committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website and use our services.
          </p>
          <p className="privacy-text">
            By using Banquethall.co, you agree to the collection and use of
            information in accordance with this policy.
          </p>
        </div>
        <div className="underline" />
        <div className="privacy-section">
          <h2>1. Information We Collect</h2>
          <p className="privacy-text">
            We collect several types of information to provide and improve our services:

          </p>
          <h3>a. Personal Information</h3>
          <p className="privacy-text">
            When you register, make a booking, or list a venue, we may collect:
          </p>
          <ul className="privacy-list">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Payment information (processed via third-party gateways)</li>
            <li>Billing address</li>
          </ul>
          <h3>b. Non-Personal Information</h3>
          <ul className="privacy-list">
            <li>Browser type and version</li>
            <li>Device type</li>
            <li>IP address</li>
            <li>Usage data (pages visited, time spent, clicks, etc.)</li>
          </ul>
        </div>
        <div className="underline" />
        <div className="privacy-section">
          <h2>2. How We Use Your Information</h2>
          <p className="privacy-text">We use your information to:</p>
          <ul className="privacy-list">
            <li>Process bookings and payments</li>
            <li>Facilitate communication between users and venue owners</li>
            <li>Respond to inquiries and support requests</li>
            <li>Improve and personalize user experience</li>
            <li>
              Send important updates, confirmations, and promotional materials
              (with your consent)
            </li>
          </ul>
        </div>
        <div className="underline" />
        <div className="privacy-section">
          <h2>3. Sharing Your Information</h2>
          <p className="privacy-text">
            We do <strong>not</strong> sell or rent your personal data. We may
            share your data in the following situations:
          </p>
          <ul className="privacy-list">
            <li>
              With <strong>venue owners</strong> (only the necessary booking
              details)
            </li>
            <li>
              With <strong>third-party service providers</strong> (e.g., payment
              processors, analytics tools)
            </li>
            <li>
              When required by <strong>law or legal process</strong>
            </li>
            <li>
              To <strong>protect rights, property, or safety</strong> of
              Banquethall.co, users, or the public
            </li>
          </ul>
        </div>
        <div className="underline" />
        <div className="privacy-section">
          <h2>4. Cookies and Tracking Technologies</h2>
          <p className="privacy-text">
            We use cookies and similar technologies to:
          </p>
          <ul className="privacy-list">
            <li>Understand user behavior</li>
            <li>Improve website performance</li>
            <li>Remember your preferences</li>
            <li>Serve relevant advertisements (where applicable)</li>
          </ul>
          <p className="privacy-text">
            You may modify your browser settings to reject cookies, but this may
            affect the functionality of the site.
          </p>
        </div>
        <div className="underline" />
        <div className="privacy-section">
          <h2>5. Data Retention</h2>
          <p className="privacy-text">
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this policy unless a longer
            retention period is required by law.
          </p>
        </div>
        <div className="underline" />
        <div className="privacy-section">
          <h2>6. Your Rights</h2>
          <p className="privacy-text">
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="privacy-list">
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing</li>
            <li>Withdraw consent at any time (if applicable)</li>
          </ul>
          <p className="privacy-text">
            To exercise these rights, contact us at{" "}
            <a href="mailto:banquethall.co@gmail.com" className="email-link">
              banquethall.co@gmail.com
            </a>
          </p>
        </div>
        <div className="underline" />
        <div className="privacy-section">
          <h2>7. Security</h2>
          <p className="privacy-text">
            We implement appropriate technical and organizational measures to
            protect your data. However, no method of transmission over the
            Internet or electronic storage is 100% secure.
          </p>
        </div>
        <div className="underline" />
        <div className="privacy-section">
          <h2>8. Third-Party Links</h2>
          <p className="privacy-text">
            Our website may contain links to third-party sites. We are not
            responsible for the privacy practices or content of those sites.
          </p>
        </div>
        <div className="underline" />
        <div className="privacy-section">
          <h2>9. Children’s Privacy</h2>
          <p className="privacy-text">
            Our services are not directed to individuals under the age of 18. We
            do not knowingly collect data from children.
          </p>
        </div>
        <div className="underline" />
        <div className="privacy-section">
          <h2>10. Changes to This Policy</h2>
          <p className="privacy-text">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated “Effective Date.”
            Continued use of our website after such changes constitutes your
            consent to the updated policy.
          </p>
        </div>
        <div className="underline" />
        <div className="privacy-section">
          <h2>11. Contact Us</h2>
          <p className="privacy-text">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>
            {" "}
            <a href="mailto:banquethall.co@gmail.com" className="email-link">
              banquethall.co@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
