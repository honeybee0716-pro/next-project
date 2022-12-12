import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import { sendMessage } from '../../common/services/contact';
import { ToastNotification, TOAST_NOTIF } from '../../components/common/toast';
import STYLES from '../../styles/Contact.module.scss';

const IMG_ROOT = `${process.env.IMG_BASE_URL}/common/`;

const SOC_MED = [
    {
        imgUrl: `${IMG_ROOT}custom-fb.jpg`,
        link: 'https://www.facebook.com/thelogconnection',
        label: 'The Log Connection Facebook'
    },
    {
        imgUrl: `${IMG_ROOT}custom-twitter.jpg`,
        link: 'https://twitter.com/logconnection',
        label: 'The Log Connection Twitter'
    },
    {
        imgUrl: `${IMG_ROOT}custom-yt.jpg`,
        link: 'https://www.youtube.com/c/TheLogConnection',
        label: 'The Log Connection Youtube'
    },
    {
        imgUrl: `${IMG_ROOT}custom-ig.jpg`,
        link: 'https://www.instagram.com/thelogconnection',
        label: 'The Log Connection Instagram'
    },
    {
        imgUrl: `${IMG_ROOT}custom-houzz.jpg`,
        link: 'https://www.houzz.com/professionals/home-builders/the-log-connection-pfvwus-pf~882383921',
        label: 'The Log Connection Houzz'
    }
]

const BCT = [
    "01:00 AM",
    "02:00 AM",
    "03:00 AM",
    "04:00 AM",
    "05:00 AM",
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
    "11:00 PM",
    "12:00 PM",

]

const DEFAULT_FORM_DATA = {
    firstNm: "",
    lastNm: "",
    emailAdd: "",
    phone: "",
    bct: "",
    message: ""
}

const ContactForm = () => {

    const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let payload = {
            "FirstName": formData.firstNm,
            "LastName": formData.lastNm,
            "EmailAddress": formData.emailAdd,
            "Phone": formData.phone,
            "BestCallTime": formData.bct,
            "Message": formData.message,
        }

        try {
            let res = await sendMessage(payload);
            if (res && res.response === "200") {
                ToastNotification(TOAST_NOTIF.CONTACT_US_SUCCESS);
                setFormData(DEFAULT_FORM_DATA);
            } else {
                ToastNotification(TOAST_NOTIF.DEFAULT_ERROR);
            }   
        } catch (err) {
            ToastNotification(TOAST_NOTIF.DEFAULT_ERROR);
        } finally {
            //setFormData(DEFAULT_FORM_DATA);
        }
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <section className={STYLES.contactPage}>
            <MDBContainer className="pb-5 px-5">
                <MDBRow className="mb-n4">
                    <MDBCol md="6" sm="12" className="pt-4">
                        <div className={STYLES.header}>Contact Us</div>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="p-0">
                    <MDBCol md="12" sm="12" className="mb-n4">
                        <div className={`${STYLES.header} ${STYLES.contactNo}`}>
                            <a href="tel:+1-888-207-0210">
                                <div className={STYLES.icon}>
                                    <img src={`${IMG_ROOT}custom-phone.jpg`} />
                                </div>
                            Direct(250) 770-9031
                            </a>
                        </div>
                    </MDBCol>
                    <MDBCol md="12" sm="12">
                        <div className={`${STYLES.subHeader1} ${STYLES.borderBtm}`}>Email Us</div>
                    </MDBCol>
                </MDBRow>
                <MDBRow center>
                    <MDBCol md="6">
                        <form autoComplete="off" onSubmit={handleSubmit}>
                            <MDBRow className="mt-3">
                                <MDBCol md="7" className="mt-2">
                                    <label className="d-flex mb-0" htmlFor="firstName">FIRST NAME</label>
                                    <input type="text" id="firstName" name="firstName" className={`${STYLES.inputBox}`} onChange={handleInput} />
                                </MDBCol>
                                <MDBCol md="5" className="mt-2">
                                    <label className="d-flex mb-0" htmlFor="lastName">LAST NAME</label>
                                    <input type="text" id="lastName" name="lastName" className={STYLES.inputBox} onChange={handleInput} />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className="mt-3">
                                <MDBCol md="12">
                                    <label className="d-flex mb-0" htmlFor="emailAdd">EMAIL ADDRESS:</label>
                                    <input type="email" id="emailAdd" name="emailAdd" className={`${STYLES.inputBox}`} onChange={handleInput} required />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className="mt-3">
                                <MDBCol md="7" className="mt-2">
                                    <label className="d-flex mb-0" htmlFor="phone">PHONE:</label>
                                    <input type="text" id="phone" name="phone" className={`${STYLES.inputBox}`} onChange={handleInput} />
                                </MDBCol>
                                <MDBCol md="5" className="mt-2">
                                    <label className="d-flex mb-0" htmlFor="bct">BEST CALL TIME</label>
                                    <select type="text" id="bct" name="bct" className={STYLES.inputBox} onChange={handleInput} >
                                        <option value={''}>Please Select</option>
                                        {BCT.map((t, i) => (
                                            <option value={t} key={i}>{t}</option>
                                        ))}
                                    </select>
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className="my-3">
                                <MDBCol md="12" className="mt-2">
                                    <label className="d-flex mb-0" htmlFor="message">Type your message below</label>
                                    <textarea maxLength="250" type="text" id="message" name="message" className={`${STYLES.inputBox}`} onChange={handleInput} required />
                                </MDBCol>
                            </MDBRow>
                            <div className={STYLES.submitBtn}>
                                <MDBBtn type="submit" color="red">CLICK TO SEND EMAIL <MDBIcon far icon="paper-plane" className="ml-2" /></MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                    <MDBCol md="6" className={`${STYLES.socMed} mt-4`}>
                        {SOC_MED.map((s, i) => (
                            <div key={i} className={STYLES.cont}><a href={s.link} target="_blank"><img src={s.imgUrl} alt={s.label} /></a></div>
                        ))}
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </section>
    )

}

export default ContactForm;