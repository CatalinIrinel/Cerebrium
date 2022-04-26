import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import styled from 'styled-components';
import Modal from '../components/Modal';
import { dataC2, dataC1 } from '../components/ModalData';

const green = '#90c747';
const blue = '#13113c';

const AfectContainer = styled.div`
  width: 100%;
  min-height: fit-content;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const AfectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4rem 6rem;
`;

const ColumnsArea = styled.div`
  width: 750px;
  max-width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 1.4rem;
  }
`;
const AfectTitles = styled.h2`
  position: relative;
  width: fit-content;
  padding: 0.8rem;
  font-size: 1.5rem;
  transition: all 0.7s ease-in-out;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 2px solid;
    transition: all 0.6s ease-in-out;
    border-radius: 2px;
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: ${blue};
    border-right-color: ${blue};
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 2px solid;
    transition: all 0.6s ease-in-out;
    top: 0;
    left: 0;
    border-top-color: ${green};
    border-left-color: ${green};
    border-bottom-color: transparent;
    border-right-color: transparent;
  }

  &:hover::after,
  :hover::before {
    width: 70%;
    height: 70%;
  }
`;

// const DetailsText = styled.div`
//   width: 100%;
//   max-width: 700px;
//   font-size: 1rem;

//   & > * {
//     margin-bottom: 2rem;
//   }
// `;
const pageTitle = 'Afecțiuni';

