const subject = "Statt Wahlkampf und Geschwätz – Geld für Bus und Bahn jetzt!";
const body = `,

während es im Wahlkampf bislang viel um mögliche Koalitionen und Personalfragen geht, wird das Leben weiter teurer. Zum Jahreswechsel ist der Preis für das Deutschlandticket um 18% gestiegen. Für diejenigen, die Anspruch auf das ermäßigte Ticket und ohnehin weniger Geld haben, wurde der Preis sogar um 31% erhöht. Gleichzeitig wird der ÖPNV unzuverlässiger, weil seit Jahren die nötigen Investitionen verschleppt werden und wegen der unattraktiven Arbeitsbedingungen Personal an allen Ecken und Enden fehlt. Obwohl doch immer betont wird, wie wichtig die Mobilitätswende ist, wenn die Klimakrise nicht noch weiter eskalieren soll.

Während viele Menschen also nicht mehr wissen, wie ihnen das Geld bis Monatsende reichen soll und die Klimakrise eskaliert, ist der ÖPNV preislich und qualitativ für immer mehr Menschen keine gute Option. Für die Ausrede, es müsse gespart werden, haben immer weniger Menschen Verständnis. Das Argument, es sei kein Geld da, ist absurd, denkt man an die Unsummen, die in Rüstung und Subventionen für Konzerne fließen.

Ich bitte Sie daher: Statt ins Getöse gegen Geflüchtete einzustimmen, sprechen Sie im Wahlkampf über die realen Probleme der Menschen und setzen Sie sich auch nach der Wahl für sozial gerechte und klimafreundliche Mobilität ein.

Zentrale Bestandteile müssen meiner Meinung nach sein:
• Bezahlbare Mobilität für alle! Die Tickets müssen wieder günstiger, mittelfristig der ÖPNV kostenlos werden.
• Gute Arbeitsbedingungen und faire Löhne für die Angestellten im ÖPNV! Einstellung von zusätzlichem Personal statt Überstunden und Reduzierung des Angebots.
• Investitionen in die Infrastruktur für ein umfangreiches und zuverlässiges Angebot an klimagerechter Mobilität.

Mit freundlichen Grüßen`;

