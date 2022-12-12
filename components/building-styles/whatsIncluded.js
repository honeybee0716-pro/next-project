import React, { useEffect, useState } from "react";
import STYLES from '../../styles/building-styles/WhatsIncluded.module.scss';
import { ImageModal } from '../../components/common/imageModal';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const IMG_ROOT = `${process.env.IMG_BASE_URL}/building-styles/shared/original/`;
const THUMBS_ROOT = `${process.env.IMG_BASE_URL}/building-styles/shared/thumbs/`;


const PB_DATA = [
    {
        title: 'Log Post and Beam',
        list: [
            {
                subTitle: "Design Customization & Complete Blueprints",
                detailsArr: [
                    "- Customization of the design, and complete blueprints (construction drawings) of your home are included in the log shell price."
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_blueprints.jpg`, actual: `${IMG_ROOT}shell_f_blueprints.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_blueprints_cu.gif`, actual: `${IMG_ROOT}shell_f_blueprints_cu.jpg` }
                ]
            },
            {
                subTitle: "Log Posts",
                detailsArr: [
                    "- Round log posts, typically 12 to 14 inch diameter.",
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_posts2.jpg`, actual: `${IMG_ROOT}shell_pb_post.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_pb_post.jpg`, actual: `${IMG_ROOT}shell_pb_post.jpg` }
                ]
            },
            {
                subTitle: "Post Flats",
                detailsArr: [
                    "- Posts flattened and grooved to accept finish framing materials."
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_posts.jpg`, actual: `${IMG_ROOT}shell_f_posts.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_pb_postflats.jpg`, actual: `${IMG_ROOT}shell_pb_postflats.jpg` }
                ]
            }
        ]
    },
    {
        title: "Upper Floor & Roof",
        list: [
            {
                subTitle: "Log Upper Floor System",
                detailsArr: [
                    "- Second floor system consists of double Douglas Fir log beams and single log floor joists"
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_PBjoists.jpg`, actual: `${IMG_ROOT}shell_f_PBjoists.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_PBdbl-beam.jpg`, actual: `${IMG_ROOT}shell_f_PBdbl-beam.jpg` }
                ]
            },
            {
                subTitle: "Log Roof System",
                detailsArr: [            
                    "- Roof system consists of Douglas Fir round log roof beams and log roof purlins.",
                ],
                imgArr: [                
                    { thumbNail: `${THUMBS_ROOT}shell_f_roof2.jpg`, actual: `${IMG_ROOT}shell_f_roof2.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_pb_roof.jpg`, actual: `${IMG_ROOT}shell_pb_roof.jpg` },
                ]
            },
            {
                subTitle: "Roof Logs Pitch Cut",
                detailsArr: [
                    "- Roof logs are pitch cut flat for roof framing"
                ],
                imgArr: [                
                    { thumbNail: `${THUMBS_ROOT}shell_f_pitchcut.jpg`, actual: `${IMG_ROOT}shell_f_pitchcut.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_pb_pitchcut2.jpg`, actual: `${IMG_ROOT}shell_pb_pitchcut2.jpg` }
                ]
            }
        ]
    },
    {
        title: "Detailing",    
        list: [
            {
                subTitle: "Tuck Cuts",
                detailsArr: [
                    "- Tuck Cuts pre-made for interior finish framing materials in all log posts and beams."
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_tuck.jpg`, actual: `${IMG_ROOT}shell_f_tuck.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_tuck2.jpg`, actual: `${IMG_ROOT}shell_f_tuck2.jpg` }
                ]
            },
            {
                subTitle: "Flattening Logs",
                detailsArr: [                 
                    "- Flats for installation of framing materials and second floor gable ends",
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_flat-framing.jpg`, actual: `${IMG_ROOT}shell_f_flat-framing.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_flat2.jpg`, actual: `${IMG_ROOT}shell_f_flat2.jpg` },
                ]
            },
            {
                subTitle: "Sanding",
                detailsArr: [
                    "- All knots, logging scars and exposed chain saw cuts sanded to smooth even finish"
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_pb_sanding.jpg`, actual: `${IMG_ROOT}shell_pb_sanding.jpg` }
                ]
            }
        ]
    },
    {
        title: "Features",
        list: [
            {   
                subTitle: "Log Trusses",
                detailsArr: [
                    "- Most designs feature hand crafted log trusses in showplace locations.",
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_truss2.jpg`, actual: `${IMG_ROOT}shell_f_truss2.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_truss3.jpg`, actual: `${IMG_ROOT}shell_f_truss3.jpg` }
                ]
            },
            {   
                subTitle: "Log Staircase and Railing (optional)",
                detailsArr: [
                    "- Complete hand crafted staircase featuring log stringers, half-log treads, solid timber landing (where applicable), and log guard railing." 
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_logstair.jpg`, actual: `${IMG_ROOT}shell_f_logstair.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_pb_logstair2.jpg`, actual: `${IMG_ROOT}shell_pb_logstair2.jpg` },
                ]
            },
            {   
                subTitle: "Interior Log Railings (optional)",
                detailsArr: [
                    "- All interior guard and stairway railings of hand crafted log railing posts, upper and lower rails, and log pickets."
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_railing.jpg`, actual: `${IMG_ROOT}shell_f_railing.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_handrail.jpg`, actual: `${IMG_ROOT}shell_f_handrail.jpg` }
                ]
            }
        ]
    },
    {
        title: "Miscellaneous",
        list: [
            {
                subTitle: "Logs treated with protective anti-mildew/ fungicide deterrent",
                detailsArr: [],
                imgArr: []
            },
            {
                subTitle: "ILBA Standards",
                detailsArr: [
                    "- All log work conforms with the International Log Building Association standards."
                ],
                imgArr: []
            },
            {
                subTitle: "Steel Requirements Supplied and Installed",
                detailsArr: [
                    "- All lagging bolts & drift pins",
                    "- Log truss bolts & hardware"
                ],
                imgArr: []
            }
        ]
    }
]