function Afectiuni() {
  const [showModal, setShowModal] = useState(false);
  const [getText, setGetText] = useState();
  const [getTitle, setGetTitle] = useState('');

  const modalHandlerOpen = (e) => {
    setShowModal((prev) => !prev);
    setGetText(e.target);
    setGetTitle(e.target);
  };
  return (
    <>
      <PageHeader pageTitle={pageTitle} />
      <AfectContainer className="afectiuni">
        <AfectWrapper>
          <ColumnsArea>
            {dataC1.map((item, index) => {
              return (
                <div key={index}>
                  <AfectTitles id={item.id} onClick={modalHandlerOpen}>
                    {item.title}
                  </AfectTitles>
                </div>
              );
            })}
          </ColumnsArea>
          <ColumnsArea>
            {dataC2.map((item, index) => {
              return (
                <div key={index}>
                  <AfectTitles id={item.id} onClick={modalHandlerOpen}>
                    {item.title}
                  </AfectTitles>
                </div>
              );
            })}
          </ColumnsArea>
          {/* <ColumnsArea>
            <AfectTitles>
              <summary>ADD / ADHD</summary>{' '}
              <DetailsText>
                <p>
                  ADHD este diagnosticul care cuprinde grupul de simptome: lipsa
                  de atenție, hiperactivitate și impulsivitate, iar pacienții
                  prezintă diferențe specific ale creierului, în zonele
                  cerebrale care se ocupă cu controlul impulsurilor și
                  concentrarea atenției.
                </p>
                <ul>
                  <li>Prin neurofeedback obținem:</li>
                  <li>
                    - reducerea excitabilității motorii (reducerea
                    hiperactivității)
                  </li>
                  <li>
                    - creșterea accelerată a stabilității sistemului nervos,{' '}
                  </li>
                  <li>
                    - calmarea mentală (creșterea atenției, reducerea furiei a
                    nivelului de frustare),
                  </li>
                  <li>
                    - creșterea capacității de auto-control (scăderea
                    impulsivității, conștientizarea consecințelor faptelor)
                  </li>
                </ul>

                <p>
                  Antrenamentul Neurofeedback are un efect pozitiv în
                  tratamentul ADHD, deoarece creierul poate fi antrenat pentru
                  îmbunatățirea atenției, concentrării, controlulului agitației
                  și a izbucnirilor emoționale.
                </p>
              </DetailsText>
            </AfectTitles>
            <AfectTitles>
              <summary>Autism (TSA)</summary>
              <DetailsText>
                <p>
                  Creierele persoanelor cu TSA prezintă zone cu conectivitate
                  excesiv de mare și zone cu conectivitate deficitară.
                </p>
                <p>
                  Prin terapia cu <b>neurofeedback</b> creierul poate prin
                  auto-reglare să-și îmbunătățească conectivitatea neuronală și
                  este capabil să remedieze în mod semnificativ aceste anomalii
                  și să reducă simptomele autismului.
                </p>
                <p>
                  Terapia cu <b>Neurofeedback</b> poate remedia anomaliile din
                  activarea creierului, conducând la reducerea simptomelor și
                  îmbunătățirea funcțională (conform cercetărilor privind TSA).
                </p>
              </DetailsText>
            </AfectTitles>
            <AfectTitles>
              <summary>Anxietate</summary>
              <DetailsText>
                <p>
                  Anxietatea este adesea un indiciu a faptului că, creierul este
                  în alertă, iar sistemul nervos autonom este foarte activ și dă
                  multe simptome fizice neplăcute.
                </p>
                <p>
                  Anxietatea este adesea exprimată ca un sentiment de neliniște
                  sau panică și poate fi însoțită de mai multe simptome, cum ar
                  fi palpitații, transpirații sau agitare.
                </p>
                <p>
                  Simptomele fizice sunt declanșate prin sistemul nervos autonom
                  care controlează toate funcțiile de bază ale corpului (ritmul
                  cardiac, tensiunea arterială, respirația etc). Sistemul de
                  alarmă al creierului este dificil de oprit odată ce acesta a
                  fost supraactivat.
                </p>
                <p>
                  <b>Antrenamentul Neurofeedback</b> poate instrui eficient
                  creierul pentru o mai bună reglare a sistemului nervos, poate
                  rezolva stările de anxietate existente cât și rezistența
                  scăzută a sistemului nervos la stres.{' '}
                </p>
                <p>
                  Prin neurofeedback corectăm nivelul de excitare al sistemului
                  nervos central și diminuăm manifestările fizice și emoționale
                  ale stării de anxietate care răspund imediat (tensiunea
                  musculară, palpitațiile, hipertensiunea arterială).
                </p>
                <p>
                  Reducerea anxietății înseamnă refacerea calității somnului,
                  reglarea tonusului energetic, redobândirea performanței
                  profesionale.
                </p>
                <p>
                  Pofta de mâncare compulsivă, provocată de stres, cât și
                  dependența de dulciuri se corectează în doar cateva ședințe.
                </p>
              </DetailsText>
            </AfectTitles>
            <AfectTitles>
              <summary>Depresie</summary>
              <DetailsText>
                <p>
                  Cu antrenament neurofeedback, creierul practică modele mai
                  sănătoase de reglare a dispoziției sub supravegherea unui
                  clinician calificat.
                </p>
                <p>
                  Cei cu depresie observă adesea îmbunătățiri după doar câteva
                  sesiuni, dar pentru ca rezultatele antrenamentului să rămână
                  stabile, sunt necesare mai multe sesiuni, astfel încât
                  creierul să învețe să facă aceste modele sănătoase pe cont
                  propriu și să regleze starea de spirit independent.
                </p>
                <p>
                  Autoreglarea creierului poate fi o metodă eficientă de tratare
                  a depresiei și pentru persoanele care iau medicamente, dar
                  când încep neurofeedback, reducerea sau oprirea medicamentelor
                  prescrise trebuie făcută cu supravegherea medicului.
                </p>
                <p>
                  Terapia cu Neurofeedback îi poate ajuta pe cei care suferă de
                  depresie să-și recapete viața. Creierul se schimbă atunci când
                  sunt deprimați însă neurofeedback-ul îi poate ajuta să revină
                  la modele mai sănătoase, dând celor care suferă de depresie o
                  cale de ieșire din închisoarea minții lor.
                </p>
              </DetailsText>
            </AfectTitles>
            <AfectTitles>
              <summary>Tulburare obsesiv-compulsivă</summary>
              <DetailsText>
                <p>
                  Obiectivul pentru această tulburare este de a ajusta partea
                  creierului care este afectată să pună capăt repetiției
                  continue a gândurilor sau a comportamentelor.
                </p>
                <p>
                  Mulți profesioniști din domeniul sănătății care utilizează
                  neurofeedback-ul pentru a trata Tulburările obsesiv -
                  compulsive (TOC) remarcă scăderi semnificative ale simptomelor
                  clienților lor după antrenarea creierului.
                </p>
                <p>
                  Persoanele cu TOC după terapia cu neurofeedback nu mai trebuie
                  să se lupte pentru a opri gândurile și comportamentele
                  repetitive nedorite. Ei spun că mintea lor este mult mai
                  liniștită și mai calmă.
                </p>
                <p>
                  Prin antenamentul Neurofeedback se localizează zonele
                  creierului care cauzează disfuncții și sunt antrenate pentru a
                  crea modele mai sănătoase ale undelor cerebrale. Cu o
                  pregătire și o practică suficientă, creierul începe de fapt să
                  creeze aceste modele mai funcționale pe cont propriu.
                </p>
              </DetailsText>
            </AfectTitles>
            <AfectTitles>
              <summary>Tulburări de dispoziție - Bipolaritate</summary>
              <DetailsText>
                <p>
                  Antrenarea creierului cu neurofeedback învață creierul să
                  creeze modele mai sănătoase de funcționare și să mențină o
                  stare mai consistentă.
                </p>
                <p>
                  Acest lucru ajută persoana să învețe autoreglarea,
                  permițându-i să obțină o mai bună stabilizare a dispoziției.
                </p>
                <p>
                  După începerea antrenamentului cu neurofeedback clienții
                  observă că pot din nou să aibă încredere în creierul lor.
                  Clienții cu aceasta tulburare care au urmat terapie cu
                  neurofeedback au raportat mai puțină sensibilitate la
                  schimbările de dispoziție, capacitate crescută de concentrare
                  și manie redusă. Capacitatea lor de funcționare a crescut
                  deoarece au fost mai puțin reactivi și capabili tot mai des să
                  reacționeze și să acționeze în mod corespunzător.
                </p>
              </DetailsText>
            </AfectTitles>
            <AfectTitles>
              <summary>Traumă și Tulburări post-traumatice</summary>
              <DetailsText>
                <p>
                  În contextul funcției cerebrale trauma poate fi definită ca
                  orice eveniment sau experiență care schimbă viziunea persoanei
                  asura sa și a locului său în lume. Poate să apară ca urmare a
                  unui singur eveniment sau să se poată dezvolta treptat
                  datorită unui mediu amenințător sau singur.
                </p>
                <p>
                  Activitatea creierului modificată de evenimente traumatice,
                  poate fi o povară grea pentru a fi purtată. Trauma este în
                  general clasificată în două categorii. Cel mai frecvent
                  recunoscută este hipervigilența, mai puțin cunoscută este
                  înghețarea și disocierea.
                </p>
                <p>
                  Trauma se poate manifesta adesea ca o combinație a celor două,
                  deoarece sistemul nervos se schimbă între unul și celălalt. O
                  stare sporită de conștientizare face parte din răspunsul de
                  luptă, ducând la o stare de hipervigilență cronică. Această
                  stare este asemănătoare cu blocarea în "posturile de luptă"
                  permanente, resursele creierului sunt în alertă constantă,
                  provocând reacții inadecvate sau chiar agresive în situațiile
                  de zi cu zi.
                </p>
                <p>
                  Terapia cu neurofeedback funcționează la nivel subconștient
                  profund, rupând ciclul traumelor și simptomelor
                  post-traumatice. Neurofeedback-ul dă creierului instrumentele
                  necesare pentru a reinterpreta evenimentele traumatice trecute
                  (fără a trebui să vorbim despre ele, să le explorăm sau să le
                  retrăim).
                </p>
              </DetailsText>
            </AfectTitles>
            <AfectTitles>
              <summary>Tulburări de învățare</summary>
              <DetailsText>
                <p>
                  Studiile de cercetare arată că mai multe zone ale creierului
                  lucrează împreună în procesul de învățare. Aceste părți
                  separate ale creierului comunică reciproc la viteze extrem de
                  rapide. În cazul în care timpul de comunicare este chiar ușor
                  oprit, pot exista deficiențe în capacitatea de a învăța.
                </p>
                <p>
                  Noi cercetări arată că "formarea de conectivitate" pare să
                  îmbunătățească în mod constant dificultățile de învățare.
                </p>
                <p>
                  Neurofeedback-ul îmbunătățește de fapt abilitățile de învățare
                  prin antrenarea zonelor creierului responsabile cu abilitățile
                  de învățare sau de execuție, cum ar fi matematica, citirea și
                  prelucrarea auditivă și vizuală.
                </p>
                <p>
                  Antrenamentul cu neurofeedback poate îmbunătăți coordonarea și
                  comunicarea între diferitele zone ale creierului. Timpul
                  îmbunătățit în creier are un impact semnificativ asupra
                  abilității de a învăța. Neurofeedback vizează direct
                  coordonarea și comunicarea între zonele creierului pentru a
                  îmbunătăți învățarea.
                </p>
              </DetailsText>
            </AfectTitles>
            <AfectTitles>
              <summary>Traumatism / Accident vascular cerebral (AVC)</summary>
              <DetailsText>
                <p>
                  În mod tradițional, au existat puține opțiuni formale de
                  reabilitare pentru persoanele care au suferit un accident
                  vascular cerebral sau leziuni cerebrale traumatice cu mai mult
                  de doi ani în urmă. Experții au crezut că se pot face progrese
                  în primii doi ani. Uneori poate fi nevoie de o terapie
                  suplimentară: fizică, vorbire sau ocupațională, dar nu se
                  așteaptă, de obicei, să apară progrese semnificative la acel
                  moment.
                </p>
                <p>
                  Terapia cu Neurofeedback poate aduce îmbunătățiri vizibile,
                  chiar și după doi ani. Neurofeedback devine din ce în ce mai
                  recunoscut ca o modalitate de tratament care poate ajuta
                  reparația creierului însuși, chiar și la mai mulți ani după ce
                  a acesta a suferit o deteriorare.
                </p>
              </DetailsText>
            </AfectTitles>
            <AfectTitles>
              <summary>Epilepsie</summary>
              <DetailsText>
                <p>
                  Istoricul a peste 30 de ani de cercetare în ceea ce priveste
                  utilizarea neurofeedback-ului în cazul persoanelor cu
                  epilepsie este o dovadă că aceasta metodă de terapie poate
                  reduce sau să elimine comportamentele epileptice.
                </p>
                <p>
                  Antrenarea creierului este un exercițiu eficient care ajută la
                  consolidarea interconectării neuronale astfel încât multe
                  probleme ale creierului pot fi reduse sau eliminate complet.
                </p>
                <p>
                  Ca și în cazul exercițiilor fizice este nevoie de o practică
                  consistentă pentru a obține rezultate. Odată ce creierul este
                  mai stabil adesea antrenarea acestuia cu neurofeedback poate
                  fi oprită. În situații mai complicate, unii oameni beneficiază
                  de "sesiuni de întreținere" periodice pentru a-și menține buna
                  funcționare a creierului.
                </p>
                <p>
                  Antrenamentul Neurofeedback ajută creierul să funcționeze mai
                  bine prin autoreglarea și remodelarea acestuia și are un
                  succes dovedit în problematica convulsiilor, ceea ce poate fi
                  o opțiune viabilă de tratament pentru mulți oameni care suferă
                  de o tulburare convulsivă.
                </p>
              </DetailsText>
            </AfectTitles>
          </ColumnsArea>

          <ColumnsArea leftSide={true}>
            <AfectTitles>
              <summary>Durere cronică</summary>
              <DetailsText>
                <p>
                  Durerea care durează 3 luni sau mai mult este considerată a fi
                  cronica. Durerea este un mod al organismului uman de a
                  reacționa atunci când nu este în regulă ceva. În timp ce este
                  normal ca organismul uman să trimită semnale de durere în caz
                  de traumatisme sau boli, durerea care persistă după o boală
                  sau un traumatism, nu este normală.
                </p>
                <p>
                  Durerile cornice continuă să persiste și la săptămâni, luni
                  sau ani după recuperare. Unele persoane prezintă dureri
                  cronice fără nici un traumatism sau boală care să le-o
                  declanșeze. Durerea cronică poate apărea oriunde în organism
                  și poate varia de la ușoară și sâcâitoare, până la foarte
                  severă influențând starea de dispoziție și abilitatea de a
                  funcționa normal.
                </p>
                <p>
                  Terapia cu Neurofeedback este o formă non-invazivă care poate
                  atenua durerea, ducând până la dispariția ei.
                </p>
              </DetailsText>
            </AfectTitles>
            <AfectTitles>
              <summary>Migrene / Cefalee</summary>
              <DetailsText>
                <p>
                  Antrenamentul cu neurofeedback poate fi foarte eficient în
                  reducerea intensității și frecvenței migrenelor pe termen
                  lung, oferind ajutor persoanelor care suferă de migrene.
                </p>
                <p>
                  Durerile de cap răspund rapid la neurofeedback, intensitatea
                  se reduce progresiv de-a lungul terapiei.
                </p>
                <p>
                  După un număr de minim 20 ședințe, efectele dobândite rămân
                  permanente. Stabilizând creierul, durerile de cap și alte
                  manifestări ale instabilității cerebrale dispar (amețeli,
                  vertij, atacuri de panică, variații de dispoziție sau
                  energie).
                </p>
              </DetailsText>
            </AfectTitles>
            <AfectTitles>
              <summary>Ticuri nervoase, verbale, motorii</summary>
              <DetailsText>
                <p>
                  <b>Ticurile nervoase</b> sunt spasme rapide, stereotipe și
                  recurente.
                </p>
                <p>
                  <b>Ticurile motorii</b> sunt mișcări involuntare și rapide
                  care apar mai ales pe fond de stres sau când persoana este
                  obosită sau plictisită. Cele mai întâlnite sunt clipitul,
                  scuturatul piciorului, ridicatul umerilor.
                </p>
                <p>
                  <b>Ticurile verbale </b> sunt vocalize rapide și involuntare.
                  Cele simple sunt tușitul, dresul vocii, cele complexe se
                  referă la fluierături, coprolalia (repetarea cuvintelor
                  obscene), ecolalia (repetarea cuvintelor tocmai auzite),
                  palilalia (repetarea cuvintelor sau sunetelor proprii).
                </p>
                <p>
                  <b>Ticurile mentale</b> se referă la orice gând conștient pe
                  care o persoană simte nevoia de a-l repeta.
                </p>
                <ul>
                  <li>
                    Ticurile se asociază cu diverse comportamente cum ar fi:
                  </li>
                  <li>- obsesiile (repetarea gândurilor)</li>
                  <li>
                    - comportament ritualic (atingeri repetate, repetarea unor
                    fraze, verificarea ușii)
                  </li>
                  <li>
                    - dificultăți în concentrare cu sau fără hiperactivitate
                    (neatenția, incapacitatea de a termina un lucru început,
                    mișcarea continuă)
                  </li>
                  <li>
                    - tulburări de învățare (dificultăți în scriere, citire,
                    probleme de percepție)
                  </li>
                  <li>
                    -tulburări de somn (treziri frecvente sau vorbit în somn).
                  </li>
                </ul>
                <p>
                  Ticurile se accentuează în situații stresante și scad în
                  intensitate când persoana este relaxată iar în timpul somnului
                  dispar complet.
                </p>
                <p>
                  Cea mai cunoscută afecțiune este <b>Sindromul Tourette</b>. Cu
                  cât nivelul de stres va fi mai scăzut, cu atat aceste
                  manifestări de ordin psihologic vor tinde să se diminueze și
                  să dispară în timp.
                </p>
                <p>
                  Cu ajutorul <b>antrenamentului Neurofeedbaack-ului</b> se
                  obține o ameliorare semnificativă a simptomatologiei prin
                  reducerea nivelului de agitație a creierului, creșterea
                  capacității de auto-control și inhibiție voluntară.
                </p>
              </DetailsText>
            </AfectTitles>
            <AfectTitles>
              <summary>Tinitus</summary>
              <DetailsText>
                <p>
                  Zgomotele de care se plâng multe persoane și care apar în
                  lipsa unui stimul sonor extern, sunt descrise ca vâjâieli,
                  pocnituri, foșnete, târâit, ticăit.
                </p>
                <p>
                  De multe ori tinitusul este dependent de starea de stres sau
                  de situație. Dacă o astfel de conexiune există, atunci
                  creierul este cel ce dictează evenimentele. Dependența de o
                  stare înseamnă că o stabilitate mai bună a stărilor creierului
                  duce la ameliorarea situației.
                </p>
                <p>
                  Chiar dacă tinitusul nu răspunde mereu la terapia prin
                  neurofeedback are loc totuși modificarea percepției creierului
                  asupra durerii.
                </p>
              </DetailsText>
            </AfectTitles>
            <AfectTitles>
              <summary>Amețeală - Vertij</summary>
              <DetailsText>
                <p>
                  Vertijul este o falsă senzație de mișcare asociată cu
                  tulburări de echilibru sau de mers descrisă frecvent drept o
                  “amețeală” sau “o senzație de rotire” a persoanei sau a
                  mediului înconjurător sau drept senzație că “îți fuge pământul
                  de sub picioare”. Alte persoane afectate de vertij simt că
                  “sunt trase într-o parte”. Așadar manifestarile vertijului
                  sunt diferite, deoarece acesta nu este o boală în sine, ci un
                  simptom.
                </p>
                <p>
                  Vertijul este corelat cu tulburări de funcționare a centrilor
                  nervoși cerebrali de aceea răspunde foarte bine la
                  neurofeedack. Aceasta metodă de terapie este o variantă
                  naturală și eficientă atunci când nu există cauze structurale.
                </p>
                <p>
                  Din perspectiva neurofeedback-ului, vertijul este văzut ca un
                  eveniment electric episodic, de mare intensitate, asemănător
                  cu cel al migrenelor.
                </p>
                <p>
                  Neurofeedback-ul are efect stabilizator asupra creierului,
                  astfel că ajută creierul să împiedice apariția acestor
                  evenimente și să reducă frecvența și intensitatea crizelor de
                  vertij, de multe ori până la dispariția lor.
                </p>
              </DetailsText>
            </AfectTitles>
            <AfectTitles>
              <summary>Oboseala cronică - Burnout</summary>
              <DetailsText>
                <p>
                  Sindromul burnout se referă la stresul cronic ce epuizează
                  corpul fizic și emoțional, făcându-ne să ne simțim ineficienți
                  și nefericiți.
                </p>
                <p>
                  Atunci când o persoană suferă de Burnout simte că „i s-au
                  terminat bateriile”, că nu mai este capabilă să funcționeze
                  eficient nici la nivel profesional, nici la nivel personal.
                  Este important să știm că epuizarea de acest tip apare
                  treptat, făcând-o mai greu și mai tarziu de recunoscut.
                  Legătura dintre muncă și sănătate este parte a sănătății
                  cognitive și mentale a angajaților de la toate nivelurile.
                </p>
                <p>
                  Antrenamentul Neurofeedback găsește aplicații specifice și
                  ajută angajații ca parte a managementului sănătății la locul
                  de muncă.
                </p>
              </DetailsText>
            </AfectTitles>
            <AfectTitles>
              <summary>Nevralgia de trigemen</summary>
              <DetailsText>
                <p>
                  Nevralgia este durerea severă de-a lungul unui nerv.{' '}
                  <b>Nevralgia de trigemen</b> (cunoscută și sub denumirea de
                  tic Douloureux) este o afecțiune nervoasă care implică dureri
                  profunde faciale asemănătoare cu electroșocurile, cel mai des
                  fiind localizate în partea inferioară a feței și a
                  maxilarului. Totuși simptomele pot să apară oriunde în
                  apropiere de nas, urechi, ochi sau buze.
                </p>
                <p>
                  e consideră că nevralgia de trigemen este una dintre cele mai
                  dureroase condiții umane. Nervul trigemen (al cincilea nerv
                  cranian) este unul dintre principalii nervi ai feței. De
                  fiecare parte a feței există câte un nerv. Acesta traversează
                  craniul, de la creier până în fața urechii.{' '}
                </p>
                <ul>
                  <li>
                    Denumirea de nerv trigemen provine de la faptul că este
                    împărțit în trei ramuri principale:
                  </li>
                  <li>
                    - nervii din prima ramură merg spre scalp, frunte și în
                    jurul ochilor
                  </li>
                  <li>
                    - nervii din a doua ramură se întind în zona din jurul
                    obrazului
                  </li>
                  <li>- nervii din a treia ramură acoperă zona maxilarului.</li>
                </ul>
                <p>
                  Ramurile nervului trigemen controlează senzațiile tactile și
                  cele dureroase de la nivelul creierului la față, de la dinți
                  la gură, mușchii folosiți pentru mestecat, producția salivară
                  și lacrimală.
                </p>
                <p>
                  Apelând la terapia cu neurofeedback se poate obține o bună
                  ameliorare și reducerea medicației. Chirurgia nu mai este
                  necesară, în multe cazuri.
                </p>
              </DetailsText>
            </AfectTitles>
            <AfectTitles>
              <summary>Astmul bronșic</summary>
              <DetailsText>
                <p>
                  Astmul este o boală inflamatorie cronică care afectează căile
                  respiratorii și se manifestă printr-o hipereactivitate
                  bronșică ce conduce la episoade recurente de respirație
                  șuierătoare (wheezing), dispnee, senzație de presiune toracică
                  și tuse, în special noaptea și dimineața devreme. Tulburările
                  psihice asociate mai frecvent sunt anxietatea și tulburarea de
                  comportament. Nu se știe însă dacă astmul duce la probleme
                  psihice sau problemele psihice cauzează astmul.
                </p>
                <p>
                  Antrenamentul cu Neurofeedback poate ajuta în reducerea
                  frecvenței și intensității crizelor de astm bronșic, prin
                  creșterea stabilității sistemului nervos autonom. Pacienții
                  ajung să utilizeze inhalatoarele foarte rar sau deloc.
                </p>
              </DetailsText>
            </AfectTitles>
            <AfectTitles>
              <summary>Insomnie / Tulburări ale somnului</summary>
              <DetailsText>
                <p>
                  <b>Insomnia</b> poate fi o stare tranzitorie în perioade de
                  stres, îngrijorare sau boală, însă pentru unele persoane, este
                  o afecțiune care influențează viața de zi cu zi cu oboseala,
                  starea proastă și lipsa de concentrare. Poate avea un impact
                  mare asupra vieții profesionale, a relațiilor și a
                  activităților sociale.
                </p>
                <p>
                  <b>Dificultățile de somn</b> pot fi: probleme de adormire,
                  probleme de somn toată noaptea, trezirea prea devreme, somn
                  prelungit diurn. În timpul somnului, creierul are șansa de a
                  sorta, de a acorda prioritate și de a completa toate
                  informațiile luate în timpul zilei. Funcționarea mintală scade
                  aproape de două ori mai rapid decât performanța fizică cu
                  scăderea somnului.{' '}
                </p>
                <p>
                  Motivele pentru dificultățile de somn sunt variate. Pot fi
                  cauzate de stres, anxietate, traume sau gândire obișnuită.
                  Oricare ar fi cauza, creierul și-a pierdut capacitatea de a
                  trece în starea corectă de somn.
                </p>
                <p>
                  Neurofeedback-ul este foarte eficient pentru tratarea
                  tulburărilor de somn. Creierul poate fi ajutat să se adapteze
                  la un nivel în care organismul se poate calma și relaza. Prin
                  antrenarea controlului creierului și a flexibilității,
                  tranziția sistemului nervos central de la activare la odihnă
                  este lină și se întâmplă în mod natural.
                </p>
              </DetailsText>
            </AfectTitles>
            <AfectTitles>
              <summary>Adicții și Abuz de substanțe</summary>
              <DetailsText>
                <p>
                  Mulți oameni cred că dependența se datorează lipsei de
                  auto-disciplină, dar dependența este o condiție fiziologică și
                  este extrem de dificil să se schimbe. Dependenții se luptă cu
                  emoții cum ar fi vinovăția, rușinea, furia și frustrarea, care
                  le împiedică în continuare recuperarea.
                </p>
                <p>
                  Dependența este o boală a creierului, o tulburare de sănătate
                  mintală care afectează grav o persoană în toate aspectele
                  vieții sale. Persoanele cu dependență suferă frecvent de alte
                  tulburări de sănătate mintală, cum ar fi depresia, tulburarea
                  bipolară și anxietatea.
                </p>
                <p>
                  În timpul momentelor de stres, o persoană cu dependență
                  trebuie să poată rămâne calmă, rezonabilă și rațională pentru
                  a putea face alegeri adecvate.
                </p>
                <p>
                  Antrenamentul Neurofeedback învață creierul unei persoane să
                  opereze într-o stare calmă, rațională, chiar și în situații
                  stresante. Este o terapie non-invazivă, fără efecte secundare.
                  Conform studiilor de cercetare, integrarea antrenamentului cu
                  neurofeedback în programul de tratament a demonstrat o rată
                  mai mare de succes și o rată mai scăzută de recidivă, decât în
                  cazul programelor de tratament fără neurofeedback.
                </p>
                <p>
                  Clinicienii care utilizează neurofeedback raportează că mai
                  mult de 85% dintre clienții lor, care se antrenează cu
                  neurofeedback își îmbunătățesc capacitatea de a se concentra,
                  de a-și regla comportamentul și de a reduce impulsivitatea.
                </p>
                <p>
                  Deoarece neurofeedback-ul ajută o persoană să-și gestioneze
                  emoțiile, starea de spirit și să-și îmbunătățească somnul,
                  adăugându-l în cadrul programului de tratament al dependenței,
                  putem ajuta pacientul să fie mai în control, să obțină succes
                  și să evite recidiva.
                </p>
              </DetailsText>
            </AfectTitles>
          </ColumnsArea> */}
        </AfectWrapper>
      </AfectContainer>
    </>
  );
}

export default Afectiuni;
