import { marked } from "marked"


const Daten = marked.parse(`# Daten

## 1. Grundsätzliches zu den Daten

#### Vollständigkeit und Aktualität der Personendaten

Das Ziel dieser Pilotphase war die **Überführung und Aufbereitung der Leopold- und Access-Datensätze** in die APIS-Infrastruktur. Auf eine Aktualisierung der erfassten Daten um Informationen aus der Sekundärliteratur musste weitestgehend aufgrund der zeitlichen Begrenzung des Pilotprojektes auf 2,5 bzw. 3 Jahre verzichtet werden.

#### Personenkreis der Datensätze

Prosopographie bedeutet, Personendaten über die systematische Auswertung von historischen Quellen zu sammeln, um ein möglichst vollständiges Bild einer bestimmten Bevölkerungsgruppe zu bekommen. Während der Leopold-Datensatz nahezu **das Gesamtpersonal des Wiener Hofes der Regierungszeit von Kaiser Leopold I. (1657–1705)** erfasste, fokussiert sich der Access-Datensatz auf das **Gesamtpersonal der Wiener Hofstaate zwischen 1711 und 1806**, die Datenneuaufnahme hingegen auf den **Zeitraum von 1807 bis 1835**.

#### Begrifflichkeiten *Wiener Hofstaat* und *Wiener Hof*

Der Begriff des **„Wiener Hofstaats“** bezeichnet die Gesamtheit des Hofpersonals, das für die persönliche Versorgung des Herrschers/der Herrscherin („Haupthofstaat“) oder eines seiner Familienmitglieder („Teilhofstaat“) zuständig war. Hierzu werden alle weiblichen und männlichen Funktionsträger gezählt, die zum einen unabhängig von ihrer Besoldung eine Funktion im Haushalt der Herrscherfamilien innehatten. Diese Funktion musste zum anderen in der höfischen Ämterstruktur der obersten Hofämter verortet werden können. Die Summe des Hofpersonals von Haupt- und Teilhofstaaten der Kaiser, der Kaiserinnen, der Kaiserinwitwen, der Kaiserkinder und anderer Verwandter macht die **Gesamtheit des Wiener Hofpersonals bzw. des Wiener Hofstaats** aus.

Der Begriff des **„Wiener Hofes“** ist im Hinblick auf seinen Aufgabenbereich und Personenkreis weiter gefasst, da es außer der Gesamtheit des Hofpersonals (= Wiener Hofstaat) auch das diplomatische, militärische und administrative Personal umfasst. Der **Wiener Hof bzw. die Wiener Hofgesellschaft** kam den Bedürfnissen des fürstlichen Haushaltes nach (Versorgungsfunktion) und hatte eine politisch administrative Aufgabe (Verwaltungs- und Regierungsfunktion) und eine ökonomisch-kulturelle Rolle (Repräsentationsfunktion) zu erfüllen.

In VieCPro gründet sich ein **Bezug zum Wiener Hof** nicht nur in der Ausübung einer Hoffunktion, sondern auch über verwandtschaftliche Beziehungen zu Funktionsträger:innen und/oder monetäre Bezüge aus der Wiener Hofkammer.

#### Vereinheitlichungen in den Datensätzen

Personennamen, Funktionsbezeichnungen und Institutionsbezeichnungen wurden unter Berücksichtigung der zeitgenössisch jeweils vorherrschenden Variante bei gleichzeitiger Dokumentation alternativer Schreibweisen vereinheitlicht (_➔ Funktionsregister_ [in Arbeit]).

#### Deduplizierung und Merging

Der Leopold-Datensatz wurde im Wesentlichen aus drei verschiedenen Ressourcen – Hofzahlamtsbüchern, Hofstaatsverzeichnissen und Trauungsmatriken / Totenbeschauprotokollen – generiert, in denen viele Doubletten existieren. Im Prozess der Deduplizierung galt das **Vorsichtsprinzip**. Falls aufgrund unzureichender Datenlage keine eindeutige Entscheidung zugunsten einer Zusammenführung getroffen werden konnte, wurden Personen nicht gemergt. Stattdessen wurde zwischen beiden Personendatenblättern **potenzielle VieCPro-Doubletten** ausgewiesen.

#### Hierarchisierungen:

Die in dieser Datenbank angelegte Hierarchisierung kann aufgrund der Natur schematischer Darstellungen allzu oft nur unzulänglich die Feinheiten des institutionellen und auch persönlichen Miteinanders abbilden. Es ist auch ein Charakteristikum frühneuzeitlicher Organisationsstrukturen, dass die Zuständigkeiten nicht immer eindeutig und nachhaltig geklärt waren.

### Manuelle LOD-Verlinkung

Aufgrund weitestgehenden Fehlens von Lebensdaten war ein automatisierter Abgleich der VieCPro-Personendaten mit existierenden LOD-Ressourcen wie GND, Wikidata, Kaiser und Höfe (München) nicht möglich. Stattdessen wurden bislang LOD-Referenzen zu 690 Personen in leitenden Funktionen manuell recherchiert und in VieCPro angelegt. Im Zuge fortschreitender redaktioneller Arbeit werden weitere LOD-Referenzen eingespeist.

#### Gendern & Diskriminierung:

Für jede Funktionsbezeichnung – sofern es einen weiblichen und männlichen Funktionsträger gab – werden geschlechtsspezifische Bezeichnungen verwendet. Heute negativ konnotierte Funktionsbezeichnungen wie Zwerg, Hofjude, Kammermensch, Extraweib etc. sind in ihrem historischen Verwendungskontext ohne modernes Äquivalent zu sehen.

## 2. Bearbeitungsstand

Folgende Tabelle gibt einen Überblick über Quellen, Personenkreis und Umfang wie auch den Bearbeitungsstand zum jeweiligen Ende der beiden Pilotprojekte:

*coming soon*

## 3. Zur Provenienz unserer Daten

Basis von VieCPro (2020–2024) sind zwei bereits existierende Datensammlungen sowie zwei neue Datensätze:

* die teilstrukturierten Daten zum Hof Leopolds I. aus dem FWF-Projekt *Die Wiener Hofgesellschaft unter Kaiser Leopold I. (1657–1705)* unter Leitung von Leopold Auer und in der chronologischen Folge ihrer Beteiligung Sigrid Freisleben, Johannes Werfring, Ulrike Denk und Katharina Arnegger (2001–2005), sog. **Leopold-Daten**
* die strukturierten Daten zu den Hofstaaten Karls VI., Maria Theresias, Josephs II., Leopold II. und Franz II. (I.) aus dem FWF-Projekt [*Personal und Organisation des Wiener Hofes 1711–1806*](https://hofpersonal.univie.ac.at/de/startseite/) unter Leitung von Martin Scheutz und Mitarbeit von Irene Kubiska-Scharl und Michael Pölzl (2011–2016), sog. **Access-Daten**
* die manuelle Einspeisung des Hofpersonals unter Franz II. (I.) für die Jahre zwischen 1807 und 1835 im Rahmen des FWF-Projektes [*Der Wiener Hof um 1800: Eliten, Herrschaft und Repräsentation (1790–1835)*](https://www.oeaw.ac.at/ihb/forschungsbereiche/geschichte-der-habsburgermonarchie/forschung/wiener-hof-um-1800) unter Leitung von Katrin Keller und unter Mitarbeit von Christian Standhartinger und Markus Jeitler (2020–2023), sog. **Datenneuaufnahme**
* das VieCPro-Team hat begonnen, den „geerbten“ Literatur- und Quellenbestand im Zuge der Datenkuratierung durch die Verwendung aktueller Literatur zu erweitern. Hierbei kann allerdings kein Anspruch auf Vollständigkeit erhoben werden. Ausgehend vom Recherche-gegenstand wurde auf Werke der Sekundärliteratur , Nachschlagewerke  oder auch genealogische Datenbanken  zurückgegriffen, um Einträge zu Personen, Institutionen oder Orten zu ergänzen. Sog. **redaktionelle Ergänzungen von Personen, Institutionen, Orten**

## 4. Gesamtüberblick zu den drei Datensammlungen

### Datensatz 1: Der Wiener Hof unter Kaiser Leopold I. (1657–1705), sog. Leopold-Daten

Das Team unter Leitung von Leopold Auer hat die Daten zum Wiener Hof in der Zeit von Kaiser Leopold I. im Wesentlichen aus den Hofstaatsverzeichnissen (HSV), den Hofzahlamtsbüchern (HZAB), den Instruktionen und den Trauungsmatriken und Totenbeschauprotokollen (TM-TBP) des Österreichischen Staatsarchivs (ÖStA), des Wiener Stadt- und Landesarchivs, der Archive der Pfarreien St. Stephan und St. Michael, des Sächsischen Hauptstaatsarchivs und der Landesbibliothek Coburg gesammelt.

Der erfasste Personenkreis des Leopold-Datensatzes umfasst zwei Gruppen mit unterschiedlichen Graden der Vollständigkeit:

**Gruppe 1: Wiener Hofpersonal** – Personen, die in ihrer Funktion direkt den obersten Hofämtern des Wiener Hofes zugehörig sind. Neben dem Haupthofstaat von Kaiser Leopold I. sind die Teilhofstaate seiner drei Ehefrauen und ihrer Kinder, der Kaiserinwitwe Eleonora Gonzaga-Nevers wie auch ihrer (Stief-)Kinder und seines Onkels Leopold Wilhelm erfasst.

**Gruppe 2: Wiener Hofgesellschaft** – Der Personenstand greift in die Organisationsstruktur des weitläufigen Verwaltungswesens, Finanzwesens, Gesandtschaftswesens, Kriegswesens und des Kulturbereiches der Habsburgermonarchie und des Alten Reiches. So werden selektiv Funktionsträger:innen auf Ebene der Zentralbehörden des Reiches und der Habsburgermonarchie, der ständischen Landesverwaltung der Habsburgermonarchie, der städtischen Verwaltungsbehörden und primären Institutionen zur Armen-, Alten- und Krankenversorgung, der frühneuzeitlichen Spitäler und Zuchthäuser und frühneuzeitlichen Universitäten erfasst.

Der Leopold-Datensatz umfasst **48.000 Zeilen teilstrukturierter Personendaten zu Funktionsträgern beiderlei Geschlechts, verschiedener sozialer Schichten** – vom Kammerweib bis zum Obersthofmarschall, vom Kanzlist bis zum Hofkriegsratspräsidenten – wie auch **unterschiedlicher lokaler und (inter-)nationaler Herkunft**. Es wurden für jede Person – sofern bekannt – Funktion, Verwandschaftsverhältnisse und soziales Netzwerk, Hofzugehörigkeit, Zahlungen, Ämter, Wohnorte etc. dokumentiert.

Während **Gruppe 1** als **nahezu vollständig** betrachtet werden kann, liegen die Funktionsträger*innen der **Gruppe 2 selektiver** vor.

Nach Abschluss des Projektes 2005 wurden die dokumentierten Daten in **drei Excel-Blättern zum jeweiligen Quellenbestand (HZAB, HSV und TM-TBP)** sowie einem Excel-Blatt mit einem Überblick zum Personal der Hofkammer auf der Website des Österreichischen Staatsarchivs zum Herunterladen zur Verfügung gestellt (_➔  Materialien_).

Die **Herausforderungen** an das VieCPro-Team bei Überführung und Aufbereitung des Datensatzes in die APIS-Datenbank und die **Bewältigungsstrategie** waren im Wesentlichen:

* *Große Menge an teilstrukturierten Datensätze (HZAB, HSV, TM-TBP) und Doubletten*
  ➔ Fokus auf die ersten beiden Datenblätter und Entwicklung eines Tools zur Deduplizierung und Mergen der Personendatensätze [Import TM-TBP in Arbeit].
* *Uneinheitliche Schreibweisen und Leseschwierigkeiten durch fehlende Dokumentation des ursprünglichen Leopold-Projektes* ➔ Syntaktische Analyse der Originaldatenblätter vor dem Import, anschließende manuelle kontinuierliche Nachbearbeitung des Imports wie auch stichprobenartige Überprüfung ausgewerteter Quellen
* *Komplexität der Informationen (Hof- u. Verwaltungsstruktur, Funktions- und Institutionsbezeichnungen, etc.)* ➔ systematische Vereinheitlichung von 2.577 Funktionsbezeichnungen auf 2.203 und 928 Institutionen auf 863; Kategorisierung und organisationsgeschichtliche Hierarchisierung der letztgenannten Entitäten und 229 Hofstaate. Dies ging einher mit einer extensiven Recherche zu Funktionsdefinitionen wie auch zur Organisationsgeschichte von Hof und Verwaltung der Habsburgermonarchie.
* *Kommentierung der erfassten Daten (Relativierung von Zeitangaben, Zusätze aus den Quellen wie Todesursachen, Zahlungsgrund)* ➔ Implementierung eines ausgeklügelten Abkürzungssystems zur Unterscheidung von sicheren und unsicheren Zeitangaben [in Arbeit].
* *Kompilierte Daten zu einer Person aus verschiedenen Quellen in einer Zelle. Mit Ausnahme des HZAB-Blattes ist eine 1:1 Rückführung der Informationen zu einer Quelle nicht mehr möglich* ➔ Ausgabe eines zusammengefassten Quellenzitates mit Ausnahme des HZAB. Hier Rückführung des Quellenzitats in das Kategorie-Schema des HZAB über die Seitenzahl [in Arbeit].
* *Unvollständige oder widersprechende Daten wie fehlende Hofstaatszugehörigkeiten, Funktionszeiträume* ➔ Hermeneutisches Zusammenlesen vorhandenen Informationen im Zuge des Mergings, selektive weiterführende Recherchen und Kenntlichmachen von Lücken für die Benutzer*innen [in Arbeit].

### Datensatz 2: Der Wiener Hof im 18. Jahrhundert, sog. Access-Daten

Der zweite Datensatz umfasst die **Daten von 6.188 Hofangehörigen**, die von Irene Kubiska-Scharl und Michael Pölzl im Rahmen des von Martin Scheutz geleiteten Projektes in einer relationalen Datenbank (MS Access) strukturiert erfasst wurden. Bislang wurden die Daten zum Hofpersonal zwischen 1711 und 1792 in zwei Bänden 2013 und 2018 publiziert:

* Kubiska-Scharl, Irene, Pölzl, Michael: *Die Karrieren des Wiener Hofpersonals 1711 – 1765. Eine Darstellung anhand der Hofkalender und Hofparteienprotokolle*, Innsbruck–Wien–Bozen 2013 (Forschungen und Beiträge zur Wiener Stadtgeschichte, 58)
* Kubiska-Scharl, Irene, Pölzl, Michael: *Das Ringen um Reformen. Der Wiener Hof und sein Personal im Wandel (1766–1792)*, Innsbruck-Wien-Bozen 2018 (Mitteilungen des Österreichischen Staatsarchivs, 60).

Als **Quellenbasis** dienten im Wesentlichen **die kaiserlichen Hof- und Ehrenkalender und Schematismen** und für die Überlieferungslücken der Jahre 1711 bis 1714 und 1741 bis 1744 die **Hofparteienprotokolle** und Akten der Hofstaatsverwaltung im Wiener Haus-, Hof- und Staatsarchiv. Die Natur der Quellenbasis ergab, dass der erfasste Personenkreis weitaus kleiner als der des Leopold-Projektes ist. **Der Fokus lag überwiegend auf dem Wiener Hofstaat.**

Des Weiteren werden zum einen etwa ein **Drittel der „Funktionsträger, vor allem der unteren Ränge, […] im Hofkalender nicht namentlich, sondern nur summarisch erwähnt“** (Kubiska-Scharl/Pölzl 2013, 297). Dies führt dazu, dass in VieCPro für den Zeitraum 1711-1806 die niedere Ebene des Hofpersonals weniger gut dokumentiert ist. Zum anderen sind kaum Angaben zu Gehalt oder Verwandtschaftsbeziehungen enthalten. Die Personenangaben umfassen Vor- und Nachnamen, Ehrentitel, militärische Ränge, Informationen zum Personenstand ebenso wie Angaben zu Standeserhebungen, Tätigkeitsorte, ausgeübte Funktionen, Hofstaatzugehörigkeiten und Beschäftigungsdauern.

Die **Herausforderungen** an das VieCPro-Team bei Überführung und Aufbereitung des Datensatzes in die APIS-Datenbank und die **Bewältigungsstrategie** waren im Wesentlichen:

* *Große Menge an Funktionsschreibweisen, die von den Leopold-Daten abwichen.* ➔ Anpassung der Funktionsschreibweisen an die für die Leopold-Daten bereits etablierten Bezeichnungen im Zuge des Imports.
* 
* *Sämtliche Institutionen (mit Ausnahme der Obersten Hofämter) waren keine eigenen Entitäten, sondern Teil der Funktionsbezeichnung (Erster Amtsschreiber im Hofbauamt).* ➔ Auslesung der in den Funktionsbezeichnungen vorkommenden Institutionen und Import derselben als Entitäten.
* *Abweichende Bezeichnungen für Oberste Hofämter (in Access „Stäbe“) und geringer Grad an Differenzierung.*
  ➔ Anpassung an die bereits etablierten Bezeichnungen, Hierarchisierung der Hofstaaten und Institutionen, Kategorisierung der Hofstaaten in regierende Fürsten, Erzherzöge und Erzherzoginnen, Junge Herrschaften etc.
* *Heterogenität von unstrukturierten Zusatzinformationen in den Bemerkungsfeldern der Personenblätter.* ➔ Strukturierte Auswertung von Informationen aus den Bemerkungsfeldern (Lebensdaten, Funktionen, Funktionszusätze, Aufenthaltsorte) teilweise schon beim Import, manuelle Nachstrukturierung im Zuge mehrerer Korrekturläufe.
* *Auch der Import von strukturierten Daten ist fehleranfällig.* ➔ Vorwegnahme von ,geplanten‘ Fehlern für den Import und manuelle Korrektur durch dasVieCPro-Team.

### Datensatz 3: Der Hof von Franz II./I., sog. Datenneuaufnahme

Der dritte Datensatz wird in einem Teilprojekt des FWF-Projektes [*Der Wiener Hof um 1800: Eliten, Herrschaft und Repräsentation (1790–1835)*](https://www.oeaw.ac.at/ihb/forschungsbereiche/geschichte-der-habsburgermonarchie/forschung/wiener-hof-um-1800) unter Leitung von Katrin Keller durch Christian Standhartinger erhoben. Der Fokus liegt auf der **Vervollständigung von unpublizierten Datensätzen des Scheutz-Projektes zum Hofstaat von Franz II. sowie deren Erweiterung bis zum Jahr 1835.**

Als **Quellenbasis** dienen hierbei vorwiegend die **Hof- und Staatsschematismen (Staatshandbücher)** der Jahre 1807 bis 1835. Die kriegsbedingten Überlieferungslücken der Jahre 1809, 1810 und 1815 werden hierbei nicht durch die Auswertung zusätzlicher Quellen geschlossen. Einzelne Personendatenblätter, insbesondere die Träger hoher Hoffunktionen, werden hingegen durch biographische Lexika und einschlägige Werke der Sekundärliteratur erweitert.

Erfasst werden **sämtliche Personen, die in den Hofschematismen einem der kaiserlichen Obersten Hofämter oder dem Hofstaat eines anderen Familienmitglieds, sofern sich dieses dauerhaft in Wien aufhielt,** zugeteilt waren. Zusätzlich wird auch die **Erfassung sämtlicher Geheimer Räte, Kämmerer, Palastdamen sowie der Träger und Trägerinnen der in den Hofschematismen aufgelisteten Orden** angestrebt. Sämtliche Zusatzinformationen, die in den Hofschematismen neben der eigentlichen Hoffunktion angegeben sind, werden strukturiert mitaufgenommen. Dazu zählen Ordensverleihungen, nicht-höfische Ämter und Würden, militärische Ränge sowie Wohnadressen.

Die **Herausforderungen** an das VieCPro-Team bei Überführung und Aufbereitung des Datensatzes in die APIS-Datenbank und die **Bewältigungsstrategie** waren im Wesentlichen:

* *Wechselnde Ämterhierarchie und Zuordnung von Funktionen zu bestimmten Ämtern in den Schematismen.* ➔ Durchsicht mehrerer aufeinander folgender Schematismen, um Entscheidungen bezüglich Ämterhierarchie und Funktionszuordnungen zu treffen.
* *Überlieferungslücken in den Jahren 1809, 1810, 1815.* ➔ Relativierende Zusätze bei Laufzeiten von Funktionen, die vor diesen Jahren zum letzten Mal oder nach diesen Jahren zum ersten Mal erwähnt werden.
* *Große Zahl von summarischen Personalauflistungen ohne Möglichkeit zur Identifizierung.* ➔ Einspeisung und Sammlung des summarischen Personals in eigens dafür angelegten, hofstaatsspezifischen Personenblättern.
* *Uneinheitliche Angabe von Wohnadressen (Vorstadt + Konskriptionsnummer, Straßenname + Konskritpionsnummer).* ➔ Identifizierung der Straßen und Deduplizierung der Wohnadressen anhand der zeitgenössischen Häuserschematismen.
* *Funktionsbezeichnungen, die von den bereits etablierten Bezeichnungen abweichen, aber synonym sind.* ➔ Laufende Mitschrift synonymer Bezeichnungen, die später in das Funktionsregister eingespeist werden.
* *Unsicherheiten bei der Identifizierung von Personen, die gängige Namen tragen, Gefahr der Duplizierung von Personen.* ➔ Anlegen von Relationen zwischen Personen, die möglicherweise Doubletten sind.

## 5. VieCPro-Workflow (09/2020 – 06/2024)

### Projektjahr (09/20 – 09/21)

* Analyse der Leopold- und Access-Datensätze hinsichtlich ihrer Zusammensetzung, ihres Aufbaus, wie auch ihres Inhalts und Vorbereitung für den Import
* Import der Datensätze mit besonderem Fokus auf die Informationen zum beruflichen Werdegang der Personen (Person-Institution-Relationen)
* Erste manuelle Nachkorrektur der importierten Datensätze aufgrund von Importfehlern durch uneinheitliche Schreibweisen, der z. T. unvollständigen Erfassung der in dem Leopold-Datensatz zusammengestellten Daten und Lese-/Interpretationsschwierigkeiten durch unvollständige Dokumentation der Erfassungsrichtlinien des Leopold-Projektes

### Projektjahr (10/21–09/22)

* Vereinheitlichung und Systematisierung von Funktionsbezeichnungen (Reduzierung von 2.577 auf 2.203) und Institutionsbezeichnungen (von 928 auf 863).
* Kategorisierung der Funktionsbezeichnungen und Institutionen sowie deren organisationsgeschichtliche Hierarchisierung, weitestgehend basierend auf den Angaben der „Verwaltungsgeschichte der Habsburgermonarchie in der Frühen Neuzeit. 2 Bände, hg. von Michael Hochedlinger, Petr Mat'a, Thomas Winkelbauer (MIÖG, Ergänzungsband 62), Wien 2019.
* Entwicklung des Eingabetools für die Datenneuaufnahme
* Beginn der Datenneuaufnahme
* Extraktion und Aufbereitung weiterer Personendaten wie Wohnorte, Quellenzitate, Verwandtschaftsverhältnisse etc. aus den Datensätzen und Import derselben in die APIS-Entitäten Places, Persons, Works, Labels.

### Projektjahr (10/22 – 03/23)

* Entwicklung eines Tools zur Deduplizierung und zum Merging für die Leopold-Daten
* Deduplizierung von 23.129 Personen der Leopold-Daten auf 10.856 Personen
* Entwicklung des Frontends (Mockups, etc.)
* Verlinkung eines Personensamples mit LOD-Ressourcen wie GND, GeoNames, Wikidata, Kaiser & Höfe (München)
* Erstellung des VieCPro-Leitfadens zur Benutzung
* Fortsetzung der Datenneuaufnahme
* Beginn der zweiten und finalen manuellen Nachkorrektur der Leopold-Daten und Access-Daten

03/2023 Ende des ÖAW-Innovationsfonds-Projektes *The Viennese Court. A Prosopographical Portal (VieCPro)*, Leitung: Marion Romberg

### Projektjahr (04/23 – 06/24)

* Entwicklung eines Tools zur Erfassung der im HZAB-Blatt dokumentierten Hofzahlungen
* Implementierung des Funktionsregisters
* Entwicklung von Visualisierung (Hierarchisierung, Netzwerk, Karten)
* Import des TM-TBP-Blatts des Leopold-Datensatzes (inkl. manuelle Korrektur)
* Fortsetzung der zweiten und finalen manuellen Nachkorrektur der Leopolddaten
* Fortsetzung der Datenneuaufnahme

06/2024 Ende des FWF-Projektes [*Der Wiener Hof um 1800: Eliten, Herrschaft und Repräsentation (1790–1835)*](https://www.oeaw.ac.at/ihb/forschungsbereiche/geschichte-der-habsburgermonarchie/forschung/wiener-hof-um-1800}), Leitung: Katrin Keller`);


