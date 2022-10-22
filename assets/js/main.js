window.addEventListener('DOMContentLoaded', () => {
	const headHeight = document.querySelector(".ds-header").offsetHeight;
	document.querySelector(".ds-banner,.ds-main-section").style.marginTop = `${headHeight}px`;

	window.addEventListener('scroll', () => {
		if (window.scrollY >= 10) {
			document.querySelector(".ds-header").classList.add('ds-fixed-header');
		} else {
			document.querySelector(".ds-header").classList.remove('ds-fixed-header');
		}
	});
});

window.addEventListener('load', () => {

	// obtain plugin
	const cc = initCookieConsent();

	// run plugin with your configuration
	cc.run({
		current_lang: 'de',
		autoclear_cookies: true,                   // default: false
		page_scripts: true,                        // default: false

		// mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
		// delay: 0,                               // default: 0
		// auto_language: '',                      // default: null; could also be 'browser' or 'document'
		// autorun: true,                          // default: true
		// force_consent: false,                   // default: false
		// hide_from_bots: false,                  // default: false
		// remove_cookie_tables: false             // default: false
		// cookie_name: 'cc_cookie',               // default: 'cc_cookie'
		// cookie_expiration: 182,                 // default: 182 (days)
		// cookie_necessary_only_expiration: 182   // default: disabled
		// cookie_domain: location.hostname,       // default: current domain
		// cookie_path: '/',                       // default: root
		// cookie_same_site: 'Lax',                // default: 'Lax'
		// use_rfc_cookie: false,                  // default: false
		// revision: 0,                            // default: 0

		languages: {
			'de': {
				consent_modal: {
					title: 'Wir benutzen Cookies!',
					description: 'Hallo, diese Website verwendet essentielle Cookies, um ihren ordnungsgemäßen Betrieb zu gewährleisten, und Tracking-Cookies, um zu verstehen, wie Sie mit ihr interagieren. Letztere werden nur nach Zustimmung gesetzt werden. <button type="button" data-cc="c-settings" class="cc-link">Lassen Sie mich wählen</button>',
					primary_btn: {
						text: 'Alle akzeptieren',
						role: 'accept_all'              // 'accept_selected' or 'accept_all'
					},
					secondary_btn: {
						text: 'Alle ablehnen',
						role: 'accept_necessary'        // 'settings' or 'accept_necessary'
					}
				},
				settings_modal: {
					title: 'Cookie-Einstellungen',
					save_settings_btn: 'Einstellungen speichern',
					accept_all_btn: 'Alle akzeptieren',
					reject_all_btn: 'Alle ablehnen',
					close_btn_label: 'Schließen',
					cookie_table_headers: [
						{ col1: 'Name' },
						{ col2: 'Domain' },
						{ col3: 'Gültigkeit' },
						{ col4: 'Beschreibung' }
					],
					blocks: [
						{
							title: 'Verwendung von Cookies 📢',
							description: 'Ich verwende Cookies, um die grundlegenden Funktionen der Website zu gewährleisten und um Ihr Online-Erlebnis zu verbessern. Sie können für jede Kategorie wählen, ob Sie sich ein- oder austragen möchten. Für weitere Einzelheiten zu Cookies und anderen sensiblen Daten lesen Sie bitte die vollständige <a href="datenschutz" class="cc-link">Datenschutzerklärung</a>.'
						}, {
							title: 'Streng notwendige Cookies',
							description: 'Diese Cookies sind für das ordnungsgemäße Funktionieren meiner Website unerlässlich. Ohne diese Cookies würde die Website nicht richtig funktionieren',
							toggle: {
								value: 'necessary',
								enabled: true,
								readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
							}
						}, {
							title: 'Leistungs- und Analyse-Cookies',
							description: 'Diese Cookies ermöglichen es der Website, sich an die von Ihnen in der Vergangenheit getroffenen Auswahlen zu erinnern',
							toggle: {
								value: 'analytics',     // your cookie category
								enabled: false,
								readonly: false
							},
							cookie_table: [             // list of all expected cookies
								{
									col1: '^_ga',       // match all cookies starting with "_ga"
									col2: 'google.com',
									col3: '2 years',
									col4: 'description ...',
									is_regex: true
								},
								{
									col1: '_gid',
									col2: 'google.com',
									col3: '1 day',
									col4: 'description ...',
								}
							]
						}, {
							title: 'Cookies für Werbung und Zielgruppenansprache',
							description: 'Diese Cookies sammeln Informationen darüber, wie Sie die Website nutzen, welche Seiten Sie besucht und welche Links Sie angeklickt haben. Alle Daten sind anonymisiert und können nicht verwendet werden, um Sie zu identifizieren',
							toggle: {
								value: 'targeting',
								enabled: false,
								readonly: false
							}
						}, {
							title: 'Weitere Informationen',
							description: 'Bei Fragen zu unserer Richtlinie über Cookies und Ihre Wahlmöglichkeiten wenden Sie sich bitte an uns',
						}
					]
				}
			}
		}
	});
});