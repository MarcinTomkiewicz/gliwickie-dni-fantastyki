import { useEffect, useState } from "react";
import { BoldText } from "../utils/BoldText"

export const RuleCon = ({ modal }) => {
    const [header, setHeader] = useState("");

    useEffect(() => {
      if (modal) {
        setHeader("");
      }
      if (!modal) {
        setHeader("Regulamin Gliwickich Dni Fantastyki");
      }
    }, [modal]);
  
    return (
      <>
        <h1>{header}</h1>
        <ol>
        <li>Każdy uczestnik Gliwickich Dni Fantastyki, zwanych dalej GDF, wykupując bilet lub otrzymując wejściówkę (dotyczy wystawców oraz osób tworzących punkty programu), akceptuje niniejszy regulamin i zobowiązuje się jednocześnie przestrzegać warunków niniejszego regulaminu.</li>
        <li>Wszystkie osoby uczestniczące w GDF mają obowiązek zapoznać się, zaakceptować i przestrzegać treści niniejszego regulaminu. Niedopełnienie tego obowiązku nie może być podstawą do ewentualnych roszczeń w stosunku do Organizatorów.</li>
        <li>Osoby nieprzestrzegające regulaminu mogą decyzją Organizatora zostać usunięte z terenu GDF. Usunięcie z terenu GDF z powodu braku przestrzegania niniejszego regulaminu nie uzasadnia domagania się zwrotu ceny biletu ani jakichkolwiek innych kosztów poniesionych przez uczestnika w związku z nabyciem biletu lub udziałem w GDF.</li>
<li>Regulamin jest dostępny:</li>
<ul>
<li>na stronie https://gliwickiednifantastyki.pl</li>
<li>w punkcie informacyjnym</li>
</ul>
<li>GDF odbywa się na terenie Areny Gliwice ul. Akademicka 50,44-100 Gliwice w dniach 14-16 października  2022 r.</li>
<li>Każdy uczestnik GDF jest zobowiązany do zapoznania się i akceptacji regulaminu obiektu w którym odbywa się wydarzenie. Również zobowiązują się do przestrzegania regulaminu obiektu dostępnego na https://arenagliwice.com/regulaminy-obiektu/</li>
<li>Na terenie GDF uczestnicy mogą przebywać w następującym przedziale czasowym: </li>
<ul>
<li>14 października 2022 r. - 15:00-00:00; </li>
<li>15 października - 10:00-00:00; </li>
<li>16 października 2022 r. - 10:00-18:00</li>
</ul>
<li>Właściciele biletów jednodniowych mogą przebywać na terenie GDF do godziny 00:00  lub w przypadku biletów zakupionych w dniu 16.10.2022 – do godziny 18:00</li>
<li>Bilet zakupiony zarówno w przedsprzedaży jak i na miejscu podlega wymianie na identyfikator.</li>
<li>Zasady i harmonogram sprzedaży biletów określa załącznik nr 2 do Regulaminu.</li>
<li>Na terenie GDF może przebywać jedynie osoba posiadająca identyfikator do tego uprawniający oraz imienny dokument ze zdjęciem, w celu potwierdzenia swojej tożsamości.</li>

<li>Każdy uczestnik zobowiązany jest podpisać identyfikator oraz nosić identyfikator w widocznym miejscu. Celowe zdjęcie, zdarcie lub inne uszkodzenie identyfikatora będzie skutkować niewpuszczeniem na teren GDF lub usunięciem z niego. W razie przypadkowego uszkodzenia lub zgubienia identyfikatora należy zgłosić się do punktu informacyjnego celem zakupu nowego biletu.</li>
<li>Osobom nieposiadającym identyfikatora służby porządkowe wskażą najkrótszą drogę do wyjścia.</li>
<li>Organizator lub osoby działające w jego imieniu (w tym pracownicy ochrony oraz wolontariusze) mają prawo do potwierdzania tożsamości uczestnika GDF. Potwierdzenie tożsamości odbywa się za pomocą okazania przez posiadacza identyfikatora imiennego dokumentu, opatrzonego zdjęciem. Odmowa okazania imiennego dokumentu ze zdjęciem może stanowić uzasadnienie dla usunięcia uczestnika z terenu imprezy. Zakazane jest przekazywanie własnego identyfikatora innym osobom celem korzystania z niego. W przypadku stwierdzenia nieuprawnionego korzystania z identyfikatora Organizator ma prawo do odebrania identyfikatora  i zabronienia osobie, która z niego korzystała, a także Uczestnikowi, który go przekazał nieuprawnionej osobie, dalszego udziału w GDF.</li>
<li>Na terenie GDF uczestnik może zostać wezwany do okazania zawartości bagażu przez Organizatora i podległe mu służby.</li>
<li>Uczestnik GDF zobowiązany jest do bezwzględnego przestrzegania na terenie imprezy wytycznych Organizatora w zakresie porządku, bezpieczeństwa i higieny związanych z przeciwdziałaniem pandemii koronawirusa (dalej reżim sanitarny). Uporczywy brak przestrzegania przez uczestnika reżimu sanitarnego, uzasadnia usunięcie uczestnika z terenu GDF.</li>
<li>Na terenie GDF obowiązuje całkowity zakaz poruszania się uczestników rowerami, segwayami, hoverboardami, hulajnogami elektrycznymi oraz innymi pojazdami. Zakaz nie dotyczy obsługi imprezy.</li>
<li>Organizator odpowiada za szkody wyrządzone uczestnikom na zasadach przewidzianych w kodeksie cywilnym i ustawie o bezpieczeństwie imprez masowych. Organizator nie ponosi odpowiedzialności za szkody na osobach Uczestników spowodowane przez osoby trzecie z winy Uczestnika lub przez elementy wyposażenia będące częścią stoisk firm zewnętrznych współpracujących z GDF. Organizator nie ponosi odpowiedzialności za szkody w mieniu Uczestników spowodowane siłą wyższą (np. pożarem, eksplozją, uderzeniem pioruna, wichurą, zalaniem wodą) lub przez osoby trzecie albo z winy Uczestnika.</li>
<li>Pomoc medyczna</li>
Osoby cierpiące na choroby przewlekłe, alergie itp. zobowiązane są do posiadania własnych leków oraz posiadania przy sobie informacji dotyczących swojego stanu zdrowia, choroby lub utrudnień w leczeniu;
<li>Osoby poniżej 18 r.ż. zobowiązane są przedstawić przy akredytacji i posiadać przez cały czas trwania imprezy zgodę rodzica lub opiekuna prawnego na udział w GDF wraz z jego kontaktowym numerem telefonu. Wzór zgody dostępny jest na stronie internetowej https://gliwickiednifantastyki.pl</li>
<li>Organizator nie ponosi odpowiedzialności za rzeczy pozostawione bez opieki lub zagubione.</li>
<li>Zabronione jest wnoszenie na teren GDF(z wyjątkiem sytuacji opisanej w niniejszym punkcie i punkcie 23):</li>
<ul>
<li>broni w rozumieniu obowiązującej Ustawy o Broni i Amunicji;</li>
<li>amunicji do wyżej wymienionych;</li>
<li>shurikenów;</li>
<li>broni białej z wyjątkiem przedmiotów posiadających stępione krawędzie – noży, egzemplarzy broni białej, treningowej i replik broni improwizowanej, pod warunkiem, że są one przenoszone w sposób niestwarzający zagrożenia dla innych uczestników;</li>
<li>materiałów wybuchowych i pirotechnicznych;</li>
<li>substancji toksycznych, cuchnących lub łatwopalnych;</li>
<li>broni czarnoprochowej.</li>
</ul>
<li>Broń pneumatyczną (ASG, paintball) wolno wnosić na teren imprezy, jeśli tymczasowo bądź stale została ona pozbawiona możliwości miotania pocisków.</li>
<li>Ostateczna decyzja odnośnie do możliwości wniesienia na teren GDF broni lub przedmiotów mogących zostać uznane za niebezpieczne należy do organizatora i służb przez niego wyznaczonych.</li>
<li>Podczas trwania GDF zabronione jest kierowanie broni, replik broni czy jakiegokolwiek niebezpiecznego narzędzia w stronę innego uczestnika GDF z wyjątkiem sytuacji, gdy udzielił na to wyraźną zgodę (np. podczas pozowania do zdjęć).</li>
<li>Uczestnicy GDF są zobowiązani do zachowania czystości i porządku na jego terenie.</li>
<li>Obowiązuje całkowity zakaz wnoszenia alkoholu na teren GDF oraz spożywania alkoholu.</li>
<li>Na terenie GDF obowiązuje całkowity zakaz palenia wyrobów tytoniowych i e-papierosów.</li>
<li>Na terenie Areny Gliwice obowiązuje całkowity zakaz posiadania i zażywania wszelkich środków odurzających i psychotropowych z wyjątkiem sytuacji w której zgodnie ze zleceniem lekarskim zażywanie środków psychotropowych jest wymagane, co powinno być poświadczone stosownym zaświadczeniem.</li>
<li>Osoby znajdujące się pod wpływem alkoholu lub innych środków odurzających lub psychotropowych mogą zostać usunięte z terenu GDF</li>
<li>Każdy uczestnik GDF zobowiązany jest do kulturalnego zachowania i podporządkowania się decyzjom Organizatorów. Zastrzeżenia do decyzji można zgłaszać Organizatorom GDF – ich decyzja jest ostateczna. W przypadku konfliktu pomiędzy uczestnikami GDF organem rozstrzygającym jest Organizator, a jego decyzja jest ostateczna.</li>
<li>Organizator nie ponosi odpowiedzialności za szkody poczynione przez uczestników GDF. Za wszelkie szkody odpowiedzialność (w tym finansową) ponoszą sprawcy. </li>
<li>W wypadku osób niepełnoletnich odpowiedzialność prawną i majątkową ponoszą rodzice lub opiekunowie prawni.</li>
<li>W przypadku zdarzenia losowego, a także innych przyczyn, które uniemożliwiają zorganizowanie wydarzenia, a za które Organizator nie ponosi odpowiedzialności, ma on prawo odwołania imprezy, zmiany daty i/lub miejsca jej odbywania się, bez wcześniejszego uprzedzenia.</li>

<li>Organizator nie jest zobowiązany do żadnej rekompensaty lub odszkodowania wobec posiadacza biletu, poza zwrotem całości lub części sumy, na jaką opiewał bilet na imprezę, która z przyczyn niezależnych od Organizatora i bez jego winy została przeniesiona, odwołana lub odbyła się jedynie w części.</li>
<li>Osoby prowadzące punkty programu (zwane dalej Prelegentami) zobowiązane są do oddania sali prelekcyjnej w stanie niepogorszonym. W przypadku rażących uszkodzeń sali stwierdzonych podczas jej wydawania Prelegenci zobowiązani są niezwłocznie powiadomić o tym Organizatorów.</li>
<li>Osoby korzystające ze zniżki na akredytacji za przeprowadzane punkty programu w przypadku niewywiązania się ze swoich zobowiązań zobowiązane są wnieść dopłatę do akredytacji w wysokości otrzymanej zniżki.</li>
<li>Nagrodami w konkursach stanowiących oficjalną część programu są sztuki waluty konwentowej tzw. “Smocze Włosy” , podlegające wymianie na towar w Sklepiku Konwentowym, który jest czynny w godzinach otwarcia Konwentu dla uczestników. Nie ma możliwości późniejszego wykorzystania zdobytych Smoczych Włosów. Za niewykorzystane "Smocze Włosy" nie przewiduje się rekompensaty. Wymiana "Smoczych Włosów" jest możliwa tylko podczas GDF 2022.</li>
<li>Osoby biorące udział w przygotowaniu i obsłudze GDF nie mogą brać udziału w konkursach i turniejach przeprowadzanych  podczas GDF. W konkursach i turniejach organizowanych w czasie GDF przez podmioty i organizacje inne niż Organizator dodatkowo nie mogą brać udziału przedstawiciele i pracownicy tych podmiotów i organizacji.</li>
<li>Na terenie GDF zabrania się powielania i sprzedaży jakichkolwiek produktów chronionych prawami autorskimi bez posiadania odpowiednich praw i licencji oraz handlu nielegalnymi ich kopiami.</li>
<li>Organizator nie ponosi odpowiedzialności i nie utożsamia się z opiniami wygłaszanymi przez uczestników (w tym Prelegentów) podczas trwania GDF.</li>
<li>Na terenie GDF obowiązuje bezwzględny zakaz prowadzenia działalności politycznej, w szczególności kampanii wyborczych i agitacji politycznej. Osoby, które nie będą przestrzegać tego zakazu, zostaną usunięte z terenu GDF bez prawa do zwrotu wartości biletu i ewentualnych innych roszczeń.</li>
<li>Wizerunek uczestnika GDF może być utrwalany poprzez zdjęcia bądź nagrania filmowe dokonywanie przez Organizatora w celu promocji GDF. Uczestnik obecny na terenie GDF poprzez obecność na terenie wydarzenia wyraża tym zgodę na przetwarzanie swojego wizerunku oraz na nieodpłatne wykonywanie zdjęć i nagrywanie filmów z jego udziałem przez podmiot uprawniony przez Organizatora, nieodpłatne utrwalanie jego wizerunku oraz jego nieodpłatne wykorzystanie i rozpowszechnianie z zachowaniem i poszanowaniem godności uczestnika, wyłącznie w celach promowania GDF.</li>
<li>Na terenie GDF dla zapewnienia bezpieczeństwa uczestników i ochrony mienia, zarządcy obiektu prowadzą szczególny nadzór nad terenem GDF lub terenem wokół w postaci środków technicznych umożliwiających rejestrację obrazu (monitoring).</li>
<li>Monitoring nie obejmuje pomieszczeń sanitarnych.</li>
<li>Nagrania obrazu przetwarzane są wyłącznie do celów, dla których zostały zebrane.</li>
<li>Szczegółowe informacje dotyczące przetwarzania danych osobowych możliwe są do pozyskania po uzgodnieniu z zarządcą obiektu.</li>
<li>Każdy uczestnik GDF zobowiązany jest do traktowania pozostałych uczestników z szacunkiem. Nękanie fizyczne lub słowne może skutkować usunięciem z GDF, odebraniem identyfikatora i zgłoszeniem do odpowiednich służb. </li>
<li>Zabrania się wprowadzania zwierząt na teren GDF. Zakaz nie dotyczy zwierząt-przewodników i asystentów osób niepełnosprawnych, odpowiednio oznaczonych.</li>
<li>Regulamin zwrotów zakupionych biletów będzie dostępny przy zakupie biletów </li>
w punkcie informacyjnym oraz na stronie https://gliwickiednifantastyki.pl  oraz przy zakupie biletów poprzez platformę sprzedaży biletów Eventim.
<li>Wszystkie materiały reklamowe, których obecność na wydarzeniu nie została uzgodniona z Organizatorem wydarzenia, zostaną z terenu GDF usunięte wraz z rozprowadzającymi je osobami. Osoby te zostaną obciążone kosztem naprawienia ewentualnych szkód powstałych w wyniku ich działania.</li>
<li>Prowadzenie wszelkiej działalności handlowej, usługowej, rozrywkowej, informacyjno-promocyjnej (dotyczy również reklam na pojazdach) itp. na terenie GDF, jest możliwe tylko po uzyskaniu zgody Organizatora, w wyznaczonych przez niego stoiskach i godzinach oraz na warunkach określonych w odrębnej umowie.</li>
<li>W przypadku niestosowania się do powyższych ustaleń Regulaminu, Organizator może usunąć osobę naruszającą Regulamin bez zwrotu poniesionych kosztów uczestnictwa.</li>
<li>Program GDF opublikowany na stronie internetowej GDF-u jest programem orientacyjnym przygotowanym przez Organizatora zgodnie z jego najlepszą wiedzą. Organizator zastrzega sobie prawo do zmiany programu GDF w razie wystąpienia nieprzewidzianych zdarzeń losowych. Zmiana programu GDF-u z powodu nieprzewidzianych zdarzeń losowych nie może być podstawą do żadnych roszczeń wobec Organizatora. W szczególności nie może być podstawą do zwrócenia równowartości ceny biletu.</li>
<li>Organizator informuje, że ze względu na dużą liczbę uczestników może nie być możliwe uczestniczenie w niektórych punktach programu, jeżeli wszystkie wolne miejsca na sali prelekcyjnej zostaną zajęte zgodnie z Regulaminem. Niemożność uczestniczenia w punkcie programu ze względu na brak wolnego miejsca na sali nie może być podstawą do żadnych roszczeń wobec Organizatora. W szczególności nie może być podstawą do zwrócenia równowartości ceny biletu.</li>
<li>Wejście do sali prelekcyjnej uczestnika po rozpoczęciu punktu programu zależy od decyzji Organizatora. Rozpoczęcie prelekcji sygnalizowane jest poprzez zamknięcie drzwi wejściowych do sali prelekcyjnej lub w innej formie wskazanej przez organizatora.</li>
<li>Organizator zapewnia bezpieczny przebieg GDF tylko w przypadku, gdy wszyscy uczestnicy przestrzegają Regulaminu oraz prawa polskiego.</li>
<li>W kwestiach nieuregulowanych w niniejszym Regulaminie stosuje się przepisy zawarte w regulaminie obiektu.</li>
<li>Organizator zastrzega sobie prawo do zmiany niniejszego Regulaminu bez uprzedniego informowania potencjalnych uczestników. Informacja o przetwarzaniu danych osobowych stanowi Załącznik nr 1 do niniejszego Regulaminem.</li>
</ol>
<div className="mt-4 mb-2"><BoldText value='ZAŁĄCZNIK NR 1 DO REGULAMINU GLIWICKICH DNI FANTASTYKI' /></div>
<div className="mb-2">INFORMACJA O PRZETWARZANIU DANYCH OSOBOWYCH</div>
<div style={{alignSelf: "flex-start"}}>Administratorem Państwa danych osobowych jest GOP-Con Sp. z o.o., mieszcząca się przy pl. Jana Pawła II 3A, 41-709 Ruda Śląska, wpisana do Krajowego Rejestru Sądowego pod numerem 0000987688. Poniżej znajdą Państwo wszelkie niezbędne informacje dotyczące przetwarzania Państwa danych osobowych w związku z realizacją zawartej z Państwem umowy oraz w celu jej należytego wykonania.</div>
<div>Dane osobowe przetwarzane są na podstawie zgody, na podstawie prawnie uzasadnionego interesu Administratora w celu realizacji GDF, transakcji sprzedaży biletu, rejestracji prelegentów i uczestników, a także kontaktu z Państwem w razie takiej potrzeby oraz w celu rozpatrzenia ewentualnych reklamacji czy dochodzenia roszczeń. Zakres zbieranych danych to: imię i nazwisko, data urodzenia, numer zamówienia, adres e-mail, w przypadku wystawców będących osobami fizycznymi również numer PESEL oraz adres korespondencyjny, a w przypadku osób prowadzących działalność gospodarczą także dane identyfikacyjne (NIP, numer konta) dla celów rozliczenia zawartych zobowiązań i realizacji obowiązków prawnych i podatkowych wynikających z przepisów prawa.</div>
<div style={{alignSelf: "flex-start"}}>Podanie danych jest dobrowolne. Niepodanie danych uniemożliwia jednak realizację rejestracji uczestnika, a tym samym obsługę zamówienia.</div>
<div>Państwa dane osobowe mogą być przekazywane naszym partnerom w celu niezbędnym do prawidłowej realizacji umowy. Dotyczy to podmiotów prowadzących dla nas obsługę informatyczną czy księgową, firm zajmujących się dochodzeniem roszczeń, pośredniczących w zamawianiu usług kurierskich, operatorów pocztowych, firm kurierskich, serwisów obsługujących druk czy serwisów obsługujących płatności internetowe, oraz usługami ochrony. Dane osobowe wystawców mogą być przekazane poza obszar EOG, do zaufanych partnerów dostarczających usługi internetowe i posiadających odpowiednie certyfikaty bezpieczeństwa. O takich przypadkach wystawcy zostaną odpowiednio poinformowani.</div>
<div>Jako Administrator zapewniamy Państwu prawo dostępu do danych, żądania ich sprostowania, usunięcia lub ograniczenia ich przetwarzania. Mogą Państwo także skorzystać z uprawnienia do złożenia wobec Administratora sprzeciwu wobec przetwarzania danych oraz prawa do przenoszenia danych do innego administratora danych. W przypadku wyrażenia dobrowolnej zgody przysługuje Państwu prawo cofnięcia zgody na przetwarzanie w dowolnym momencie, co nie wpływa na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem.</div>
<div style={{alignSelf: "flex-start"}}>Mają Państwo prawo wnieść skargę dotyczącą przetwarzania danych osobowych do Prezesa Urzędu Ochrony Danych Osobowych.</div>
<div style={{alignSelf: "flex-start"}}>Dane osobowe nie będą przekazane do państw trzecich lub organizacji międzynarodowych.</div>
<div style={{alignSelf: "flex-start"}}>Administrator  nie prowadzi działań zautomatyzowanego przetwarzania danych ani profilowania.</div>
<div style={{alignSelf: "flex-start"}}>W sprawach dotyczących danych osobowych prosimy o kontakt pod adresem e-mail: gliwickiednifantastyki@aegee-gliwice.org</div>

<div className="mt-4 mb-2"><BoldText value='ZAŁĄCZNIK NR 2 DO REGULAMINU GLIWICKICH DNI FANTASTYKI' /></div>
<div className="mb-2">ZASADY I HARMONOGRAM SPRZEDAŻY BILETÓW</div>
<div style={{alignSelf: "flex-start"}}>Na GDF obowiązują następujące zasady sprzedaży i dystrybucji biletów:</div>
<ol>
<li>Bilety na GDF będą sprzedawane w następujących wariantach:</li>
<ul>
<li>Jednodniowy - 40 zł</li>
<li>Trzydniowy - 70 zł</li>
<li>Kolekcjonerski (tzw. Smocza Pieczęć) - 100 zł</li>
</ul>
<li>W przedsprzedaży dostępne są bilety trzydniowe oraz Kolekcjonerskie do zakupienia poprzez platformę sprzedaży biletów on-line Eventim. Zasady zwrotu biletów zakupionych w przedsprzedaży określone są w regulaminie sprzedaży. </li>
<li>Podczas trwania GDF dostępne będą bilety jednodniowe do zakupienia w punkcie akredytacji. Zasady zwrotu biletów zakupionych w przedsprzedaży określone są w regulaminie sprzedaży.</li>
<li>Bilet jednodniowy uprawnia do:</li>
<ul>
<li>pobytu na wydarzeniu w jednym wybranym dniu: 14.10.2022 w godzinach 15:00-00:00, 15.10.2022 w godzinach 10:00-00:00 bądź 16.10.2022 w godzinach 10:00-18:00</li>
<li>odbioru pakietu startowego</li>
</ul>
<li>Bilet trzydniowy uprawnia do:</li>
<ul>
<li>pobytu na wydarzeniu w dniach 14-16.10.2022 w podanym zakresie czasowym: 14.10.2022 w godzinach 15:00-00:00, 15.10.2022 w godzinach 10:00-00:00 bądź 16.10.2022  w godzinach 10:00-18:00</li>
<li>odbioru pakietu startowego</li>
<li>odbioru pięciu sztuk waluty konwentowej “Smocze Włosy"</li>
<li>10% zniżki na koszulkę konwentową</li>
</ul>
<li>Bilet Kolekcjonerski (Smocza Pieczęć) uprawnia do:</li>
<ul>
<li>pobytu na wydarzeniu w dniach 14-16.10.2022 w podanym zakresie czasowym: 14.10.2022 w godzinach 15:00-00:00, 15.10.2022 w godzinach 10:00-00:00 bądź 16.10.2022  w godzinach 10:00-18:00 </li>
<li>odbioru pakietu startowego	</li>
<li>noclegu w dniu 14.10.2022r oraz 15.10.2022r.</li>
<li>odbioru dziesięciu sztuk waluty konwentowej “Smocze Włosy"</li>
<li>20% zniżki w lokalu Stodola Kebap ‘N Grill</li>
<li>10% zniżki na nocleg w Hotelu Royal w Gliwicach</li>
<li>gwarantowanego miejsca noclegowego w sleep-roomie w nocy z 14.10 na 15.10 oraz z 15.10 na 16.10</li>
<li>20% zniżki na koszulkę konwentową</li>
</ul>
<li>Każdy bilet zakupiony w przedsprzedaży musi zostać wymieniony na identyfikator uczestnika, w punkcie akredytacji umiejscowionym przy wejściu do obiektu, w którym będzie się odbywał GDF w następujących terminach:</li>
<ul>
<li>w piątek 14 października 2022 r., w godzinach 15:00-21:00;</li>
<li>w sobotę 15 października 2022 r. w godzinach 8:00-21:00</li>
<li>w niedzielę 16 października 2022 r. w godzinach 8:00-14:00 </li>
</ul>
<li>W trakcie GDF bilety będzie można kupić  w punkcie informacyjnym w następujących terminach:</li>
<ul>
<li>w piątek 14 października 2022 r., w godzinach 15:00-21:00;</li>
<li>w sobotę 15 października 2022 r. w godzinach 8:00-21:00</li>
<li>w niedzielę 16 października 2022 r. w godzinach 8:00-14:00</li>
</ul>
<li>Wstęp darmowy na imprezę przysługuje dzieciom do 6. roku życia ukończonego w dniu wstępu na GDF.</li>
<li>Bilety nie podlegają zwrotowi za wyjątkiem wymienionych poniżej sytuacji.</li>
<li>Zwrot biletów zakupionych w przedsprzedaży jest możliwy w przypadku odwołania GDF bądź zmiany czasu lub miejsca GDF i powinien być zgłoszony w terminie 30 dni od dnia ogłoszenia na stronie inetrnetowej https://gliwickiednifantastyki.pl bądź wydarzeniu na facebooku informacji o odwołaniu, zmianie czasu bądź miejsca GDF.</li>
<li>Sprzedaż biletu osobie niepełnoletniej (która w dniu rozpoczęcia GDF nie ukończyła 18 roku życia) wymaga załączenia zgody rodzica/opiekuna prawnego, jeżeli rodzic bądź opiekun prawny nie towarzyszy osobie niepełnoletniej. Wzór zgody jest udostępniony na stronie internetowej https://gliwickiednifantastyki.pl</li>
</ol>
        </>
    )
}