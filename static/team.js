function App() {
	return (
		<div
			style={{
				padding: '1rem 0.5rem'
			}}
		>
			<h1
				style={{
					fontSize: '2.5rem'
				}}
			>
				Meet The Team
			</h1>

			<MemberCard />
		</div>
	);
}

function MemberCard({ name, picture, funFact, blurb, school, position }) {
	const [showBlurb, setShowBlurb] = React.useState(false);

	return (
		<div
			style={{
				width: '300px',
				border: '1px solid rgba(0, 0, 0, 0)',
				borderRadius: '5px',
				position: 'relative'
			}}
		>
			<div
				style={{
					textAlign: 'center',
					position: 'absolute',
					width: '100%'
				}}
			>
				<img
					src="/team/ahmed_pic.jpg"
					alt={'Ahmed Sultan'}
					style={{
						borderRadius: '50%',
						width: '120px',
						height: '120px',
						objectFit: 'cover',
						border: '10px solid white'
					}}
				/>
			</div>

			<div
				style={{
					width: '100%',
					border: '1px solid rgba(0, 0, 0, 0.1)',
					borderRadius: '10px',
					marginTop: '60px',
					padding: '0.5rem',
					paddingTop: '60px'
				}}
			>
				<div style={{ textAlign: 'center' }}>
					<h3 style={{ fontSize: 20 }}>Ahmed Sultan</h3>
					<p style={{ fontWeight: 300, fontSize: 12 }}>
						Head of Design
						<br />
						SUNY Binghamton
					</p>
					<p style={{ fontSize: 14, fontWeight: 300 }}>
						Ahmed plays Super Smash Bros. Ultimate competitively
					</p>
					{showBlurb && (
						<p style={{ fontSize: 12, fontWeight: 300 }}>
							Ahmed has a wide variety of interests—ranging from
							computer science and technology, to finance and
							economics, to design and even international
							relations—but joined the Blockchains For Schools
							family in order to learn more about blockchain
							technology, which he feels is a field with so much
							potential. Currently serving as the Head of Design
							for BFS, Ahmed is eager to continue working and
							learning more about blockchain while helping the
							organization grow. Outside of BFS, Ahmed is the
							Secretary-General of his school's Model UN team, an
							editor for the school newspaper, and a director for
							StuyHacks.,
						</p>
					)}

					{showBlurb ? (
						<p
							style={{
								color: 'red',
								fontSize: 13,
								fontWeight: 300,
								textDecoration: 'underline',
								cursor: 'pointer'
							}}
							onClick={() => setShowBlurb(false)}
						>
							Show Less
						</p>
					) : (
						<p
							style={{
								color: 'red',
								fontSize: 13,
								fontWeight: 300,
								textDecoration: 'underline',
								cursor: 'pointer'
							}}
							onClick={() => setShowBlurb(true)}
						>
							Show More
						</p>
					)}
				</div>
			</div>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
