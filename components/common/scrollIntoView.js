import React, { useEffect, useReducer, useRef } from "react";
import { useRouter } from "next/router";

export const ScrollIntoView = (props) => {

    const elem = useRef(null);
    const router = useRouter();
    let mode = props.mode;
    let scroll = router.query.scroll;
  
    useEffect(() => {

        if(scroll === 'false') {
            //console.log(router.query);
        } else {
            if (mode==='default') {
                if (elem && elem.current) {
                    const e = elem.current;
                    //const relativeTop = window.scrollY > e.offsetTop ? window.scrollY : e.offsetTop;
                    //elem.current.scrollIntoView({ behavior: "smooth", top: e.offsetTop - relativeTop });
                    elem.current.scrollIntoView({ behavior: "smooth", top: e.offsetTop });
                }
            } else if(mode === 'hash') {
                let anchorId = window.location.href.slice(window.location.href.indexOf("#"));
                //console.log('anchorId', anchorId);
                if (elem && elem.current) {
                    if (anchorId && anchorId.indexOf("#") > -1) {
                        const e = elem.current;          
                        //const relativeTop = window.scrollY > e.offsetTop ? window.scrollY : e.offsetTop;              
                        // elem.current.scrollIntoView({ behavior: "smooth", top: e.offsetTop - relativeTop });
                        elem.current.scrollIntoView({ behavior: "smooth", top: e.offsetTop });
                    }
                }
            } 
        }
        
    }, [elem, props]);

    return (<div ref={elem}></div>)
}