const SL_DATA = [
    {
        title: 'Log Walls',
        list: [
            {   
                subTitle: "Design Customization & Complete Blueprints",
                detailsArr: [
                    "- Customization of the design, and complete blueprints (construction drawings) of your home are included in the log shell price."
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_blueprints.jpg`, actual: `${IMG_ROOT}shell_f_blueprints.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_blueprints_cu.gif`, actual: `${IMG_ROOT}shell_f_blueprints_cu.jpg` }
                ]
            },
            {   
                subTitle: "Anchor System",
                detailsArr: [
                    "- Installation of specially engineered anchor system",
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_anchorage.jpg`, actual: `${IMG_ROOT}shell_f_anchorage.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_anchor3.jpg`, actual: `${IMG_ROOT}shell_f_anchor3.jpg` }
                ]
            },
            {   
                subTitle: "Log Walls",
                detailsArr: [
                    "- Handcrafted saddle notch Log Walls, with your choice of corner notching style. Standard wall height is 10'-6'. Average wall log diameter 13' to 14'."
                ],
                imgArr: [                
                    { thumbNail: `${THUMBS_ROOT}shell_f_logwall2.jpg`, actual: `${IMG_ROOT}shell_f_logwall2.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_logwall.jpg`, actual: `${IMG_ROOT}shell_f_logwall.jpg` },
                ]
            },
            {   
                subTitle: "Flatten logs",
                detailsArr: [        
                    "- Pre-cut flats for electrical switch and outlet face plates."               
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_flat-plug.jpg`, actual: `${IMG_ROOT}shell_f_flat-plug.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_flat3.jpg`, actual: `${IMG_ROOT}shell_f_flat3.jpg` }
                ]
            },
            {   
                subTitle: "Window and Door Openings Pre-cut and Beveled",
                detailsArr: [                 
                    "- All window and door openings are pre-cut and beveled (Note the spline cut for angle iron)."                  
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_beveled.jpg`, actual: `${IMG_ROOT}shell_f_beveled.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_windows.jpg`, actual: `${IMG_ROOT}shell_f_windows.jpg` }
                ]
            },
            {   
                subTitle: "Interior Partition Slot Cuts",
                detailsArr: [       
                    "- Interior partition slot cuts for interior framed walls"
                ],
                imgArr: [                
                    { thumbNail: `${THUMBS_ROOT}shell_f_slotcut.jpg`, actual: `${IMG_ROOT}shell_f_slotcut.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_slotcut2.jpg`, actual: `${IMG_ROOT}shell_f_slotcut2.jpg` }
                ]
            },
            {   
                subTitle: "True Over-scribe Construction Techniques",
                detailsArr: [
                    "- Overscribing is a technique in which a slightly larger space is initially created between the wall logs lateral groove than that of the corner notches. (also see the Overscribing section)"
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_overscribe.jpg`, actual: `${IMG_ROOT}shell_f_overscribe.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_scribing.jpg`, actual: `${IMG_ROOT}shell_f_scribing.jpg` }
                ]
            },
            {   
                subTitle: "Through Bolts",
                detailsArr: [
                    "- Pre-drill and install 3/4' diameter through-bolts with timber washers. Through bolts fasten the entire wall together to provide structural resistance to wind, earthquake, and other non-gravity forces."
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_drilling.jpg`, actual: `${IMG_ROOT}shell_f_drilling.jpg` }
                ]
            },
            {   
                subTitle: "Log Tails",
                detailsArr: [               
                    "- Log tail style of your choice (also see the Log Notching and Tails section)"                
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_tails.jpg`, actual: `${IMG_ROOT}shell_f_tails.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_tails-french.jpg`, actual: `${IMG_ROOT}shell_f_tails-french.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_tails-staggered.jpg`, actual: `${IMG_ROOT}shell_f_tails-staggered.jpg` }
                ]
            },
            {   
                subTitle: "Pre-drilling For Electrical",
                detailsArr: [
                    "- Wall logs are pre-drilled for electrical wire passages, switch boxes, and outlet boxes."
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_elecbox.jpg`, actual: `${IMG_ROOT}shell_f_elecbox.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_elecchase.jpg`, actual: `${IMG_ROOT}shell_f_elecchase.jpg` },
                ]
            },
            {   
                subTitle: "Spline Cuts in Window and Door Openings",
                detailsArr: [                   
                    "- Spline cut window and door openings to accept supplied angle iron (Installed during delivery)"
                ],
                imgArr: [                
                    { thumbNail: `${THUMBS_ROOT}shell_f_spline.jpg`, actual: `${IMG_ROOT}shell_f_spline.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_spline2.jpg`, actual: `${IMG_ROOT}shell_f_spline2.jpg` }                   
                ]
            },
            {   
                subTitle: "Pinning & Bolting",
                detailsArr: [
                    "- Pinning & bolting of log ends around openings and panel walls as required to maintain structural integrity."
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_bolting.jpg`, actual: `${IMG_ROOT}shell_f_bolting.jpg` }
                ]
            }
        ]
    },
    {
        title: 'Posts, Upper Floor, Roof',
        list: [
            {
                subTitle: "Post Flats",
                detailsArr: [
                    "- Posts flattened and grooved to accept finish framing materials."
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_posts.jpg`, actual: `${IMG_ROOT}shell_f_posts.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_postflat3.jpg`, actual: `${IMG_ROOT}shell_f_postflat3.jpg` }
                ]
            },
            {
                subTitle: "Screw Jacks",
                detailsArr: [
                    `- 1" diameter Screw Jacks provided for all main floor log posts. Screw jacks can be adjusted to maintain even settling of the log structure.`
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_screwjack.jpg`, actual: `${IMG_ROOT}shell_f_screwjack.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_screwjack-below.jpg`, actual: `${IMG_ROOT}shell_f_screwjack-below.jpg` }
                ]
            },
            {
                subTitle: "Tuck Cuts",
                detailsArr: [
                    `- Tuck Cuts pre-made for interior finish framing materials in all log posts and beams.`
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_tuck.jpg`, actual: `${IMG_ROOT}shell_f_tuck.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_tuck2.jpg`, actual: `${IMG_ROOT}shell_f_tuck2.jpg` }
                ]
            },
            {
                subTitle: "Log Upper Floor System",
                detailsArr: [
                    "- Second floor system consists of double Douglas Fir log beams and single log floor joists"          
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_joists.jpg`, actual: `${IMG_ROOT}shell_f_joists.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_joists2.jpg`, actual: `${IMG_ROOT}shell_f_joists2.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_dbl-beam.jpg`, actual: `${IMG_ROOT}shell_f_dbl-beam.jpg` }
                ]
            },
            {
                subTitle: "Log Roof System",
                detailsArr: [
                    `- Roof system consists of Douglas Fir round log roof beams and log roof purlins.`
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_roof2.jpg`, actual: `${IMG_ROOT}shell_f_roof2.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_roof3.jpg`, actual: `${IMG_ROOT}shell_f_roof3.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_roof4.jpg`, actual: `${IMG_ROOT}shell_f_roof4.jpg` }
                ]
            },
            {
                subTitle: "Roof Logs Pitch Cut",
                detailsArr: [
                    `- Roof logs are pitch cut flat for roof framing`
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_pitchcut.jpg`, actual: `${IMG_ROOT}shell_f_pitchcut.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_pitchcut3.jpg`, actual: `${IMG_ROOT}shell_f_pitchcut3.jpg` }
                ]
            }
        ]
    },
    {
        title: 'Log Features',
        list: [
            {
                subTitle: "Log Trusses",
                detailsArr: [
                    "- Most designs feature hand crafted log trusses in showplace locations.",
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_truss.jpg`, actual: `${IMG_ROOT}shell_f_truss.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_truss2.jpg`, actual: `${IMG_ROOT}shell_f_truss2.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_truss3.jpg`, actual: `${IMG_ROOT}shell_f_truss3.jpg` }
                ]
            },
            {
                subTitle: "Sanding",
                detailsArr: [                
                    `- All knots, logging scars and exposed chain saw cuts sanded to smooth even finish`,
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_sanding.jpg`, actual: `${IMG_ROOT}shell_f_sanding.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_sanding2.jpg`, actual: `${IMG_ROOT}shell_f_sanding2.jpg` }
                ]
            },
            {
                subTitle: "Log Staircase and Railing (optional)",
                detailsArr: [
                    `- Complete hand crafted staircase featuring log stringers, half-log treads, solid timber landing (where applicable), and log guard railing.`
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_logstair4.jpg`, actual: `${IMG_ROOT}shell_f_logstair4.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_logstair2.jpg`, actual: `${IMG_ROOT}shell_f_logstair2.jpg` }
                ]
            },
            {
                subTitle: "Flattening Logs",
                detailsArr: [
                    "- Flats for installation of framing materials and second floor gable ends"
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_flat-framing.jpg`, actual: `${IMG_ROOT}shell_f_flat-framing.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_flat2.jpg`, actual: `${IMG_ROOT}shell_f_flat2.jpg` }
                ]
            },
            {
                subTitle: "Delivery Technical Advisor",
                detailsArr: [
                    `- A Log Connection Technical Advisor will accompany the log package and remain on site for the duration of the log shell re-assembly. After the re-assembly is complete, the Advisor will consult with your general contractor to ensure a full understanding of the framing and finishing procedures and details necessary for a log home.`
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_advisor.jpg`, actual: `${IMG_ROOT}shell_f_advisor.jpg` }
                ]
            },
            {
                subTitle: "Interior Log Railings (optional)",
                detailsArr: [
                    `- All interior guard and stairway railings of hand crafted log railing posts, upper and lower rails, and log pickets.`
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_railing.jpg`, actual: `${IMG_ROOT}shell_f_railing.jpg` },
                    { thumbNail: `${THUMBS_ROOT}shell_f_handrail.jpg`, actual: `${IMG_ROOT}shell_f_handrail.jpg` }
                ]
            }
        ]
    },
    {
        title: "Miscellaneous",
        list: [
            {
                subTitle: "Logs treated with protective anti-mildew/ fungicide deterrent",
                detailsArr: [],
                imgArr: []
            },
            {
                subTitle: "ILBA Standards",
                detailsArr: [
                    "- All log work conforms with the International Log Building Association standards."
                ],
                imgArr: []
            },
             {
                subTitle: "Steel Requirements Supplied and Installed",
                detailsArr: [
                    `- 3/4" diameter through bolts with timber washers & nuts `,
                    `- 1" diameter screw jacks with minimum 1/2" thick plates`,
                    `- 1-1/2"x1/4" pre-cut and drilled window and door angle iron`,
                    `- Bottom round anchorage (Rawl anchors)`,
                    `- All lagging bolts & drift pins`,
                    `- Log truss bolts & hardware`
                ],
                imgArr: []
            }
        ]
    }

]

