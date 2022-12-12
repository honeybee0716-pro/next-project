import React, { useState } from "react";
import { BannerSection } from '../../components/common/banner';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import STYLES from '../../styles/PlanBook.module.scss';
import { Divider } from '../../components/common/labels';
import { COUNTRIES } from "../../data/country";
import { COUNTRY_STATES } from "../../data/country-states";
import { savePlanBook } from '../../common/services/plan-book';
import { ToastNotification, TOAST_NOTIF } from '../../components/common/toast';

const IMG_ROOT = `${process.env.IMG_BASE_URL}/plan-book/`;

const WHATS_INCLUDED = [
    {
        title: `Full Color Log Homes Plan Book`,
        description: `Be inspired while you browse through our beautifully detailed, full color, Log Homes Plan Book. Our plan book features many creative and unique home design ideas available exclusively at The Log Connection.`
    },
    {
        title: `Free DVD`,
        description: (<div>We're now including our DVD of virtual home tours fee. <small><i>(Previously $5 additional)</i></small></div>)
    },
    {
        title: `Construction Ready Floor Plan Ideas`,
        description: (<div>Includes our award winning favorite floor plans and exterior views. Select one of the designs from the book for the quickest delivery of your deram home or take advantage of our in-house design team and modify any plan in this book to suit your personal style. If you can dream it we can design it.
            <br />
            <br />We encourage you to give us a call to discuss your log home project. With over 30 years in the log home industry our experienced staff can answer any questions you may have and explain the unique features we offer that distinguish The Log Connection home from the others.
            <br />
            <br />
            We will mail your plan book package to you within two business days. Please expect the delivery within: 1-2 weeks
        </div>)
    },
]

const PlanBookPage = () => {

    const [formData, setFormData] = useState({
        //about you
        ay_firstName: "",
        ay_lastName: "",
        ay_emailAddress: "",
        ay_phone: "",
        //shipping address
        sa_street: "",
        sa_aptNo: "",
        sa_city: "",
        sa_country: "",
        sa_state: "",
        sa_postalCode: "",
        //project information
        pi_country: "",
        pi_state: "",
        pi_turnKeyBudget: "",
        //payment options 
        po_ccholderName: "",
        po_ccNumber: "",
        po_ccExpiration: "",
        po_3NoCode: ""
    });

    const [stateArrayShippingAddress, setStateArrayShippingAddress] = useState([]);
    const [creditCardType, setCreditCardType] = useState('Visa');
    const [copyRightAck, setCopyRightAck] = useState(false);
    const [noRefundAck, setNoRefundAck] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let payload = {
            //AY = ABOUT YOU
            "AY_FirstName": formData.ay_firstName,
            "AY_LastName": formData.ay_lastName,
            "AY_EmailAddress": formData.ay_emailAddress,
            "AY_Phone": formData.ay_phone,
            //SA = SHIPPING ADDRESS
            "SA_Street": formData.sa_street,
            "SA_AptNo": formData.sa_aptNo,
            "SA_City": formData.sa_city,
            "SA_Country": formData.sa_country,
            "SA_State": formData.sa_state,
            "SA_PostalCd": formData.sa_postalCode,
            //CC = CREDIT CARD
            "CC_Type": creditCardType,
            "CC_HolderNm": formData.po_ccholderName,
            "CC_Nbr": formData.po_ccNumber,
            "CC_Expiration": formData.po_ccExpiration,
            "CC_Last3Code": formData.po_3NoCode,
            //ACK = Acknowledgement
            "ACK_Copyright": copyRightAck,
            "ACK_NoRefund": noRefundAck
        }

        await savePlanBook(payload).then(async (res) => {
            if (res && res.response === "200") {
                ToastNotification(TOAST_NOTIF.ORDER_PLAN_BOOK_SUCCESS);
            } else {

                ToastNotification(TOAST_NOTIF.DEFAULT_ERROR);
            }
        });
    }

    const setCountryStateMappingForShippingAddress = (e) => {
        const { name, value } = e.target;
        let countryObj = COUNTRY_STATES.filter(x => x.country === e.target.value)[0];
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        if (countryObj && countryObj.states && countryObj.states.length > 0) {
            setStateArrayShippingAddress(countryObj.states);
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
        <>
            <BannerSection img={`${IMG_ROOT}plan_book_banner.jpg`} />
            <section className={STYLES.homePlanBook}>
                <MDBContainer>
                    <MDBRow center className={`${STYLES.formCont}`}>
                        <MDBCol md="5" sm="12" className="py-3">
                            <form autoComplete="off" onSubmit={handleSubmit}>
                                <section id="about_you">
                                    <p className={STYLES.formSectionTitle}>ABOUT YOU</p>
                                    <MDBRow center className={STYLES.formText}>
                                        <MDBCol md="2" sm="12" className="p-0">
                                            <label htmlFor="ay_firstName">FIRST NAME</label>
                                        </MDBCol>
                                        <MDBCol md="4" sm="12" className="p-0">
                                            <input type="text" id="ay_firstName" name="ay_firstName" className={STYLES.inputBox} value={formData.ay_firstName}
                                                onChange={handleInput} required />
                                        </MDBCol>
                                        <MDBCol md="2" sm="12" className="p-0">
                                            <label htmlFor="ay_lastName">LAST NAME</label>
                                        </MDBCol>
                                        <MDBCol md="4" sm="12" className="p-0">
                                            <input type="text" id="ay_lastName" name="ay_lastName" className={STYLES.inputBox} value={formData.ay_lastName}
                                                onChange={handleInput} required />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow center className={STYLES.formText}>
                                        <MDBCol md="2" sm="12" className="p-0">
                                            <label htmlFor="ay_emailAddress">EMAIL ADDRESS</label>
                                        </MDBCol>
                                        <MDBCol md="4" sm="12" className="p-0">
                                            <input type="email" id="ay_emailAddress" name="ay_emailAddress" className={STYLES.inputBox} value={formData.ay_emailAddress} onChange={handleInput} required />
                                        </MDBCol>
                                        <MDBCol md="2" sm="12" className="p-0">
                                            <label htmlFor="phone">PHONE</label>
                                        </MDBCol>
                                        <MDBCol md="4" sm="12" className="p-0">
                                            <input type="text" id="phone" name="ay_phone" className={STYLES.inputBox} value={formData.ay_phone}
                                                onChange={handleInput} required />
                                        </MDBCol>
                                    </MDBRow>
                                </section>

                                <section id="shipping_address">
                                    <p className={STYLES.formSectionTitle}>Shipping Address</p>
                                    <MDBRow center className={STYLES.formText}>
                                        <MDBCol md="2" sm="12" className="p-0">
                                            <label htmlFor="sa_street">STREET</label>
                                        </MDBCol>
                                        <MDBCol md="4" sm="12" className="p-0">
                                            <input type="text" id="sa_street" name="sa_street" className={STYLES.inputBox} value={formData.sa_street}
                                                onChange={handleInput} required />
                                        </MDBCol>
                                        <MDBCol md="2" sm="12" className="p-0">
                                            <label htmlFor="sa_aptNo">APT No.</label>
                                        </MDBCol>
                                        <MDBCol md="4" sm="12" className="p-0">
                                            <input type="text" id="sa_aptNo" name="sa_aptNo" className={STYLES.inputBox} value={formData.sa_aptNo}
                                                onChange={handleInput} required />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow center className={STYLES.formText}>
                                        <MDBCol md="2" sm="12" className="p-0">
                                            <label htmlFor="sa_city">CITY</label>
                                        </MDBCol>
                                        <MDBCol md="4" sm="12" className="p-0">
                                            <input type="text" id="sa_city" name="sa_city" className={STYLES.inputBox} value={formData.sa_city}
                                                onChange={handleInput} required />
                                        </MDBCol>
                                        <MDBCol md="2" sm="12" className="p-0">
                                            <label htmlFor="sa_country">COUNTRY</label>
                                        </MDBCol>
                                        <MDBCol md="4" sm="12" className="p-0" className={STYLES.selectCont}>
                                            <select id="sa_country" name="sa_country" onChange={setCountryStateMappingForShippingAddress} required>
                                                <option value={''}>--Select Country--</option>
                                                {COUNTRIES.map((country, index) => (
                                                    <option value={country.name} key={index}>{country.name}</option>
                                                ))}
                                            </select>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow center className={STYLES.formText}>
                                        <MDBCol md="2" sm="12" className="p-0">
                                            <label htmlFor="sa_state">STATE</label>
                                        </MDBCol>
                                        <MDBCol md="4" sm="12" className="p-0" className={STYLES.selectCont}>
                                            <select id="sa_state" name="sa_state" onChange={handleInput} required>
                                                <option value={''}>--Select State--</option>
                                                {stateArrayShippingAddress.map((state, index) => (
                                                    <option value={state} key={index}>{state}</option>
                                                ))}
                                            </select>
                                        </MDBCol>
                                        <MDBCol md="2" sm="12" className="p-0">
                                            <label htmlFor="sa_postalCode">POSTAL CODE</label>
                                        </MDBCol>
                                        <MDBCol md="4" sm="12" className="p-0">
                                            <input type="text" id="sa_postalCode" name="sa_postalCode" className={STYLES.inputBox} value={formData.sa_postalCode}
                                                onChange={handleInput} required />
                                        </MDBCol>
                                    </MDBRow>
                                </section>


                                <section id="payment_options">
                                    <p className={STYLES.formSectionTitle}>PAYMENT OPTIONS</p>
                                    <MDBRow className={STYLES.formRadio}>
                                        <MDBCol md="5" sm="12" className={STYLES.formText}>
                                            <label htmlFor="">CREDIT CARD TYPE:</label>
                                        </MDBCol>
                                        <MDBCol md="7" sm="12">
                                            <input onClick={() => setCreditCardType('Visa')} checked={creditCardType === 'Visa'} type="radio" id="visa" onChange={() => { }} />
                                            <label htmlFor="visa">Visa</label>
                                            <input onClick={() => setCreditCardType('MasterCard')} checked={creditCardType === 'MasterCard'} type="radio" id="masterCard" onChange={() => { }} />
                                            <label htmlFor="masterCard">Master Card</label>
                                            <input onClick={() => setCreditCardType('Discover')} checked={creditCardType === 'Discover'} type="radio" id="discover" onChange={() => { }} />
                                            <label htmlFor="discover">Discover</label>
                                            <input onClick={() => setCreditCardType('AMX')} checked={creditCardType === 'AMX'} type="radio" id="amx" onChange={() => { }} />
                                            <label htmlFor="amx">AMX</label>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={STYLES.formText}>
                                        <MDBCol md="5" sm="12" className="p-0">
                                            <label htmlFor="po_ccholderName">CARDHOLDER'S NAME: </label>
                                        </MDBCol>
                                        <MDBCol md="7" sm="12" >
                                            <input type="text" id="po_ccholderName" name="po_ccholderName" className={STYLES.inputBox} value={formData.po_ccholderName}
                                                onChange={handleInput} />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={STYLES.formText}>
                                        <MDBCol md="5" sm="12" className="p-0">
                                            <label htmlFor="po_ccNumber">CARD NUMBER: </label>
                                        </MDBCol>
                                        <MDBCol md="7" sm="12" >
                                            <input type="text" id="po_ccNumber" name="po_ccNumber" className={STYLES.inputBox} value={formData.po_ccNumber} onChange={handleInput} />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={STYLES.formText} >
                                        <MDBCol md="5" sm="12" className="p-0">
                                            <label htmlFor="po_ccExpiration">EXPIRE: (Y-M-D)</label>
                                        </MDBCol>
                                        <MDBCol md="3" sm="12">
                                            <input type="text" id="po_ccExpiration" name="po_ccExpiration" className={STYLES.inputBox} value={formData.po_ccExpiration} onChange={handleInput} />
                                        </MDBCol>
                                        <MDBCol md="4" sm="12" className="p-0">
                                            <MDBRow>
                                                <MDBCol md="3" sm="12" style={{ padding: "0", float: "left" }}>
                                                    <label htmlFor="po_3NoCode">3 No. Code</label>
                                                </MDBCol>
                                                <MDBCol md="6" sm="10" style={{ padding: "0", float: "left" }}>
                                                    <input type="text" id="po_3NoCode" name="po_3NoCode" className={STYLES.inputBox} value={formData.po_3NoCode} onChange={handleInput} />
                                                </MDBCol>
                                                <MDBCol md="2" className="p-0"></MDBCol>
                                            </MDBRow>

                                        </MDBCol>
                                    </MDBRow>
                                </section>

                                <section id="acknowledgement">
                                    <MDBRow className={`${STYLES.formRadio} ${STYLES.ackCont}`}>
                                        <MDBCol md="5" sm="12"> </MDBCol>
                                        <MDBCol md="7" sm="12">
                                            <input onClick={() => setCopyRightAck(!copyRightAck)} checked={copyRightAck === true} type="radio" id="copyRightAck" onChange={() => { }} />
                                            <label htmlFor="copyRightAck">I understand that the Plan Book is a copyrighted design.</label>
                                        </MDBCol>
                                        <MDBCol md="5" sm="12"> </MDBCol>
                                        <MDBCol md="7" sm="12">
                                            <input onClick={() => setNoRefundAck(!noRefundAck)} checked={noRefundAck === true} type="radio" id="noRefundAck" onChange={() => { }} />
                                            <label htmlFor="noRefundAck">I understand there are no refunds or exchanges for shipped orders</label>
                                        </MDBCol>
                                    </MDBRow>
                                </section>

                                <section id="complete_button">
                                    <MDBRow>
                                        <MDBCol md="12" className={`${STYLES.completeOrderContainer}`}>
                                            <MDBBtn type="submit" size="sm" className={`${STYLES.completeOrderBtn}`}>Click to Complete Order</MDBBtn>
                                        </MDBCol>
                                        <MDBCol md="12" className={`${STYLES.completeOrderSubtextCont}`} >
                                            <strong className={`${STYLES.completeOrderSubtext}`}>Plan Books will be processed <br />
                                                and sent within two business days.</strong>
                                        </MDBCol>
                                    </MDBRow>

                                </section>
                            </form>

                        </MDBCol>
                        <MDBCol md="7" sm="12" className="py-2">
                            <MDBRow className={`${STYLES.descCont}`}>
                                <MDBCol md="5" className="pr-0 mt-5">
                                    <h3>Home Plan Book:</h3>
                                    <Divider />
                                    <div className="mt-3">
                                        <h4>The fee for online order is $19.00.</h4>
                                        <h4>*International must pay for shipping call or e-mail for shipping amount</h4>
                                    </div>

                                </MDBCol>
                                <MDBCol md="7" className="pr-0 mt-1">
                                    <img src={`${IMG_ROOT}plan_book.jpg`} />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={`${STYLES.descCont}`}>
                                <MDBCol md="12">
                                    <div className={`${STYLES.wiText} mb-2`}>What's Included?</div>
                                    {WHATS_INCLUDED.map((wi, i) => (
                                        <div key={i}>
                                            <div className={`${STYLES.title} mt-3`}>{wi.title}</div>
                                            <div className={`${STYLES.desc}`}>{wi.description}</div>
                                        </div>
                                    ))}
                                </MDBCol>

                            </MDBRow>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </section>
        </>
    );
};

export default PlanBookPage;