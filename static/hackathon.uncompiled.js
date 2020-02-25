
function App() {
	return (
		<div>
			<About/>
			<Sponsors/>
			<Venue/>
			<Schedule/>
			<FAQs/>
			<br/>
		</div>
	)
}

function Container({children}){
	return (
		<div className={["content-container"]}>
			{children}
		</div>
	)
}

function Title({children, center}){
	const styles = {
		fontFamily: `'Red Hat Display', sans-serif`,
		color: "#4cbb85",
		fontSize: "2.5rem",
		fontWeight: 700,
		marginTop: "2rem",
		marginBottom: "1.5rem"
	};

	if(center)
		styles.textAlign = "center";

	return (
		<h2 style={styles} >
			{children}
		</h2>
	)
}

function About() {
	return (
		<Container>
			<Title center>About</Title>
			<p>
				Blockchains4Hacks is one of the first introductory blockchain-focused hackathons open to high school and college students. For 24 hours, students will learn about ways to integrate blockchain into their applications, hacking away at challenges, and building applications that integrate those services. We plan to host workshops leading up to the hackathon, allowing participants to immerse themselves in blockchain before building their projects.
			</p>

			<p>
				In our continued commitment and support for diversity, we plan to offer travel reimbursements for students who are not located in NYC. We also plan to set funds aside specifically for hackers whose backgrounds are commonly underrepresented in the tech industry, in addition to low income students.
			</p>

			<p>
				Our hope is that students will walk away with a deeper knowledge of blockchain as well as firsthand experience on how to use the technology. We also hope that the projects created at this hackathon will blossom and continue even after B4H 2020 is over.
			</p>
		</Container>
	)
}

function Grid({children}){
	return (
		<div className="mdc-layout-grid">
			<div className="mdc-layout-grid__inner">
				{children}
			</div>
		</div>
	)
}

function GridCell({span, spanTablet, children, style, className}){
	const classes = ["mdc-layout-grid__cell--span-" + (span || 4)];

	if(className)
		classes.push(...className);

	if(spanTablet)
		classes.push(`mdc-layout-grid__cell--span-${spanTablet}-tablet`);

	return (
		<div className={classes.join(" ")} style={style}>
			{children}
		</div>
	)
}

function SponsorCell({alt, src, span, spanTablet, url, width}){
	const imageStyles = {
		maxWidth: "100%",
		width,
		height: "100%",
		objectFit: "contain",
		display: "block",
		marginLeft: "auto",
		marginRight: "auto"
	};

	const cellStyles = {
		height: "10rem"
	};

	return (
		<GridCell span={span} spanTablet={spanTablet} style={cellStyles}>
			<img style={imageStyles} alt={alt} src={src} onClick={() => window.open(url)}/>
		</GridCell>
	)
}

function Sponsors(){

	return (
		<Container>
			<Title center>Sponsors</Title>
			<Grid style="">
				<SponsorCell
					alt={"Microsoft Logo"}
					src={"/microsoft-branding.png"}
					span={6}
					spanTablet={8}
					url={"https://www.microsoft.com"}
					width="24rem"
				/>

				<SponsorCell
					alt={"Cryptonomic Logo"}
					src={"/supporters/cryptonomic.png"}
					span={6}
					spanTablet={8}
					url={"https://cryptonomic.tech/"}
					width="24rem"
				/>
			</Grid>
			<Grid>
				<SponsorCell
					alt={"Ey Logo"}
					src={"/supporters/ey.png"}
					url={"https://www.ey.com/"}
				/>

				<SponsorCell
					alt={"Ethereum Logo"}
					src={"/ethereum-branding.png"}
					url={"https://ethereum.org"}
					width={"9rem"}
				/>

				<SponsorCell
					alt={"Citi Logo"}
					src={"/supporters/citi.png"}
					url={"https://www.citigroup.com/citi/"}
					width={"7rem"}
				/>

				<SponsorCell
					alt={"Gemini Logo"}
					src={"/supporters/gemini.png"}
					url={"https://gemini.com/"}
					width={"9rem"}
				/>

				<SponsorCell
					alt={"Trail of Bits Logo"}
					src={"/supporters/trail-of-bits.png"}
					url={"https://www.trailofbits.com/"}
					width={"9rem"}
				/>

				<SponsorCell
					alt={"Kadena Logo"}
					src={"/supporters/kadena.png"}
					url={"https://www.kadena.io/"}
					width={"9rem"}
				/>

				<SponsorCell
					alt={"Hack Club Bank Logo"}
					src={"/hack-club-branding.png"}
					url={"https://hackclub.com/bank/"}
					width={"11rem"}
				/>

			</Grid>

			<Title center>Travel Sponsors</Title>
			<Grid>
				<GridCell span={2} className={["desktop-only"]} />
				<SponsorCell
					alt="Ben Logo"
					url={"https://blockchainedu.org/"}
					src={"/supporters/ben_square_logo.png"}
					width="9rem"
				/>

				<SponsorCell
					alt="Execute Big Logo"
					url={"https://executebig.org/"}
					src={"/supporters/executebig.svg"}
					width="13rem"
				/>
			</Grid>
			<p className="text-center">
				<b>
					If you are interested in sponsoring/partnering with us for the hackathon, please email us at <a href="mailto: hackathon@blockchainsforschools.org!">hackathon@blockchainsforschools.org</a>
				</b>
			</p>
		</Container>
	)
}