const TF_DATA = [
    {
        title: "Design Services",
        list: [
            {   
                subTitle: "Design Customization & Complete Blueprints",
                detailsArr: [
                    "- Customization of the design, and complete blueprints (construction drawings) of your home are included in the log shell price."
                ],
                imgArr: [
                    { thumbNail: `${THUMBS_ROOT}shell_f_blueprints.jpg`, actual: `${IMG_ROOT}shell_f_blueprints.jpg` }
                ]
            }
        ]
    },
    {
        title: "Timber Frame",
        list: [
            {
                subTitle: "Main Timber Frame",
                detailsArr: [
                    "- Squared timber construction",
                    "- All posts, beams, and braces are constructed of Douglas Fir",
                    `- Wall height as per plans (approx 9'-6" +-)`
                ],
                imgArr: []
            },
            {
                subTitle: "Upper Floor Frame",
                detailsArr: [
                    "- Douglas Fir timber second floor joists",
                    "- Douglas Fir timber second floor beams"
                ],
                imgArr: []
            },
            {
                subTitle: "Roof Timber Frame",
                detailsArr: [
                    "- Douglas Fir timber ridge beams",
                    "- Douglas Fir timber roof purlins",
                    "- Timber log trusses",
                    "- Truss bolting hardware",
                    "- Timber support posts"
                ],
                imgArr: []
            }
        ]
    },
    {
        title: "Features",
        list: [
            {
                subTitle: "Timber Trusses, Arches, Braces",
                detailsArr: [
                    "- The number and extent of these timber accents vary widely from design to design"
                ],
                imgArr: []
            },
            {
                subTitle: "Interior Guard Railings: (optional)",
                detailsArr: [
                    "- Log or timber railings around interior openings to below as shown on plan",
                    "- Log or timber posts for interior railings"
                ],
                imgArr: []
            },
            {
                subTitle: "Interior Stair: (optional)",
                detailsArr: [
                    "- One interior log or timber staircase",
                    "- Log or timber newel posts for exterior deck railings",
                    "- NOTE: railings for exterior stairways NOT included"

                ],
                imgArr: []
            },
            {
                subTitle: "Exterior Deck Railings: (optional)",
                detailsArr: [
                    "- Timber or log railings around exterior decks as shown on plan",
                    "- Log or timber newel posts for exterior deck railings",
                    "- NOTE: railings for exterior stairways NOT included"

                ],
                imgArr: []
            }
        ]
    },
    {
        title: "Other Services",
        list: [
            {
                subTitle: "Pre-Delivery Services",
                detailsArr: [
                    "- Full visual inspection of timbers during tagging and numbering.",
                    "- Final spot sanding and cleanup before shipping.",
                    "- Apply non-hazardous wood treatment to prepare for staining, maintain color and deter mold and fungus growth."        
                ],
                imgArr: []
            },
            {
                subTitle: "Delivery Advisor",
                detailsArr: [
                    "- Our pricing includes on site technical assistance for the entire re-assembly of the timber frame package.",
                    "- On-site for the duration of timber frame package re-assembly.",
                    "- Advisors will assist in the erection of the timber frame package and offer on site technical information.",
                    "- After the erection of the timber frame, our advisors will finish the on site detail work and consult with your general contractor to ensure a full understanding of the framing and finishing details required for a timber frame home."
                ],
                imgArr: []
            }
        ]
    }
]

