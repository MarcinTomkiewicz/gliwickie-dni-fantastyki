import { Link } from "react-router-dom";

export const pageTitles = [
  { name: "/", title: "Strona Główna" },
  { name: "/about", title: "O Gliwickich Dniach Fantastyki" },
  { name: "/place", title: "Czas i miejsce" },
  { name: "/rules", title: "Regulamin" },
  { name: "/parents", title: "Dla rodziców" },
  { name: "/agenda", title: "Program Konwentu" },
  { name: "/blocks", title: "Bloki Programowe" },
  { name: "/the_game", title: "Gra Konwentowa" },
  { name: "/cosplay", title: "Konkurs Cosplay" },
  { name: "/submit_event", title: "Zgłoszenia atrakcji" },
  { name: "/vips", title: "Goście VIP" },
  { name: "/clubs", title: "Kluby i stowarzyszenia" },
  { name: "/conventions", title: "Konwenty" },
  { name: "/vendors", title: "Regulamin dla wystawców" },
  { name: "/submit_vendor", title: "Zgłoszenia wystawców" },
  { name: "/helpers", title: "Zostań helperem" },
  { name: "/fun_stuff", title: "Korzyści i regulamin" },
  { name: "/submit_helper", title: "Zgłoszenia helperów" },
  { name: "/media", title: "Media o Konwencie" },
  { name: "/press", title: "Biuro Prasowe" },
  { name: "/media_entrance", title: "Akredytacje medialne" },
];

export const formLabels = [
  { name: "name", label: "Imię" },
  { name: "surname", label: "Nazwisko" },
  { name: "email", label: "Adres e-mail" },
  { name: "nick", label: "Pseudonim" },
  { name: "phone", label: "Numer telefonu" },
  { name: "facebook", label: "Link do Facebooka" },
  { name: "company", label: "Nazwa firmy" },
  { name: "birthDate", label: "Data urodzenia" },
  { name: "experienceAsVolounteer", label: "Doświadczenie jako wolontariusz?" },
  { name: "startDate", label: "Od kiedy możesz pomagać na GDF" },
  { name: "endDate", label: "Do kiedy możesz z nami zostać na GDF" },
  { name: "remarksAboutDates", label: "Uwagi co do dat i godzin" },
  { name: "diet", label: "Dieta" },
  { name: "generalRemarks", label: "Uwagi i przeciwwskazania" },
  { name: "termsConsent", label: "Akceptacja regulaminu" },
  { name: "dataProcessingConsent", label: "Akceptacja przetwarzania danych" },
];

export const legal = {
  rodo: "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu przyjęcia niniejszego zgłoszenia na podstawie pkt 32, pkt 42, pkt 43, pkt 171 preambuły, art. 4 pkt 11, art. 5 ust. 1 lit. b, art. 7 rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE - Dz.U. UE. L. z 2016 r. Nr 119, str. 1. Oświadczam, że zostałem/am poinformowany/a o przysługującym mi prawie dostępu do treści moich danych oraz ich poprawiania, wycofania zgody na ich przetwarzanie w każdym czasie. Administratorem danych osobowych gromadzonych i przetwarzanych w ramach realizacji zgłoszeń jest Europejskie Forum Studentów AEGEE-Gliwice z siedzibą w Gliwicach przy ul. Pszczyńskiej 85/10 44-100 Gliwice. Dane osobowe przetwarzane będą w celu organizacji wydarzenia Gliwickie Dni Fantastyki odbywającego się w Gliwicach oraz w celach statystycznych i nie będą udostępniane podmiotom trzecim. Podanie danych osobowych jest dobrowolne, jednak odmowa ich podania skutkować będzie brakiem możliwości przyjęcia niniejszego zgłoszenia.",
  eventRules: `Akceptuję postanowienia ${(
    <Link to="/rules">Regulaminu</Link>
  )}.`,
};

