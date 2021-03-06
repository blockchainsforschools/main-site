const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = process.env.PORT || 3000;
const cluster = require('cluster');

// app.set("view engine", "nunjucks");
app.use(express.static(__dirname + '/static'));

nunjucks.configure(__dirname + '/views', {
	autoescape: true,
	express: app
});

app.get('/', (req, res) => {
	res.render('index.html');
});

app.get('/about', (req, res) => {
	res.send('Will host our nonprofit cause. Will host mission and stuff');
});

app.get('/team', (req, res) => {
	// res.send(
	//	'Will show all team members. Execs first, followed by members. Potential React use here'
	// );
	res.render('team.html');
});

app.get('/announcements', (req, res) => {
	res.send('Will show announcements.');
});

app.get('/blog', (req, res) => {
	res.send('Will show blogs, complete with pictures and stuff.');
});

app.get('/apply', (req, res) => {
	res.render('apply.html');
});
app.get('/hackathon', (req, res) => {
	res.render('hackathon.html');
});

app.get('/apply/:position', (req, res) => {
	let position = req.params.position;
	if (position === 'intern') {
		res.render('summer-intern.html');
	} else if (position === 'mentoring') {
		res.render('mentoring-apply.html');
	} else if (position === 'staff') {
		res.render('staff.html');
	} else {
		res.send(`Page for ${req.params.position} does not exist!`);
	}
});

app.get('/mentorship', (req, res) => {
	res.render('mentorship.html');
});

app.get('/mentorship/:position', (req, res) => {
	let position = req.params.position;
	if (position === 'apply') {
		res.render('mentoring-apply.html');
	} else {
		res.send(`Page for ${req.params.position} does not exist!`);
	}
});

app.get('/summerimmersion/:position', (req, res) => {
	let position = req.params.position;
	if (position == 'apply') {
		res.render('summer-intern.html');
	} else {
		res.send(`Page for ${req.params.position} does not exist!`);
	}
});

app.get('/summerimmersion', (req, res) => {
	res.render('immersion.html');
});

app.get('/chapters', (req, res) => {
	res.render('chapters.html');
});

app.use((req, res, next) => {
	res.status(404).render('404.html');
});

if (Number(process.env.NUM_CLUSTER) && cluster.isMaster) {
	for (let x = 0; x < Number(process.env.NUM_CLUSTER); x++) {
		cluster.fork();
	}
} else {
	app.listen(port, () => console.log(`App running on localhost:${port}`));
}
