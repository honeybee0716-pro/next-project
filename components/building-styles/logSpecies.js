

import React, { useEffect, useState } from "react";
import LS_STYLES from '../../styles/building-styles/LogSpecies.module.scss';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";


const COMMON_IMG_FILE_ROOT = `${process.env.IMG_BASE_URL}/building-styles/log-species/`;

const DOUGLAS_FIR = [
    {
        section: "UNIQUE FEATURES:",
        items: [
            "distinctive three-forked bracts between the scales on the cones",
            "light yellow with orange tints to exterior of peeled logs",
            "tight grain, redish brown interior heart wood"
        ]
    },
    {
        section: "LOCATION:",
        items: [
            "British Columbia southern mainland coast, Vancouver Island",
            "an interior variety is found throughout southern and central BC"
        ]
    },
    {
        section: "SIZE:",
        items: [
            "can reach up to 85 meters in height on the coast and 42 meters in the interior"
        ]
    },
    {
        section: "WOOD CHARACTERISTICS:",
        items: [
            "dense, hard, stiff, durable, strong"
        ]
    },
    {
        section: "USES:",
        items: [
            "modern - heavy duty construction such as log homes, trestles, bridge parts and commercial buildings",
            "traditional - wood: fuel, fishing hooks, handles, snowshoes, fishtraps; boughs: floor coverings; seeds: eaten; twigs/needles: can exude a sugar like substance which was prized"
        ]
    },
    {
        section: "CONES:",
        items: [
            "5 to 11 cm long",
            "green when young, turning to brown as they age",
            "papery scales, with three pronged bracts (resembling mouse hind legs and tail) in between them",
            "have winged seeds",
            "seeds are eaten by birds and small animals"
        ]
    },
    {
        section: "NEEDLES:",
        items: [
            "flat with pointed tips",
            "bright yellowish-green with single groove on upper surface",
            "paler colour on lower surface",
            "spirally arranged so appear to stand out around the twig"
        ]
    },
    {
        section: "BARK:",
        items: [
            "smooth, grey-brown, blistered when young",
            "furrowed, thick, dark reddish-brown ridges as the tree ages",
            "bears scrape off the bark to eat the sap layer beneath"
        ]
    },
    {
        section: "QUICK/EASY ID (identification) for DOUGLAS FIR:",
        items: [
            "cones: forked",
            "needles: flat, fragrant, friendly (the boughs are soft to the touch when you run your hand up and down)",
            "bark: furrowed"
        ]
    }
]

const DOUGLAS_FIR_DETAILS = {
    name: `Douglas Fir`,
    imgUrl: `${COMMON_IMG_FILE_ROOT}d-fir.jpg`,
    label: (<i>seudotsuga menziesii</i>),
    desc: `Also known as Coast Douglas-fir, Oregon Pine, Oregon Douglas-fir, Douglas Tree, Interior Douglas-fir this is not a fir at all but 'Pseudotsuga' or "False Hemlock"
    Named after the Scottish botanist, David Douglas, who introduced many of BC's native conifers to Europe.`
}

const WESTERN_RED_CEDAR = [
    {
        section: "UNIQUE FEATURES:",
        items: [
            "drooping branches that turn up at tip",
            "trunk spreading out at the base",
            "has large number of cones bent backward along the branches"
        ]
    },
    {
        section: "LOCATION:",
        items: [
            "low to mid elevations",
            "coast and wet belt of the Interior",
            "in cool, mild, moist locations",
            "can grow in shaded areas with lots of nutrients"
        ]
    },
    {
        section: "SIZE:",
        items: [
            "up to 60 meters tall (197 feet)"
        ]
    },
    {
        section: "WOOD CHARACTERISTICS:",
        items: [
            "resistant to decay and insect damage",
            "aromatic fragrance that lasts for years",
            "wood can remain sound for over 100 years"
        ]
    },
    {
        section: "USES:",
        items: [
            "modern - house siding, log home shell packages, interior paneling, outdoor furniture, decking, fencing, roof shakes",
            "traditional - wood: canoes, totem poles, longhouses, household boxes, tools, paddles; pounded fibers: mats, clothing, baskets, nets, fishing lines; medicines, religious masks"
        ]
    },
    {
        section: "CONES:",
        items: [
            "seed cones: egg shaped",
            "1 cm long with several pairs of scales",
            "pollen cones: small, reddish"
        ]
    },
    {
        section: "NEEDLES/LEAVES:",
        items: [
            "are scale-like",
            "lie in pairs",
            "overlapping like shingles",
            "very strong aroma"
        ]
    },
    {
        section: "BARK:",
        items: [
            "grey",
            "stringy - tearing off in long strips"
        ]
    },
]