function Venue(){
	const venueImageStyles = {
		maxWidth: "100%",
		height: "100%",
		display: "block",
		marginLeft: "auto",
		marginRight: "auto",
		borderRadius: "1.5rem"
	};
	return (
		<Container>
			<Title center>Venue</Title>
			<p><b>Our venue is located at Microsoft Times Square (11 Times Square, New York, NY 10036).</b></p>
			<p>
				Located in the heart of NYC and right across from the Port Authority Bus Terminal and the Times Square MTA station, Microsoft Times Square offers a modern and well-equipped hacking space that is easily accessible from all corners of NYC. The commitment of Microsoft Reactor, the overlying organization, to hacker and developer culture as well as diversity and inclusivity cemented this as our choice as a venue to host the hackathon.
			</p>
			<Grid>
				<GridCell span={6} spanTablet={8} style={ {height: "24rem"} }>
					<img src="/venue.jpg" style={venueImageStyles} alt="Venue Picture"/>
				</GridCell>

				<GridCell span={6} spanTablet={8} style={ {height: "24rem"} }>
					<VenueMap/>
				</GridCell>
			</Grid>
		</Container>
	)
}

function VenueMap(){
	return (
		<div id="map-container" className="z-depth-1-half map-container">
			<iframe
				src="https://maps.google.com/maps?q=microsoft%20times%20square&t=&z=13&ie=UTF8&iwloc=&output=embed"
				frameBorder="0"
				allowFullScreen
			/>
		</div>
	)
}

function Schedule(){
	return (
		<Container>
			<Title center>Schedule</Title>
			<p className="text-center">TBD! We will release the schedule closer to the hackathon date.</p>
		</Container>
	)
}

function QuestionBox({question, answer}){
	const [open, setOpen] = React.useState(false);

	const questionStyles = {
		border: "solid 1px grey",
		position: "relative",
		padding: "1rem",
		cursor: "pointer"
	};

	const iconStyles = {
		position: "absolute",
		right: "1rem"
	};

	const answerStyles = {
		transition: "height ease-in 1s",
		height: (open ? "fit-content" : "0px"),
		overflow: "hidden",
		border: "solid 1px grey",
		padding: (open ? "1rem" : "unset")
	};


	return (
		<div>
			<div style={questionStyles} onClick={() => setOpen(! open)}>
				<a><b>{question}</b></a>
				<i style={iconStyles} className="material-icons">
					arrow_drop_{open ? "up" : "down"}
				</i>
			</div>
			<p style={answerStyles}>
				{answer}
			</p>
		</div>
	)
}

