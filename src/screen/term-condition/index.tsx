import React from "react";
import "./styles.css";

const TermCondition = () => {
  return (
    <div className="policy-container">
      <h1 className="policy-title">Term and Condition – Electric Split Bill</h1>

      <p className="policy-text">
        Electric Split Bill respects your privacy. This Privacy Policy explains how
        information is handled when you use the app.
      </p>

      <section>
        <h2>Information Collection</h2>
        <p>
          Electric Split Bill does <strong>not collect, store, or share</strong> any
          personal or sensitive user data.
        </p>
      </section>

      <section>
        <h2>Camera & Gallery Permissions</h2>
        <p>
          The app requests <strong>Camera and Gallery permissions</strong> solely to
          allow users to capture or select an image of a barcode and attach it to an
          electricity bill PDF.
        </p>
        <ul>
          <li>Camera access is used only when the user chooses to capture an image</li>
          <li>Gallery access is used only when the user selects an existing image</li>
          <li>Images are used only for attaching to the PDF and are processed locally</li>
          <li>No images or barcode data are stored, uploaded, or shared externally</li>
        </ul>
      </section>

      <section>
        <h2>Data Usage</h2>
        <ul>
          <li>All calculations and barcode processing occur locally on the device</li>
          <li>No data is transmitted externally</li>
          <li>No third-party analytics or advertising SDKs are used</li>
        </ul>
      </section>

      <section>
        <h2>Children’s Privacy</h2>
        <p>
          The app is not designed for children under the age of 13 and does not
          knowingly collect any information from children.
        </p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>
          This Privacy Policy may be updated periodically. Any changes will be
          reflected on this page.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions regarding this Privacy Policy, please contact us at:
        </p>
        <p className="email">
          📧 <a href="mailto:shivam.software.eng@gmail.com">shivam.software.eng@gmail.com</a>
        </p>
      </section>
    </div>
  );
};

export default TermCondition;