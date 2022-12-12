import React, { useState, useEffect } from "react";
import { BannerSection } from '../../components/common/banner';
import { SubNavbar } from '../../components/common/subNavbar';
import { TLC_NAVBAR } from '../../common/constants/tlc';
import TLC_STYLES from '../../styles/tlc/TLC.module.scss';
import ANIMATION from '../../styles/Animation.module.scss';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const IMG_BANNER_FILE_ROOT = `${process.env.IMG_BASE_URL}/tlc-monthly/banner/`;
const IMG_TLC_FILE_ROOT = `${process.env.IMG_BASE_URL}/tlc-monthly/testimonials/`;
const IMG_PROJECTS_FILE_ROOT = `${process.env.IMG_BASE_URL}/projects/`;

const DATA = [
  {
    label: "Jim Aumiller, Washington State",
    imageUrl: `${IMG_PROJECTS_FILE_ROOT}Aumiller/thumbs/setup_1944.jpg`, //working/Aumiller/thumbs/setup_1944.jpg
    testimonial: [
      (<i>...As Owner/Contractor, I am well aware of the complications of trying to build a log home on top of a cliff on 
        an island an hour by ferry offshore.  
        But instead of being a logistical headache - the entire venture has been fun.  
        No regrets.  And my wife and I owe it to Steve, Cory, Eric, and the entire Log Connection team - thanks guys.</i>),
      `It's my pleasure to offer comments with respect to my dealings with The Log Connection.
      My wife and I purchased the log package for The Westbury house in late 2007.
      During the next few months, design changes were made and log fabrication begun in Penticton.
      During this period we had the opportunity to interact with Steve Hancock and Cory Bashuk on a constant basis.
      Our exchanges were easy (pdf files through email) and always a pleasure.
      I came to know Steve  more since we both have interests in racing and Cory and I shared off-roading stories.
      In essence, the correspondence was more than professional but became personal and a lot of fun.`,

      `Construction of our new home was to take place on top a rocky cliff on Lopez Island WA overlooking the Straits of Juan de Fuca.  
      So, getting the log package up the hill was a real challenge.  
      The Log Connection crew helped us offload the logs at the bottom of the hill and bring them up on smaller trucks.  
      Not an easy task since it was  snowing heavily at the time.  
      Erection of the log package took 3 days and involved much fine-tuning of the logs to make them fit around 
      4 steel moments that were required by the building engineer.  
      But, when it was over, the structure was beautiful and many new friends were made.  
      Lopez  residents are continually commenting on the fit of the logs and the beauty of the overall structure.`,

      `During the past year of construction, some help was needed from The Log Connection and everything was done painlessly.  
      Replacement rail posts (that had split during shipping) were fabricated and shipped at no cost to us.  
      Roofing and windows have now been done so we are at the wiring/plumbing stage of construction.  
      We anticipate completion during this next year.`,

      `As Owner/Contractor, I am well aware of the complications of trying to build a log home on top of a cliff on 
      an island an hour by ferry offshore.  
      But instead of being a logistical headache - the entire venture has been fun.  
      No regrets.  And my wife and I owe it to Steve, Cory, Eric, and the entire Log Connection team - thanks guys.`
    ],
    salutation: (<b>Jim Aumiller - retired prof emeritus.</b>)
  },
  {
    label: "Mac and Kris McKenzie, Georgia",
    imageUrl: `${IMG_PROJECTS_FILE_ROOT}McKenzie/thumbs/20081231_359.jpg`, //working/McKenzie/20081231_359.jpg
    testimonial: [
      (<i>...We chose one of the stock floorplans and made countless changes.  
        It was all fairly painless and never any pressure to accept something we were not sure of...  
        It is amazing how close the virtual rendering came to our actual home...</i>),
      `Kudos to The Log Connection!`,
      `I researched many log and timberframe home companies for more than 5 years, and kept returning to The Log Connection.  
      I was very interested in the Post and Beam construction method, and I was very impressed with 
      the overall quality of the 2 different Log Connection homes that I visited.  
      All the people I dealt with were extremely professional, courteous and easy to work with.`,
      `We chose one of the stock floorplans and made countless changes.  
      It was all fairly painless and never any pressure to accept something we were not sure of.  
      The new floorplan turned out great and ended up becoming a new model.`,
      `A big selling point for my wife was the ability to have a virtual walkthrough of our house prior to construction.  
      It is amazing how close the virtual rendering came to our actual home.`,
      `The logs are beautiful, and the construction was top-notch.`,
      `There were very minor discrepancies which were taken care of at no cost.`,
      `We love our home and were very happy with our dealings with Steve Hancock and everyone at The Log Connection.`
    ],
    salutation: (<b>Signed Mac and Kris</b>)
  }, 
  {
    label: "Michelle Jones, Pennsylvania",
    imageUrl: `${IMG_PROJECTS_FILE_ROOT}Jones/thumbs/20090923_d_022.jpg`, //working/Jones/20090923_d_022.jpg
    testimonial: [
      (<i>...We've shown our home to many friends, family members, co-workers, etc., and we always get 
      the same reactions and compliments, "Wow", "Oh my God" and "We've never seen another log home as beautiful as this one".  
      TLC has given us a stunning home and made our dream a reality...</i>),
      `The Log Connection (TLC) offers homes that are of far superior quality to those of your standard log home builders.  
      Your home will have a unique design that is sure to be one-of-a-kind.`,
      `The precision of the cuts made by the craftsman was evident based on the way each log fit together.  
      This was clearly seen during the stacking but especially when watching the final roof beam being placed, 
      and seeing how four separate logs had to fit together.`,
      `The extensive knowledge of the specialist at our build site also made the stacking process flawless with our contractor.  
      The attention to detail by the TLC team shows in the characteristics of the home.   
      We've shown our home to many friends, family members, co-workers, etc., and we always get 
      the same reactions and compliments, "Wow", "Oh my God" and "We've never seen another log home as beautiful as this one".  
      TLC has given us a stunning home and made our dream a reality.`
    ],
    salutation: ""
  },
  {
    label: "Keat and Janice Griggers, Colorado",
    imageUrl: `${IMG_PROJECTS_FILE_ROOT}Griggers/thumbs/Griggers-h1.jpg`,
    testimonial: [
      (<i>...The logs were delivered as you promised on the exact day we had arranged for a crane to erect the log shell.
        Your log shell was easily erected in less than three days with the expert assistance of your 
        construction supervisor...he went way above and beyond anything that just 
        resembled supervision...</i>),
        `My wife and I would like to thank you for the exceptional work you did providing us with the Log 
        Shell for our "Saratoga" model Cabin.  We finished the home this Fall (2009) after approximately 
        1 year in construction (during 6 months of the Colorado winter).`,
        `We were very pleased with the modifications to the basic structure we requested and your design 
        of a breezeway that connected to the detached garage we added.`,
        `The logs were delivered as you promised on the exact day we had arranged for a crane 
        to erect the log shell.`,
        `Your log shell was easily erected in less than three days with the expert assistance of your 
        construction supervisor, Mike.  He went way above and beyond anything that just 
        resembled supervision.`,
        `The perfection of the log structure made the assembly easy and further conventional framing was 
        facilitated by the joinery you included with this model.`,
        `To say that we were very pleased with Mr. Hancock's personal involvement in our needs and the 
        Log Connection's very fine work is without question.`,
        `Our sincere thanks for making the stress of building a new home much easier.`
    ],
    salutation: "Keat and Janice Griggers"
  },
  {
    label: "Jeff Paine, Idaho",
    imageUrl: `${IMG_PROJECTS_FILE_ROOT}Paine/thumbs/20081014_36.jpg`,
    testimonial: [
      (<i>...The Log Connection allowed us to interactively work with them to customize the basic design 
        at no extra cost...we added 
        space to the living room, a walkover above the living room and a portico over the front entry. 
        Our selection has been validated by the many visitors who have been attracted enough to ask to see and tour it as we 
        have been building it.</i>),
        `Our search to find a design for our retirement "cabin/home" to build on heritage property that had 
        been in our family since the 1880s took more than 10 years. We wanted the design to be out of the 
        ordinary, attractive, functional, and sized for comfortable living, provide for a panoramic view and, 
        when complete, to be a significant enhancement to the property on which it would be built. 
        Equally important to us was that the design had been built successfully and could be seen and 
        walked through to give us the assurance, before we made the commitment, that it would or could 
        meet all of our requirements.`,
        `Like most people we researched magazines, books, other properties. We visited with architects 
        and looked at their "concept" homes and some they had custom designed for various clients. 
        Independent architect services for just the design of a home to meet our criteria were quoted in 
        2007 to start out at approximately $150,000. One critical element that an original, never before 
        built, design by an independent architect lacks is the ability to do a full size walk through. To us, 
        this is an extremely important point. We visited several "one of a kind" homes where the owner 
        was disappointed in some features of the space and arrangement after having had it built. They 
        wished they had been able to walk through it before they had it built.`,
        `We found all of our requirements to be met with the Westbury design offered by the Log 
        Connection. We were able to visit two homes of this configuration while they were under 
        construction. This allowed us to get the "feel" of the structure and see how we might want it 
        modified to suit our needs.`,
        `The Log Connection allowed us to interactively work with them to customize the basic design to 
        accommodate our particular needs at no extra cost to the log package. While doing so, we added 
        space to the living room, a walkover above the living room and a portico over the front entry. The 
        construction of the design that we finalized is now at about 85% complete. The space, layout and 
        view have been very satisfying to us and meet virtually all of our requirements. Our selection has 
        been validated by the many visitors who have been attracted enough to ask to see and tour it as we 
        have been building it. We are proud to show it to them.`,
        `The log joinery is excellent, they are awesome in size and the space is extremely comfortable for 
        us. The support provided during erection of the logs was very professional and efficient. We are 
        very pleased with the product, the services and the performance of The Log Connection.`
    ],
    salutation: ""
  },
  {
    label:"Uta and Alvin Hosking, Michigan",
    imageUrl:`${IMG_PROJECTS_FILE_ROOT}Hosking/thumbs/20090523_02.jpg`,
    testimonial: [
      (<i>Being so far in distance from them, we thought, would make discussing various issues more difficult.  
        However we could never have been more wrong.  Very few issues came up - they had already thought of everything...</i>),
        `Our experience, dealing with The Log Connection, was absolutely fantastic.  
        Being so far, in distance, from them, we thought, would make discussing various issues, more difficult.  
        However, we could never have been more wrong.  Very few issues came up - they had already thought of everything.  
        Changes we wanted - a breeze; questions we had - immediately satisfactorily answered.`,
        `Friends who build upscale log homes in the north of Michigan, were astounded by the workmanship 
        and the beauty of the logs of our post and beam house; the smoothness, the perfection of it all.  
        We thought that to be very high praise coming from a competitor, of sorts.`,
        `We were all awed,  from us, to our contractor, builder, to all the people who have worked on the house.  
        Thank you, Log Connection. And thank you, Bob.  You were of immeasurable help.`,
        `If we have to describe our whole experience with you from start to the new standing house, it would be, 
        how so numerous people have put it so aptly "WOW!"`
    ],
    salutation:""
  },
  {
    label:"Melody and Bob Barnhart, Florida / North Carolina",
    imageUrl: `${IMG_PROJECTS_FILE_ROOT}Barnhart/thumbs/20071001_30a.jpg`,
    testimonial: [
      (<i>Not knowing much about log homes, I turned to the internet.  
        After considerable research, I came upon the most
        stunning computer animated log home I had ever seen...it was on The Log Connection's
        website.  I was hooked...</i>),
      `My husband and I live in a beautiful tropical paradise in southwest Florida, yet have 
      always loved escaping to the mountains.  We finally purchased a piece of mountain 
      property in Western North Carolina which has breathtaking views.  We own a successful
      home design firm in Florida, so naturally we soon set upon the task of designing a
      getaway cabin to build on our newly acquired property.  I decided that I wanted a log
      home with full round logs - that still looked like logs.  Not knowing much about log
      homes, I turned to the internet.  After considerable research, I came upon the most
      stunning computer animated log home I had ever seen.. it was on The Log Connection's
      website.  I was hooked.`,
      `After gathering ideas from the Fairmont and Minocqua Models, I designed our home to
      suit our building site.  We sent my proposed preliminary home design to Steve at The
      Log Connection and he sent us back very comprehensive plans with which to build our
      home.  Erection of our home on our site went just as planned, and the supervisor who
      was sent to our jobsite was hard working and knowledgeable.  The craftsmanship and
      details that went into our home are outstanding.  The huge full round logs are
      stunning and exactly what I wanted.  In fact, we love the quality of our home so much
      that we have become the Florida Dealer for The Log Connection.`
    ],
    salutation:""
  }
]


