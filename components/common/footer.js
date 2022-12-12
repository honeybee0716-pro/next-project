import React, { useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBBox,
  MDBIcon,
} from "mdbreact";
import STYLES from "../../styles/Footer.module.scss";
import Link from "next/link";
import { subscribeToNewsletterGeneric } from "../../common/services/newsletter";
import { ToastNotification, TOAST_NOTIF } from "./toast";

const IMG_ROOT = `${process.env.IMG_BASE_URL}/common/footer/`;

const DEFAULT = {
  emailAdd: "",
};

const footerbg = {
  backgroundImage: `url(${IMG_ROOT}footer-bg.jpg)`,
  backgroundSize: "cover",
  opacity: "95%",
};
const yrsLogo = `${IMG_ROOT}years.png`;

export const FooterComponent = () => {
  const [formData, setFormData] = useState(DEFAULT);

  const handleInput = (e) => {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    let payload = {
      EmailAddress: formData.emailAdd,
    };

    try {
      let res = await subscribeToNewsletterGeneric(payload);
      if (res) {
        if (res && res.response === "200") {
          ToastNotification(TOAST_NOTIF.NEWSLETTER_SUCCESS);
        } else {
          ToastNotification(TOAST_NOTIF.DEFAULT_ERROR);
        }
      }
    } catch (err) {
      ToastNotification(TOAST_NOTIF.DEFAULT_ERROR);
    } finally {
      setFormData(DEFAULT);
    }
  };

  return (
    <MDBFooter className="pt-4" style={footerbg}>
      <MDBContainer>
        <form onSubmit={handleSignUp} autoComplete="off">
          <MDBRow
            center
            className={`${STYLES.ourNewsLetter} ${STYLES.container}`}
          >
            <MDBCol md="4" sm="12" lg="4" className={STYLES.ourNewsLetterLabel}>
              <p>OUR NEWSLETTER</p>
            </MDBCol>
            <MDBCol md="5" sm="12" lg="6" className={STYLES.ourNewsletterEmail}>
              <input
                type="email"
                id="emailAdd"
                name="emailAdd"
                value={formData.emailAdd}
                className="form-control"
                placeholder="Enter your email address*"
                onChange={(e) => handleInput(e)}
                required
              />
              <label htmlFor="emailAdd" />
            </MDBCol>
            <MDBCol
              md="3"
              sm="12"
              lg="2"
              className={STYLES.ourNewsletterSubscribeBtn}
            >
              <input type="submit" value="SUBSCRIBE" />
            </MDBCol>
          </MDBRow>
        </form>
        <MDBRow className={STYLES.container}>
          <MDBCol className={STYLES.yearsLogoContainer} md="4">
            <img className={STYLES.yearsLogo} src={yrsLogo}></img>
          </MDBCol>
          <MDBCol md="4">
            <MDBRow>
              <MDBCol md="12">
                <MDBBox className={STYLES.textLabel}>
                  <h6>EMAIL US</h6>
                  <a href="mailto:info@thelogconnection.com">
                    info@thelogconnection.com
                  </a>
                </MDBBox>
              </MDBCol>
              <MDBCol md="12">
                <MDBBox className={STYLES.textLabel}>
                  <h6>CALL US</h6>
                  <a href="tel:+1-888-207-0210">Tel: +1-888-207-0210 </a>
                </MDBBox>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4">
            <MDBRow className={`${STYLES.textLabel} ${STYLES.followUs}`}>
              <MDBRow>
                <MDBCol md="12" sm="12">
                  <h6>FOLLOW US ON</h6>
                </MDBCol>
                <MDBCol md="12" sm="12">
                  <MDBRow>
                    <MDBCol size="auto" className={STYLES.icon}>
                      <a
                        href="https://www.facebook.com/thelogconnection"
                        target="_blank"
                      >
                        <MDBIcon fab icon="facebook" size="2x" />
                      </a>
                    </MDBCol>
                    <MDBCol size="auto" className={STYLES.icon}>
                      <a
                        href="https://www.instagram.com/thelogconnection"
                        target="_blank"
                      >
                        <MDBIcon fab icon="instagram" size="2x" />
                      </a>
                    </MDBCol>
                    <MDBCol size="auto" className={STYLES.icon}>
                      <a
                        href="https://www.youtube.com/c/TheLogConnection"
                        target="_blank"
                      >
                        <MDBIcon fab icon="youtube" size="2x" />
                      </a>
                    </MDBCol>
                    <MDBCol size="auto" className={STYLES.icon}>
                      <a
                        href="https://www.houzz.com/pro/thelogconnection"
                        target="_blank"
                      >
                        <MDBIcon fab icon="houzz" size="2x" />
                      </a>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBRow>
            <MDBRow>
              <MDBCol md="5" className={STYLES.links}>
                <ul>
                  <li className="list-unstyled">
                    <Link href="/contact">
                      <a href="/contact">Contact Us</a>
                    </Link>
                  </li>
                  <li className="list-unstyled">
                    <Link href="/plan-book/">
                      <a href="/plan-book/">Plan Book</a>
                    </Link>
                  </li>
                  <li className="list-unstyled">
                    <Link href="/resources/">
                      <a href="/resources/">Resources</a>
                    </Link>
                  </li>
                  <li className="list-unstyled">
                    <Link href="/building-styles/stacked-log-walls/delivery-and-setup/#setup">
                      <a href="/building-styles/stacked-log-walls/delivery-and-setup/#setup">
                        Setting Up a Stacked
                      </a>
                    </Link>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="7" className={STYLES.links}>
                <ul>
                  <li className="list-unstyled">
                    <Link href="/tlc/building-awards/">
                      <a href="/tlc/building-awards/">
                        Award Winning Log Homes
                      </a>
                    </Link>
                  </li>
                  <li className="list-unstyled">
                    <Link href="/plan-book">
                      <a href="/plan-book">Plan Book & DVD</a>
                    </Link>
                  </li>
                  <li className="list-unstyled">
                    <Link href="/tlc/in-publications/">
                      <a href="/tlc/in-publications/">
                        Featured in Publications
                      </a>
                    </Link>
                  </li>
                  <li className="list-unstyled">
                    <Link href="/building-styles/stacked-log-walls/delivery-and-setup/#vid">
                      <a href="/building-styles/stacked-log-walls/delivery-and-setup/#vid">
                        Log Construction Videos
                      </a>
                    </Link>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-4">
        <MDBContainer fluid className={STYLES.copyRight}>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="http://www.thelogconnection.com">The Log Connection</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterComponent;
