// Draft Datenschutzerklärung. Written against what the site verifiably does:
// no cookies are set (checked on both the production and preview responses),
// fonts are self-hosted, and there is no analytics of any kind. Anything that
// could not be verified is marked with REVIEW so it is not silently asserted.
//
// PENDING QUALIFIED LEGAL REVIEW before this page is indexed or linked as final.

import { site } from './site';

export interface LegalSection {
  id: string;
  navLabel: string;
  heading: string;
  /** Paragraphs; a nested array renders as a bulleted list. */
  blocks: (string | string[])[];
  /** Opens a wider break above this section, marking a shift in subject matter. */
  breakBefore?: boolean;
}

export const sections: LegalSection[] = [
  {
    id: 'verantwortlicher',
    navLabel: 'Verantwortlicher',
    heading: '1. Verantwortlicher',
    blocks: [
      'Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:',
      `${site.founder}<br>${site.legalName} (Einzelunternehmen)<br>${site.address.street}<br>${site.address.postalCode} ${site.address.cityDe}<br>${site.address.countryDe}`,
      `Telefon: ${site.phone}<br>E-Mail: ${site.email}`,
      'Ein Datenschutzbeauftragter ist nicht bestellt, da die Voraussetzungen des Art. 37 DSGVO in Verbindung mit § 38 BDSG nicht vorliegen.',
    ],
  },
  {
    id: 'allgemeines',
    navLabel: 'Allgemeine Hinweise',
    heading: '2. Allgemeine Hinweise zur Datenverarbeitung',
    blocks: [
      'Wir verarbeiten personenbezogene Daten nur, soweit dies für die Bereitstellung dieser Website und für die von Ihnen gewünschte Kontaktaufnahme erforderlich ist.',
      'Diese Website ist eine reine Informationsseite. Sie enthält kein Kontaktformular, keine Registrierung, keinen Login und keinen Bestellvorgang. Es werden keine Daten zu Werbezwecken verarbeitet, kein Profiling betrieben und keine automatisierten Entscheidungen im Sinne des Art. 22 DSGVO getroffen.',
      'Rechtsgrundlagen der Verarbeitung sind, je nach Vorgang, Art. 6 Abs. 1 lit. b DSGVO (Vertrag oder vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und funktionsfähigen Betrieb der Website).',
    ],
  },
  {
    id: 'hosting',
    navLabel: 'Hosting',
    heading: '3. Hosting',
    blocks: [
      'Diese Website wird als statische Website über die Plattform Cloudflare Workers bereitgestellt. Anbieter ist die Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA, gemeinsam mit der Cloudflare Germany GmbH, Rosental 7, 80331 München.',
      'Cloudflare verarbeitet die Daten in unserem Auftrag als Auftragsverarbeiter im Sinne des Art. 28 DSGVO. Beim Aufruf der Website werden die Inhalte über das weltweite Netzwerk von Cloudflare ausgeliefert; dabei kann es zu einer Übermittlung personenbezogener Daten, insbesondere Ihrer IP-Adresse, in Drittländer einschließlich der USA kommen.',
      'REVIEW: Rechtsgrundlage der Drittlandsübermittlung bitte vor Veröffentlichung bestätigen (EU-US Data Privacy Framework und/oder Standardvertragsklauseln nach Art. 46 Abs. 2 lit. c DSGVO) und den abgeschlossenen Auftragsverarbeitungsvertrag benennen.',
      'Rechtsgrundlage für den Einsatz ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in einer sicheren, performanten und ausfallsicheren Bereitstellung dieser Website.',
    ],
  },
  {
    id: 'logfiles',
    navLabel: 'Server-Logfiles',
    heading: '4. Server-Logfiles',
    blocks: [
      'Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch Informationen erfasst, die Ihr Browser übermittelt. Dies sind in der Regel:',
      [
        'IP-Adresse des anfragenden Endgeräts',
        'Datum und Uhrzeit des Zugriffs',
        'Name und URL der abgerufenen Datei',
        'übertragene Datenmenge und Meldung über den Erfolg des Abrufs',
        'verwendeter Browsertyp und dessen Version sowie das Betriebssystem',
        'zuvor besuchte Seite (Referrer), sofern übermittelt',
      ],
      'Diese Daten sind für uns keinem konkreten Nutzer zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zum Zweck der Auslieferung der Website sowie zur Gewährleistung von Stabilität und Sicherheit.',
      'Darüber hinaus übermittelt Ihr Browser über den Standard Network Error Logging technische Fehlerberichte an Cloudflare, wenn beim Abruf der Website ein Netzwerkfehler auftritt. Erfolgreiche Abrufe werden dabei nicht gemeldet.',
      'REVIEW: Konkrete Speicherdauer der Logdaten beim Hosting-Anbieter bitte ergänzen.',
    ],
  },
  {
    id: 'cookies',
    navLabel: 'Cookies',
    heading: '5. Cookies',
    blocks: [
      'Diese Website setzt keine Cookies und verwendet keine vergleichbaren Technologien wie Local Storage oder Session Storage, um Informationen auf Ihrem Endgerät zu speichern oder auszulesen.',
      'Eine Einwilligung nach § 25 Abs. 1 TDDDG ist daher nicht erforderlich. Aus diesem Grund wird auf dieser Website kein Cookie-Banner angezeigt.',
    ],
  },
  {
    id: 'kontakt',
    navLabel: 'Kontaktaufnahme',
    heading: '6. Kontaktaufnahme per E-Mail und Telefon',
    blocks: [
      'Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden die von Ihnen mitgeteilten Daten, einschließlich Ihrer Kontaktdaten und des Inhalts Ihrer Anfrage, bei uns gespeichert, um Ihre Anfrage zu bearbeiten.',
      'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage auf den Abschluss oder die Durchführung eines Vertrages gerichtet ist. In allen übrigen Fällen ist Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten Interesses an der Beantwortung von Anfragen.',
      'Wir geben diese Daten nicht ohne Ihre Einwilligung weiter. Sie verbleiben bei uns, bis der Zweck der Speicherung entfällt, Sie uns zur Löschung auffordern oder gesetzliche Aufbewahrungsfristen dem entgegenstehen.',
    ],
  },
  {
    id: 'zeeg',
    navLabel: 'Terminbuchung',
    heading: '7. Terminbuchung über Zeeg',
    blocks: [
      'Für die Vereinbarung von Gesprächsterminen verlinken wir auf den externen Dienst Zeeg (zeeg.me). Die Buchungsseite ist nicht in diese Website eingebettet; es werden weder Skripte noch iFrames von Zeeg auf dieser Website geladen.',
      'Erst wenn Sie den Link aktiv anklicken, verlassen Sie diese Website und rufen die Seiten des Anbieters auf. Ab diesem Zeitpunkt ist der Anbieter für die Verarbeitung Ihrer Daten verantwortlich. Die von Ihnen dort eingegebenen Angaben, typischerweise Name, E-Mail-Adresse, gewünschter Termin und Zeitzone sowie gegebenenfalls eine Nachricht, werden an uns übermittelt, damit wir den Termin wahrnehmen können.',
      'Rechtsgrundlage für die Terminvereinbarung ist Art. 6 Abs. 1 lit. b DSGVO.',
      'REVIEW: Vollständige Firmierung, Anschrift und Sitzland des Zeeg-Anbieters, Status des Auftragsverarbeitungsvertrags sowie Hosting-Standort bitte vor Veröffentlichung ergänzen. Diese Angaben liessen sich nicht zuverlässig ermitteln und wurden bewusst offengelassen.',
    ],
  },
  {
    id: 'externe-ressourcen',
    navLabel: 'Externe Ressourcen',
    heading: '8. Externe Schriftarten und Ressourcen',
    blocks: [
      'Die auf dieser Website verwendeten Schriftarten werden ausschliesslich lokal von unserem eigenen Server ausgeliefert. Es besteht keine Verbindung zu Google Fonts oder einem anderen Content Delivery Network für Schriften. Beim Aufruf dieser Website wird dadurch keine IP-Adresse an einen Schriftanbieter übertragen.',
      'Die Website bindet darüber hinaus keine externen Skripte, Karten, Videos, Social-Media-Plugins oder sonstigen Inhalte Dritter ein.',
      'Die Seite enthält Links zu externen Websites, insbesondere zu LinkedIn und zum Terminbuchungsdienst. Diese Links werden erst durch Ihren Klick aktiv. Auf die Datenverarbeitung durch die verlinkten Anbieter haben wir keinen Einfluss; es gelten deren Datenschutzbestimmungen.',
    ],
  },
  {
    id: 'webanalyse',
    navLabel: 'Webanalyse',
    heading: '9. Webanalyse',
    blocks: [
      'Diese Website verwendet keine Webanalyse-Dienste. Es findet keine Reichweitenmessung, kein Tracking, kein Retargeting und keine Erstellung von Nutzungsprofilen statt.',
      'Es werden insbesondere weder Google Analytics noch vergleichbare Dienste eingesetzt.',
    ],
  },
  {
    id: 'rechte',
    navLabel: 'Betroffenenrechte',
    heading: '10. Ihre Rechte als betroffene Person',
    // Sections 1 to 9 describe what is processed; 10 to 12 cover the reader's
    // rights, retention and changes. The wider break marks that shift.
    breakBefore: true,
    blocks: [
      'Ihnen stehen gegenüber uns hinsichtlich der Sie betreffenden personenbezogenen Daten die folgenden Rechte zu:',
      [
        'Recht auf Auskunft (Art. 15 DSGVO)',
        'Recht auf Berichtigung (Art. 16 DSGVO)',
        'Recht auf Löschung (Art. 17 DSGVO)',
        'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)',
        'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)',
        'Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)',
      ],
      'Soweit die Verarbeitung auf einer Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Die Rechtmässigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt davon unberührt (Art. 7 Abs. 3 DSGVO).',
      'Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die oben genannten Kontaktdaten.',
      'Unbeschadet anderweitiger Rechtsbehelfe steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu (Art. 77 DSGVO). Die für uns zuständige Aufsichtsbehörde ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 27, 91522 Ansbach.',
    ],
  },
  {
    id: 'speicherdauer',
    navLabel: 'Speicherdauer',
    heading: '11. Speicherdauer',
    blocks: [
      'Sofern in dieser Erklärung keine speziellere Speicherdauer genannt ist, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck der Verarbeitung entfällt.',
      'Machen Sie ein berechtigtes Löschersuchen geltend oder widerrufen Sie eine Einwilligung, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung haben. Im letztgenannten Fall erfolgt die Löschung, nachdem diese Gründe entfallen sind, insbesondere nach Ablauf handels- und steuerrechtlicher Aufbewahrungsfristen.',
    ],
  },
  {
    id: 'aenderungen',
    navLabel: 'Änderungen',
    heading: '12. Änderungen dieser Datenschutzerklärung',
    blocks: [
      'Wir passen diese Datenschutzerklärung an, sobald Änderungen an der Website oder an den eingesetzten Diensten dies erforderlich machen oder sich die Rechtslage ändert. Es gilt jeweils die auf dieser Seite veröffentlichte Fassung.',
    ],
  },
];
