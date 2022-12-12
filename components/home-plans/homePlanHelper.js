
import { HOME_PLAN_DETAILS_CONST, HOME_PLAN_DETAILS_PATH } from '../../common/constants/homePlans';


export const processHomePlans = (planCode, allHomePlans, category) => {

    const HOME_PLANS_NAVBAR = [
        { title: HOME_PLAN_DETAILS_CONST.FLOOR_PLAN_LABEL, href: `${HOME_PLAN_DETAILS_PATH.FLOOR_PLAN}?plan=${planCode}` }
    ]

    let result = {
        currHomePlan: "",
        nextHomePlan: "",
        prevHomePlan: "",
        header: "",
        navBarItems: []
    }

    try {
        let homePlans = [];

        if (category === 'gallery') {
            homePlans = allHomePlans.filter(c => c.pictures === 'x');
        } else if (category === 'studySet') {
            homePlans = allHomePlans.filter(c => c.study === 'x');
        } else if (category === 'priceQuote') {
            homePlans = allHomePlans.filter(c => c.quote === 'x');
        } else {
            homePlans = allHomePlans;
        }
        
        result.currHomePlan = homePlans.filter(c => c.planCode === planCode)[0];
        if (result.currHomePlan) {
            let currIndex = homePlans.reduce((r, h, i) => h.planCode === planCode ? (r.push(i), r) : r, [])[0];
            let indexOfPrev = currIndex > 0 ? currIndex - 1 : 0;
            let indexOfNext = currIndex < homePlans.length - 1 ? currIndex + 1 : 0;
            let isFirst = currIndex === 0 ? true : false;
            let isLast = currIndex === homePlans.length - 1 ? true : false;

            result.prevHomePlan = isFirst ? null : homePlans[indexOfPrev];
            result.nextHomePlan = isLast ? null : homePlans[indexOfNext];
            result.header = `${result.currHomePlan.name} ~ ${result.currHomePlan.sf} SQ. FT.`;

            if (result.currHomePlan && result.currHomePlan.pictures === 'x') {
                HOME_PLANS_NAVBAR.push({ title: HOME_PLAN_DETAILS_CONST.IMAGE_GALLERY_LABEL, href: `${HOME_PLAN_DETAILS_PATH.IMAGE_GALLERY}?plan=${planCode}` });
            }
            if (result.currHomePlan && result.currHomePlan.quote === 'x') {
                HOME_PLANS_NAVBAR.push({ title: HOME_PLAN_DETAILS_CONST.PRICE_QUOTE_LABEL, href: `${HOME_PLAN_DETAILS_PATH.PRICE_QUOTE}?plan=${planCode}` });
            }
            if (result.currHomePlan && result.currHomePlan.study === 'x') {
                HOME_PLANS_NAVBAR.push({ title: HOME_PLAN_DETAILS_CONST.STUDY_SET_LABEL, href: `${HOME_PLAN_DETAILS_PATH.STUDY_SET}?plan=${planCode}&scroll=false`, scroll: true });
            }
        }

        result.navBarItems = HOME_PLANS_NAVBAR;
        return result;
    }
    catch (err) {
        console.log(err);
        throw err;
    }

}