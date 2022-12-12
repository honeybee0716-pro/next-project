import React, { useState, useEffect  } from "react";
import { MDBContainer, MDBIcon, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Link from "next/link";
import STYLES from "../../styles/main/HotmSection.module.scss";
import CH_STYLES from "../../styles/Home.module.scss";
import { getFilteredHomePlans } from "../../common/services/home-plans";
import { readTextFile } from "../../common/webService";

const HP_ROOT = `${process.env.IMG_BASE_URL}/home-plans/`;
const HOTM_LINK = `/tlc/home-of-the-month`;

export const HomeOfTheMonthSection = () => {

  const [hotm, setHotm] = useState([]);
  const [desc, setDesc] = useState("");

  useEffect(async () => {
    try {
      let data = await getFilteredHomePlans('hotm');
      setHotm(data);
  
      if (data[0] && data[0].planCode) {
        const text = await readTextFile(`${HP_ROOT}${data[0].planCode}/text/HOTM_INTRO_${data[0].planCode}.txt`, { encoding: 'utf8' });
        setDesc(text);
      }
    } catch(err) {
      console.log(err);
    }
  
  }, []);

  return (
    <section className={`${STYLES.hotmSection}`}>
      <MDBContainer >
        <MDBRow center className="my-3">
          <MDBCol md="5" lg="6" sm="12" xl="6">
            <div className={`${STYLES.contentCont} p-4 my-md-5 my-sm-0`}>
              <p className={STYLES.title}>NEW HOME OF THE MONTH</p>
              <p className={`${STYLES.content} text-justify`}>{desc}</p>
              <Link href={HOTM_LINK}>
                <a href={HOTM_LINK}>
                  <MDBBtn color="yellow" size="lg" className={`${CH_STYLES.yellowRoundeBtn}`}>
                    <MDBIcon icon="link" className="mr-2"></MDBIcon> View Plan
                  </MDBBtn>
                </a>
              </Link>
            </div>
          </MDBCol>
          <MDBCol md="7" lg="6" sm="12" xl="6">
            <div className={`${STYLES.imgCont} mr-4`}>
              <img className={STYLES.newHomeImg} src={`${HP_ROOT}${hotm[0]?.planCode}/hotm.jpg`} />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

  );
}

export default HomeOfTheMonthSection;

