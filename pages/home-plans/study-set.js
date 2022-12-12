import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import STYLES from "../../styles/home-plans/StudySet.module.scss";
import { COUNTRIES } from "../../data/country";
import { COUNTRY_STATES } from "../../data/country-states";
import { saveStudySet, getHomePlan } from "../../common/services/home-plans";
import IMG_NOIMG from "../../assets/images/common/no-img.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BannerSection } from "../../components/common/banner";
import { useRouter } from "next/router";
import { FloaterNav } from "../../components/home-plans/floaterNav";
import { ToastNotification, TOAST_NOTIF } from "../../components/common/toast";
import { SubNavbar } from "../../components/common/subNavbar";

const IMG_BANNER_FILE_ROOT = `${process.env.IMG_BASE_URL}/study-set/`;

const StudySetPage = () => {
  const router = useRouter();
  let planCode = router.query.plan;

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
    po_3NoCode: "",
  });

  const [stateArrayShippingAddress, setStateArrayShippingAddress] = useState(
    []
  );
  const [stateArrayProjectInfo, setStateArrayProjectInfo] = useState([]);
  const [hasPurchasedLand, setHasPurchasedLand] = useState(false);
  const [hasBlueprint, setHasBlueprint] = useState(false);
  const [creditCardType, setCreditCardType] = useState("Visa");
  const [copyRightAck, setCopyRightAck] = useState(false);
  const [noRefundAck, setNoRefundAck] = useState(false);
  const [buildDate, setBuildDate] = useState("");
  const [total, setTotal] = useState(0);
  const [selectedPlan1, setSelectedPlan1] = useState("");
  const [selectedPlan2, setSelectedPlan2] = useState("");
  const [selectedPlan3, setSelectedPlan3] = useState("");
  const [selectedPlan1Cost, setSelectedPlan1Cost] = useState(0);
  const [selectedPlan2Cost, setSelectedPlan2Cost] = useState(0);
  const [selectedPlan3Cost, setSelectedPlan3Cost] = useState(0);
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    setTotal(selectedPlan1Cost + selectedPlan2Cost + selectedPlan3Cost);
  }, [selectedPlan1Cost, selectedPlan2Cost, selectedPlan3Cost]);

  const [allHomePlans, setAllHomePlansList] = useState([]);
  const [homePlanList, setHomePlanList] = useState([]);

  useEffect(() => {
    getHomePlan("all")
      .then((data) => {
        if (data) {
          setAllHomePlansList(data);
          setHomePlanList(data);

          let homePlan = data.filter((c) => c.planCode === planCode)[0];
          if (homePlan && homePlan.planCode) {
            setSelectedPlan1(homePlan);
            let sp1 =
              homePlan && !isNaN(homePlan.studySetCost)
                ? Number(homePlan.studySetCost)
                : 0;
            setSelectedPlan1Cost(sp1);
          } else {
            setSelectedPlan1({});
            setSelectedPlan1Cost(0);
          }
        } else {
          return <h2>ERROR...</h2>;
        }
      })
      .catch((err) => {
        return <h2>ERROR...</h2>;
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let payload = {
      //AY = ABOUT YOU
      AY_FirstName: formData.ay_firstName,
      AY_LastName: formData.ay_lastName,
      AY_EmailAddress: formData.ay_emailAddress,
      AY_Phone: formData.ay_phone,
      //SA = SHIPPING ADDRESS
      SA_Street: formData.sa_street,
      SA_AptNo: formData.sa_aptNo,
      SA_City: formData.sa_city,
      SA_Country: formData.sa_country,
      SA_State: formData.sa_state,
      SA_PostalCd: formData.sa_postalCode,
      //PI = PROJECT INFORMATION
      PI_Country: formData.pi_country,
      PI_State: formData.pi_state,
      PI_BuildDate: buildDate,
      PI_TurnKeyBudget: formData.pi_turnKeyBudget,
      PI_HasPurchasedLand: hasPurchasedLand,
      PI_HasBlueprint: hasBlueprint,
      //OP = ORDER PLAN
      OP_HomePlanCd1:
        selectedPlan1 && selectedPlan1.planCode ? selectedPlan1.planCode : "",
      OP_HomePlanCd2:
        selectedPlan2 && selectedPlan2.planCode ? selectedPlan2.planCode : "",
      OP_HomePlanCd3:
        selectedPlan3 && selectedPlan3.planCode ? selectedPlan3.planCode : "",
      OP_Price1:
        selectedPlan1 && selectedPlan1.studySetCost
          ? selectedPlan1.studySetCost
          : "",
      OP_Price2:
        selectedPlan2 && selectedPlan2.studySetCost
          ? selectedPlan2.studySetCost
          : "",
      OP_Price3:
        selectedPlan3 && selectedPlan3.studySetCost
          ? selectedPlan3.studySetCost
          : "",
      OP_PriceTotal: total,
      //CC = CREDIT CARD
      CC_Type: creditCardType,
      CC_HolderNm: formData.po_ccholderName,
      CC_Nbr: formData.po_ccNumber,
      CC_Expiration: formData.po_ccExpiration,
      CC_Last3Code: formData.po_3NoCode,
      //ACK = Acknowledgement
      ACK_Copyright: copyRightAck,
      ACK_NoRefund: noRefundAck,
    };
    await saveStudySet(payload).then(async (res) => {
      if (res && res.response === "200") {
        ToastNotification(TOAST_NOTIF.ORDER_STUDY_SET_SUCCESS);
      } else {
        ToastNotification(TOAST_NOTIF.DEFAULT_ERROR);
      }
    });
  };

  const setCountryStateMappingForShippingAddress = (e) => {
    const { name, value } = e.target;
    let countryObj = COUNTRY_STATES.filter(
      (x) => x.country === e.target.value
    )[0];
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (countryObj && countryObj.states && countryObj.states.length > 0) {
      setStateArrayShippingAddress(countryObj.states);
    }
  };

  const setCountryStateMappingForProjectInfo = (e) => {
    const { name, value } = e.target;
    let countryObj = COUNTRY_STATES.filter(
      (x) => x.country === e.target.value
    )[0];
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (countryObj && countryObj.states && countryObj.states.length > 0) {
      setStateArrayProjectInfo(countryObj.states);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectedPlan = (e, planCd) => {
    let sp = e.target.value;

    if (planCd === "plan_1") {
      let homePlan = allHomePlans.filter((c) => c.planCode === sp)[0];
      if (homePlan && homePlan.planCode) {
        setSelectedPlan1(homePlan);
        let sp1 =
          homePlan && !isNaN(homePlan.studySetCost)
            ? Number(homePlan.studySetCost)
            : 0;
        setSelectedPlan1Cost(sp1);
      } else {
        setSelectedPlan1({});
        setSelectedPlan1Cost(0);
      }
    }
    if (planCd === "plan_2") {
      let homePlan = allHomePlans.filter((c) => c.planCode === sp)[0];
      if (homePlan && homePlan.planCode) {
        setSelectedPlan2(homePlan);
        let sp2 =
          homePlan && !isNaN(homePlan.studySetCost)
            ? Number(homePlan.studySetCost)
            : 0;
        setSelectedPlan2Cost(sp2);
      } else {
        setSelectedPlan2({});
        setSelectedPlan2Cost(0);
      }
    }
    if (planCd === "plan_3") {
      let homePlan = allHomePlans.filter((c) => c.planCode === sp)[0];
      if (homePlan && homePlan.planCode) {
        setSelectedPlan3(homePlan);
        let sp3 =
          homePlan && !isNaN(homePlan.studySetCost)
            ? Number(homePlan.studySetCost)
            : 0;
        setSelectedPlan3Cost(sp3);
      } else {
        setSelectedPlan3({});
        setSelectedPlan3Cost(0);
      }
    }
  };
  const filteredData = homePlanList.filter((item) => item?.name != planCode);
  // useEffect(() => {
  //   setFilteredPlans(filteredData);
  // }, [filteredPlans]);

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      setFilteredPlans(filteredData);
    }
  }, [filteredPlans, isInitialRender]);
  return (
    <>
      <BannerSection img={`${IMG_BANNER_FILE_ROOT}banner.jpg`} />
      <FloaterNav homePlans={allHomePlans} />
      <SubNavbar forGoBack={true} />

      <section className={STYLES.studySetSection}>
        <MDBContainer>
          <MDBRow center className={`${STYLES.formCont} p-3`}>
            <MDBCol md="7" sm="12">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <section id="about_you">
                  <p className={STYLES.formSectionTitle}>ABOUT YOU</p>
                  <MDBRow center className={STYLES.formText}>
                    <MDBCol md="2" sm="12" className="p-0 mb-2">
                      <label htmlFor="ay_firstName">FIRST NAME</label>
                    </MDBCol>
                    <MDBCol md="4" sm="12">
                      <input
                        type="text"
                        id="ay_firstName"
                        name="ay_firstName"
                        className={STYLES.inputBox}
                        value={formData.ay_firstName}
                        onChange={handleInput}
                        required
                      />
                    </MDBCol>
                    <MDBCol md="2" sm="12" className="p-0 mb-2">
                      <label htmlFor="ay_lastName">LAST NAME</label>
                    </MDBCol>
                    <MDBCol md="4" sm="12">
                      <input
                        type="text"
                        id="ay_lastName"
                        name="ay_lastName"
                        className={STYLES.inputBox}
                        value={formData.ay_lastName}
                        onChange={handleInput}
                        required
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow center className={STYLES.formText}>
                    <MDBCol md="2" sm="12" className="p-0 mb-2">
                      <label htmlFor="ay_emailAddress">EMAIL ADDRESS</label>
                    </MDBCol>
                    <MDBCol md="4" sm="12">
                      <input
                        type="email"
                        id="ay_emailAddress"
                        name="ay_emailAddress"
                        className={STYLES.inputBox}
                        value={formData.ay_emailAddress}
                        onChange={handleInput}
                        required
                      />
                    </MDBCol>
                    <MDBCol md="2" sm="12" className="p-0 mb-2">
                      <label htmlFor="phone">PHONE</label>
                    </MDBCol>
                    <MDBCol md="4" sm="12">
                      <input
                        type="text"
                        id="phone"
                        name="ay_phone"
                        className={STYLES.inputBox}
                        value={formData.ay_phone}
                        onChange={handleInput}
                        required
                      />
                    </MDBCol>
                  </MDBRow>
                </section>

                <section id="shipping_address">
                  <p className={STYLES.formSectionTitle}>Shipping Address</p>
                  <MDBRow center className={STYLES.formText}>
                    <MDBCol md="2" sm="12" className="p-0 mb-2">
                      <label htmlFor="sa_street">STREET</label>
                    </MDBCol>
                    <MDBCol md="4" sm="12">
                      <input
                        type="text"
                        id="sa_street"
                        name="sa_street"
                        className={STYLES.inputBox}
                        value={formData.sa_street}
                        onChange={handleInput}
                        required
                      />
                    </MDBCol>
                    <MDBCol md="2" sm="12" className="p-0 mb-2">
                      <label htmlFor="sa_aptNo">APT No.</label>
                    </MDBCol>
                    <MDBCol md="4" sm="12">
                      <input
                        type="text"
                        id="sa_aptNo"
                        name="sa_aptNo"
                        className={STYLES.inputBox}
                        value={formData.sa_aptNo}
                        onChange={handleInput}
                        required
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow center className={STYLES.formText}>
                    <MDBCol md="2" sm="12" className="p-0 mb-2">
                      <label htmlFor="sa_city">CITY</label>
                    </MDBCol>
                    <MDBCol md="4" sm="12">
                      <input
                        type="text"
                        id="sa_city"
                        name="sa_city"
                        className={STYLES.inputBox}
                        value={formData.sa_city}
                        onChange={handleInput}
                        required
                      />
                    </MDBCol>
                    <MDBCol md="2" sm="12" className="p-0 mb-2">
                      <label htmlFor="sa_country">COUNTRY</label>
                    </MDBCol>
                    <MDBCol
                      md="4"
                      sm="12"
                      className={`pl-3 ${STYLES.selectCont}`}
                    >
                      <select
                        id="sa_country"
                        name="sa_country"
                        onChange={setCountryStateMappingForShippingAddress}
                        required
                      >
                        <option value={""}>--Select Country--</option>
                        {COUNTRIES.map((country, index) => (
                          <option value={country.name} key={index}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow center className={STYLES.formText}>
                    <MDBCol md="2" sm="12" className="p-0">
                      <label htmlFor="sa_state">STATE</label>
                    </MDBCol>
                    <MDBCol
                      md="4"
                      sm="12"
                      className={`pl-3 ${STYLES.selectCont}`}
                    >
                      <select
                        id="sa_state"
                        name="sa_state"
                        onChange={handleInput}
                        required
                      >
                        <option value={""}>--Select State--</option>
                        {stateArrayShippingAddress.map((state, index) => (
                          <option value={state} key={index}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </MDBCol>
                    <MDBCol md="2" sm="12" className="p-0">
                      <label htmlFor="sa_postalCode">POSTAL CODE</label>
                    </MDBCol>
                    <MDBCol md="4" sm="12">
                      <input
                        type="text"
                        id="sa_postalCode"
                        name="sa_postalCode"
                        className={STYLES.inputBox}
                        value={formData.sa_postalCode}
                        onChange={handleInput}
                        required
                      />
                    </MDBCol>
                  </MDBRow>
                </section>

                <section id="project_info">
                  <p className={STYLES.formSectionTitle}>
                    PROJECT INFORMATION <small>(OPTIONAL)</small>
                  </p>
                  <MDBRow center className={STYLES.formText}>
                    <MDBCol md="2" sm="12" className="p-0">
                      <label htmlFor="pi_country">COUNTRY</label>
                    </MDBCol>
                    <MDBCol
                      md="4"
                      sm="12"
                      className={`pl-3 ${STYLES.selectCont}`}
                    >
                      <select
                        id="pi_country"
                        name="pi_country"
                        onChange={setCountryStateMappingForProjectInfo}
                      >
                        <option value={""}>--Select Country--</option>
                        {COUNTRIES.map((country, index) => (
                          <option value={country.name} key={index}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </MDBCol>
                    <MDBCol md="2" sm="12" className="p-0">
                      <label htmlFor="pi_buildDate">BUILT DATE:</label>
                    </MDBCol>
                    <MDBCol md="4" sm="12">
                      <DatePicker
                        selected={buildDate}
                        onChange={(date) => setBuildDate(date)}
                        className={STYLES.inputBox}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow center className={STYLES.formText}>
                    <MDBCol md="2" sm="12" className="p-0">
                      <label htmlFor="pi_state">STATE</label>
                    </MDBCol>
                    <MDBCol
                      md="4"
                      sm="12"
                      className={`pl-3 ${STYLES.selectCont}`}
                    >
                      <select
                        id="pi_state"
                        name="pi_state"
                        onChange={handleInput}
                      >
                        <option value={""}>--Select State--</option>
                        {stateArrayProjectInfo.map((state, index) => (
                          <option value={state} key={index}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </MDBCol>
                    <MDBCol md="2" sm="12" className="p-0">
                      <label htmlFor="pi_turnKeyBudget">
                        TURN KEY BUDGET:{" "}
                      </label>
                    </MDBCol>
                    <MDBCol
                      md="4"
                      sm="12"
                      className={`pl-3 ${STYLES.selectCont}`}
                    >
                      <select
                        id="pi_turnKeyBudget"
                        name="pi_turnKeyBudget"
                        onChange={(e) =>
                          (formData.pi_turnKeyBudget = e.target.value)
                        }
                      >
                        <option value="">Budget Range</option>
                        <option value="$ 200,000 to $ 300,000">
                          $ 200,000 to $ 300,000
                        </option>
                        <option value="$ 300,000 to $ 400,000">
                          $ 300,000 to $ 400,000
                        </option>
                        <option value="$ 400,000 to $ 500,000">
                          $ 400,000 to $ 500,000
                        </option>
                        <option value="$ 500,000 to $ 600,000">
                          $ 500,000 to $ 600,000
                        </option>
                        <option value="Over $ 600,000">Over $ 600,000</option>
                      </select>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className={STYLES.formRadio}>
                    <MDBCol md="6" sm="12" className="mt-2">
                      <label htmlFor="">Have purchased land</label>
                      <input
                        onClick={() => setHasPurchasedLand(true)}
                        checked={hasPurchasedLand === true}
                        type="radio"
                        id="hasPurchasedLandYes"
                        onChange={() => {}}
                      />
                      <label htmlFor="hasPurchasedLandYes">Yes</label>
                      <input
                        onClick={() => setHasPurchasedLand(false)}
                        checked={hasPurchasedLand === false}
                        type="radio"
                        id="hasPurchasedLandNo"
                        onChange={() => {}}
                      />
                      <label htmlFor="hasPurchasedLandNo">No</label>
                    </MDBCol>
                    <MDBCol md="6" sm="12" className="mt-2">
                      <label htmlFor="">Have Blueprints</label>
                      <input
                        onClick={() => setHasBlueprint(true)}
                        checked={hasBlueprint === true}
                        type="radio"
                        id="hasBlueprintYes"
                        onChange={() => {}}
                      />
                      <label htmlFor="hasBlueprintYes">Yes</label>
                      <input
                        onClick={() => setHasBlueprint(false)}
                        checked={hasBlueprint === false}
                        type="radio"
                        id="hasBlueprintNo"
                        onChange={() => {}}
                      />
                      <label htmlFor="hasBlueprintNo">No</label>
                    </MDBCol>
                  </MDBRow>
                </section>

                <section id="choose_your_design">
                  <p className={STYLES.formSectionTitle}>CHOOSE YOUR DESIGN</p>
                  <MDBRow className={STYLES.formCyd}>
                    <MDBCol md="3"></MDBCol>
                    <MDBCol md="3">
                      <p className={STYLES.title}>Study Set Name:</p>
                      <select
                        id="plan_1"
                        name="plan_1"
                        onChange={(e) => handleSelectedPlan(e, "plan_1")}
                        required
                      >
                        {/* <option style={{ display: "none" }} value={"none"}>
                          none
                        </option> */}
                        <option value={planCode}>{planCode}</option>
                        {filteredPlans.map((hp, index) => (
                          <option value={hp?.planCode} key={index}>
                            {hp.name}
                          </option>
                        ))}
                      </select>
                      {selectedPlan1 && selectedPlan1.planCode ? (
                        <div className={STYLES.imgCont}>
                          {" "}
                          <img src={selectedPlan1.imageUrl} />
                        </div>
                      ) : (
                        <div className={STYLES.noImgCont}>
                          <img src={IMG_NOIMG} />
                        </div>
                      )}
                    </MDBCol>
                    <MDBCol md="3">
                      <p className={STYLES.title}>Additional Study Set:</p>
                      <select
                        id="plan_2"
                        name="plan_2"
                        onChange={(e) => handleSelectedPlan(e, "plan_2")}
                      >
                        <option value={planCode}>{planCode}</option>
                        {filteredPlans.map((hp, index) => (
                          <option value={hp?.planCode} key={index}>
                            {hp.name}
                          </option>
                        ))}
                      </select>
                      {selectedPlan2 && selectedPlan2.planCode ? (
                        <div className={STYLES.imgCont}>
                          {" "}
                          <img src={selectedPlan2.imageUrl} />
                        </div>
                      ) : (
                        <div className={STYLES.noImgCont}>
                          <img src={IMG_NOIMG} />
                        </div>
                      )}
                    </MDBCol>
                    <MDBCol md="3">
                      <p className={STYLES.title}>Additional Study Set:</p>
                      <select
                        id="plan_3"
                        name="plan_3"
                        onChange={(e) => handleSelectedPlan(e, "plan_3")}
                      >
                        <option value={planCode}>{planCode}</option>
                        {filteredPlans.map((hp, index) => (
                          <option value={hp?.planCode} key={index}>
                            {hp.name}
                          </option>
                        ))}
                      </select>
                      {selectedPlan3 && selectedPlan3.planCode ? (
                        <div className={STYLES.imgCont}>
                          {" "}
                          <img src={selectedPlan3.imageUrl} />
                        </div>
                      ) : (
                        <div className={STYLES.noImgCont}>
                          <img src={IMG_NOIMG} />
                        </div>
                      )}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mt-2">
                    <MDBCol md="12" sm="12">
                      {" "}
                      Total Calculated Price : $ {total} CDN
                    </MDBCol>
                    <MDBCol md="12" sm="12">
                      {" "}
                      (NOTE: Canadian residents add applicable taxes)
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
                      <input
                        onClick={() => setCreditCardType("Visa")}
                        checked={creditCardType === "Visa"}
                        type="radio"
                        id="visa"
                        onChange={() => {}}
                      />
                      <label htmlFor="visa">Visa</label>
                      <input
                        onClick={() => setCreditCardType("MasterCard")}
                        checked={creditCardType === "MasterCard"}
                        type="radio"
                        id="masterCard"
                        onChange={() => {}}
                      />
                      <label htmlFor="masterCard">Master Card</label>
                      <input
                        onClick={() => setCreditCardType("Discover")}
                        checked={creditCardType === "Discover"}
                        type="radio"
                        id="discover"
                        onChange={() => {}}
                      />
                      <label htmlFor="discover">Discover</label>
                      <input
                        onClick={() => setCreditCardType("AMX")}
                        checked={creditCardType === "AMX"}
                        type="radio"
                        id="amx"
                        onChange={() => {}}
                      />
                      <label htmlFor="amx">AMX</label>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className={STYLES.formText}>
                    <MDBCol md="5" sm="12" className="p-0 mb-2">
                      <label htmlFor="po_ccholderName">
                        CARDHOLDER'S NAME:{" "}
                      </label>
                    </MDBCol>
                    <MDBCol md="7" sm="12">
                      <input
                        type="text"
                        id="po_ccholderName"
                        name="po_ccholderName"
                        className={STYLES.inputBox}
                        value={formData.po_ccholderName}
                        onChange={handleInput}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className={STYLES.formText}>
                    <MDBCol md="5" sm="12" className="p-0 mb-2">
                      <label htmlFor="po_ccNumber">CARD NUMBER: </label>
                    </MDBCol>
                    <MDBCol md="7" sm="12">
                      <input
                        type="text"
                        id="po_ccNumber"
                        name="po_ccNumber"
                        className={STYLES.inputBox}
                        value={formData.po_ccNumber}
                        onChange={handleInput}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className={STYLES.formText}>
                    <MDBCol md="5" sm="12" className="p-0">
                      <label htmlFor="po_ccExpiration">EXPIRE: (Y-M-D)</label>
                    </MDBCol>
                    <MDBCol md="3" sm="12">
                      <input
                        type="text"
                        id="po_ccExpiration"
                        name="po_ccExpiration"
                        className={STYLES.inputBox}
                        value={formData.po_ccExpiration}
                        onChange={handleInput}
                      />
                    </MDBCol>
                    <MDBCol md="4" sm="12" className="pr-3 ">
                      <MDBRow className={STYLES.formText}>
                        <MDBCol
                          md="3"
                          sm="12"
                          // style={{ padding: "0", float: "left" }}
                        >
                          <label htmlFor="po_3NoCode">3 No. Code</label>
                        </MDBCol>
                        <MDBCol md="9" sm="12">
                          <input
                            type="text"
                            id="po_3NoCode"
                            name="po_3NoCode"
                            className={STYLES.inputBox}
                            value={formData.po_3NoCode}
                            onChange={handleInput}
                          />
                        </MDBCol>
                        {/* <MDBCol md="2" className="p-0"></MDBCol> */}
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </section>

                <section id="acknowledgement">
                  <MDBRow
                    className={`${STYLES.formRadio} ${STYLES.ackCont} my-3`}
                  >
                    <MDBCol md="5" sm="12">
                      {" "}
                    </MDBCol>
                    <MDBCol md="7" sm="12">
                      <input
                        onClick={() => setCopyRightAck(!copyRightAck)}
                        checked={copyRightAck === true}
                        type="radio"
                        id="copyRightAck"
                        onChange={() => {}}
                      />
                      <label htmlFor="copyRightAck">
                        I understand that the Study Set is a copyrighted design.
                      </label>
                    </MDBCol>
                    <MDBCol md="5" sm="12">
                      {" "}
                    </MDBCol>
                    <MDBCol md="7" sm="12">
                      <input
                        onClick={() => setNoRefundAck(!noRefundAck)}
                        checked={noRefundAck === true}
                        type="radio"
                        id="noRefundAck"
                        onChange={() => {}}
                      />
                      <label htmlFor="noRefundAck">
                        I understand there are no refunds or exchanges for
                        shipped orders
                      </label>
                    </MDBCol>
                  </MDBRow>
                </section>

                <section id="complete_button">
                  <MDBRow>
                    <MDBCol
                      md="12"
                      className={`${STYLES.completeOrderContainer}`}
                    >
                      <MDBBtn
                        type="submit"
                        size="sm"
                        className={`${STYLES.completeOrderBtn}`}
                      >
                        Click to Complete Order
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol
                      md="12"
                      className={`${STYLES.completeOrderSubtextCont}`}
                    >
                      <strong className={`${STYLES.completeOrderSubtext}`}>
                        Your study set will be processed <br />
                        and sent within two business days.
                      </strong>
                    </MDBCol>
                  </MDBRow>
                </section>
              </form>
            </MDBCol>
            <MDBCol md="5" sm="12" className={STYLES.descCont}>
              <h3>What is a Study Set?</h3>
              <h4>
                A Study Set is a 1/4" = 1'-0" scale professionally prepared
                plan.
              </h4>
              <p>
                Each study set includes all four exterior elevations and two
                floor plans, drawn to standard construction scale, so that you
                can experiment with furniture placement and traffic patterns,
                before committing to a specific home design.
              </p>
              <p>
                A Study Set does not contain the detailed construction
                specifications found in our full working blueprints and may not
                be used to build your home; they are stamped “NOT FOR
                CONSTRUCTION”.
              </p>
              <p>
                Each Study Set is just $250.00 in Canadian funds. You’ll recoup
                the cost for a study sets when entering into a design agreement
                or construction contract.
              </p>
              <h4>Each Log Connection Study Set includes:</h4>
              <ul>
                <li>Two floor plans (main and upper floor)</li>
                <li>Four Exterior Elevations</li>
                <li>Overall dimensions of each floor plan</li>
                <li>Room names and sizes</li>
                <li>One full color exterior image of the home</li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default StudySetPage;
