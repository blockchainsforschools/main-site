"use strict";

function App() {
  const buttonStyles = {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    zIndex: 99
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Warning, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Sponsors, null), /*#__PURE__*/React.createElement(Venue, null), /*#__PURE__*/React.createElement(Schedule, null), /*#__PURE__*/React.createElement(FAQs, null), /*#__PURE__*/React.createElement(Menu, null), /*#__PURE__*/React.createElement(Button, {
    style: buttonStyles,
    onClick: () => window.open('https://hackathonbfs.typeform.com/to/fD5rzJ')
  }, "Apply Now!"), /*#__PURE__*/React.createElement("br", null));
}

function Warning(props) {
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Title, {
    center: true,
    style: {
      color: 'red'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: 'anchor',
    id: 'covid-19'
  }, "ATTN:")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'red'
    }
  }, /*#__PURE__*/React.createElement("b", null, "BlockchainsForSchools is closely monitoring the current situation regarding COVID-19. The organizers have decided to postpone making a decision until April 1st, as the situation for the NYC region is in flux. The safety of our participants and staff is our number one priority, and the decision made will be consistent with CDC and state guidelines. In the event the May hackathon is canceled, we plan to postpone the event to the fall.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Updated as of March 10th, 2020")));
}

function Menu(props) {
  const tabs = [{
    anchor: '#covid-19',
    title: 'COVID-19'
  }, {
    anchor: '#about',
    title: 'About'
  }, {
    anchor: '#sponsors',
    title: 'Sponsors'
  }, {
    anchor: '#venue',
    title: 'Venue'
  }, {
    anchor: '#schedule',
    title: 'Schedule'
  }, {
    anchor: '#faqs',
    title: 'FAQs'
  }];
  const [open, setOpen] = React.useState(window.innerWidth > 850);
  const [currentTab, setCurrentTab] = React.useState('');

  const scrollHandler = ev => {
    let prominentTab = '';
    tabs.forEach(tab => {
      const anchor = window.document.querySelector(tab.anchor);

      if (anchor) {
        const distanceTop = anchor.offsetTop - window.scrollY;
        if (distanceTop < 50) prominentTab = tab.anchor;
      }
    });
    if (prominentTab) setCurrentTab(prominentTab);
  };

  React.useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      zIndex: 99
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '4rem',
      position: 'fixed',
      right: open ? '9rem' : 0,
      top: 'calc(50vh)',
      backgroundColor: 'var(--mdc-theme-primary)',
      color: 'white',
      paddingTop: '1.2rem',
      borderRadius: '1rem 0 0 1rem',
      opacity: open ? 1 : 0.7,
      transition: 'right 0.5s',
      cursor: 'pointer'
    },
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("i", {
    className: 'material-icons',
    style: {
      height: '100%'
    }
  }, "keyboard_arrow_", open ? 'right' : 'left')), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '18rem',
      width: '9rem',
      top: 'calc(50vh - 7.5rem)',
      backgroundColor: 'white',
      position: 'fixed',
      right: open ? 0 : '-9rem',
      padding: '2rem',
      borderRadius: '1rem 0 0 1rem',
      border: '1px solid grey',
      borderRight: 0,
      transition: 'right 0.5s'
    }
  }, tabs.map(tab => /*#__PURE__*/React.createElement(MenuItem, {
    tab: tab.anchor,
    active: currentTab === tab.anchor
  }, tab.title))));
}

function MenuItem({
  tab,
  active,
  children
}) {
  return /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: tab,
    style: {
      color: active ? 'var(--mdc-theme-primary)' : 'grey'
    }
  }, /*#__PURE__*/React.createElement("b", null, children)));
}

function Button({
  children,
  style,
  onClick
}) {
  const ref = React.createRef();
  React.useEffect(() => {
    if (window.mdc) window.mdc.ripple.MDCRipple.attachTo(ref.current);
  }, []);
  return /*#__PURE__*/React.createElement("button", {
    className: "mdc-button mdc-button--raised",
    style: style,
    ref: ref,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "mdc-button__ripple"
  }), children);
}

function Container({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['content-container']
  }, children);
}

