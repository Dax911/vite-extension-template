try {
	console.log("hello from devtools");
	chrome.devtools.panels.create(
		"Dev Tools",
		"icon-34.png",
		"devtools_panel.html"
	);
} catch (e) {
	console.error(e);
}