const PB_FAQ = [
    {
        question: `Is the cost of transporting the log shell to my site included in the shell price?`,
        answer: `No, the cost of shipping the log package by truck (or boat or rail) is not included in the shell price, as it varies hugely depending on the distance from our log yard to your building site. We can obtain an estimate once we know where your building site is located.`
    },
    {
        question: `Do you offer turnkey services (General Contractors)?`,
        answer: `No, The log Connection does not build the entire home. We provide the log shell package only, as listed above.`
    },
    {
        question: `Is the fireplace included?`,
        answer: `No, this is purchased locally`
    },
    {
        question: `Can you supply the stone?`,
        answer: `No, this is an extremely heavy product to transport. Shipping fees will exceed the product cost.`
    },
    {
        question: `Do you do the foundation?`,
        answer: `No, The Log Connection requires that the foundation and sub-floor be in place upon arrival of the log shell package.`
    },
]

const SL_FAQ = [
    {
        question: `Is the cost of transporting the log shell to my site included in the shell price?`,
        answer: `No, the cost of shipping the log package by truck (or boat or rail) is not included in the shell price, as it varies hugely depending on the distance from our log yard to your building site. We can obtain an estimate once we know where your building site is located.`
    },
    {
        question: `Do you offer turnkey services (General Contractors)?`,
        answer: `No, The log Connection does not build the entire home. We provide the log shell package only, as listed above.`
    },
    {
        question: `Is the fireplace included?`,
        answer: `No, this is purchased locally`
    },
    {
        question: `Can you supply the stone?`,
        answer: `No, this is an extremely heavy product to transport. Shipping fees will exceed the product cost.`
    },
    {
        question: `Do you do the foundation?`,
        answer: `No, The Log Connection requires that the foundation and sub-floor be in place upon arrival of the log shell package.`
    },
]

