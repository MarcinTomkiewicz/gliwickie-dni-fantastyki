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
  {
    name: "facebook",
    label: "Fanpage na Facebooku",
  },
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
  { name: "companyAddress", label: "Pełny adres prowadzonej działalności" },
  { name: "nip", label: "NIP" },
  { name: "regon", label: "REGON" },
  { name: "nameExtraContactPerson", label: "Imię" },
  { name: "surnameExtraContactPerson", label: "Nazwisko" },
  { name: "emailExtraContactPerson", label: "Adres e-mail" },
  { name: "phoneExtraContactPerson", label: "Numer telefonu" },
  { name: "areaSize", label: "Rozmiar stoiska (w m2)" },
  { name: "googleDrive", label: "Link do logo"},
  {
    name: "staff",
    label: "Przewidywana liczba osób, które będą obsługiwać stoisko",
  },
  { name: "remarksAboutStand", label: "Uwagi, propozycje, spostrzeżenia" },
  { name: "otherAnswer", label: "Inna odpowiedź" },
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
    photo: `${process.env.PUBLIC_URL + "/guests/15.png"}`,
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
    photo: `${process.env.PUBLIC_URL + "/guests/17.png"}`,
    descr: [
      'Marcin Sergiusz Przybyłek (ur. 1968), znany także jako Martin Ann / Martin Ann Drimm, lekarz medycyny, wieloletni pracownik koncernu farmaceutycznego, trener i konsultant biznesowy, wizjoner, filozof. Autor sagi science fiction "Gamedec", antyporadnika dla menadżerów "Sprzedaż albo śmierć?!", futurystycznego kryminału "CEO Slayer", powieści "Kalina i Kaj. Książka teoretycznie dla dzieci", zbioru anegdot dla graczy "Grao Story", epickiej dylogii "Orzeł Biały" oraz "Symfonii życia". We wrześniu 2021 roku wydana została przez Anshar Studios oparta na jego prozie gra wideo "Gamedec". Pyramid Games rozpoczęło prace nad grą wideo "CEO Slayer". Aktorsko realizuje się w serialu "19+" (rola Aleksa). Zainteresowany psychologicznym, technologicznym oraz finansowym rozwojem ludzkości, rozwija swoje wizje w książkach, wykładach i podczas szkoleń. Od trzydziestu sześciu lat w związku z żoną Anną, z którą mają dwudziestoletnią córkę, Kalinę.',
    ],
    fanpage: "",
    fpLink: "",
  },
  {
    name: "Michał",
    surname: "Stonawski",
    photo: `${process.env.PUBLIC_URL + "/guests/8.png"}`,
    descr: [
      'Pisarz, game/narrative designer, badacz zjawisk paranormalnych. W 2020 roku jego książka “Paranormalne: prawdziwe historie nawiedzeń" uzyskała status bestsellera empiku, sprzedając się w ponad 20 000 egzemplarzy, a w przygotowaniu znajduje się kontynuacja, której premiera zaplanowana jest na 15.06.2022. Na swoim koncie ma blisko 50 publikacji beletrystycznych w formie opowiadań (m.in. w piśmie "Nowa Fantastyka"), blisko 100 artykułów publicystycznych, oraz dwie książki. Jego twórczość tłumaczona była na niemiecki i czeski, a opowiadania doczekały się również adaptacji audio w produkcjach portalu audioteka.pl. Organizator konwentów fantastyki, w latach 2013-2016 prezes nagrody polskiej literatury grozy im. Stefana Grabińskiego. Jako projektant gier, poza projektami Alrauna Studio które współprowadzi, pracował przy produkcji takich gier jak “Model Builder" (2022) czy “Car Detailing Simulator" (2022), obecnie pracuje również nad zapowiedzianą grą “Cooking Championship".',
    ],
    fanpage: "Michał Stonawski - Pisarz",
    fpLink: "https://www.facebook.com/MichalStonawskiPisze/",
  },
  {
    name: "Tomasz",
    surname: "Duszyński",
    photo: `${process.env.PUBLIC_URL + "/guests/16.png"}`,
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
    photo: `${process.env.PUBLIC_URL + "/guests/18.png"}`,
    descr: [
      'Redaktor, publicysta, poeta, tłumacz oraz autor kryminałów i horrorów. Tłumaczony na angielski, rosyjski, czeski i słowacki. Opublikował mnóstwo książek w różnych duetach, zbiór wierszy "Punk Ogito", zbiory opowiadań "Femme fatale" i "Okruchy mroku" oraz powieści "Podwójna pętla", "Dziewczyny, które miał na myśli", "Chłopcy, których kochano za mocno", "Kobiety, które nienawidzą" i "Mężczyźni w potrzasku".',
    ],
    fanpage: "Kazimierz Kyrcz Jr",
    fpLink: "https://www.facebook.com/AutorKazimierzKyrczJr",
  },
  {
    name: "Krzysztof",
    surname: "Haladyn",
    photo: `${process.env.PUBLIC_URL + "/guests/13.png"}`,
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
    photo: `${process.env.PUBLIC_URL + "/guests/14.png"}`,
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
    photo: `${process.env.PUBLIC_URL + "/guests/19.png"}`,
    descr: [
      'Ślązak zawodowo związany z branżą IT, w wolnych chwilach podcaster i redaktor serwisu Carpe Noctem. Fascynat tematów paranormalnych, mistycznych, gnostycznych, niesamowitych i cudownych. W 2021 nakładem Wydawnictwa IX opublikował "Nocne", zbiór opowiadań składający się z koszmarów i pająków. W 2022 planowana jest premiera jego debiutanckiej powieści. "Plama światła" będzie niosła pociechę rozpuszczenia świadomości w kosmicznej jedni. Lubi medytację, crossfit w Hellwoodzie i jak sobie drzewa rosną.',
    ],
    fanpage: "Paweł Mateja",
    fpLink: "https://www.facebook.com/matejaposting",
  },
  {
    name: "Agnieszka",
    surname: "Graca",
    photo: `${process.env.PUBLIC_URL + "/guests/12.png"}`,
    descr: [
      'Podwójna filolożka (romanistka i anglistka), autorka opowiadań, głównie kryminalnych. Mieszkała w Gliwicach, obecnie w Krakowie. Publikowała w antologiach "Lukrecja z Kamiennej Grobli" (2017), "Niebyt i inne historie kryminalne" (2018), "City 5" (2022), "Małe życie po wielkiej zmianie" (2022) a także w magazynie literacko-kryminalnym "Pocisk" i na portalu wysokieobcasy.pl. Laureatka konkursów literackich (Góry Literatury, Międzynarodowy Festiwal Kryminału, Afera Kryminalna, Szkoła Letnich Zabójców, konkurs na pomysł kontynuacji sagi Millennium w ramach Międzynarodowego Festiwalu Literatury APOSTROF). Niedługo ukaże się jej pierwsza powieść.',
    ],
    fanpage: "",
    fpLink: "",
  },
  {
    name: "Jakub",
    surname: "Turkiewicz",
    photo: `${process.env.PUBLIC_URL + "/guests/10.png"}`,
    descr: [
      'Z wykształcenia historyk, a z zamiłowania fantasta. Autor popularnonaukowej książki na temat historii fandomu Star Wars pt. "Wojna gwiazd" oraz powieści SF "Chciej mnie zawsze".  Publikował cykliczne artykuły na temat filmów science fiction i fandomu "Gwiezdnych wojen" w magazynie "Sfera", okazjonalnie współpracował też z innymi czasopismami, gdzie popularyzował wiedzę na temat kolekcjonerstwa fantastycznych gadżetów. Prowadził humorystyczną stronę starwarsy.pl, która z czasem przerodziła się w wirtualne muzeum pamiątek po polskiej wersji zjawiska Star Wars i przygotowywał artykuły publikowane na stronie efantastyka.pl. W roku 2018, wspólnie z reżyserem Radosławem Salamończykiem, zrealizował film dokumentalny "Wojna gwiazd". Pisuje opowiadania – debiutował w "Nowej Fantastyce", jego teksty ukazywały się też w miesięczniku "Science Fiction Fantasy i Horror".',
    ],
    fanpage: "",
    fpLink: "",
  },
  {
    name: "Jakub",
    surname: "Ćwiek",
    photo: `${process.env.PUBLIC_URL + "/guests/9.png"}`,
    descr: [
      "Pisarz, stand-uper, scenarzysta, podróżnik. Debiutował zbiorem opowiadań Kłamca, który doczekał się pięciu kolejnych tomów i multimedialnego uniwersum. W 2007 roku ukazał się kryminał grozy Liżąc ostrze, a rok później horror Ciemność płonie (aby go napisać spędził pół roku wśród bezdomnych na dworcu w Katowicach). Stworzył m.in. czterotomowy cykl Chłopcy (2012-2015) oraz dwutomowe Dreszcz (2013-2014) i Grimm City (2016-2017). Dziesięciokrotnie nominowany do Nagrody im. Janusza A. Zajdla, zdobył ją w 2012 roku. Napisał też thriller Szwindel (Marginesy 2019), a z Adamem Bigajem Bezpańskiego. Balladę o byłym gliniarzu (Marginesy 2018), oraz thriller psychologiczny Topiel (Marginesy 2020), uzupełniony słuchowiskiem dla Storytel Topiel: Dom w głębi lasu. Współautor (wspólnie z Wojciechem Chmielarzem) słuchowiska Skowyt (Audioteka 2021) Zdobywca statuetki Golden Mic w Kategorii Najlepszy debiut w Internecie 2020. Autor powieści sensacyjnej Drelich. Prosto w splot (Marginesy 2021).",
      "Najnowsza książka Panie Czarowne ukazała się nakładem wydawnictwa SQN w 2021.",
    ],
    fanpage: "Jakub Ćwiek. Dosłownie.",
    fpLink: "https://www.facebook.com/JakubCwiekOfficial",
  },
  {
    name: "Michał",
    surname: "Gołkowski",
    photo: `${process.env.PUBLIC_URL + "/guests/11.png"}`,
    descr: [
      'Rocznik 1981, relatywnie duży przebieg, ale za to bezawaryjny i bezwypadkowy. Napęd na cztery koła, turbo, klimatyzacja i bogaty pakiet wyposażenia wnętrza.',
      'Pisarz oraz poliglota. Z wykształcenia lingwista,  z zawodu tłumacz symultaniczny, z zamiłowania  historii wojskowości i antropologii kultury.',
      'Najszybsze pióro polskiej fantastyki. Debiutował w nie tak znów odległym 2013 roku, od tego czasu zasypując wydawnictwo iście hurtową ilością co najmniej dwóch-trzech książek rocznie. Wciąż poszerzający się zakres jego tematów krąży pomiędzy tematyką wojenną, thrillerem psychologicznym, groteską, powieścią grozy, historią oraz wręcz rasowym, krwistym fantasy. Książki spływają mu z palców na klawiaturę tak szybko, że przeważnie sam nie pamięta ile ich wydał.',
      'Od pewnego czasu zaangażowany – jakby mało tego było! – w prace dwóch spółek gamedevowych: Sylen Studio oraz Red Square Games, zajmujących się produkcją gier wideo, RPG oraz planszowych na podstawie jego wciąż poszerzanej, pogłębianej i rozciąganej poza granice przyzwoitości twórczości.',
      'Niezrównany prelegent i mówca, potrafiący bez zająknięcia i powtórzenia poprowadzić godzinny wykład o praktycznie dowolnej tematyce – od formowania się organizacji przestępczych we wczesnym okresie poradzieckim, wstecz aż do technik oblężniczych starożytnego Babilonu.',
      'Brany prosto z salonu, pierwszy właściciel, brak ukrytych opłat.',
      'Okazja jakich mało!',
    ],
    fanpage: "",
    fpLink: "",
  },
  {
    name: "Marcin",
    surname: "Sindera",
    photo: `${process.env.PUBLIC_URL + "/guests/6.png"}`,
    descr: [
      'Autor trylogii historyczno-fantastycznej o przygodach wojownika Draconisa, rozgrywających się w czasach przed panowaniem księcia Mieszka I. W skład cyklu wchodzą następujące powieści: "Wróżda" (2020), "Żmij"(2021) i "Pożoga"(2022), wydane przez Wydawnictwo Lira.  W 2022 roku zaprojektował i wydał grę RPG pt. "Glina – kryminalna gra fabularna". W przeszłości był pomysłodawcą i koordynatorem minikonwentu "Bebok - śląskie dni z grami fabularnymi i planszowymi". Mistrz gry, fan gier planszowych, rowerzysta, pasjonat górskich wycieczek i miłośnik progresywnego rocka.',
    ],
    fanpage: "",
    fpLink: "",
  },
  {
    name: "Staszek",
    surname: '"Szybki jest" Mąderek',
    photo: `${process.env.PUBLIC_URL + "/guests/7.png"}`,
    descr: [
      'Staszek "szybki jest" Mąderek to reżyser, scenarzysta, niezależny producent filmowy. Jeden z pierwszych w Polsce twórców komputerowych efektów specjalnych i animacji 3D, z pasji również aktor i kompozytor muzyki filmowej. Autor i producent wielu teatrów telewizji, seriali, reklam, teledysków oraz autorskich produkcji filmowych. W świecie gamedev-u reżyseruje elementy rozgrywki, prowadzi sesje motion capture, tworzy modele 3D z wykorzystaniem fotogrametrii, kreuje cut-sceny, teasery i trailery gier - zarówno z wykorzystaniem "żywego", filmowego planu, jak i wirtualnego silnika Unreal Engine. ',
      'Od wielu lat wykłada gościnnie w różnych uczelniach, prowadzi popularne warsztaty filmowe, szkolenia z dziedziny reżyserii, sztuki operatorskiej, montażu filmowego, aktorstwa, wystapień publicznych i samoobrony dla kobiet. ',
      'W internecie i fandomie zasłynął krótkometrażową parodią "Stars in Black" z 1999 roku. Cytaty z tego filmiku do dziś krążą między wielbicielami filmowej fantastyki, choć młodsza ich część nie zawsze kojarzy autora.',
    ],
    fanpage: 'Staszek "Szybki Jest" Mąderek',
    fpLink: "https://www.facebook.com/StaszekMaderek",
  },
  {
    name: "Arkady",
    surname: "Saulski",
    photo: `${process.env.PUBLIC_URL + "/guests/5.png"}`,
    descr: [
      'Urodzony 20 lutego 1987 roku w Gdyni. Absolwent stosunków międzynarodowych na Akademii Marynarki Wojennej. Dziennikarz "Gazety Bankowej", członek zespołu redakcyjnego oraz wydawca portalu wGospodarce.pl.',
      'Debiutował w 2010 roku w "Nowej Fantastyce" opowiadaniem "Dzieci Syberyjskie".',
      'Na kilka lat porzucił działalność pisarską, by powrócić w powieściach "Czarna kolonia" (2016) i Wilk (2016). W 2017 roku wydał swoje opowiadanie w antologii Ostatni dzień pary 2. Jego opowiadanie "Husarze Śmierci" zdobyło drugą nagrodę w konkursie Stwórz Swoją Historię. Opowiadanie "Księga Ostrzy" zajęło także drugie miejsce w konkursie Dylematy Singielki. W dzieciństwie chciał być archeologiem, potem filmowcem, ostatecznie odnalazł się w tworzeniu literatury, bo jak sam mówi " dla literatury wystarczy tylko kartka i długopis".',
      'Do Fabryki Słów trafił z gotowymi powieściami z gatunku sci-fi i fantasy "Serce lodu" (2019) i "Krew kamienia" (2020).',
      'Twierdzi, że nie potrafi nie wymyślać nowych historii.  Nieustanne tworzenie scenariuszy to jego największe uzależnienie, a historia "Czerwonego lotosu" (2021) rozlała się po jego mózgu natychmiast po decyzji "piszę o Japonii". Jak wyszło? Epicko. Książka bardzo szybko podbiła czytelnicze serca i zyskała tytuł "najlepszej książki na wiosnę" według serwisu granice.pl. Zapytany o swoich literackich idoli wymienia jednym tchem Rafała Dębskiego, Feliksa Kresa, Georga R.R. Martina, Miroslava Žambocha i Mario Puzo.',
      'Najbardziej lubi spacery i długie rozmowy z żoną oraz rozgrywki Warhammera. Doskonale sprawdza się jako kura domowa, chociaż od dzieciństwa walczy z kapciami, które uznaje za element systemu domowej opresji.',
    ],
    fanpage: 'Arkady Saulski - Kolonia Literacka',
    fpLink: "https://www.facebook.com/profile.php?id=100063692221721",
  },
  {
    name: "Katarzyna",
    surname: "Szewioła-Nagel",
    photo: `${process.env.PUBLIC_URL + "/guests/4.png"}`,
    descr: [
      'Urodzona w Świętochłowicach – terapeutka, która postanowiła iść zupełnie inną drogą niż ta, którą ma w papierach. Zawodowo: freelancer, autor, rysownik oraz redaktor/korektor, który kocha horror ekstremalny. Sprawny operator cienkopisu i klawiatury oraz niezwykle uparty i dokładny poprawiacz. Prywatnie: gadziara, kociara i zwykła matka.'
    ],
    fanpage: "Katarzyna Szewioła-Nagel",
    fpLink: "https://www.facebook.com/SzewiolaNagel",
  },
  {
    name: "Anna Maria",
    surname: "Wybraniec",
    photo: `${process.env.PUBLIC_URL + "/guests/20.png"}`,
    descr: [
      'Autorka ze Śląska. Wydałam dwa zbiory opowiadań - "Niebo, ptaki i robaki" oraz "Wilgość", pojawiłam się w paru antologiach (m.in. "Żertwa", "Grobowiec", "Dziwne opowieści. Antologia weird fiction").',
      'Wierzę w krótką formę, koszmar codzienności i pszczelą rewolucję.'
    ],
    fanpage: "",
    fpLink: "",
  },
  {
    name: "Brody",
    surname: "z Kosmosu",
    photo: `${process.env.PUBLIC_URL + "/guests/2.png"}`,
    descr: [
      'Julian Jeliński - Twórca vloga "Brody z kosmosu", pełnego brodatych recenzji i najbardziej kosmicznego spojrzenia na filmy, komiksy i cały geek świat. Na Brodach znajdziecie "Najgorsze Animacje", podcast "Koszmarne Horrory", komentarze i popkulturowe analizy. Uwielbia poszukiwać ideologii w popkulturze prawie tak bardzo jak Slavoj Żiżek. Gdy nie nagrywa, jest człowiekiem-przewodnikiem swojego ślepego psa i nosicielem upierdliwego kota.'
    ],
    fanpage: "Brody z kosmosu",
    fpLink: "https://www.facebook.com/brodyzkosmosu",
  },
  {
    name: "Radek",
    surname: "Rak",
    photo: `${process.env.PUBLIC_URL + "/guests/1.png"}`,
    descr: [
      'Pisarz, lekarz weterynarii i leśny człowiek. Za powieść "Baśń o wężowym sercu albo wtóre słowo o Jakóbie Szeli" otrzymał Nagodę im. Janusza A. Zajdla, Nagrodę Nike, Nagrodę im. Jerzego Żuławskiego, Nagrodę Nowej Fantastyki, Śląkfę oraz European Science Fiction Society Award w kategorii Best Written Work of Fiction. W tym roku ukazała się jego kolejna powieść, "Agla. Alef". Ostatnio zajmuje się głównie byciem tatą.'
    ],
    fanpage: "",
    fpLink: "",
  },
  {
    name: "Jacek",
    surname: "Inglot",
    photo: `${process.env.PUBLIC_URL + "/guests/21.png"}`,
    descr: [
      'Polski pisarz science fiction i nie tylko, ur. 1962. Ukończył Liceum Ogólnokształcące Nr 1 we Wrocławiu i filologię polską na UWr. Po studiach pracował jako nauczyciel, później jako redaktor, mieszka i tworzy we Wrocławiu.',
      'Debiutował opowiadaniem "Dira necessitas" ("Feniks" 2\'1986). Autor powieści "Inquisitor" (1996, wznowionej w 2006 jako "Inquisitor. Zemsta Azteków" oraz w 2022 jako "Inquisitor. Zemsta Tezcatlipoki") i "Quietus" (1997, wydanie rozszerzone 2011), obie nominowane do Nagrody im. Janusza A. Zajdla, oraz zbioru opowiadań "Bohaterowie do wynajęcia" (2004, wspólnie z Andrzejem Drzewińskim). W 2009 roku wydał baśń fantasy dla dzieci "Eri i smok" (wznowienie 2018), oraz jej kontynuację "Eri czarodziejka" (2019) i "Eri w Mrocznych Górach" (2021). W 2015 roku ukazał się zbiór autorskich opowiadań pt. "Sodomion", a w 2016 powieść-dyptyk "Polska 2.0", ukazująca alternatywne wizje Polski przyszłości (Srebrne Wyróżnienie Nagrody Literackiej im. Jerzego Żuławskiego). W 2018 roku zdobył pierwsze miejsce w konkursie #Wolność - czytaj dalej, w kategorii powieść historyczna dla dzieci i młodzieży w wieku 15-18 lat, za utwór "Operacja Komendant. Misja w czasie" (powieść ukazała się w roku 2019).',
      'Od połowy lat 80. publikuje również opowiadania, w sumie napisał ich ok. 30, szczególnie zasłynął tekstami będącymi satyrą na polski fandom fantastyczny, takimi jak "Science and Fiction, Inc.", "Las liberte" i "Brzózka i mistrzowie". Przez wiele lat był czynnym krytykiem na łamach "Fantastyki" i "Nowej Fantastyki", publikując liczne recenzje i artykuły (ich zbiór pt. "Autostopem przez fantastykę" ukazał się w 2022 roku). Opowiadania i teksty publicystyczne zamieszczał także w "Fenixie", "Sfinksie" oraz "Playboyu".',
      'Inglot pisuje też prozę niefantastyczną. Jego pierwszą powieścią o tematyce współczesnej jest "Porwanie sabinek" (2008), w 2012 roku ukazał się "Wypędzony", książka opowiadająca o Wrocławiu w 1945 roku (nominacja do Literackiej Nagrody Europy Środkowej Angelus – półfinał). Nie ogranicza się do jednej konwencji literackiej. Pisze zarówno hard SF, jak i fantasy, horror czy historię alternatywną, dobrze sobie radzi również w mainstreamie, tworząc powieści sensacyjne i historyczne, przydarzyła mu się też sztuka teatralna "Długi dzień w Tokio" oraz słuchowisko "Noc pod Radzyminem". ',
      'Maciej Parowski w swojej książce - leksykonie autorów "Wasz cyrk, moje małpy" napisał o Inglocie: Jego twórczość literacką charakteryzuje pewne rozdarcie. Kibicuje Inglot kulturze wysokiej; nie cierpi amerykanizacji, tandety, upadku gustów zbiorowych, a w latach 80. był kojarzony z grupą literacką Kareta Wrocławski, preferującą prostą rozrywkę. Pasjonuje go ścieranie się humanistycznych impulsów, ale ciągnie ku pulpie. W wyniku tego rozdarcia wraca w jego prozie figura diabła-kusiciela i fluktuuje charakter kulturowych proroctw (od pesymizmu do nadziei).',
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
