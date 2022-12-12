import STYLES from '../../styles/Common.module.scss';

export const CommonTitle1 = (props) => {
    return (
        <div className={STYLES.commonTitle1}>
            <p>{props.title}</p>
        </div>
    )
}

export const Divider = () => {
    return (<div className={STYLES.divider}></div>)
}