function FAQs() {
	return (
		<Container>
			<Title center>FAQs</Title>

			<QuestionBox
				question={`What is a hackathon?`}
				answer={<span>A hackathon is a gathering where you can come together with other engineers, programmers, and cool people to turn your ideas into a real project in 24 hours. You take care of hacking, programming, creativity, and having a good time. We provide the venue, mentors, fun activities, speakers, workshops, food, friends, and almost everything you’ll ever need. </span>}
			/>

			<QuestionBox
				question={`Who can participate in B4H?`}
				answer={<span>Anyone enrolled as a student can attend! (That includes both high school and college students!) Students with an interest in blockchain technology are highly encouraged to apply! Whether you’re a beginner or experienced, this is the hackathon for you!
							<br/>
							<br/>

							If you’re a beginner, don’t worry! We have you covered (see below).</span>}
			/>

			<QuestionBox
				question={`What if I don’t understand blockchain technology or know how to develop applications using it?`}
				answer={<span>Don’t worry! We will be having extended <b>3-hour workshops</b> at the start of the hackathon presented by our sponsors for students who don’t understand blockchain. These workshops will walk through the technology, what it’s used for, and how to develop with it! Additionally, professional blockchain software engineers will be onsite to assist with any questions you might have! All of our mentors will be professionals with experience in their field to ensure the best-quality advice and assistance.</span>}
			/>

			<QuestionBox
				question={`What is the application deadline?`}
				answer={<span>
							We actually have three application rounds: Early, Regular, and Late! Each one comes with its own perks (for example, all Early applicants are <b>guaranteed</b> to be reimbursed up to $50). The deadlines are below:
							<br/>
							<br/>

Early: 3/29/20<br/>
Regular: 4/26/20<br/>
							Late: 5/10/20</span>}
			/>

			<QuestionBox
				question={`How much does B4H cost?`}
				answer={<span>Absolutely nothing on your end!  We provide food, swag, workspace, and WiFi for your entire 24 hours. Not only will we cover you for the weekend, <b>we can even help some people cover travel.</b> That’s right! Here at B4H we want to make things as accessible as possible for those who need it. For more info, see the FAQ below!</span>}
			/>

			<QuestionBox
				question={`Will you be offering travel reimbursements?`}
				answer={<span>Here at B4H, one of our missions is to support minorities in tech with their goals. While we can’t guarantee reimbursements for everyone if you are applying through our Regular or Late round, we will be offering some reimbursements.  Please indicate that you need travel reimbursement in your application and answer the questions!
							<br/>
							<br/>

						<b>For our other application rounds, we will be considering factors such as family income and demographic underrepresentation, so low income students or underrepresented minorities are especially encouraged to apply.  We will try to accommodate everyone with at least partial reimbursement if they are outside of the NYC area, subject to a sliding scale. </b>
							<br/>
							<br/>

For high school students, we’re happy to announce we’ve partnered with <b>Execute Big</b> to provide travel reimbursements! Once you fill out the form and we determine you’re eligible, your information be passed on to them for consideration (if you apply through Regular or Late)! If you are accepted, congratulations! You’ll be covered at least in part by Execute Big. If you aren’t accepted, you will then be considered for reimbursement by our team.
							<br/>
							<br/>

For college students, you will be considered for reimbursement by our team. Stay tuned — we’re working out a partnership for college student reimbursements as well!
						</span>}
			/>

			<QuestionBox
				question={`What should I bring?`}
				answer={<span>Bring a photo ID, your laptop and charger, a change of clothes, toiletries, a sleeping bag/blanket, your hacker setup, and yourself!</span>}
			/>

			<QuestionBox
				question={`What if I don't have any coding or hacking experience?`}
				answer={<span>B4H is here to help! During the hackathon, we have multiple workshops at the start of the hackathon, and professional mentors to help you throughout your stay. No prior experience is necessary! Not only do we want you to be able to build something incredible, we’re preparing individuals without blockchain experience via our workshop sequences before our hackathon!</span>}
			/>

			<QuestionBox
				question={`Have more questions?`}
				answer={<span>Email our extremely helpful team at <a href="mailto:hackathon@blockchainsforschools.org">hackathon@blockchainsforschools.org</a></span>}
			/>

		</Container>
	)
}

ReactDOM.render(<App />, document.getElementById("content"));