const TF_FAQ = [
    {
        question: `Is the cost of transporting the timber frame to my site included in the price?`,
        answer: `No, the cost of shipping the package by truck (or boat or rail) is not included in the price, as it varies hugely depending on the distance from our log yard to your building site. We can obtain an estimate once we know where your building site is located.`
    },
    {
        question: `Do you offer turnkey services (General Contractors)?`,
        answer: `No, The Log Connection does not build the entire home. We provide the timber frame package only, as listed above.`
    },
    {
        question: `Is the fireplace included?`,
        answer: `No, this is purchased locally`
    },
    {
        question: `Can you supply the stone?`,
        answer: `No, this is an extremely heavy product to transport. Shipping fees will exceed the product cost.`
    },
    {
        question: `Do you do the foundation?`,
        answer: `No, The Log Connection requires that the foundation and sub-floor be in place upon arrival of the log shell package.`
    },
]

export const WiComponent = (props) => {

    const [items, setItems] = useState([]);
    const [faq, setFaq] = useState([]);
    useEffect(() => {
        switch (props?.type) {
            case 'PB':
                setItems(PB_DATA);
                setFaq(PB_FAQ);
                break;
            case 'SL':
                setItems(SL_DATA);
                setFaq(SL_FAQ);
                break;
            case 'TF':
                setItems(TF_DATA);
                setFaq(TF_FAQ);
                break;
        }
    }, []);

    return (
        <section className={STYLES.wi}>
            <MDBContainer>
                {items.map((item, i) => (
                    <div key={i}>
                        <MDBRow className="mt-3">
                            <MDBCol md="12">
                                <h4 className={STYLES.title}>{item.title}</h4>
                            </MDBCol>
                        </MDBRow>
                        {item.list.map((li, i) => (
                            <MDBRow key={i}>
                                {li.imgArr.length > 0 ?
                                    <>
                                        <MDBCol md="6" lg="5" sm="12" className={STYLES.left}>
                                            {typeof li.subTitle === 'string' ? <h5 className={`${STYLES.subTitle} ml-2 mt-2`}>{li.subTitle}</h5> : <></> }
                                            {li.detailsArr.map((d, i) => (
                                                <p className="ml-2" key={i}>{d}</p>
                                            ))}
                                        </MDBCol>
                                        <MDBCol md="6" lg="7" sm="12" className={STYLES.right}>
                                            {li.imgArr.map((img, i) => (
                                                <div className={`${STYLES.imgCont} p-2`} key={i}>
                                                    <ImageModal imgThumbSrc={img.thumbNail} imgSrc={img.actual} />
                                                </div>
                                            ))}
                                        </MDBCol>
                                    </> :
                                    <MDBCol md="12" className={STYLES.left}>
                                        {typeof li.subTitle === 'string' ? <h5 className={`${STYLES.subTitle} ml-2 mt-2`}>{li.subTitle}</h5> : <></> }
                                        {li.detailsArr.map((d, i) => (
                                            <p className="ml-2" key={i}>{d}</p>
                                        ))}
                                    </MDBCol>}
                            </MDBRow>
                        ))}
                    </div>
                ))}

                <MDBRow className="mt-3">
                    <MDBCol md="12">
                        <h4 className={STYLES.title}>What's Not Included in the Log Shell Price?</h4>
                    </MDBCol>
                </MDBRow>
                <MDBRow center>
                    <MDBCol md="12" className={STYLES.faq}>
                        <ul>
                            {faq.map((f, i) => (
                                <li key={i}>
                                    <span>{(i < 9) ? `0${i + 1}` : i + 1}</span>
                                    <h5> {f.question}</h5>
                                    <p>{f.answer}</p>
                                </li>
                            ))}
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    )
}