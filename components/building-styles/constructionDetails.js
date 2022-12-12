import React, { useEffect, useState } from "react";
import STYLES from '../../styles/building-styles/ConstDetails.module.scss';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBRow, MDBCol } from "mdbreact";
import { getConstructionDetails } from '../../common/services/building-styles';

export const ConstructionDetailsComponent = (props) => {

    if(!props.styleCode) {
        return (
          <h2>LOADING...</h2>
        )
    }

    const [detailsArr, setDetailsArr] = useState([]);
    const [state, setState] = useState({ modal: false });

    const toggle = (d) => {
        setState({
            modal: !state.modal,
            item: d
        });
    }

    useEffect(() => {
        getConstructionDetails(props.styleCode).then((data) => {
            setDetailsArr(data);
        }).catch((err) => {
            return (
                <h2>ERROR...</h2>
            )
        });
    }, []);

    if (!Array.isArray(detailsArr) || detailsArr.length === 0) {
        return (
            <h2>LOADING...</h2>
        )
    }

    return (
        <section className={STYLES.constructionDetails}>
            <MDBContainer>
                <MDBRow className={STYLES.section1}>
                    <MDBCol>
                        <h3>{props?.title}</h3>
                        <p>Our log home building specifications accurately reflect our building techniques. We always welcome your comments, feedback and requests for construction details not shown below. Let us know if the log home construction details in this section were useful in making your log home decisions. Have they answered your questions or offered alternative solutions? Send us a <a href="mailto:howandwhy@thelogconnection.com%20?subject=How_and_Why">note</a> and let us know if this section was helpful.</p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer>
                <MDBRow className={STYLES.section2}>
                    {detailsArr.map((d, i) => (
                        <MDBCol key={i} md="3" onClick={() => toggle(d)}>
                            <div className={STYLES.card}>
                                <img src={d.thumbnailUrl} />
                                <div className={STYLES.label}>{d.title}</div>
                            </div>
                        </MDBCol>
                    ))}
                </MDBRow>
                <MDBModal isOpen={state.modal} toggle={toggle} className={STYLES.modal}>
                    <MDBModalHeader toggle={toggle}>DETAIL: <strong>{state?.item?.title}</strong></MDBModalHeader>
                    <MDBModalBody>
                        <img src={state?.item?.imageUrl} />
                    </MDBModalBody>
                </MDBModal>
            </MDBContainer>
        </section>
    )
}
