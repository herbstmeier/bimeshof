class Detail {
    title = ''
    text = ''

    constructor(title, text) {
        this.title = title
        this.text = text
    }
}

const details = [
    new Detail('Unternehmensphilosophie', 'Unser Anliegen ist ein Leben im <b>Einklang mit der Natur.</b><br>Wir sind der Meinung, dass ein Arbeiten mit der Natur – nicht gegen sie - nur mit einer kleinbäuerlichen Landwirtschaft realisierbar ist, die der Bimeshof ist. Durch bodenschonendes Arbeiten, Verzicht auf den Einsatz von Spritzmitteln und Kunstdüngern, durch Hecken, Sträucher und Bäume, soll eine naturnahe Landwirtschaft fortgeführt werden, wo Vögel und Insekten leben und dadurch der Schädlingsdruck verringert wird.<br>Wir fühlen uns einer nachhaltigen Landwirtschaft verpflichtet, die <b>ganzheitliche</b>, <b>regionale</b> und <b>soziale</b> Aspekte vereint.<br>Durch die Solidarische Landwirtschaft (SoLawi) können wir das Umsetzen, was uns am Herzen liegt. Sie dient der Erhaltung und Verbesserung von natürlichen Böden und dem Umweltschutz <b>ohne Chemie und Gentechnik</b>.<br><br>Die SoLawi ist <b>nicht gewinnorientiert</b>. Vielmehr steht die markt- und preisunabhängige Produktion vom Gemüse im Vordergrund. Ausfälle tragen die Mitglieder solidarisch. Durch feste Gemüseabnehmer ist dem Bimeshof ein stetes monatliches Einkommen gesichert.<br>Der Bimeshof ist ein Naturlandbetrieb und arbeitet nach den Naturland Kriterien. Künftig soll die Bewirtschaftung ebenso weitergeführt werden, allerdings wird langfristig auf Zertifizierung und Subventionierung verzichtet, um engmaschige Kontrollen und einen finanziellen Mehraufwand zu vermeiden.<br>Die Mitglieder werden in die anfallenden Arbeiten mit eingebunden und bekommen dadurch einen direkten Bezug zum ökologischen Gemüseanbau.'),
    new Detail('Mitgliedschaft','Die Mitgliedschaft besteht für ein Jahr. Sie beginnt am 1.1. und endet am 31.12.<br> Unterm Jahr kann man immer zum 1. des jeweiligen Monats beitreten, solange die maximale Mitgliederzahl noch nicht erreicht ist.<br>Der monatliche Mitgliedsbeitrag beträgt 94,- € und wird per Lastschriftverfahren am jeweiligen 1. des Monats eingezogen. Eine Einmalzahlung des Jahresbeitrags ist möglich.<br>Der Vertrag wird mit dem Betreiber des Bimeshofes, Katja Herzinger, geschlossen.<br>Die Mitgliedschaft verlängert sich automatisch um ein Jahr, wenn diese nicht bis zum 1.10. gekündigt wird. Sofern driftige Gründe vorliegen, kann der Betreiber zum Monatsende die Mitgliedschaft kündigen.<br>Der Mitgliedsbeitrag deckt die laufenden Kosten, sowie den Lohn für die Arbeitskraft/Arbeitskräfte.<br>Die Ernte wird gänzlich an die Mitglieder vergeben. Es wird nur geerntet, was gerade reif ist. Dadurch, dass das Gemüse maximal einen Tag vor Ernteausgabe geerntet wird, landet frisches Gemüse auf dem Teller.<br>Der Ernteanteil ist für einen 2-Personen Haushalt berechnet. Auch weniger schöne Lebensmittel werden verteilt, sodass alle Nahrungsmittel Verwendung finden. Übriges Gemüse wird eingeweckt oder konserviert.'),
    new Detail('Ausgabetag','Das Gemüse wird jeden Freitag von 12 – 17 Uhr im bisherigen Hofladen auf dem Bimeshof für die Mitglieder bereitgestellt.<br>Die Mitglieder wiegen sich ihren Ernteanteil ab und sind für die Verpackung selbst verantwortlich.<br>Der genaue Ernteanteil für jeden Ernteteiler ist auf einer Liste vermerkt. In einer weiteren Liste wird die Abholung der Ernte bestätigt.<br>Da nicht damit zu rechnen ist, dass immer ausreichend von jedem Gemüse da sein wird, werden die Mitglieder in Gruppen (A/B) eingeteilt, um eine gerechte Verteilung der Nahrungsmittel zu sichern.<br>Gemüse, welches zu viel ist oder nicht gemocht wird, bitte in die Tauschkiste legen. Hier kann man sich auch bedienen. Sollte ein Gemüse zur Abholzeit nicht mehr vorhanden sein, soll dies der Betreiberin mitgeteilt werden. Wiegefehler kann es geben.<br>Eier und Heidelbeeren können am Ausgabetag zusätzlich erworben werden. Hierfür gibt es keine Reservierung. Das Angebot richtet sich nach der Legefreude der Hühner und nach dem jeweiligen Erntesegen.<br>Im Falle von Urlaub oder Krankheit sind die Mitglieder dazu angehalten, das Gemüse von Freunden, Verwandten oder Nachbarn abholen zu lassen oder das Gemüse wird auf die SoLawi Mitglieder verteilt. Fahrgemeinschaften sind im Sinne des Umweltschutzes wünschenswert.<br>Fällt der Freitag auf einen Feiertag, findet die Verteilung des Ernteanteils bereits am Donnerstag statt.'),
    new Detail('Mitmachen','Es ist wünschenswert, dass sich jedes Mitglied mindestens 4 x im Jahr aktiv beim Gemüseanbau einbringt. Wahlweise besteht die Möglichkeit, sich an den geplanten Mitmachtagen (4 feste Samstagstermine im Jahr) und/oder an den Wochenaktivitäten (diese werden auf einer Tafel am Ausgabeort ausgehängt), zu beteiligen.<br>Witterungsbedingte Ausfälle sind möglich.<br>Für die Mitarbeit gibt es keine Entlohnung.<br>Von unangekündigten Besuchen des Bimeshofes ist abzusehen.<br>Sollten sich Mitglieder nicht aktiv am Gemüseanbau beteiligen wollen oder können, besteht die Möglichkeit, andere Unterstützungsarbeiten im Rahmen der SoLawi zu leisten (z.B. Einkochen, Organisation der Mitmachtage/Wochenaktivitäten/Feste/usw., Gestaltung der Rundbriefe, Aufbau und Pflege des Internetauftrittes, Verwaltungsarbeiten …).<br>Das Mitbringen der eigenen Kinder an den Mitmachtagen ist ausdrücklich erwünscht. Die Aufsichtspflicht obliegt den Erziehungsberechtigten.'),
    new Detail('Anbauplan','Es gibt jedes Jahr einen Gemüse-Anbauplan, welchen die Mitglieder nach Rücksprache mit der Betreiberin bestimmen. Dieser wird im November  festgelegt.'),
    new Detail('Rundbrief','Regelmäßige Rundbriefe informieren die Mitglieder über die aktuelle Situation auf dem Bimeshof. Darüber hinaus werden Kochrezepte und Verarbeitungstipps weitergegeben.'),
]

export {details}