const Team = marked.parse(`# Kontaktaufnahme

Die Datenbank befindet sich **im Aufbau**. Wir freuen uns über Ihre **sachdienlichen Hinweise und Ergänzungsvorschläge**. Falls Sie eine **Idee für Anschlussprojekte** haben oder an einer Kooperation interessiert sind, dann schreiben Sie uns an:
[viecpro@oeaw.ac.at](mailto:viecpro@oeaw.ac.at)

## Wissenschaftliches Team:

* Dr. Marion Romberg, ÖAW-IHB | Leiterin des ÖAW-Projektes, 09/2020 – 04/2023
* PD Dr. Katrin Keller, ÖAW-IHB | Leiterin des FWF-Projektes, 09/2020 – 06/2024
* Mag. Christian Standhartinger, ÖAW-IHB | Projektmitarbeiter des FWF-Projektes 01/2021 – 06/2024
* Dr. Markus Jeitler, ÖAW-IHB | Projektmitarbeiter des FWF-Projektes, 09/2020 – 12/2023

## Digital Humanities-Team:

* Mag. Matthias Schlögl, ACDH-CH | IT-Koordinator, 09/2020 – 12/2023
* Gregor Pirgie BA, ACDH-CH | Hauptprogrammierer, 02/2021 – 12/2023
* Mag. Stefan Ebner BA MA, ÖAW-IHB | Techn. Mitarbeiter des ÖAW-Projektes, 12/2022 – 04/2023

## Ehemalige Mitarbeiter*innen:

* Dr. Maximilian Kaiser, ÖAW-IHB | Co-Leiter des ÖAW-Projektes, 09/2020 – 10/2022
* Mag. Sabine Laszakovits BSC MA, ACDH-CH | 11/2020
* Sebastian Piringer BA, ÖAW-IHB | wissenschaftl. Mitarbeiter des ÖAW-Projektes, 12/2022 – 03/2023

Unterstützt von **Hilfskräften** der [Abteilung für die Geschichte der Frühen Neuzeit und Rheinischen Landesgeschichte](https://www.igw.uni-bonn.de/fnzrlg/de) des Instituts für Geschichtswissenschaft der Universität Bonn (Prof. Dr. Michael Rohrschneider, Sept. 2020 – Aug. 2021):

* Marius Engel BA
* Lennart Katzenbach BA
* Leon Marlon Klein BA
* Rahel Ovesiek BA MA
* Fabian Scholz BA
* David Schulte BA`);
const Technical = marked.parse(`# Forschungsinfrastruktur

Das APIS-Modell basiert auf vier verschiedenen Entitäten (Personen, Orte, Institutionen, Ereignisse), Beziehungen zwischen diesen Entitäten, Vokabularien für die Eingabe von Beziehungen und Entitäten, Volltexten sowie Annotationen zu diesen Volltexten. Die Datensätze aus den Leopold- und Access-Daten entsprechen strukturell diesen Entitäten. Es bestand also eine grundsätzliche Kompatibilität der beiden Datenbankmodelle. In mehreren Iterationen wurden Änderungswünsche gesammelt und der Code wurde weiter verbessert. Dank der ACDH-internen Backup-Strategie und der Konzeption des APIS-Systems wurde produktives Arbeiten bereits in dieser Testphase möglich und die Datenintegrität trotz Codeänderungen gewährleistet. Nachdem das Datenmodell für stabil erklärt wurde, wurde ein Mapping des internen Datenmodells auf eine weiter verbreitete Ontologie (geplant: CIDOC CRM oder eine Ableitung) erstellt. Sowohl die Abbildung auf eine weit verbreitete Ontologie als auch die Archivierung des endgültigen Datensatzes in ARCHE, der auch mit SPARQL durchsucht werden kann, garantieren die bestmögliche Wiederverwendbarkeit des Datensatzes. Dieser Rohdatensatz ist für die wissenschaftliche Weiterverwendung von besonderem Interesse.

Das System bietet einen dezentralen Zugang zu den Daten über das Webinterface, eine genaue Definition der Berechtigungen jedes Nutzers/jeder Nutzerin, die Integration bestehender LOD-Ressourcen (wie GND, VIAF, wikidata und HistoGIS) und die einfache Wiederverwendung bestehender Metadaten aus diesen Ressourcen. Alle Änderungen an den Daten wurden versioniert, sodass ein früherer Zustand der Datenbank jederzeit wiederhergestellt werden kann. Für den programmatischen Zugriff wurde eine dokumentierte REST-FUL API bereitgestellt. Damit ist eine Verknüpfung der Daten auch in einer späteren Arbeitsphase möglich.

## Entität: Person

Die Entität „Person“ enthält zum einen Personen in direkter beruflicher Zugehörigkeit zu den obersten Hofämtern am Wiener Hof, zum anderen reicht der Personenstand – vor allem für die Zeit von Kaiser Leopold I. (1657–1705) – bis in die Organisationsstruktur des weitläufigen Verwaltungswesens, Finanzwesens, Gesandtschaftswesens, Kriegswesens und des Kulturbereiches der Habsburgermonarchie bzw. des Alten Reiches hinein. Es werden für jede Person – sofern bekannt – Funktion, familiärer Kreis, Hofzugehörigkeit, Gehalt, Ämter, Wohnorte etc. ausgegeben. Durch die Dokumentation von Funktionsinhabern beiderlei Geschlechts, verschiedener sozialer Schichten – vom Kammerweib bis zum Obersthofmarschall, vom Kanzlist bis zum Hofkriegsratspräsidenten – wie auch unterschiedlicher lokaler und (inter-)nationaler Herkunft wird das Verständnis des Wiener Hofes als „multifunktionaler Konzentrationspunkt“ (Scheutz / Wührer 2007, 15f.) und der Beitrag des Wiener Hofes zur Integration der werdenden Habsburgermonarchie verdeutlicht.

**➔ Weitere ausführliche Informationen finden sich in den *VieCPro-Leitfaden zur Benutzung* im VieCPro-Downloadbereich *Materialien*.**

## Entität: Institution und Hofstaat

Die Entität „Hofstaat“ listet 128 Hofstaate vom 17. bis zum Anfang des 19. Jahrhunderts. Neben dem Haupthofstaat des Kaisers wird in VieCPro das Hofpersonal beginnend vom Hofstaat der Jungen Herrschaft, der sog. Kinderstube für die jungen Erzherzöge und Erzherzoginnen, bis zu den Hofstaaten der kaiserlichen Gemahlin, Geschwister und der Kaiserinwitwe erfasst. Bedingung ist, dass die Inhaber:innen aller Teilhofstaate in verwandtschaftlichem Bezug zum Kaiser oder in einem Eheverhältnis zu einem Familienmitglied stehen sowie in Wien residieren. Der Vollständigkeitsgrad des dokumentierten Hofpersonal variiert je nach Erfassungsstand.

Jeder Hofstaat ist einer der sechs Kategorien – Kaiser, Kaiserin, Kaiserinwitwe, Erzherzog:in, Junge Herrschaft oder Sonstiger Hofstaat – zugeordnet und ausgehend vom Haupthofstaat des Kaisers hierarchisiert. Das jeweilige Hofstaatskürzel, das sich aus den Anfangsbuchstaben des/r Vornamens/n ergibt, dient der Differenzierung der einzelnen Hofstaatsinhaber:innen und Identifizierung der ihnen zugeordneten Institutionen. Diesem Kürzel wird bei einigen Familienmitgliedern ein Rangkürzel – Kaiser, Kaiserin, Kaiserinwitwe, Erzherzog/in – beigefügt, wobei das Rangkürzel Erzherzog:in (Ehzg./Ehzgin.) nur bei Thronfolger:innen explizit zur Unterscheidung der erzherzöglichen vom kaiserlichen Hofstaat angefügt wird. **Eine Liste aller Akronyme findet sich im VieCPro-Downloadbereich *Materialien*.**

VieCPro enthält **mehr als 700 Institutionen**, wovon circa ein Viertel Hofämter und Hofgruppen zwischen dem 17. und beginnenden 19. Jahrhundert ausmachen. Der Rest sind Institutionen der Reichsebene, der habsburgischen Länder, verschiedener Städte sowie der lokalen Ebene, vor allem während der leopoldinischen Zeit.

Die Institutionen werden ausgehend von der prinzipiellen Unterscheidung der beiden Hauptkategorien *Amt/Behörde/Verband* (kurz Institution) und der zu einer besseren Datenstrukturierung vom Projektteam eingeführter *Gruppe* mehreren Unterkategorien zugeordnet. Diese reichen vom Bauwesen über das Gesandtschaftswesen bis hin zum Versorgungswesen. Eine Mehrfachzuordnung einer Institution oder einer Gruppe zu einer der zehn Unterkategorien ist möglich. **Eine Liste aller Kategorien findet sich im VieCPro-Downloadbereich *Materialien*.**

Die in dieser Datenbank angelegte **Hierarchisierung von Institutionen und Hofstaaten** kann aufgrund der Natur schematischer Darstellungen die Feinheiten institutioneller Organisationsstrukturen allzu oft nur unzulänglich abbilden. Zuständigkeiten von und Abhängigkeiten zwischen Ämtern oder Institutionen konnten auch zeitgenössisch nicht immer eindeutig und nachhaltig geklärt werden.

**➔ Weitere ausführliche Informationen finden sich in den *VieCPro-Leitfaden zur Benutzung* im VieCPro-Downloadbereich *Materialien*.**

## Entität: Orte

VieCPro enthält 2493 Orte, deren Zahl durch die Datenneuerhebung weiterwachsen wird. Mehr als ein Drittel dieser Orte sind Wohnadressen, die hauptsächlich die Leopold-Daten (Häuser- und Schildnamen) sowie die Daten der Neuerhebung (Straßennamen/Vorstadtnamen + Konskriptionsnummern) betreffen und ausschließlich in der Stadt Wien, ihren Vorstädten und Vororten liegen. Die restlichen zwei Drittel verteilen sich auf unterschiedliche Ortstypen, die eine Hierarchisierung der Orte zueinander ermöglichen, ausgehend von der größtmöglichen historischen politischen Entität (wie z. B. dem Heiligen Römischen Reich) über darin integrierte Territorien bis hin zur Stadt Wien, einer einzelnen Straße und einem darin befindlichen Haus.

Ein Teil der Wohnadressen aus den Leopold-Daten wurde unter Zuhilfenahme zeitgenössischer Stadtpläne, des [WienGeschichteWiki](https://www.geschichtewiki.wien.gv.at/Wien_Geschichte_Wiki) sowie des mehrbändigen Werkes von Paul Harrer-Lucienfeld, *Wien – seine Häuser, Menschen und Kultur* (Manuskript), Wien 1951-1958, eindeutig identifiziert und georeferenziert. Städte und Orte wurden zusätzlich über die geographische Ortsdatenbank [geonames.org](http://www.geonames.org/) mit Längen- und Breitengraden versehen. Einzelne Orte, insbesondere Wohnhäuser aus der leopoldinischen Zeit, wurden mit den entsprechenden Belegen zu den Einträgen im WienGeschichteWiki und Harrer-Lucienfeld versehen.

Geburts- und Sterbeorte sowie Wirkungs- oder Tätigkeitsorte werden nicht in der Ortsentität selbst ausgedrückt, sondern in der Relation, die Personen mit Orten verbindet. Darunter fallen Relationen wie „ist geboren in“ ebenso wie ungenaue Angaben zur Wohnadresse, die zum Beispiel in der Relation „wohnte neben“ oder „wohnte gegenüber von“ dargestellt werden.

## Entität: Ereignisse

coming soon

## Entität: Zahlungen

coming soon`);
const Project = marked.parse(`# Über das Projekt

Ziel dieses Pilotprojektes „*The Viennese Court. A Prosopographical Portal“, VieCPro*, ist es, eine virtuelle Forschungsumgebung zu schaffen, in der auf langer Sicht eine sukzessive Rekonstruktion des gesamten Wiener Hofes auf allen sozialen, familiären und beruflichen Ebenen ermöglicht wird. In der Realisierung dieses Vorhabens haben in **einer ersten Phase** zwei im Frühjahr 2020 in Wien bewilligte Projekte ihre finanziellen und personellen Ressourcen gebündelt:

* 09 | 2020 – 03 | 2023 *The Viennese Court. A Prosopographical Portal (VieCPro)*, gefördert vom [Innovationsfonds der ÖAW](https://www.oeaw.ac.at/foerderungen/innovationsfonds), durchgeführt am IHB und ACDH-CH, hauptverantwortlich geleitet von Marion Romberg und bis 10/22 co-geleitet von Maximilian Kaiser
* 09 | 2020 – 06 | 2024 [*Der Wiener Hof um 1800: Eliten, Herrschaft und Repräsentation (1790–1835)*](https://www.oeaw.ac.at/ihb/forschungsbereiche/geschichte-der-habsburgermonarchie/forschung/wiener-hof-um-1800), gefördert vom [FWF](https://www.fwf.ac.at/de/), durchgeführt am IHB und ACDH-CH, geleitet von Katrin Keller unter Mitarbeit von Christian Standhartinger und Markus Jeitler

Für die technische Realisierung der gemeinsam entwickelten Datenbank waren Gregor Pirgie und Matthias Schlögl vom Austrian Center for Digital Humanities and Cultural Heritage (ACDH-CH) unter Mitarbeiter von Sabine Laszakovits (ACDH-CH) und Stefan Ebner (IHB) verantwortlich.

# Forschungsdaten

Im Fokus der Pilotphase (2020–2024) stand die Wiener Hofgesellschaft zwischen 1657 und ca. 1835. Basis der Datenbank stellen die prosopographischen Datensammlungen zweier abgeschlossener Forschungsprojekte dar:

* 2001 – 2005 *Die Wiener Hofgesellschaft unter Kaiser Leopold I. (1657–1705)*, gefördert vom [FWF](https://www.fwf.ac.at/de/), durchgeführt am Österreichischen Staatsarchiv, geleitet von Leopold Auer und in der chronologischen Folge ihrer Beteiligung Sigrid Freisleben, Johannes Werfring, Ulrike Denk und Katharina Arnegger | sog. **Leopold-Datensatz**
* 2012 – 2016 [*Personal und Organisation des Wiener Hofes 1711–1806*](https://hofpersonal.univie.ac.at/de/startseite/), gefördert vom [FWF](https://www.fwf.ac.at/de/), durchgeführt am Institut für Österreichische Geschichtsforschung, geleitet von Martin Scheutz unter Mitarbeit von Irene Kubiska-Scharl und Michael Pölzl | sog. **Access-Daten**
* 2020 – 2024 **Datenneuaufnahme** für die Hofgesellschaft unter Kaiser Franz II./I. für den Zeitraum von 1807 bis längstens 1835 im Rahmen des Wiener Hof-Projektes durch Christian Standhartinger.
* ab 2020 **redaktionelle Ergänzungen von Personen, Institutionen, Orten** durch das VieCPro-Team auf Basis von Werken der Sekundärliteratur, von Nachschlagewerken oder von genealogischen Datenbanken.

# Forschungsinfrastruktur

Für die Erfassung prosopographischer Daten über das Personal am Wiener Hof wurde die am ACDH-CH entwickelte virtuelle Forschungsumgebung [Austrian Prosopographical Information System (APIS)](https://www.oeaw.ac.at/de/acdh/tools/apis-app) gewählt. Das flexible Datenmodell von APIS entspricht mit seinen fünf Entitäten (Personen, Orte, Institutionen, Quellen und Ereignissen) im Wesentlichen den Anforderungen von VieCPro. Eine Anpassung erfolgte auf Ebene der Entitäten, des Vokabulars und der digitalen Werkzeuge wie folgt:

* Als Hauptentitäten werden in VieCPro Personen, Institutionen, Hofstaate, Orte und Zahlungen (_➔ Daten_) gesehen. Weitere Angaben zu Quellen und Funktionen dienen innerhalb der prosopographischen Datenbank VieCPro als ergänzende Registerdaten.
* Die verschiedenen Entitäten werden in APIS über Relationen verbunden. Die Bezeichnung derselben erfolgt durch ein hierarchisch gegliedertes Vokabular, das u.a. im Kontext des Wiener Hofes einerseits eine Vereinheitlichung der vielfältigen Funktionsbezeichnungen und andererseits eine Kategorisierung nach Tätigkeitsgruppen ermöglicht (_➔ Funktionsregister und Materialien_).
* Begleitend zur Datenerfassung wurden digitale Werkzeuge für die Deduplizierung prosopographischer Daten und die Darstellung der Hierarchie von Hofstaaten, Hofämtern und dem dazugehörigen Personal entwickelt (_➔ Visualisierungen_).`);
const Materials = marked.parse(`# Materialien

Zum Download in PDF- oder EXCEL-Format werden angeboten:

* VieCPro-Leitfaden zur Benutzung (PDF) [in Arbeit]
* VieCPro-Abkürzungsverzeichnis (PDF)
* VieCPro-Habsburg-Hofstaatskürzel-Liste (PDF)
* VieCPro-Habsburg-Hofstaatskürzel-Stammbaum (PDF)
* VieCPro-Kategorien-Beziehungsarten (PDF)
* Leopold-Projekt-Originaldateien (EXCEL als ZIP-File)`);
const Partners = marked.parse(`# Kooperationspartner

## innerhalb der ÖAW:

* das FWF-Projekt [*Familiensache. Dynastische Handlungsspielräume in der Korrespondenz von Kaiserin Eleonora Magdalena von Pfalz-Neuburg (1655–1720)*](https://www.oeaw.ac.at/ihb/forschungsbereiche/geschichte-der-habsburgermonarchie/forschung/familiensache), Leitung: Dr. Katrin Keller (IHB), Laufzeit: 10/2021 – 09/2024 | Kooperation ab 10.2021
* das FWF-Projekt [*“Tout Vienne me riait”: Family and Court Relations in the Memoirs of the Countess Louise Charlotte of Schwerin (1684−1732)*](https://www.oeaw.ac.at/ihb/forschungsbereiche/geschichte-der-habsburgermonarchie/forschung/memoiren-der-graefin-luise-charlotte-von-schwerin), Leitung: Dr. Ines Peper (IHB), Laufzeit: 04/2022 – 03/2025 | Kooperation ab 04.2022
* den Sonderforschungsbereich [*Managing Maximilian. Persona, Politics and Personnel through the Lens of Digital Prosopography*](https://www.oeaw.ac.at/imafo/forschung/clusterprojekte-langzeitprojekte/managing-maximilian-1493-1519), Leitung: Dr. Andreas Zajic (IMAFO), Laufzeit: 03/2023–02/2027 | Kooperation ab 03.2023

## außerhalb der ÖAW:

* mit dem BBAW-Langzeitvorhaben [*Anpassungsstrategien der späten mitteleuropäischen Monarchie am preußischen Beispiel 1786 bis 1918*](https://www.bbaw.de/forschung/anpassungsstrategien-der-spaeten-mitteleuropaeischen-monarchie-am-preussischen-beispiel-1786-bis-1918#:~:text=Das%20Akademienvorhaben%20%E2%80%9EAnpassungsstrategien%20der%20sp%C3%A4ten,Vergegenw%C3%A4rtigung%20unseres%20kulturellen%20Erbes%20dient.), Arbeitsstellenleiterin: Dr. Annelie Große (Berlin) | Kooperation ab 11.2020 | zur Datenbank [*Praktiken der Monarchie*](https://actaborussica.bbaw.de/)
* mit dem Langzeitprojekt [*Austria Judaica*](http://www.injoest.ac.at/de/projekte/laufende-projekte/austria-judaica), Leitung: Dr. Sabine Hödl (Institut für Jüdische Geschichte Österreichs, St. Pölten) | Kooperation ab 04.2021
* das ÖAW GO.Digital 3.0 Projekt [*The Court of Sigismund of Tyrol. A prosopographical portal (SiCProD)*](https://www.uibk.ac.at/geschichte-ethnologie/institut/mitarbeiterinnen/projekt/debertol-markus/sicprod/sigmund-of-tyrol-s-court-prosopographical-database.html), Leitung: Markus Debertol und Nadja Krajicek (Universität Innsbruck), Laufzeit: 10/2022–09/2024 | Kooperation ab 10.2022`);


const test = marked.parse(`zum VieCPro-Team ist stets herzlich willkommen. **Die Datenbank befindet sich im Aufbau**. Wir freuen uns über Ihre sachdienlichen Hinweise und Ergänzungsvorschläge. Falls Sie eine Idee für Anschlussprojekte haben oder an einer Kooperation interessiert sind, dann schreiben Sie uns an: [viecpro(at)oeaw.ac.at](mailto:viecpro(at)oeaw.ac.at).`)

console.log("KOPIEREN: ", test)
export { Daten, Team, Technical, Materials, Partners, Project};
