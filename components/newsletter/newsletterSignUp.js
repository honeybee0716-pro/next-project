import React, { useState } from "react";
import { MDBModal, MDBModalBody, MDBModalHeader, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import Zoom from "react-reveal/Zoom";
import { subscribeToNewsletter } from '../../common/services/newsletter';
import { ToastNotification, TOAST_NOTIF } from '../common/toast';
import ANIMATION from '../../styles/Animation.module.scss';
import STYLES from '../../styles/modules/NewsletterSignUp.module.scss';


const DEFAULT ={
    isPB: true,
    isSL: true,
    isTF: true,
    emailAdd: '',
    firstNm: '',
    lastNm: ''
}

export const NewsletterSignUpModal = (props) => {

    const [state, setState] = useState({ modal: false });
    const [formData, setFormData] = useState(DEFAULT);

    const toggle = (e) => {
        setState({
            modal: !state.modal
        });
    }

    const handleInput = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        let payload = {
            "FirstNm": formData.firstNm,
            "LastNm": formData.lastNm,
            "EmailAddress": formData.emailAdd,
            "PostAndBeam": formData.isPB,
            "StackedLog": formData.isSL,
            "TimberFrame": formData.isTF
        }

        try {
            let res = await subscribeToNewsletter(payload);

            if (res && res.response === "200") {
                setState({ modal: false });
                ToastNotification(TOAST_NOTIF.NEWSLETTER_SUCCESS);
            } else {
                setState({ modal: false });
                ToastNotification(TOAST_NOTIF.DEFAULT_ERROR);
            }
  
        } catch (err) {
            ToastNotification(TOAST_NOTIF.DEFAULT_ERROR);
        } finally {
            setFormData(DEFAULT);
        }
    }


    return (
        <section className={STYLES.signUpModal}>
            <Zoom>
                <MDBBtn onClick={toggle} color="yellow" size="lg" className={`${STYLES.signUpBtn} ${ANIMATION.shakeable}`}>
                    <MDBIcon icon="sign-in-alt" alt={'News Letter Sign up'} title={'News Letter Sign up'} ></MDBIcon> Sign Up
                </MDBBtn>
            </Zoom>
            <MDBModal isOpen={state.modal} toggle={toggle} size="md">
                <MDBModalHeader toggle={toggle}>
                    <div className="text-center">Sign up for our Newsletter</div>
                </MDBModalHeader>
                <MDBModalBody>
                    <MDBContainer className="my-2">
                        <form onSubmit={handleSignUp} autoComplete="off">
                            <MDBRow>
                                <MDBCol md="5" lg="5" className="pr-0">
                                    <label htmlFor="emailAdd" className={`${STYLES.inputLabel}`}>Email Address</label>
                                </MDBCol>
                                <MDBCol md="7" lg="7" >
                                    <input type="email" id="emailAdd" name="emailAdd" value={formData.emailAdd} onChange={handleInput} required />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol md="5" lg="5" className="pr-0">
                                    <label htmlFor="firstNm" className={`${STYLES.inputLabel}`}>First Name</label>
                                </MDBCol>
                                <MDBCol md="7" lg="7">
                                    <input type="text" id="firstNm" name="firstNm" value={formData.firstNm} onChange={handleInput} required />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol md="5" lg="5" className="pr-0">
                                    <label htmlFor="lastNm" className={`${STYLES.inputLabel}`}> Last Name</label>
                                </MDBCol>
                                <MDBCol md="7" lg="7">
                                    <input type="text" id="lastNm" name="lastNm" value={formData.lastNm} onChange={handleInput} required />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className="pt-2">
                                <MDBCol md="5" lg="5" className="pr-0">
                                    <div className={`mt-2 ${STYLES.inputLabel}`}>What style interests you?</div>
                                </MDBCol>
                                <MDBCol md="7" lg="7">
                                    <div>
                                        <input type="checkbox" id="isPB" name="isPB" checked={formData.isPB === true} onChange={handleInput} />
                                        <label htmlFor="isPB" className={`ml-2`}>Post and Beam</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="isSL" name="isSL" checked={formData.isSL === true} onChange={handleInput} />
                                        <label htmlFor="isSL" className={`ml-2`}>Stacked Log Walls</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="isTF" name="isTF" checked={formData.isTF === true} onChange={handleInput} />
                                        <label htmlFor="isTF" className={`ml-2`}>Timber Frame</label>
                                    </div>
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className="pt-3">
                                <MDBCol size="12">
                                    <Zoom>
                                        <div className="text-center">
                                            <MDBBtn type= "submit" color="yellow" size="lg" className={`${STYLES.signUpBtn} ${ANIMATION.shakeable}`}>
                                                <MDBIcon icon="sign-in-alt" alt={'News Letter Sign up'} title={'News Letter Sign up'} ></MDBIcon> Subscribe Now
                                            </MDBBtn>
                                        </div>
                                    </Zoom>
                                </MDBCol>
                            </MDBRow>
                            <div className="g-recaptcha" data-sitekey="6LfOVE4UAAAAACa5y2JMJM9oLfAE9DqChBsYzx8H"></div>                    
                        </form>
                    </MDBContainer>
                </MDBModalBody>
            </MDBModal>

        </section>)
}