function Title({
  children,
  center,
  style = {}
}) {
  const styles = {
    fontFamily: `'Red Hat Display', sans-serif`,
    color: '#4cbb85',
    fontSize: '2.5rem',
    fontWeight: 700,
    marginTop: '2rem',
    marginBottom: '1.5rem'
  };
  Object.assign(styles, style);
  if (center) styles.textAlign = 'center';
  return /*#__PURE__*/React.createElement("h2", {
    style: styles
  }, children);
}

function About() {
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Title, {
    center: true
  }, /*#__PURE__*/React.createElement("a", {
    className: 'anchor',
    id: 'about'
  }, "About")), /*#__PURE__*/React.createElement("p", null, "Blockchains4Hacks is one of the first introductory blockchain-focused hackathons open to high school and college students. For 24 hours, students will learn about ways to integrate blockchain into their applications, hacking away at challenges, and building applications that integrate those services. We plan to host workshops leading up to the hackathon, allowing participants to immerse themselves in blockchain before building their projects."), /*#__PURE__*/React.createElement("p", null, "In our continued commitment and support for diversity, we plan to offer travel reimbursements for students who are not located in NYC. We also plan to set funds aside specifically for hackers whose backgrounds are commonly underrepresented in the tech industry, in addition to low income students."), /*#__PURE__*/React.createElement("p", null, "Our hope is that students will walk away with a deeper knowledge of blockchain as well as firsthand experience on how to use the technology. We also hope that the projects created at this hackathon will blossom and continue even after B4H 2020 is over."));
}

function Grid({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mdc-layout-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mdc-layout-grid__inner"
  }, children));
}

function GridCell({
  span,
  spanTablet,
  children,
  style,
  className
}) {
  const classes = ['mdc-layout-grid__cell--span-' + (span || 4)];
  if (className) classes.push(...className);
  if (spanTablet) classes.push(`mdc-layout-grid__cell--span-${spanTablet}-tablet`);
  return /*#__PURE__*/React.createElement("div", {
    className: classes.join(' '),
    style: style
  }, children);
}

function SponsorCell({
  alt,
  src,
  span,
  spanTablet,
  url,
  width
}) {
  const imageStyles = {
    maxWidth: '100%',
    width,
    height: '100%',
    objectFit: 'contain',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    cursor: 'pointer'
  };
  const cellStyles = {
    height: '10rem'
  };
  if (!span) span = 3;
  if (!spanTablet) spanTablet = 4;
  return /*#__PURE__*/React.createElement(GridCell, {
    span: span,
    spanTablet: spanTablet,
    style: cellStyles
  }, /*#__PURE__*/React.createElement("img", {
    style: imageStyles,
    alt: alt,
    src: src,
    onClick: () => window.open(url)
  }));
}