const WESTERN_RED_CEDAR_DETAILS = {
    name: `Western Red Cedar`,
    imgUrl: `${COMMON_IMG_FILE_ROOT}w-cedar.jpg`,
    label: (<i>thuja plicata</i>),
    desc: `Other common names: Giant Arbor-Vitae, Canoe-cedar, Pacific Red-cedar, Shinglewood.
    The western red cedar is British Columbia's official tree.`
}

const ENGELMANN_SPRUCE = [
    {
        section: "UNIQUE FEATURES:",
        items: [
            "a straight, spire-like tree",
            "near the ground the branches tend to droop",
            "interbreeds with white spruce in certain areas"
        ]
    },
    {
        section: "LOCATION:",
        items: [
            "grows throughout the Interior and many southern areas of British Columbia",
            "found at high elevations",
            "this spruce prefers deep, rich soils with sufficient moisture"
        ]
    },
    {
        section: "SIZE:",
        items: [
            "can grow to 50 metres in height and 1 metre in diameter"
        ]
    },
    {
        section: "WOOD CHARACTERISTICS:",
        items: [
            "not very strong"
        ]
    },
    {
        section: "USES:",
        items: [
            "modern - log houses (walls only), plywood, violins, pianos, aircraft parts",
            "traditional - roots: sew seams of baskets, make baskets; bark : cooking baskets, canoes, roofing, baby carriers; pitch: wound dressings; needles: chewed for cough control"
        ]
    },
    {
        section: "CONES:",
        items: [
            "seed cones - yellow or purplish-brown; hang from upper branches; scales are papery with jagged edges",
            " pollen cones - yellow"
        ]
    },
    {
        section: "NEEDLES:",
        items: [
            "four sided and sharp but not too stiff",
            "bluish-green with white lines on upper and lower surfaces",
            "they are arranged in all directions along the twig",
            "strong odor"
        ]
    },
    {
        section: "BARK:",
        items: [
            "reddish-brown",
            "scaly"
        ]
    }
]

const ENGELMANN_SPRUCE_DETAILS = {
    name: `Engelmann Spruce`,
    imgUrl: `${COMMON_IMG_FILE_ROOT}e-spruce.jpg`,
    label: (<i>picea engelmanni</i>),
    desc: `...named after the botanist George Engelmann. 'Picea' is derived from the Latin word for pitch.`
}

export const LogSpeciesModal = (props) => {
    const [state, setState] = useState({ modal: false });
    const [detailsArr, setDetailsArr] = useState([]);
    const [details, setDetails] = useState([]);
    const toggle = () => {
        setState({
            modal: !state.modal
        });
    }

    useEffect(() => {
        switch (props?.logSpecie) {
            case 'DF':
                setDetails(DOUGLAS_FIR_DETAILS);
                setDetailsArr(DOUGLAS_FIR);
                break;
            case 'WRC':
                setDetails(WESTERN_RED_CEDAR_DETAILS);
                setDetailsArr(WESTERN_RED_CEDAR);
                break;
            case 'ES':
                setDetails(ENGELMANN_SPRUCE_DETAILS);
                setDetailsArr(ENGELMANN_SPRUCE);
                break;
        }
    }, []);


    return (
        <section className={`${LS_STYLES.logSpeciesModal}`}>
            <MDBContainer className="p-0">
                <a className={`${LS_STYLES.info}`} onClick={toggle}>More info on {details?.name}...</a>
                <MDBModal isOpen={state.modal} toggle={toggle} size="lg">
                    <MDBModalHeader toggle={toggle}>WOOD SPECIES: <strong>{details?.name}</strong></MDBModalHeader>
                    <MDBModalBody>
                        <div className={`${LS_STYLES.imgCont} p-2`}>
                            <img src={details.imgUrl}></img>
                            <div className={LS_STYLES.title}>{details?.name}</div>
                            <div className={LS_STYLES.content}>{details?.desc}</div>
                        </div>
                        <div> 
                            {detailsArr.map((d, i) => (
                                <div className={`${LS_STYLES.detailsCont} m-2 mt-4`} key={i} >
                                    <div className={LS_STYLES.title}>{d.section}</div>
                                    <ul>
                                        {d.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </MDBModalBody>
                    {/* <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={toggle}>Return to Log Species</MDBBtn>
                    </MDBModalFooter> */}
                </MDBModal>
            </MDBContainer>
        </section>
    )
}