export const guestsVip = [
  {
    name: "Marcin",
    surname: "Podlewski",
    photo: `${process.env.PUBLIC_URL + "/guests/podlewski.jpg"}`,
    descr: [
      "Miał zostać operatorem obrabiarek skrawających. Zdał jednak na filozofię, by wreszcie wylądować na studiach dziennikarskich. Nadal czuje jednak sentyment do smarów, zgrzebnych drelichów i noży kątowych tnących stal na śrubki.",
      "Debiutował sto lat temu na łamach magazynu LAMPA Pawła Dunina-Wąsowicza, by zapaść na kilka lat na twórczy stupor. Jak sam mówi, reset przeżył w trakcie pisania Happy END — swojej debiutanckiej powieści, mieszaniny horroru, fantastyki i postapo wydanej w 2013 roku. W tym samym roku opowiadaniem Edmund po drugiej stronie lustra (nominacja do Nagrody Zajdla 2013) wygrał konkurs na XXX-lecie Nowej Fantastyki. Nadal publikuje zarówno w tym, jak i w innych periodykach, a kolejne opowiadania ukazały się w wielu antologiach poświęconych tematyce fantastycznej.",
      "Do space opery przymierzał się długo. Przygotowanie pełnego researchu książki zajęło mu sporo czasu: poczynając od realnie istniejących galaktycznych map, przez całą strukturę opisywanego świata, po zagadnienia astronautyki kończąc. Tak powstał Skokowiec — pierwsza część tetralogii Głębia o świecie, w którym opanowana niegdyś przez ludzi Droga Mleczna została zniszczona niemal w stu procentach przez serię potwornych wojen, a nadprzestrzenne skoki przez tytułową Głębię mogą prowadzić do zgubnego w skutkach szaleństwa. Skokowiec był nominowany do Książki Roku 2015 Nowej Fantastyki, a kolejne tytuły serii – Powrót, Napór i Bezkres otrzymały nominację do książki roku serwisu Lubimy Czytać.",
      "Seria Głębia to zdecydowanie jedna z największych niespodzianek w rodzimej fantastyce w ostatnich latach. Autor, po ukończeniu cyklu GŁĘBI bestsellerowym tomem Bezkres, pisze obecnie nowy cykl fantasy o tytule Księga Zepsucia, którego pierwszy tom pojawił się na rynku w 2019 roku, a drugi – finałowy – niebawem zostanie wydany. Autor ma także kilka innych, oczekujących projektów – jeden z nich jest już w trakcie tworzenia.",
      "Autor mieszka z żoną, synkiem, psem Bzikiem i Prozakiem: kociakiem antydepresyjnym, którego rodzina przygarnęła po stracie Nerwosola.",
    ],
    fanpage: "Marcin Podlewski wklepuje",
    fpLink: "https://www.facebook.com/profile.php?id=100063478062546",
  },
  {
    name: "Marcin",
    surname: "Przybyłek",
    photo: `${process.env.PUBLIC_URL + "/guests/przybylek.jpg"}`,
    descr: [
      'Marcin Sergiusz Przybyłek (ur. 1968), znany także jako Martin Ann / Martin Ann Drimm, lekarz medycyny, wieloletni pracownik koncernu farmaceutycznego, trener i konsultant biznesowy, wizjoner, filozof. Autor sagi science fiction "Gamedec", antyporadnika dla menadżerów "Sprzedaż albo śmierć?!", futurystycznego kryminału "CEO Slayer", powieści "Kalina i Kaj. Książka teoretycznie dla dzieci", zbioru anegdot dla graczy "Grao Story", epickiej dylogii "Orzeł Biały" oraz "Symfonii życia". We wrześniu 2021 roku wydana została przez Anshar Studios oparta na jego prozie gra wideo "Gamedec". Pyramid Games rozpoczęło prace nad grą wideo "CEO Slayer". Aktorsko realizuje się w serialu "19+" (rola Aleksa). Zainteresowany psychologicznym, technologicznym oraz finansowym rozwojem ludzkości, rozwija swoje wizje w książkach, wykładach i podczas szkoleń. Od trzydziestu sześciu lat w związku z żoną Anną, z którą mają dwudziestoletnią córkę, Kalinę.',
    ],
    fanpage: "",
    fpLink: "",
  },
  {
    name: "Michał",
    surname: "Stonawski",
    photo: `${process.env.PUBLIC_URL + "/guests/stonawski.jpg"}`,
    descr: [
      'Pisarz, game/narrative designer, badacz zjawisk paranormalnych. W 2020 roku jego książka “Paranormalne: prawdziwe historie nawiedzeń" uzyskała status bestsellera empiku, sprzedając się w ponad 20 000 egzemplarzy, a w przygotowaniu znajduje się kontynuacja, której premiera zaplanowana jest na 15.06.2022. Na swoim koncie ma blisko 50 publikacji beletrystycznych w formie opowiadań (m.in. w piśmie "Nowa Fantastyka"), blisko 100 artykułów publicystycznych, oraz dwie książki. Jego twórczość tłumaczona była na niemiecki i czeski, a opowiadania doczekały się również adaptacji audio w produkcjach portalu audioteka.pl. Organizator konwentów fantastyki, w latach 2013-2016 prezes nagrody polskiej literatury grozy im. Stefana Grabińskiego. Jako projektant gier, poza projektami Alrauna Studio które współprowadzi, pracował przy produkcji takich gier jak “Model Builder" (2022) czy “Car Detailing Simulator" (2022), obecnie pracuje również nad zapowiedzianą grą “Cooking Championship".',
    ],
    fanpage: "Michał Stonawski - Pisarz",
    fpLink: "https://www.facebook.com/MichalStonawskiPisze/",
  },
  {
    name: "Tomasz",
    surname: "Duszyński",
    photo: `${process.env.PUBLIC_URL + "/guests/duszynski.png"}`,
    descr: [
      "Dziennikarz (pracował w RMF FM i Radiu Aplauz), pisarz, scenarzysta gier komputerowych (m. in. Dead Island Riptide), a w wolnych chwilach maratończyk.",
      "Zdobywca Złotego Pocisku Publiczności za kryminał retro Glatz. 1 miejsca, Kryminalnego Magla za najlepszy kryminał roku 2019 (Glatz). Autor nominowany do Nagrody Wielkiego Kalibru i zdobywca wyróżnienia Kryminalnej Piły za Glatz. Współtwórca Wrocławskiego Tramwaju Gwiazd – wyjątkowego projektu wrocławskiej, ruchomej alei gwiazd, do której zapraszane były gwiazdy filmowe, muzyczne i sportowe. Pomysłodawca i współorganizator Strzelińskiego Festiwalu Literatury.",
    ],
    fanpage: "Tomasz Duszyński",
    fpLink: "https://www.facebook.com/duszynskitomasz",
  },
  {
    name: "Kazimierz",
    surname: "Kyrcz Jr",
    photo: `${process.env.PUBLIC_URL + "/guests/kyrcz.jpg"}`,
    descr: [
      'Redaktor, publicysta, poeta, tłumacz oraz autor kryminałów i horrorów. Tłumaczony na angielski, rosyjski, czeski i słowacki. Opublikował mnóstwo książek w różnych duetach, zbiór wierszy "Punk Ogito", zbiory opowiadań "Femme fatale" i "Okruchy mroku" oraz powieści "Podwójna pętla", "Dziewczyny, które miał na myśli", "Chłopcy, których kochano za mocno", "Kobiety, które nienawidzą" i "Mężczyźni w potrzasku".',
    ],
    fanpage: "Kazimierz Kyrcz Jr",
    fpLink: "https://www.facebook.com/AutorKazimierzKyrczJr",
  },
  {
    name: "Krzysztof",
    surname: "Haladyn",
    photo: `${process.env.PUBLIC_URL + "/guests/haladyn.jpg"}`,
    descr: [
      "Urodzony w 1983 roku we Wrocławiu. Z wykształcenia dziennikarz i specjalista public relations, zawodowo żadnej pracy się nie boi. Szeroko pojętą literaturą zainteresowany odkąd uznał, że tata zbyt szybko zasypia czytając mu na dobranoc. Oprócz książek uwielbia gry, zarówno te na planszy jak i na monitorze. Nie gardzi także dobrym filmem. ",
      "Dwie wizyty w Strefie Wykluczenia wokół Czarnobylskiej AES przypłacił utratą owłosienia w górnej części czaszki, więc teraz chciałby jechać w jakieś bezpieczniejsze miejsce – myśli o Nowej Ziemi lub okolicach zakładów Majak.",
      'Za kordon Fabrycznej Zony wdarł się przebojem z konkursu debiutantów. Po spektakularnym rajdzie przez Zonę ruszył do cyfrowego Polis – i cyberpunkową powieścią "Cyfrak" podbił serca kolejnych fanów. W "Ostatnim namaszczeniu" udowodnił, że mariaż historii i magii to to, co tygryski lubią najbardziej.',
      'Teraz wraca z mroźną, postapokaliptyczną "Hordą".',
    ],
    fanpage: "Krzysztof Haladyn legalny fanpage",
    fpLink: "https://www.facebook.com/Krzysztof.Haladyn.fanpage",
  },
  {
    name: "Robert M.",
    surname: "Wegner",
    photo: `${process.env.PUBLIC_URL + "/guests/wegner.jpg"}`,
    descr: [
      'Debiutował w 2002 r. opowiadaniem Ostatni lot Nocnego Kowboja opublikowanym w 19. numerze miesięcznika "Science Fiction". Jego debiutem książkowym był wydany w 2009 zbiór "Opowieści z meekhańskiego pogranicza. Północ–Południe", którego kontynuacją był wydany w 2010 zbiór "Opowieści z meekhańskiego pogranicza. Wschód–Zachód". W 2012 r. ukazała się pierwsza powieść osadzona w zarysowanych wcześniej realiach Meekhanu pt. "Niebo ze stali". Wszystkie te książki ukazały się nakładem wydawnictwa Powergraph.',
      'Mąż fantastycznej żony i ojciec dwóch niesamowitych córek, od lat mieszkający i pracujący na Śląsku. Laureat licznych nagród literackich, m.in. Nagroda Fandomu Polskiego imienia Janusza A. Zajdla, Srebrnego Wyróżnienia, przyznanego przez Jury Nagrody Literackiej im. Jerzego Żuławskiego, nagrody Sfinks. Najbardziej znany z cyklu fantasy "Opowieści z meekhańskiego pogranicza" obejmującego jak na razie dwa tomy opowiadań i trzy powieści.',
    ],
    fanpage: "",
    fpLink: "",
  },
  {
    name: "Paweł",
    surname: "Mateja",
    photo: `${process.env.PUBLIC_URL + "/guests/mateja.jpeg"}`,
    descr: [
      'Ślązak zawodowo związany z branżą IT, w wolnych chwilach podcaster i redaktor serwisu Carpe Noctem. Fascynat tematów paranormalnych, mistycznych, gnostycznych, niesamowitych i cudownych. W 2021 nakładem Wydawnictwa IX opublikował "Nocne", zbiór opowiadań składający się z koszmarów i pająków. W 2022 planowana jest premiera jego debiutanckiej powieści. "Plama światła" będzie niosła pociechę rozpuszczenia świadomości w kosmicznej jedni. Lubi medytację, crossfit w Hellwoodzie i jak sobie drzewa rosną.',
    ],
    fanpage: "Paweł Mateja",
    fpLink: "https://www.facebook.com/matejaposting",
  },
  {
    name: "Agnieszka",
    surname: "Graca",
    photo: `${process.env.PUBLIC_URL + "/guests/graca.jpg"}`,
    descr: [
      'Podwójna filolożka (romanistka i anglistka), autorka opowiadań, głównie kryminalnych. Mieszkała w Gliwicach, obecnie w Krakowie. Publikowała w antologiach "Lukrecja z Kamiennej Grobli" (2017), "Niebyt i inne historie kryminalne" (2018), "City 5" (2022), "Małe życie po wielkiej zmianie" (2022) a także w magazynie literacko-kryminalnym "Pocisk" i na portalu wysokieobcasy.pl. Laureatka konkursów literackich (Góry Literatury, Międzynarodowy Festiwal Kryminału, Afera Kryminalna, Szkoła Letnich Zabójców, konkurs na pomysł kontynuacji sagi Millennium w ramach Międzynarodowego Festiwalu Literatury APOSTROF). Niedługo ukaże się jej pierwsza powieść.',
    ],
    fanpage: "",
    fpLink: "",
  },
  {
    name: "Jakub",
    surname: "Turkiewicz",
    photo: `${process.env.PUBLIC_URL + "/guests/turkiewicz.png"}`,
    descr: [
      'Z wykształcenia historyk, a z zamiłowania fantasta. Autor popularnonaukowej książki na temat historii fandomu Star Wars pt. "Wojna gwiazd" oraz powieści SF "Chciej mnie zawsze".  Publikował cykliczne artykuły na temat filmów science fiction i fandomu "Gwiezdnych wojen" w magazynie "Sfera", okazjonalnie współpracował też z innymi czasopismami, gdzie popularyzował wiedzę na temat kolekcjonerstwa fantastycznych gadżetów. Prowadził humorystyczną stronę starwarsy.pl, która z czasem przerodziła się w wirtualne muzeum pamiątek po polskiej wersji zjawiska Star Wars i przygotowywał artykuły publikowane na stronie efantastyka.pl. W roku 2018, wspólnie z reżyserem Radosławem Salamończykiem, zrealizował film dokumentalny "Wojna gwiazd". Pisuje opowiadania – debiutował w "Nowej Fantastyce", jego teksty ukazywały się też w miesięczniku "Science Fiction Fantasy i Horror".',
    ],
    fanpage: "",
    fpLink: "",
  },
  {
    name: "Jakub",
    surname: "Ćwiek",
    photo: `${process.env.PUBLIC_URL + "/guests/cwiek.jpg"}`,
    descr: [
      "Pisarz, stand-uper, scenarzysta, podróżnik. Debiutował zbiorem opowiadań Kłamca, który doczekał się pięciu kolejnych tomów i multimedialnego uniwersum. W 2007 roku ukazał się kryminał grozy Liżąc ostrze, a rok później horror Ciemność płonie (aby go napisać spędził pół roku wśród bezdomnych na dworcu w Katowicach). Stworzył m.in. czterotomowy cykl Chłopcy (2012-2015) oraz dwutomowe Dreszcz (2013-2014) i Grimm City (2016-2017). Dziesięciokrotnie nominowany do Nagrody im. Janusza A. Zajdla, zdobył ją w 2012 roku. Napisał też thriller Szwindel (Marginesy 2019), a z Adamem Bigajem Bezpańskiego. Balladę o byłym gliniarzu (Marginesy 2018), oraz thriller psychologiczny Topiel (Marginesy 2020), uzupełniony słuchowiskiem dla Storytel Topiel: Dom w głębi lasu. Współautor (wspólnie z Wojciechem Chmielarzem) słuchowiska Skowyt (Audioteka 2021) Zdobywca statuetki Golden Mic w Kategorii Najlepszy debiut w Internecie 2020. Autor powieści sensacyjnej Drelich. Prosto w splot (Marginesy 2021).",
      "Najnowsza książka Panie Czarowne ukazała się nakładem wydawnictwa SQN w 2021.",
    ],
    fanpage: "Jakub Ćwiek. Dosłownie.",
    fpLink: "https://www.facebook.com/JakubCwiekOfficial",
  },
  {
    name: "Marcin",
    surname: "Sindera",
    photo: `${process.env.PUBLIC_URL + "/guests/sindera.jpg"}`,
    descr: [
      'Autor trylogii historyczno-fantastycznej o przygodach wojownika Draconisa, rozgrywających się w czasach przed panowaniem księcia Mieszka I. W skład cyklu wchodzą następujące powieści: "Wróżda" (2020), "Żmij"(2021) i "Pożoga"(2022), wydane przez Wydawnictwo Lira.  W 2022 roku zaprojektował i wydał grę RPG pt. "Glina – kryminalna gra fabularna". W przeszłości był pomysłodawcą i koordynatorem minikonwentu "Bebok - śląskie dni z grami fabularnymi i planszowymi". Mistrz gry, fan gier planszowych, rowerzysta, pasjonat górskich wycieczek i miłośnik progresywnego rocka.',
    ],
    fanpage: "",
    fpLink: "",
  },
];

