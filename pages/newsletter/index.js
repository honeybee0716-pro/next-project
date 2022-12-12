import React, { useState, useEffect } from "react";
import { MDBContainer, MDBIcon } from "mdbreact";
import { useRouter } from "next/router";
import Link from "next/link";
import { BannerSection } from '../../components/common/banner';
import { SubNavbar } from '../../components/common/subNavbar';
import { TLC_NAVBAR } from '../../common/constants/tlc';
import { getNewsletterByTemplate } from '../../common/services/newsletter';
import STYLES from '../../styles/tlc/NewsLetter.module.scss';
import { readTextFile } from "../../common/webService";

const NEWSLETTER_ROOT = `${process.env.IMG_BASE_URL}/newsletter/`;
const IMG_BANNER_ROOT = `${process.env.IMG_BASE_URL}/tlc-monthly/banner/`;

const NewsletterPage = () => {

  const router = useRouter();
  const code = router.query.code;

  const [newsletter, setNewsletter] = useState({ __html: "" });

  useEffect(async () => {
    let data = await getNewsletterByTemplate(code);
    if(data && data[0]) {
      const html = await readTextFile(`${NEWSLETTER_ROOT}${code}/${data[0]?.TemplateNm}`, { encoding: 'utf8' });
      setNewsletter({ __html: html });
    }
  }, [code]);

  return (
    <>
      <BannerSection img={`${IMG_BANNER_ROOT}tlc_banner_1.jpg`} />
      <SubNavbar navBarItems={TLC_NAVBAR} header={"Newsletter"} />
      <section className={`${STYLES.newsLetter}`}>
        <MDBContainer className="p-5">
          <Link href="/tlc/newsletter/">
            <a href="/tlc/newsletter/" className={`${STYLES.back}`}>
              <MDBIcon className={`mr-2`} icon="caret-left"></MDBIcon>Return to NewsLetter</a>
          </Link>
          <div className={`mt-3`}>
            <div dangerouslySetInnerHTML={newsletter} />
          </div>
        </MDBContainer>
      </section>
    </>
  );
}

export default NewsletterPage;
