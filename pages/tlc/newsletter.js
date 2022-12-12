import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Link from "next/link";
import { BannerSection } from '../../components/common/banner';
import { SubNavbar } from '../../components/common/subNavbar';
import { TLC_NAVBAR } from '../../common/constants/tlc';
import { NewsletterSignUpModal } from "../../components/newsletter/newsletterSignUp";
import { getNewsletter } from '../../common/services/newsletter';
import { readTextFile } from "../../common/webService";
import STYLES from '../../styles/tlc/NewsLetter.module.scss';
import { Divider } from '../../components/common/labels';

const NEWSLETTER_COVER = `${process.env.IMG_BASE_URL}/newsletter/_cover/`;
const NEWSLETTER_ROOT = `${process.env.IMG_BASE_URL}/newsletter/`;
const IMG_BANNER_ROOT = `${process.env.IMG_BASE_URL}/tlc-monthly/banner/`;

const NewsletterEntryPage = () => {

  const [newsletter, setNewsletter] = useState([]);
  const [newsletterList, setNewsletterList] = useState([]);

  useEffect(async () => {
    let data = await getNewsletter("latest");
    setNewsletter(data);
  }, []);

  useEffect(async () => {
    let data = await getNewsletter("archived");
    setNewsletterList(data);
  }, []);

  const onClickCoverPage = async (nl) => {
    const html = await readTextFile(`${NEWSLETTER_ROOT}${nl.Template}/${nl?.TemplateNm}`, { encoding: 'utf8' });
  }

  return (
    <>
      <BannerSection img={`${IMG_BANNER_ROOT}tlc_banner_1.jpg`} />
      <SubNavbar navBarItems={TLC_NAVBAR} header={""} />
      <section className={`${STYLES.newsLetter}`}>

        <MDBContainer>
          <MDBRow className="px-4">
            <MDBCol md="8" lg="9" xl="9">
              <div className={`${STYLES.left} mt-3 mt-lg-3`}>
                <div className={`${STYLES.title}`}>Newsletter</div>
                <div className={`${STYLES.desc} text-justify`}>
                  Our monthly newsletter contains a brief article on our Featured Home, as well as information and links to websites relevant to log home design and construction. We plan to introduce many new log home plans in the near future, and our newsletter is your guarantee of being notified as soon as they become available on our web site.
                  <br />
                  <br />
                  Plus, we plan to offer frequent special price offers, such as discounts on a particular log shell package ordered during that month. Also, you can request to be notified of any special events such as new log homes being set up in your particular area.
                </div>
                <MDBRow center>
                  <MDBCol md="12" lg="12" xl="12">
                    <div className={`${STYLES.subText} text-center pt-3`}>Want to subscribe to our newsletter?</div>
                  </MDBCol>
                  <NewsletterSignUpModal />
                </MDBRow>
              </div>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="pt-md-5 pt-3">
              <div className={`${STYLES.right} pt-md-5`}>
                <Link href={{ pathname: '/newsletter', query: { code: newsletter[0]?.NewsletterCd } }}>
                  <a href={`/newsletter?code=${newsletter[0]?.NewsletterCd}`}>
                    <div className={`${STYLES.imgCont}`}>
                      <img src={`${NEWSLETTER_COVER}${newsletter[0]?.Cover}`}></img>
                    </div>
                    <div className={`${STYLES.newsLetterLabel} text-center pt-3`}>Click here to see the latest newsletter</div>
                  </a>
                </Link>
              </div>
            </MDBCol>
          </MDBRow>

          <div className={`${STYLES.title} text-center pt-5`}> Archived Newsletters</div>
          <Divider />
          {newsletterList.map((n, i) => (
            <div className={`${STYLES.newsletterCont} p-3`} key={i}>
              <Link href={{ pathname: '/newsletter', query: { code: n.NewsletterCd } }}>
                <a href={`/newsletter/${n.NewsletterCd}`}>
                  <img src={`${NEWSLETTER_COVER}${n.Cover}`}></img>
                  <div className={`${STYLES.newsLetterLabel} text-center pt-3`}>{n.NewsletterNm}</div>
                </a>
              </Link>
            </div>
          ))}
        </MDBContainer>
      </section>
    </>
  );
}

export default NewsletterEntryPage;
