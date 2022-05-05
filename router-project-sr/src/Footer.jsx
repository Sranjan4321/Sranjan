import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-xl-middle">
        <MDBRow>
          <MDBCol md="7">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="12">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">About</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">signin</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.google.com"> SRanjan </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
