export function addScript(w, d, s, i) {
	if (w.gtmi) return w.gtm;

	window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});

	var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s);

	j.id = 'hiperf-gtm';
	j.async=true;
	j.src='https://www.googletagmanager.com/gtm.js?id='+`GTM-${i}`;
	f.parentNode.insertBefore(j,f);

	w.gtmi = true;
}