function Sponsors() {
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Title, {
    center: true
  }, /*#__PURE__*/React.createElement("a", {
    className: 'anchor',
    id: 'sponsors'
  }, "Sponsors")), /*#__PURE__*/React.createElement(Grid, {
    style: ""
  }, /*#__PURE__*/React.createElement(SponsorCell, {
    alt: 'Microsoft Logo',
    src: '/microsoft-branding.png',
    span: 6,
    spanTablet: 8,
    url: 'https://www.microsoft.com',
    width: "24rem"
  }), /*#__PURE__*/React.createElement(SponsorCell, {
    alt: 'Cryptonomic Logo',
    src: '/supporters/cryptonomic.png',
    span: 6,
    spanTablet: 8,
    url: 'https://cryptonomic.tech/',
    width: "24rem"
  })), /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(SponsorCell, {
    alt: 'Ey Logo',
    src: '/supporters/ey.png',
    url: 'https://www.ey.com/'
  }), /*#__PURE__*/React.createElement(SponsorCell, {
    alt: 'Amazon Logo',
    src: '/supporters/aws.png',
    url: 'https://aws.com',
    width: '9rem'
  }), /*#__PURE__*/React.createElement(SponsorCell, {
    alt: 'Ethereum Logo',
    src: '/ethereum-branding.png',
    url: 'https://ethereum.org',
    width: '9rem'
  }), /*#__PURE__*/React.createElement(SponsorCell, {
    alt: 'Citi Logo',
    src: '/supporters/citi.png',
    url: 'https://www.citigroup.com/citi/',
    width: '7rem'
  }), /*#__PURE__*/React.createElement(SponsorCell, {
    alt: 'Gemini Logo',
    src: '/supporters/gemini.png',
    url: 'https://gemini.com/',
    width: '9rem'
  }), /*#__PURE__*/React.createElement(SponsorCell, {
    alt: 'Cisco Logo',
    src: '/supporters/cisco.png',
    url: 'https://cisco.com/',
    width: '10rem'
  }), /*#__PURE__*/React.createElement(SponsorCell, {
    alt: 'Trail of Bits Logo',
    src: '/supporters/trail-of-bits.png',
    url: 'https://www.trailofbits.com/',
    width: '9rem'
  }), /*#__PURE__*/React.createElement(SponsorCell, {
    alt: 'Kadena Logo',
    src: '/supporters/kadena.png',
    url: 'https://www.kadena.io/',
    width: '9rem'
  })), /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(SponsorCell, {
    alt: 'Hack Club Bank Logo',
    src: '/hack-club-branding.png',
    url: 'https://hackclub.com/bank/',
    width: '11rem',
    span: 6,
    spanTablet: 8
  }), /*#__PURE__*/React.createElement(SponsorCell, {
    alt: 'Hack Club Bank Logo',
    src: '/mit-sandbox.png',
    url: 'http://sandbox.mit.edu/',
    width: '11rem',
    span: 6,
    spanTablet: 8
  })), /*#__PURE__*/React.createElement(Title, {
    center: true
  }, "Community Partners"), /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(GridCell, {
    span: 4,
    className: ['desktop-only']
  }), /*#__PURE__*/React.createElement(SponsorCell, {
    alt: "AnitaB Logo",
    url: 'https://anitab.org/',
    src: '/supporters/anita_b.png',
    width: "12rem",
    span: 4
  })), /*#__PURE__*/React.createElement(Title, {
    center: true
  }, "Travel Sponsors"), /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(GridCell, {
    span: 2,
    className: ['desktop-only']
  }), /*#__PURE__*/React.createElement(SponsorCell, {
    alt: "MIT Entrepreneurship Logo",
    url: 'https://entrepreneurship.mit.edu/',
    src: '/supporters/martin-trust.png',
    width: "13rem"
  }), /*#__PURE__*/React.createElement(SponsorCell, {
    alt: "Ben Logo",
    url: 'https://blockchainedu.org/',
    src: '/supporters/ben_square_logo.png',
    width: "9rem"
  }), /*#__PURE__*/React.createElement(SponsorCell, {
    alt: "Execute Big Logo",
    url: 'https://executebig.org/',
    src: '/supporters/executebig.svg',
    width: "13rem"
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("b", null, "If you are interested in sponsoring/partnering with us for the hackathon, please email us at", ' ', /*#__PURE__*/React.createElement("a", {
    href: "mailto: hackathon@blockchainsforschools.org!"
  }, "hackathon@blockchainsforschools.org"))));
}

function Venue() {
  const venueImageStyles = {
    maxWidth: '100%',
    height: '100%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '1.5rem'
  };
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Title, {
    center: true
  }, /*#__PURE__*/React.createElement("a", {
    className: 'anchor',
    id: 'venue'
  }, "Venue")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "Our venue is located at Microsoft Times Square (11 Times Square, New York, NY 10036).")), /*#__PURE__*/React.createElement("p", null, "Located in the heart of NYC and right across from the Port Authority Bus Terminal and the Times Square MTA station, Microsoft Times Square offers a modern and well-equipped hacking space that is easily accessible from all corners of NYC. The commitment of Microsoft Reactor, the overlying organization, to hacker and developer culture as well as diversity and inclusivity cemented this as our choice as a venue to host the hackathon."), /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(GridCell, {
    span: 6,
    spanTablet: 8,
    style: {
      height: '24rem'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "/venue.jpg",
    style: venueImageStyles,
    alt: "Venue Picture"
  })), /*#__PURE__*/React.createElement(GridCell, {
    span: 6,
    spanTablet: 8,
    style: {
      height: '24rem'
    }
  }, /*#__PURE__*/React.createElement(VenueMap, null))));
}

