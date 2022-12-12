import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React, { useState } from "react";
import { BannerSection } from "../../components/common/banner";
import { SubNavbar } from "../../components/common/subNavbar";
import QNA_STYLES from "../../styles/QnA.module.scss";
import COMMON_STYLES from "../../styles/Common.module.scss";
import { Animated } from "react-animated-css";
import styles from "../../styles/BuildingStyles.module.scss";

const IMG_BANNER_FILE_ROOT = `${process.env.IMG_BASE_URL}/qna/_banner/`;

const QNA_COMMON_QUESTIONS = [
  {
    question: `What is included in your stacked log home package?`,
    isVisible: false,
    answer: (
      <div>
        Generally, we provide the log home superstructure customized to include
        the materials specific to your home design. We specialize in the design
        build of the log work itself; this includes the log walls, log beams and
        log posts to support the log roof structure, the log floor joists to
        support the upstairs floor, a log staircase and handrail if required,
        and related hardware. However, we can assist with arranging for
        additional materials you may require in the finishing of your home such
        as: dimensional lumber, stain, windows, doors and cabinets. The
        following list is typical of what you could expect in your package:
        <ul>
          <li>design customization and complete blueprints</li>
          <li>accurate production dates and scheduling </li>
          <li>honest and exact log work costing before construction </li>
          <li>on-site re-assembly supervisor </li>
          <li>
            hand-peeled standard log walls of 12" - 14" diameter (larger is
            available){" "}
          </li>
          <li>all logs will be full length with no wall log breaks </li>
          <li>
            all lateral grooves and corner notches scribed, fitted and lined
            with Sofrod gasket{" "}
          </li>
          <li>
            log walls with window and door openings cut out and key-ways pre-cut
            and supplied{" "}
          </li>
          <li>
            all log ridge poles, and log roof purlins cut to accept roof framing
            and wall slotting{" "}
          </li>
          <li>
            log posts for porches, entrance, breezeway etc., including steel
            settling jacks as required{" "}
          </li>
          <li>log trusses, structural and/or decorative </li>
          <li>all rough openings cut-out, notched back, flared and sanded </li>
          <li>
            pre-drilling and installation of plated steel 3/4" through-bolts
            with timber washers{" "}
          </li>
          <li>
            1" diameter drift pins supplied and installed during re-erection as
            required{" "}
          </li>
          <li>
            all log components sprayed with non-toxic mildewcide to minimize
            moisture damage during shipping and erection{" "}
          </li>
          <li>
            dependable and ongoing construction consultation after the log shell
            delivery{" "}
          </li>
        </ul>
        The following items are optional, and will only be included in your
        package if you choose them:
        <ul>
          <li>
            hand crafted log stairs including landings and log support posts{" "}
          </li>
          <li>hand-peeled mortise and tenon log handrails </li>
        </ul>
        ...for more info see the "What's Included" pages for each style:
        <a href="log_whatsincluded.html">Stacked Log Homes</a>,
        <a href="log_pb_whatsincluded.html">Post and Beam</a> and
        <a href="TimberFrame-WhatsIncluded.html">Timber Frame</a>
      </div>
    ),
  },
  {
    question: `What other services do you offer?`,
    isVisible: false,
    answer: (
      <div>
        We have in house designers to help you with your log home planning ideas
        and create your final blueprints. When required, The Log Connection
        drafters work with your Architect to prepare the log building shop
        drawings. Upon completion your architect will have a final review prior
        to starting the build.
      </div>
    ),
  },
  {
    question: `What wood types do you offer, what sizes and where do your logs come from?`,
    isVisible: false,
    answer: (
      <div>
        We offer a choice of Engelmann Spruce, Douglas Fir and Western Red
        Cedar. Our professional foresters, harvest only the highest quality logs
        from our northern forests here in British Columbia, Canada. Wall log
        sizes are on average 12 to 14 inches in diameter. Floor and roof log
        sizes are on average 14 to 20 inches in diameter. We inventory and
        air-dry many loads of logs for our future projects. ...for more info see
        the page Selecting Log Species
      </div>
    ),
  },
  {
    question: `Are your logs graded?`,
    isVisible: false,
    answer: (
      <div>
        The Log Connection provides only the highest quality logs available.
        Typically all logs used on any given project are graded as "premium"
        (best possible). When required by your local building inspection agency
        or engineer our logs and timber are graded by a licensed third party
        Timber Products Inspection Agency and a written report is provided
        indicating all pieces exceed the requirements. ...for more info:
        <a href="http://www.tpinspection.com/loghome.html" target="_blank">
          www.tpinspection.com
        </a>{" "}
        (opens in new window or tab){" "}
      </div>
    ),
  },
  {
    question: `What is the moisture content of the logs you use?`,
    isVisible: false,
    answer: (
      <div>
        Our logs are air dried in our construction yard to average moisture
        content of between 15% and 19% before we begin building.
      </div>
    ),
  },
  {
    question: `Do you ever build using dead standing logs?`,
    isVisible: false,
    answer: (
      <div>
        We offer dead-standing timber as a choice for our customers. A tree that
        has died by natural causes (insect infestation) and remains standing
        begins to dry even before it has been harvested which does offer a head
        start to the drying process and reduces the shrinkage encountered with
        green logs. Many of the boreholes are removed when the log is
        hand-peeled but the subtle blue staining commonly seen with some of
        these logs can not be peeled off.
      </div>
    ),
  },
  {
    question: `Explain the difference between a handcrafted log home and a milled log home?`,
    isVisible: false,
    answer: (
      <div>
        There are many log homeowners but only a few can claim to live in a real
        handcrafted work of art. One of our experienced log smiths using the
        highest quality full log uniquely creates each of our homes.
        <ul>
          <li>
            Unlike machined log homes, you would never find a butt joint in our
            log walls.{" "}
          </li>
          <li>
            Each log is allowed to retain its character. Only 5% to 9% of the
            handcrafted log is wasted during construction, compared to up to 50%
            in some milling operations. That is a lot of wasted R-value.{" "}
          </li>
          <li>
            Many manufactured log homes are built using timbers only 6 inches
            thick or less. Our homes are built using timber an average of 12 to
            14 inches thick; an obvious advantage of this being the greater
            insulation value.{" "}
          </li>
          <li>
            Most manufactured log home companies send their "log kits" without
            any pre-fitting; that is left to the builders you hire on your site.
            This may take from many days to a few weeks. The pieces may have to
            be cut and hundreds of spikes must be pounded in the walls to hold
            them together. A skilled crew at our construction yard on the other
            hand, builds a handcrafted home to exacting tolerances while your
            foundation is being prepared. Every notch is scribed by a qualified
            artisan and fits perfectly. The roof structure is fitted and ready
            to accept roof framing; all the openings are cut out and sanded. The
            walls and notches are insulated as the home is re-erected and all
            the through-bolt holes are pre-drilled.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: `How much per square foot?`,
    isVisible: false,
    answer: (
      <div>
        It is very difficult to quote a per square foot price, as there are so
        many variables which effect the cost of a handcrafted log home. Some of
        these variables are: log species, size of logs, the detail of the plan,
        the number of corners, the intricacy of the floor and roof system,
        wrap-around porches, as well as any special feature or individual
        touches you might want to incorporate into your log home. If you have a
        rough plan of what you want, we can provide you with an approximate
        price.
      </div>
    ),
  },
  {
    question: `Is freight included in the price of a log shell package?`,
    isVisible: false,
    answer: (
      <div>
        The freight is usually a small portion of the overall expense of your
        log home. All log shell packages are constructed in British Columbia,
        Canada and you are responsible for the cost of the freight to your site.
        We typically arrange the transportation and have you pay the transporter
        directly.{" "}
      </div>
    ),
  },
];

const DESIGN_QUESTIONS = [
  {
    question: `Can I make changes to your floor plans?`,
    isVisible: false,
    answer: (
      <div>
        Absolutely, we are custom design builders and build according to our
        customers specifications. The log home floor plans we offer are really
        to help get people started with ideas for their new home. You are
        usually captured by the first look of a home and then you want to make
        the inside work for you. Almost all of our homes are customized using
        our standard floor plans as a starting point. By utilizing our
        incredible design team, clients can adjust, make changes, and design the
        home to suit their own needs. ...for more info see the page
        <a href="/LogHomePlans" title="Send Us Your Plan">
          Send Us Your Plan
        </a>
        .
      </div>
    ),
  },
  {
    question: `What if I have my own plans or ideas?`,
    isVisible: false,
    answer: (
      <div>
        ou can also submit your own plans or plans from another company for us
        to build your Log Connection home. Send us a sketch, floor plan, or your
        blueprints and we will provide you a detailed quote.
      </div>
    ),
  },
  {
    question: `What is the design process to get what I want?`,
    isVisible: false,
    answer: (
      <div>
        Our in house designers will work with you to begin the preliminary
        design of your home. Starting from the information you provide we will
        prepare the floor plans and elevations to send to you via email for your
        feedback. This will continue until you are satisfied and have the design
        you want. Our drafters will then continue to develop the plan and
        produce large size construction drawings. These will be used by your
        contractor to start the foundation and by our log builders to start hand
        crafting your log shell. These drawings will also be used to obtain your
        building permit and to finish your home after the log shell has been
        erected on your site.{" "}
      </div>
    ),
  },
  {
    question: `Which comes first, buying my land or designing my home?`,
    isVisible: false,
    answer: (
      <div>
        You are going to want to have your property first. The layout and size
        of the property will have a huge impact on the design of your home.
        Potential views, sun exposure, and the slope of the building site will
        all have importance in the design that will work for you.
      </div>
    ),
  },
  {
    question: `What factors can reduce the impact on my budget?`,
    isVisible: false,
    answer: (
      <div>
        Most people have a finite budget to complete their home. Usually the
        total size of the home will have developed an initial budget. To achieve
        a higher level of finish for the same budget you may want to look at a
        few things. Reducing your footprint, the foundation. Simplifying the
        design by removing extra corners or angles. Utilize space that is
        already going to be there, the basement or the attic. These spaces do
        not have to be finished right away. Their potential can be realized at a
        later time
      </div>
    ),
  },
  {
    question: `Are log homes designs limited by the length of a log?`,
    isVisible: false,
    answer: (
      <div>
        They are certainly not. While there are limits imposed by the
        transporting of the logs, the design is not limited by the log. Our
        designers can work with you to realize a home that will meet your
        desires, not the length of a log.
      </div>
    ),
  },
  {
    question: `Is a Structural Engineer required?`,
    isVisible: false,
    answer: (
      <div>
        Log homes generally fall outside the typical residential building codes.
        Most areas that issue building permits will require that a structural
        engineer licensed for that area stamp the construction drawings. We will
        work with your engineer to provide feedback based on our log building
        expertise. We will also provide the drafting time to update the drawings
        to minimize your cost.
      </div>
    ),
  },
];

const BUILDING_QUESTIONS = [
  {
    question: `Do you offer turnkey service?`,
    isVisible: false,
    answer: (
      <div>
        It is not cost effective to send turnkey construction crews the great
        distances, so we only offer the log shell portion of your home. We do
        work very closely with your chosen general contractor to ensure a smooth
        building experience.
      </div>
    ),
  },
  {
    question: `Does my general contractor need to be a log builder?`,
    isVisible: false,
    answer: (
      <div>
        No he does not. Your general contractor needs to be a good builder with
        a solid reputation for bringing projects in on time and on budget.
        Previous experience can be an added bonus. We will work very closely
        with your chosen contractor to ensure a smooth building experience.
      </div>
    ),
  },
  {
    question: `What kind of foundation does a log home require?`,
    isVisible: false,
    answer: (
      <div>
        A stacked log shell will use the same foundation as a similar stick
        framed home. The only thing we add is slightly bigger rebar. The minimum
        foundation that your stacked log shell will need is a crawl space. This
        is to allow you to get at the through bolts and screw jacks as
        necessary.
      </div>
    ),
  },
  {
    question: `Where does the plumbing and wiring go?`,
    isVisible: false,
    answer: (
      <div>
        In a stacked log home, the wiring is generally run up from your
        sub-floor and through a pre-drilled vertical hole in the log wall. We
        also pre-cut all locations for electrical boxes, faceplates and
        specialty electronics as needed. The plumbing is always installed
        through interior frame walls, just as it is in conventional homes. For a
        stacked log shell package, in the final blueprints we provide the
        plumbing slip joint, and sully expansion loop details for your
        contractor.
      </div>
    ),
  },
  {
    question: `What is the insulation value of the log walls?`,
    isVisible: false,
    answer: (
      <div>
        Our log homes are some of the most thermally and energy efficient log
        homes being built today. There are two factors that determine the energy
        efficiency of logs that we use: the diameter, and the thermal mass. The
        greater the diameter of the logs used to construct your home the higher
        the R-value. The cellular structure of logs themselves provide the
        thermal mass, and serves as a very good natural insulator and radiates
        back into your home warm air in the winter and cool air in the summer.
        The accepted calculation is R = 1.25 ~ 1.75 per square inch. Our 13" to
        15" logs provide an R-value of 18.75 ~ 26.25 PLUS the thermal Mass. As a
        rule, our log homes are far more energy efficient to heat and cool than
        a conventional stick frame home built with 2x6 studs and R20 insulation.
      </div>
    ),
  },
];

export const QnAPage = () => {
  const [commonQ, setCommonQ] = useState(QNA_COMMON_QUESTIONS);
  const [designQ, setDesignQ] = useState(DESIGN_QUESTIONS);
  const [buildingQ, setBuildingQ] = useState(BUILDING_QUESTIONS);

  const onClickQuestionCQ = (i) => {
    QNA_COMMON_QUESTIONS[i].isVisible = !QNA_COMMON_QUESTIONS[i].isVisible;
    setCommonQ((oldArray) => [...QNA_COMMON_QUESTIONS]);
  };

  const onClickQuestionDQ = (i) => {
    DESIGN_QUESTIONS[i].isVisible = !DESIGN_QUESTIONS[i].isVisible;
    setDesignQ((oldArray) => [...DESIGN_QUESTIONS]);
  };

  const onClickQuestionBQ = (i) => {
    BUILDING_QUESTIONS[i].isVisible = !BUILDING_QUESTIONS[i].isVisible;
    setBuildingQ((oldArray) => [...BUILDING_QUESTIONS]);
  };

  //TODO: Add slide toggle
  return (
    <>
      {/* <BannerSection img={`${IMG_BANNER_FILE_ROOT}qna_banner_1.jpg`} /> */}
      <img
        src="http://2021.thelogconnection.com/_assets/qna/_banner/qna_banner_1.jpg"
        className={styles.mainImg}
      />
      <SubNavbar navBarItems={[]} header={"Common Questions and Answers"} />
      <section className={QNA_STYLES.qnaSection}>
        <MDBContainer className="pb-4">
          <MDBRow className="pt-4">
            <MDBCol md="7">
              <div className={QNA_STYLES.header}>Common Questions</div>
              <div className={COMMON_STYLES.divider} />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            {commonQ.map((q, i) => (
              <MDBCol md="9" key={i}>
                <div>{q.isVisible}</div>
                <div
                  className={`${QNA_STYLES.questions} mb-2`}
                  onClick={() => onClickQuestionCQ(i)}
                >
                  {" "}
                  {q.question}
                </div>
                <Animated
                  animationIn="fadeIn"
                  animationOut="fadeOut"
                  isVisible={q.isVisible}
                >
                  <div
                    className={`${QNA_STYLES.answers} ml-3 mb-4`}
                    style={{ display: q.isVisible ? "flex" : "none" }}
                  >
                    {" "}
                    {q.answer}
                  </div>
                </Animated>
              </MDBCol>
            ))}
          </MDBRow>

          <MDBRow className="pt-3">
            <MDBCol md="7">
              <div className={QNA_STYLES.header}>Design Questions:</div>
              <div className={COMMON_STYLES.divider} />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            {designQ.map((q, i) => (
              <MDBCol md="9" key={i}>
                <div>{q.isVisible}</div>
                <div
                  className={`${QNA_STYLES.questions} mb-2`}
                  onClick={() => onClickQuestionDQ(i)}
                >
                  {" "}
                  {q.question}
                </div>
                <Animated
                  animationIn="fadeIn"
                  animationOut="fadeOut"
                  isVisible={q.isVisible}
                >
                  <div
                    className={`${QNA_STYLES.answers} ml-3 mb-4`}
                    style={{ display: q.isVisible ? "flex" : "none" }}
                  >
                    {" "}
                    {q.answer}
                  </div>
                </Animated>
              </MDBCol>
            ))}
          </MDBRow>

          <MDBRow className="pt-3">
            <MDBCol md="7">
              <div className={QNA_STYLES.header}>Building Questions:</div>
              <div className={COMMON_STYLES.divider} />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            {buildingQ.map((q, i) => (
              <MDBCol md="9" key={i}>
                <div>{q.isVisible}</div>
                <div
                  className={`${QNA_STYLES.questions} mb-2`}
                  onClick={() => onClickQuestionBQ(i)}
                >
                  {" "}
                  {q.question}
                </div>
                <Animated
                  animationIn="fadeIn"
                  animationOut="fadeOut"
                  isVisible={q.isVisible}
                >
                  <div
                    className={`${QNA_STYLES.answers} ml-3 mb-4`}
                    style={{ display: q.isVisible ? "flex" : "none" }}
                  >
                    {" "}
                    {q.answer}
                  </div>
                </Animated>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default QnAPage;