export const clubs = [
  {
    name: "Liga ZMG",
    photo: `${process.env.PUBLIC_URL + "/clubs/ligazmg.png"}`,
    descr: [
      "Najlepsza przygoda w życiu twojego wewnętrznego bohatera!",
      "Tak to może się stać dzięki Lidze Znakomitych Mistrzów Gry, którzy poprowadzą dla was niesamowite przygody na sesjach RPG.",
      "Wciel się w postać z marzeń i stań przeciw niezwykłym wyzwaniom. Może będziesz czarodziejem z mroźnych krain, może podwójnym agentem wywiadu a może zwykłym badaczem stawiającym czoła przedwiecznemu złu. To wszystko na 2-3 godzinnej sesji gdzie to Ty odgrywasz swoją postać!",
      'We współpracy z gliwicką Ligą Znakomitych Mistrzów Gry przez cały weekend będzie można wziąć udział w "graniu na żądanie". Możesz przyjść kiedy chcesz i zagrać w dobre gry fabularne. ',
      "Mistrzowie są przygotowani do różnych popularnych systemów jak D&D czy Warhammer, lecz nie zabraknie mniej znanych jak Fiasco, Wolsung czy Fajerbol. System i MG jest dobierany do upodobań graczy, a w razie potrzeby system można zmodyfikować tak, by wszyscy byli zadowoleni.",
    ],
    fanpage: "Liga ZMG",
    fpLink: "https://www.facebook.com/Liga-ZMG-140573901488638",
  },
];

export const conventions = [];
