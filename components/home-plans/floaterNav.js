

import { GoToPlan } from './goToPlan';
import { SearchHomePlan } from './searchHomePlan';
import STYLES from '../../styles/modules/HomePlanNav.module.scss';

export const FloaterNav = ({ homePlans }) => {

    return (
        <section className={STYLES.floaterNavCont}>
            <div className="text-right">
                <SearchHomePlan />
            </div>
            <div className="mt-3">
                <GoToPlan homePlans={homePlans} />
            </div>
        </section>)
}