const TestimonialsPage = () => {

  const [activeItem, setActiveItem] = useState(DATA[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickItem = (e, i, item) => {
    e.preventDefault();
    setActiveIndex(i);
    setActiveItem(item);
  }

  return (
    <>
      <BannerSection img={`${IMG_BANNER_FILE_ROOT}tlc_banner_1.jpg`} />
      {/* <SubNavbar navBarItems={TLC_NAVBAR} header={"Testimonials and Accolades"} /> */}
      <SubNavbar navBarItems={TLC_NAVBAR} header={""} />
      <section className={`${TLC_STYLES.testimonials} px-5`}>
        <MDBContainer>
          <div className="pt-5 mb-3">
            <p className={TLC_STYLES.header}>CLIENT TESTIMONIALS</p>
          </div>
          <MDBRow>
            <MDBCol md="5" lg="6" sm="12" xl="6">
              <div className="mt-2 mb-3" xl="6">
                <p className={TLC_STYLES.subHeader}>CLICK TO VIEW</p>
              </div>
              <MDBRow>
                {DATA.map((t, i) => (
                  <MDBCol key={i} size="6" md="6" lg="6" sm="12" xl="6" xs="12" className="px-lg-5">
                    <div className={`${TLC_STYLES.thumbnail} my-3`} onClick={(e) => onClickItem(e, i, t)}>
                      <img src={t.imageUrl} className={activeIndex === i ? TLC_STYLES.selected : ""} />
                      <p>{t.label}</p>
                    </div>
                  </MDBCol>
                ))}
              </MDBRow>
            </MDBCol> 
            <MDBCol md="7" lg="6" sm="12" className="p-0">
              <div className={`${TLC_STYLES.commentCont} ${ANIMATION.fadeIn} p-3 pb-5 ml-3 mb-5`} key={+new Date()}>
                {activeItem.testimonial.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
                <br />
                <span className={TLC_STYLES.salutation}>{activeItem.salutation}</span>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}

export default TestimonialsPage;
