import React, { useState, useEffect } from "react";
import STYLES from '../../styles/building-styles/Process.module.scss';
import C_STYLES from '../../styles/Common.module.scss';
import ANIMATION from "../../styles/Animation.module.scss";

const IMG_PATH_LOG_STYLES = `${process.env.IMG_BASE_URL}/building-styles/log-styles/`;
const IMG_PATH_LOG_STYLES_THUMBS = `${process.env.IMG_BASE_URL}/building-styles/log-styles/thumbs/`;

const PB_DATA = [
    {
        imgUrl: `${IMG_PATH_LOG_STYLES}logstyles-PB-shell.jpg`,
        thumbUrl: `${IMG_PATH_LOG_STYLES_THUMBS}logstyles-PB-shell.jpg`,
        caption: `Log Shell`,
    },
    {
        imgUrl: `${IMG_PATH_LOG_STYLES}logstyles-PB-all.jpg`,
        thumbUrl: `${IMG_PATH_LOG_STYLES_THUMBS}logstyles-PB-all.jpg`,
        caption: `Dry-In`,
    },
    {
        imgUrl: `${IMG_PATH_LOG_STYLES}logstyles-PB-real.jpg`,
        thumbUrl: `${IMG_PATH_LOG_STYLES_THUMBS}logstyles-PB-real.jpg`,
        caption: `Complete`,
    },
    {
        imgUrl: `${IMG_PATH_LOG_STYLES}logstyles-PB-CU.jpg`,
        thumbUrl: `${IMG_PATH_LOG_STYLES_THUMBS}logstyles-PB-CU.jpg`,
        caption: `Close Up`,
    }
]

const SL_DATA = [
    {
        imgUrl: `${IMG_PATH_LOG_STYLES}logstyles-stacked-shell.jpg`,
        thumbUrl: `${IMG_PATH_LOG_STYLES_THUMBS}logstyles-stacked-shell.jpg`,
        caption: `Log Shell`,
    },
    {
        imgUrl: `${IMG_PATH_LOG_STYLES}logstyles-stacked-all.jpg`,
        thumbUrl: `${IMG_PATH_LOG_STYLES_THUMBS}logstyles-stacked-all.jpg`,
        caption: `Dry-In`,
    },
    {
        imgUrl: `${IMG_PATH_LOG_STYLES}logstyles-stacked-real.jpg`,
        thumbUrl: `${IMG_PATH_LOG_STYLES_THUMBS}logstyles-stacked-real.jpg`,
        caption: `Complete`,
    },
    {
        imgUrl: `${IMG_PATH_LOG_STYLES}logstyles-stacked-CU.jpg`,
        thumbUrl: `${IMG_PATH_LOG_STYLES_THUMBS}logstyles-stacked-CU.jpg`,
        caption: `Close Up`,
    }
]

const TF_DATA = [
    {
        imgUrl: `${IMG_PATH_LOG_STYLES}logstyles-timber-shell.jpg`,
        thumbUrl: `${IMG_PATH_LOG_STYLES_THUMBS}logstyles-timber-shell.jpg`,
        caption: `Log Shell`,
    },
    {
        imgUrl: `${IMG_PATH_LOG_STYLES}logstyles-timber-all.jpg`,
        thumbUrl: `${IMG_PATH_LOG_STYLES_THUMBS}logstyles-timber-all.jpg`,
        caption: `Dry-In`,
    },
    {
        imgUrl: `${IMG_PATH_LOG_STYLES}logstyles-timber-real.jpg`,
        thumbUrl: `${IMG_PATH_LOG_STYLES_THUMBS}logstyles-timber-real.jpg`,
        caption: `Complete`,
    },
    {
        imgUrl: `${IMG_PATH_LOG_STYLES}logstyles-timber-CU.jpg`,
        thumbUrl: `${IMG_PATH_LOG_STYLES_THUMBS}logstyles-timber-CU.jpg`,
        caption: `Close Up`,
    }
]

export const ProcessComponent = (props) => {

    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState({
        imgUrl: ``,
        thumbUrl: ``,
        caption: ``,
    });

    useEffect(() => {
        switch (props?.type) {
            case 'PB':
                setSelectedItem(PB_DATA[0]);
                setItems(PB_DATA);
                break;
            case 'SL':
                setSelectedItem(SL_DATA[0]);
                setItems(SL_DATA);
                break;
            case 'TF':
                setSelectedItem(TF_DATA[0]);
                setItems(TF_DATA);
                break;
        }
    }, []);

    useEffect(() => {
        let idx = 0;
        const interval = setInterval(() => { 
            if (items && items[0]) {
                setSelectedItem(items[idx]);
                idx++;
                if (idx === 4) {
                    idx = 0;
                }
            }
        }, 3000);
        return () => {
            clearInterval(interval);
        };
    }, [items]);

    return (
        <div className={`${STYLES.process}`}>
            <div className={`${STYLES.activeCont}`}>
                {/* <img src={selectedItem.imgUrl} className={`${C_STYLES.boxShadow1} ${ANIMATION.fadeIn}`} key={new Date()}/> */}
                <img src={selectedItem.imgUrl} className={`${C_STYLES.boxShadow1}`} />
            </div>
            {items.map((item, i) => (
                <div key={i} onClick={() => { setSelectedItem(item) }} className={`${STYLES.thumbs}`}>
                    <img src={item.thumbUrl} className={`${C_STYLES.boxShadow1}`} />
                    <span>{item.caption}</span>
                </div>
            ))}
        </div>
    )

}