function VenueMap() {
  return /*#__PURE__*/React.createElement("div", {
    id: "map-container",
    className: "z-depth-1-half map-container"
  }, /*#__PURE__*/React.createElement("iframe", {
    src: "https://maps.google.com/maps?q=microsoft%20times%20square&t=&z=13&ie=UTF8&iwloc=&output=embed",
    frameBorder: "0",
    allowFullScreen: true
  }));
}

function Schedule() {
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Title, {
    center: true
  }, /*#__PURE__*/React.createElement("a", {
    className: 'anchor',
    id: 'schedule'
  }, "Schedule")), /*#__PURE__*/React.createElement("p", {
    className: "text-center"
  }, "TBD! We will release the schedule closer to the hackathon date."));
}

function QuestionBox({
  question,
  answer
}) {
  const [open, setOpen] = React.useState(false);
  const questionStyles = {
    border: 'solid 1px grey',
    position: 'relative',
    padding: '1rem',
    cursor: 'pointer'
  };
  const iconStyles = {
    position: 'absolute',
    right: '1rem'
  };
  const answerStyles = {
    transition: 'height ease-in 1s',
    height: open ? 'fit-content' : '0px',
    overflow: 'hidden',
    border: 'solid 1px grey',
    padding: open ? '1rem' : 'unset'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: questionStyles,
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("a", null, /*#__PURE__*/React.createElement("b", null, question)), /*#__PURE__*/React.createElement("i", {
    style: iconStyles,
    className: "material-icons"
  }, "arrow_drop_", open ? 'up' : 'down')), /*#__PURE__*/React.createElement("p", {
    style: answerStyles
  }, answer));
}

