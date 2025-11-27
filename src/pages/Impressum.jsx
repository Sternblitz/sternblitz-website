import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Impressum = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-20 px-6">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-[#4285F4] font-bold mb-8 hover:underline">
                    <ArrowLeft size={20} /> Zurück zur Startseite
                </Link>

                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200">
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">Impressum</h1>

                    <div className="space-y-6 text-gray-600">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Angaben gemäß § 5 TMG</h2>
                            <p>
                                <strong>Zweigniederlassung:</strong><br />
                                Otto-Kraus-Straße 10<br />
                                90411 Nürnberg<br />
                                Deutschland
                            </p>
                            <p className="mt-4">
                                <strong>Sternblitz LLC</strong><br />
                                30 N Gould St Ste R<br />
                                Sheridan, Wyoming 82801<br />
                                USA
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Vertreten durch den Geschäftsführer</h2>
                            <p>Robin Jones</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Kontakt</h2>
                            <p>
                                E-Mail: info@sternblitz.de<br />
                                Tel: +49 151 61123111
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                            <p>
                                Sternblitz LLC<br />
                                30 N Gould St Ste R<br />
                                Sheridan, Wyoming 82801<br />
                                USA
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Hinweis zur Umsatzsteuer</h2>
                            <p>Im Rahmen des Reverse Charge Verfahrens wird keine Umsatzsteuer ausgewiesen. Die Umsatzsteuerschuld liegt beim Leistungsempfänger gemäß § 13b UStG.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Haftungsausschluss (Disclaimer)</h2>

                            <h3 className="font-bold mt-4 mb-2">1. Haftung für Inhalte</h3>
                            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                            <p className="mt-2">Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

                            <h3 className="font-bold mt-4 mb-2">2. Haftung für Links</h3>
                            <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
                            <p className="mt-2">Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

                            <h3 className="font-bold mt-4 mb-2">3. Urheberrecht</h3>
                            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                            <p className="mt-2">Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>

                            <h3 className="font-bold mt-4 mb-2">4. Streitschlichtung</h3>
                            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" className="text-blue-600 hover:underline">https://ec.europa.eu/consumers/odr</a></p>
                            <p className="mt-2">Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Impressum;