const politicians = [
	["Frau", "Jamila", "Schäfer", "jamila.schaefer@bundestag.de", "Grüne"],
	["Herr", "Anton", "Hofreiter", "anton.hofreiter@bundestag.de", "Grüne"],
	["Frau", "Claudia", "Roth", "claudia.roth@bundestag.de", "Grüne"],
	["Herr", "Sascha", "Müller", "sascha.mueller@bundestag.de", "Grüne"],
	["Frau", "Lisa", "Badum", "lisa.badum@bundestag.de", "Grüne"],
	["Herr", "Karl", "Bär", "karl.baer@bundestag.de", "Grüne"],
	["Frau", "Tina", "Winklmann", "tina.winklmann@bundestag.de", "Grüne"],
	["Herr", "Niklas", "Wagener", "niklas.wagener@bundestag.de", "Grüne"],
	["Frau", "Marlene", "Schönberger", "marlene.schoenberger@bundestag.de", "Grüne"],
	["Herr", "Leon", "Eckert", "leon.eckert@bundestag.de", "Grüne"],
	["Herr", "Martin", "Hagen", "hagen@fdp.de", "FDP"],
	["Frau", "Katja", "Hessel", "katja.hessel@bundestag.de", "FDP"],
	["Frau", "Susanne", "Seehofer", "susanne.seehofer@fdp-bayern.de", "FDP"],
	["Frau", "Karsten", "Klein", "karsten.klein@bundestag.de", "FDP"],
	["Herr", "Daniel", "Föst", "daniel.foest@bundestag.de", "FDP"],
	["Frau", "Nicole", "Bauer", "nicole.bauer@bundestag.de", "FDP"],
	["Herr", "Nils", "Gründer", "nils.gruender@bundestag.de", "FDP"],
	["Herr", "Maximilian", "Funke-Kaiser", "maximilian.funke-kaiser@bundestag.de", "FDP"],
	["Herr", "Muhanad", "Al-Halak", "muhanad.al-halak@bundestag.de", "FDP"],
	["Frau", "Sandra", "Bubendorfer-Licht", "sandra.bubendorfer-licht@bundestag.de", "FDP"],
	["Herr", "Alexander", "Dobrindt", "alexander.dobrindt@bundestag.de", "CSU"],
	["Frau", "Andrea", "Lindholz", "andrea.lindholz@bundestag.de", "CSU"],
	["Herr", "Günther", "Felßner", "gfelssner@web.de", "CSU"],
	["Frau", "Daniela", "Ludwig", "daniela.ludwig@bundestag.de", "CSU"],
	["Herr", "Alois", "Rainer", "alois.rainer@bundestag.de", "CSU"],
	["Frau", "Dorothee", "Bär", "dorothee.baer@bundestag.de", "CSU"],
	["Herr", "Florian", "Hahn", "florian.hahn@bundestag.de", "CSU"],
	["Frau", "Emmi", "Zeulner", "emmi.zeulner@bundestag.de", "CSU"],
	["Herr", "Stephan", "Pilsinger", "stephan.pilsinger@bundestag.de", "CSU"],
	["Frau", "Martina", "Englhardt-Kopf", "martina.englhardt-kopf@bundestag.de", "CSU"],
	["Herr", "Carsten", "Träger", "carsten.traeger@bundestag.de", "SPD"],
	["Frau", "Bärbel", "Kofler", "baerbel.kofler@bundestag.de", "SPD"],
	["Herr", "Johannes", "Schätzl", "johannes.schaetzl@bundestag.de", "SPD"],
	["Frau", "Anette", "Kramme", "anette.kramme@bundestag.de", "SPD"],
	["Herr", "Sebastian", "Roloff", "sebastian.roloff@bundestag.de", "SPD"],
	["Frau", "Sabine", "Dittmar", "sabine.dittmar@bundestag.de", "SPD"],
	["Herr", "Christoph", "Schmid", "christoph.schmid@bundestag.de", "SPD"],
	["Frau", "Carolin", "Wagner", "carolin.wagner@bundestag.de", "SPD"],
	["Herr", "Bernd", "Rützel", "bernd.ruetzel@bundestag.de", "SPD"],
	["Frau", "Gabriela", "Heinrich", "gabriela.heinrich@bundestag.de", "SPD"],
];

function random(min, max) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function updateButton() {
	const politician = politicians[random(0, politicians.length)];

	const title = politician[0];
	const firstname = politician[1];
	const lastname = politician[2];
	const email = politician[3];
	const party = politician[4];
	const buttonText = firstname + " " + lastname + " (" + party + ") schreiben";
	if (document.getElementById("button-label").textContent === buttonText) {
		updateButton();
		return;
	} else {
		document.getElementById("button-label").textContent = buttonText;
	}

	let text;
	let background;
	if (party === "Grüne") {
		text = "#fee000";
		background = "#5c944c";
	} else if (party === "FDP") {
		text = "#FF0078";
		background = "#FFE209";
	} else if (party === "CSU") {
		text = "#ffffff";
		background = "#3984c8";
	} else if (party === "SPD") {
		text = "#ffffff";
		background = "#e30711";
	}

	document.getElementById("button-label").style.color = text;
	document.getElementById("button").style.background = background;

	let mailContent;
	if (title === "Herr") {
		mailContent = "Sehr geehrter Herr " + lastname + body;
	} else {
		mailContent = "Sehr geehrte Frau " + lastname + body;
	}

	document.getElementById("button-link").href
		= "mailto:" + email + "?subject=" + subject + "&body=" + encodeURIComponent(mailContent);
}

window.onload = updateButton;