function FAQs() {
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Title, {
    center: true
  }, /*#__PURE__*/React.createElement("a", {
    className: 'anchor',
    id: 'faqs'
  }, "FAQs")), /*#__PURE__*/React.createElement(QuestionBox, {
    question: `What is a hackathon?`,
    answer: /*#__PURE__*/React.createElement("span", null, "A hackathon is a gathering where you can come together with other engineers, programmers, and cool people to turn your ideas into a real project in 24 hours. You take care of hacking, programming, creativity, and having a good time. We provide the venue, mentors, fun activities, speakers, workshops, food, friends, and almost everything you\u2019ll ever need.", ' ')
  }), /*#__PURE__*/React.createElement(QuestionBox, {
    question: `Who can participate in B4H?`,
    answer: /*#__PURE__*/React.createElement("span", null, "Anyone enrolled as a student can attend! (That includes both high school and college students!) Students with an interest in blockchain technology are highly encouraged to apply! Whether you\u2019re a beginner or experienced, this is the hackathon for you!", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "If you\u2019re a beginner, don\u2019t worry! We have you covered (see below).")
  }), /*#__PURE__*/React.createElement(QuestionBox, {
    question: `What if I don’t understand blockchain technology or know how to develop applications using it?`,
    answer: /*#__PURE__*/React.createElement("span", null, "Don\u2019t worry! We will be having extended", ' ', /*#__PURE__*/React.createElement("b", null, "3-hour workshops"), " at the start of the hackathon presented by our sponsors for students who don\u2019t understand blockchain. These workshops will walk through the technology, what it\u2019s used for, and how to develop with it! Additionally, professional blockchain software engineers will be onsite to assist with any questions you might have! All of our mentors will be professionals with experience in their field to ensure the best-quality advice and assistance.")
  }), /*#__PURE__*/React.createElement(QuestionBox, {
    question: `What are the hackathon challenges like?`,
    answer: /*#__PURE__*/React.createElement("span", null, "There will be two categories of challenge \u2014 the General Challenges and the Sponsor Challenges. The General Challenges will be broken up into a High School and College circuit (high school teams participate in the High School circuit, and college teams participate in the College circuit); the Challenges for these include the Best Hack, Second Best Hack, etc. Note that to qualify for this Challenge, a team submission must use and elaborate on the blockchain component of their application. Up to $2,000 can be won from these Challenges!", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "The Sponsor Challenges are challenges put forward by sponsors; usually these including using a sponsor\u2019s platform (e.g. Ethereum/Solidity) to solve problems in an industry vertical (verticals include fintech, healthcare, environmentalism, etc.). Up to $1,000 can be won from these Challenges! You can submit to as many challenges as you like.")
  }), /*#__PURE__*/React.createElement(QuestionBox, {
    question: `What if I don’t have a team?`,
    answer: /*#__PURE__*/React.createElement("span", null, "Don\u2019t worry! We\u2019ll host teambuilding sessions before the extended workshops start.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "Please note a college team is defined as a team with at least one (1) college student on it, and teams whose members are all high school students constitute as a high school team."))
  }), /*#__PURE__*/React.createElement(QuestionBox, {
    question: `What is the application deadline?`,
    answer: /*#__PURE__*/React.createElement("span", null, "We actually have three application rounds: Early, Regular, and Late! Each one comes with its own perks (for example, all Early applicants are ", /*#__PURE__*/React.createElement("b", null, "guaranteed"), ' ', "to be reimbursed up to $50). The deadlines are below:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Early: 3/29/20", /*#__PURE__*/React.createElement("br", null), "Regular: 4/26/20", /*#__PURE__*/React.createElement("br", null), "Late: 5/10/20")
  }), /*#__PURE__*/React.createElement(QuestionBox, {
    question: `How much does B4H cost?`,
    answer: /*#__PURE__*/React.createElement("span", null, "Absolutely nothing on your end! We provide food, swag, workspace, and WiFi for your entire 24 hours. Not only will we cover you for the weekend,", ' ', /*#__PURE__*/React.createElement("b", null, "we can even help some people cover travel."), " That\u2019s right! Here at B4H we want to make things as accessible as possible for those who need it. For more info, see the FAQ below!")
  }), /*#__PURE__*/React.createElement(QuestionBox, {
    question: `Will you be offering travel reimbursements?`,
    answer: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "If you apply through Early, you qualify for up to $50 in travel reimbursement if you are outside of NYC!"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Here at B4H, one of our missions is to support minorities in tech with their goals. While we can\u2019t guarantee reimbursements for everyone if you are applying through our Regular or Late round, we will be offering some reimbursements. Please indicate that you need travel reimbursement in your application and answer the questions!", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "For our other application rounds, we will be considering factors such as family income and demographic underrepresentation, so low income students or underrepresented minorities are especially encouraged to apply. We will try to accommodate everyone with at least partial reimbursement if they are outside of the NYC area, subject to a sliding scale.", ' '), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "For high school students, we\u2019re happy to announce we\u2019ve partnered with ", /*#__PURE__*/React.createElement("b", null, "Execute Big"), " to provide travel reimbursements! Once you fill out the form and we determine you\u2019re eligible, your information be passed on to them for consideration (if you apply through Regular or Late)! If you are accepted, congratulations! You\u2019ll be covered at least in part by Execute Big. If you aren\u2019t accepted, you will then be considered for reimbursement by our team.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "For college students, you will be considered for reimbursement by our team. Stay tuned \u2014 we\u2019re working out a partnership for college student reimbursements as well!")
  }), /*#__PURE__*/React.createElement(QuestionBox, {
    question: `What should I bring?`,
    answer: /*#__PURE__*/React.createElement("span", null, "Bring a photo ID, your laptop and charger, a change of clothes, toiletries, a sleeping bag/blanket, your hacker setup, and yourself!")
  }), /*#__PURE__*/React.createElement(QuestionBox, {
    question: `What if I don't have any coding or hacking experience?`,
    answer: /*#__PURE__*/React.createElement("span", null, "B4H is here to help! During the hackathon, we have multiple workshops at the start of the hackathon, and professional mentors to help you throughout your stay. No prior experience is necessary! Not only do we want you to be able to build something incredible, we\u2019re preparing individuals without blockchain experience via our workshop sequences before our hackathon!")
  }), /*#__PURE__*/React.createElement(QuestionBox, {
    question: `Have more questions?`,
    answer: /*#__PURE__*/React.createElement("span", null, "Email our extremely helpful team at", ' ', /*#__PURE__*/React.createElement("a", {
      href: "mailto:hackathon@blockchainsforschools.org"
    }, "hackathon@blockchainsforschools.org"))
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('content'));