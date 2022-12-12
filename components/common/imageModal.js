import React, { useState } from "react";
import C_STYLES from '../../styles/Common.module.scss';
import STYLES from '../../styles/modules/ImageModal.module.scss';
import { MDBModal, MDBModalBody, MDBModalHeader} from "mdbreact";
import Zoom from "react-reveal/Zoom";

export const ImageModal = (props) => {
    const [state, setState] = useState({ modal: false });

    const toggle = (d) => {
        setState({
            modal: !state.modal,
            item: d
        });
    }

    return (
        <section className={STYLES.imageModal}>
            <Zoom>
                <div className={`${STYLES.thumbCont} ${C_STYLES.boxShadow1}`}>
                    <img onClick={() => toggle(props)} src={props?.imgThumbSrc} alt={props?.label}/>
                </div>
            </Zoom>
            <MDBModal isOpen={state.modal} toggle={toggle} size="lg">
                {(props && props.header) ? 
                    <MDBModalHeader toggle={toggle}><strong>{state?.item?.title}</strong></MDBModalHeader>:<></> 
                }
                <MDBModalBody>
                    <img src={state?.item?.imgSrc} alt={state?.item?.label}/>
                </MDBModalBody>
            </MDBModal>
        </section>
    )
}
