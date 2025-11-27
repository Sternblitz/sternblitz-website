import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Datenschutz = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-20 px-6">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-[#4285F4] font-bold mb-8 hover:underline">
                    <ArrowLeft size={20} /> Zurück zur Startseite
                </Link>

                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200">
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">Datenschutzerklärung</h1>

                    <div className="space-y-8 text-gray-600">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Verantwortlicher</h2>
                            <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
                            <p className="mt-2">
                                Sternblitz LLC<br />
                                30 N Gould St Ste R<br />
                                Sheridan, Wyoming 82801<br />
                                USA
                            </p>
                            <p className="mt-2">Email: info@sternblitz.de</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</h2>

                            <h3 className="font-bold mt-4 mb-2">a) Beim Besuch der Webseite</h3>
                            <p>Beim Aufrufen unserer Webseite www.sternblitz.de werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Webseite gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>IP-Adresse des anfragenden Rechners,</li>
                                <li>Datum und Uhrzeit des Zugriffs,</li>
                                <li>Name und URL der abgerufenen Datei,</li>
                                <li>Webseite, von der aus der Zugriff erfolgt (Referrer-URL),</li>
                                <li>verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.</li>
                            </ul>
                            <p className="mt-4">Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Webseite,</li>
                                <li>Gewährleistung einer komfortablen Nutzung unserer Webseite,</li>
                                <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                                <li>zu weiteren administrativen Zwecken.</li>
                            </ul>
                            <p className="mt-4">Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus den oben aufgelisteten Zwecken zur Datenerhebung. In keinem Fall verwenden wir die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen.</p>

                            <h3 className="font-bold mt-6 mb-2">b) Nutzung unseres Kontaktformulars</h3>
                            <p>Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns über ein auf der Webseite bereitgestelltes Formular Kontakt aufzunehmen. Dabei ist die Angabe einer gültigen E-Mail-Adresse erforderlich, damit wir wissen, von wem die Anfrage stammt und um diese beantworten zu können. Weitere Angaben können freiwillig getätigt werden.</p>
                            <p className="mt-2">Die Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns erfolgt nach Art. 6 Abs. 1 S. 1 lit. a DSGVO auf Grundlage Ihrer freiwillig erteilten Einwilligung.</p>
                            <p className="mt-2">Die für die Benutzung des Kontaktformulars von uns erhobenen personenbezogenen Daten werden nach Erledigung der von Ihnen gestellten Anfrage automatisch gelöscht.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Cookies und ähnliche Technologien</h2>

                            <h3 className="font-bold mt-4 mb-2">a) Allgemeines zu Cookies</h3>
                            <p>Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Seite besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren, Trojaner oder sonstige Schadsoftware.</p>
                            <p className="mt-2">Indem Cookie werden Informationen abgelegt, die sich jeweils im Zusammenhang mit dem spezifisch eingesetzten Endgerät ergeben. Dies bedeutet jedoch nicht, dass wir dadurch unmittelbar Kenntnis von Ihrer Identität erhalten.</p>
                            <p className="mt-2">Der Einsatz von Cookies dient dazu, die Nutzung unseres Angebots für Sie angenehmer zu gestalten. So setzen wir sogenannte Session-Cookies ein, um zu erkennen, dass Sie einzelne Seiten unserer Webseite bereits besucht haben. Diese werden nach Verlassen unserer Seite automatisch gelöscht.</p>
                            <p className="mt-2">Darüber hinaus setzen wir ebenfalls zur Optimierung der Benutzerfreundlichkeit temporäre Cookies ein, die für einen bestimmten festgelegten Zeitraum auf Ihrem Endgerät gespeichert werden. Besuchen Sie unsere Seite erneut, um unsere Dienste in Anspruch zu nehmen, wird automatisch erkannt, dass Sie bereits bei uns waren und welche Eingaben und Einstellungen Sie getätigt haben, um diese nicht noch einmal eingeben zu müssen.</p>
                            <p className="mt-2">Die durch Cookies verarbeiteten Daten sind für die genannten Zwecke zur Wahrung unserer berechtigten Interessen sowie der Dritter nach Art. 6 Abs. 1 S. 1 lit. f DSGVO erforderlich.</p>

                            <h3 className="font-bold mt-6 mb-2">b) Tracking-Technologien</h3>
                            <p>Wir verwenden auf unserer Webseite folgende Tracking-Technologien:</p>

                            <div className="mt-4">
                                <h4 className="font-bold">1. Google Tracking Pixel</h4>
                                <p>Wir setzen Google Analytics bzw. das Google Tracking Pixel ein, um den Besucherverkehr auf unserer Webseite zu analysieren und zu verstehen, wie unsere Nutzer mit unserer Seite interagieren. Dabei wird Ihre IP-Adresse und gegebenenfalls weitere Nutzerdaten an Google übermittelt. Die gewonnenen Informationen werden genutzt, um Reports über die Webseitenaktivitäten zusammenzustellen und um weitere mit der Webseiten- und Internetnutzung verbundene Dienstleistungen zu erbringen.</p>
                                <p className="text-sm mt-1">◦ Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. a DSGVO (Einwilligung).</p>
                                <p className="text-sm">◦ Opt-out: Sie können das Tracking durch Google verhindern, indem Sie ein entsprechendes Browser-Add-On installieren.</p>
                            </div>

                            <div className="mt-4">
                                <h4 className="font-bold">2. Facebook Tracking Pixel (Meta Pixel)</h4>
                                <p>Wir verwenden das Facebook Pixel (Meta Pixel), um die Wirksamkeit unserer Facebook-Werbung zu messen und die Besucheraktivitäten auf unserer Webseite zu verfolgen. Dies ermöglicht uns, gezielt Werbung auf Facebook und Instagram zu schalten und zu überprüfen, wie Nutzer nach der Interaktion mit einer Anzeige auf unserer Webseite agieren.</p>
                                <p className="text-sm mt-1">◦ Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. a DSGVO (Einwilligung).</p>
                                <p className="text-sm">◦ Opt-out: Sie können das Tracking durch Facebook Pixel in den Facebook Werbeeinstellungen deaktivieren.</p>
                            </div>

                            <div className="mt-4">
                                <h4 className="font-bold">3. TikTok Tracking Pixel</h4>
                                <p>Mit dem TikTok Pixel können wir die Leistung unserer TikTok-Werbeanzeigen messen und Nutzeraktionen auf unserer Webseite nachvollziehen. Diese Informationen helfen uns, gezielte Kampagnen zu schalten und deren Erfolg zu messen.</p>
                                <p className="text-sm mt-1">◦ Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. a DSGVO (Einwilligung).</p>
                                <p className="text-sm">◦ Opt-out: Sie können das Tracking durch TikTok Pixel in den TikTok Werbeeinstellungen deaktivieren.</p>
                            </div>

                            <div className="mt-4">
                                <h4 className="font-bold">4. Hotjar</h4>
                                <p>Wir verwenden auf unserer Webseite Hotjar, ein Analyse-Tool der Hotjar Ltd., Dragonara Business Centre, 5th Floor, Dragonara Road, Paceville St Julian’s STJ 3141, Malta.</p>
                                <p>Hotjar ermöglicht uns, das Verhalten der Nutzer (z. B. Klicks, Mausbewegungen, Scrollverhalten) auszuwerten, um unsere Webseite nutzerfreundlicher zu gestalten. Dabei werden Cookies eingesetzt und Informationen wie IP-Adresse (in anonymisierter Form), Gerätetyp, Browserinformationen, Bildschirmgröße und bevorzugte Sprache erfasst.</p>
                                <p className="text-sm mt-1">◦ Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. a DSGVO (Einwilligung).</p>
                                <p className="text-sm">◦ Opt-out: Sie können die Erfassung durch Hotjar jederzeit unter folgendem Link deaktivieren: <a href="https://www.hotjar.com/legal/compliance/opt-out" className="text-blue-600 hover:underline">https://www.hotjar.com/legal/compliance/opt-out</a>.</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Weitergabe von Daten</h2>
                            <p>Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben,</li>
                                <li>die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist,</li>
                                <li>für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht, oder</li>
                                <li>dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Betroffenenrechte</h2>
                            <p>Sie haben das Recht:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-2">
                                <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen. Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die Kategorien der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft ihrer Daten, sofern diese nicht bei uns erhoben wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftigen Informationen zu deren Einzelheiten verlangen;</li>
                                <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
                                <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;</li>
                                <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, soweit die Richtigkeit der Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist, Sie aber deren Löschung ablehnen und wir die Daten nicht mehr benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung eingelegt haben;</li>
                                <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;</li>
                                <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die Zukunft nicht mehr fortführen dürfen und</li>
                                <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Datensicherheit</h2>
                            <p>Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.</p>
                            <p className="mt-2">Die Übertragung Ihrer persönlichen Daten erfolgt verschlüsselt mittels SSL-Technologie (Secure Socket Layer). Sie erkennen die verschlüsselte Übertragung daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
                            <p className="mt-2">Trotz aller getroffenen Maßnahmen weisen wir darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Widerspruchsrecht</h2>
                            <p>Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben oder sich der Widerspruch gegen Direktwerbung richtet. Im letzteren Fall haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer besonderen Situation von uns umgesetzt wird.</p>
                            <p className="mt-2">Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an: info@sternblitz.de.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Aktualität und Änderung dieser Datenschutzerklärung</h2>
                            <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand August 2025.</p>
                            <p className="mt-2">Durch die Weiterentwicklung unserer Webseite und Angebote darüber oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Webseite unter www.sternblitz.de/datenschutz von Ihnen abgerufen und ausgedruckt werden.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Externe Links</h2>
                            <p>Unsere Webseite kann Links zu anderen Webseiten enthalten. Diese Datenschutzerklärung erstreckt sich nicht auf die Webseiten anderer Anbieter, die über Links auf unserer Seite erreichbar sind. Wir haben keinen Einfluss auf deren Inhalte und die Einhaltung der Datenschutzbestimmungen durch diese Anbieter.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">10. Verwendung von Social Media Plug-ins</h2>
                            <p>Wir setzen auf unserer Webseite auf Grundlage des Art. 6 Abs. 1 S. 1 lit. f DSGVO Social Plug-ins der sozialen Netzwerke Facebook, Instagram und TikTok ein, um unser Unternehmen hierüber bekannter zu machen. Der dahinterstehende werbliche Zweck ist als berechtigtes Interesse im Sinne der DSGVO anzusehen. Die Verantwortung für den datenschutzkonformen Betrieb ist durch deren jeweiligen Anbieter zu gewährleisten.</p>
                            <p className="mt-2">Diese Social Media Plug-ins erkennen Sie an den Logos oder Buttons der jeweiligen Plattform. Wenn Sie eine Seite unseres Webauftritts aufrufen, die ein solches Plug-in enthält, stellt Ihr Browser eine direkte Verbindung zu den Servern der Anbieter her. Die Inhalte des Plug-ins werden von den Plattformen direkt an Ihren Browser übermittelt und in die Seite eingebunden.</p>
                            <p className="mt-2">Durch die Einbindung der Plug-ins erhalten die Social-Media-Anbieter die Information, dass Ihr Browser die entsprechende Seite unseres Webauftritts aufgerufen hat, auch wenn Sie kein Profil bei dem entsprechenden sozialen Netzwerk besitzen oder gerade nicht eingeloggt sind. Diese Information (einschließlich Ihrer IP-Adresse) wird von Ihrem Browser direkt an einen Server der Anbieter (z.B. in die USA) übermittelt und dort gespeichert.</p>
                            <p className="mt-2">Sind Sie bei einem der Social-Media-Anbieter eingeloggt, können diese den Besuch unserer Webseite Ihrem Profil direkt zuordnen. Wenn Sie mit den Plug-ins interagieren, z.B. den „Like“-Button betätigen oder einen Kommentar abgeben, wird die entsprechende Information ebenfalls direkt an einen Server der Anbieter übermittelt und dort gespeichert. Die Informationen können außerdem in dem sozialen Netzwerk veröffentlicht und Ihren Kontakten angezeigt werden.</p>
                            <p className="mt-2">Wenn Sie nicht möchten, dass die sozialen Netzwerke die über unseren Webauftritt gesammelten Daten unmittelbar Ihrem Profil zuordnen, müssen Sie sich vor Ihrem Besuch unserer Webseite aus den entsprechenden Netzwerken ausloggen.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">11. Beschwerderecht bei einer Aufsichtsbehörde</h2>
                            <p>Sie haben gemäß Art. 77 DSGVO das Recht, sich bei einer Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes wenden.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Datenschutz;
