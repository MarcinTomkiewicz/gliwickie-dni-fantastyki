import { useEffect, useState } from "react";
import { BoldText } from "../utils/BoldText";

export const VendorRules = ({ modal }) => {
  const [header, setHeader] = useState("");

  useEffect(() => {
    if (modal) {
      setHeader("");
    }
    if (!modal) {
      setHeader("Regulamin Wystawców");
    }
  }, [modal]);

  return (
    <>
      <h1>{header}</h1>
      <ol>
        <h2 className="d-flex justify-content-center mt-3 mb-3">
          Postanowienia ogólne
        </h2>
        <li>
          Organizatorem Gliwickich Dni Fantastyki, zwanych dalej GDF, jest
          GOP-Con Sp. z o.o., mieszcząca się przy pl. Jana Pawła II 3A, 41-709
          Ruda Śląska, wpisana do Krajowego Rejestru Sądowego pod numerem
          0000987688, NIP 6412559004, REGON 52284901000000, zwane dalej
          Organizatorem.
        </li>
        <li>
          Przez Wystawców rozumie się wszystkie podmioty, które zawarły lub są w
          trakcie zawierania z Organizatorem umowy o współpracy obejmujące
          wystawienie stoiska na GDF.
        </li>
        <li>
          Organizator zastrzega sobie prawo do wyznaczenia osoby odpowiedzialnej
          za każdego z Wystawców.
        </li>
        <li>Niniejszy Regulamin jest integralną częścią umowy.</li>
        <h2 className="d-flex justify-content-center mt-3 mb-3">Stoiska</h2>
        <li>
          Przestrzeń wynajęta Wystawcy na podstawie umowy z organizatorem zwana
          jest dalej Stoiskiem.
        </li>
        <li>
          Jeden Wystawca może wystawić tylko jedno stoisko. W szczególnie
          uzasadnionych przypadkach, o ile pozwalają na to warunki techniczne i
          organizacyjne, po uzyskaniu zgody Koordynatora Pionu Wystawców,
          wystawca może wystawić kolejne stoisko na zasadach określonych przez
          Koordynatora Pionu Wystawców.
        </li>
        <li>
          Organizator może odmówić potwierdzenia zgłoszenia i zawarcia umowy o
          współpracy obejmującej wystawienie stoiska bez podania przyczyny. W
          takim wypadku Organizator mailowo powiadamia o odmowie potwierdzenia
          zgłoszenia i zawarcia ww. umowy nie później niż do 01.10.2022 r.
        </li>
        <li>
          Organizator zastrzega sobie prawo do zmniejszenia zgłoszonej przez
          Wystawcę powierzchni bez podania przyczyny.
        </li>
        <li>
          Wystawca zobowiązuje się do rozstawienia stoiska handlowego lub
          wystawienniczego w miejscu wyznaczonym przez Organizatora. Z przyczyn
          technicznych i organizacyjnych Organizator nie gwarantuje wyznaczenia
          konkretnej lokalizacji stoiska na przestrzeni wyznaczonej dla
          Wystawców.
        </li>
        <li>
          Wystawca zobowiązuje się do wystawienia wyłącznie przedmiotów, którymi
          obrót prawny jest dozwolony i nienaruszających praw osób trzecich
          dotyczących własności intelektualnej, w szczególności w rozumieniu
          ustawy z dnia 4 lutego 1994 r. o prawie autorskim i prawach pokrewnych
          (t.j. Dz. U. z 2019 r. poz. 1231.) oraz ustawy z dnia 30 czerwca 2000
          r. Prawo własności przemysłowej (Dz. U. z 2017 r. poz. 776 ze zm.). W
          razie naruszenia praw, o których mowa wyżej, Wystawca ponosi wyłączną
          odpowiedzialność za naruszenie praw osób trzecich.
        </li>
        <li>
          Wystawca może handlować na swoim stoisku wyłącznie po dopełnieniu
          wszelkich formalności zgodnie z właściwymi przepisami i na własną
          odpowiedzialność. Organizator nie ponosi odpowiedzialności za towar
          sprzedawany na stoisku Wystawcy. Treści prezentowane na stoisku
          Wystawcy nie mogą być sprzeczne z prawem, dobrymi obyczajami lub
          zasadami współżycia społecznego.
        </li>
        <li>
          Organizator może nakazać Wystawcy natychmiastowe usunięcie ze stoiska
          elementów stwarzających zagrożenie dla bezpieczeństwa osób lub mienia
          oraz naruszających punkty 9, 10 i 12 Regulaminu, a także nawołujących
          do nienawiści lub popełnienia przestępstwa.
        </li>
        <li>
          Zabroniona jest sprzedaż: a. broni w rozumieniu obowiązującej Ustawy o
          Broni i Amunicji; b. amunicji do wyżej wymienionych; c. shurikenów; d.
          broni białej z wyjątkiem przedmiotów posiadających stępione krawędzie
          – noży, egzemplarzy broni białej, treningowej i replik broni
          improwizowanej, pod warunkiem, że są one przenoszone w sposób
          niestwarzający zagrożenia dla innych uczestników; e. materiałów
          wybuchowych i pirotechnicznych; f. substancji toksycznych, cuchnących
          lub łatwopalnych.
        </li>
        <li>
          Ostateczna decyzja odnośnie możliwości sprzedaży na terenie GDF broni
          lub przedmiotów mogących zostać uznane za niebezpieczne należy do
          organizatora i służb przez niego wyznaczonych.
        </li>
        <li>
          Wystawca (w tym pracownik stoiska) zobowiązany jest do zachowania
          trzeźwości podczas pracy na stoisku. Jeżeli zachodzi uzasadnione
          podejrzenie, że Wystawca, w tym pracownik stoiska, znajduje się w
          stanie nietrzeźwości, Organizator zastrzega sobie prawo do zbadania
          pracownika (Wystawcy) alkomatem. Nietrzeźwy Wystawca (pracownik)
          zobowiązany jest do opuszczenia stoiska do czasu wytrzeźwienia pod
          rygorem usunięcia z terenu Festiwalu. Odmówienie przez Wystawcę lub
          pracownika stoiska poddania się badaniu alkomatem uznaje się za
          przyznanie się do stawianego mu zarzutu bycia nietrzeźwym.
        </li>
        <li>
          Organizator nie ponosi odpowiedzialności za szkody spowodowane przez
          Wystawcę lub przez elementy wyposażenia będące częścią stoiska
          Wystawcy.
        </li>
        <li>
          Na przestrzeni wyznaczonej dla Wystawców nie można ustawiać stoisk
          przygotowujących jedzenie i napoje na miejscu bez pisemnej lub
          mailowej zgody Koordynatora Pionu Wystawców.
        </li>
        <li>
          Wszystkie konstrukcje w obrębie stoiska powinny zostać zgłoszone
          Organizatorowi przed podpisaniem umowy najpóźniej do dnia 01.10.2022
          r. Wystawca zobowiązany jest do wypełnienia dokumentacji dla takiej
          konstrukcji zgodnie z IBP 2020 tekst (1).pdf. Dla konstrukcji powyżej
          3,5 m wysokości, wszelkie dokumenty muszą być poświadczone przez osobę
          z uprawnieniami budowlanymi. Organizator zastrzega sobie prawo do
          ustawienia własnych stoisk handlowych lub wystawienniczych.
        </li>
        <li>
          Wystawca może organizować na swoim stoisku loterię wyłącznie po
          dopełnieniu wszelkich formalności zgodnie z właściwymi przepisami.
          Wystawca może organizować taką loterię wyłącznie na własną
          odpowiedzialność, a Organizator nie ponosi odpowiedzialności za jej
          organizację wobec uczestników GDF ani właściwych organów.
        </li>
        <li>
          Wystawca jest zobowiązany zapewnić obsługę stoiska, przez cały czas
          otwarcia przestrzeni wyznaczonej dla Wystawców, dla uczestników.
        </li>
        <li>
          Organizator zastrzega sobie prawo obciążenia Wystawcy kosztami
          związanymi z naprawą uszkodzonego lub zniszczonego wyposażenia stoiska
          (zabudowa, stoły, krzesła i inne). W związku z tym Wystawca
          zobowiązany jest podpisać z Organizatorem protokół przyjęcia oraz
          zdania stoiska.
        </li>
        <li>
          W przypadku niepodpisania protokołu zdawczego stoiska przed wyjazdem z
          GDF, Wystawca zostanie obciążony karą wysokości równowartości 40%
          kosztów wynajmu stoiska oraz wypożyczenia każdego elementu wyposażenia
          stoiska zgodnie z cennikiem stoisk.
        </li>
        <li>
          Wystawca ma prawo do podnajmowania całości lub części wynajętej
          powierzchni wystawienniczej innemu podmiotowi (Współwystawcy) jedynie
          za uprzednią, pisemną zgodą Organizatora. W przypadku naruszenia
          niniejszego postanowienia, Organizator będzie mógł nałożyć na Wystawcę
          karę umowną w wysokości do 100% wartości netto wynikającej z umowy.
        </li>
        <li>
          Wystawca ponosi pełną odpowiedzialność za swoich Współwystawców.
        </li>
        <li>
          Współwystawcy zobowiązani są do przestrzegania postanowień Regulaminu
          Wystawców oraz Regulaminu GDF. W razie rażącego naruszenia w
          szczególności postanowienia 23 Regulaminu Wystawców przez
          Współwystawcę, Organizator może odmówić współpracy z takim
          Współwystawcą przy organizacji kolejnych dwóch edycji GDF.
        </li>
        <li>
          Wystawca może, w obrębie stoiska bądź / oraz w innym miejscu GDF,
          odtwarzać publicznie utwory objęte ochroną praw autorskich jedynie w
          sposób zgodny z ustawą o prawie autorskim i prawach pokrewnych.
          Organizator nie ponosi odpowiedzialności za działania bądź zaniechania
          Wystawcy skutkujące w powyżej wskazanym zakresie naruszeniem praw
          autorskich osób trzecich.
        </li>
        <li>
          Organizator zapewnia wyposażenie stoiska w postaci krzeseł w liczbie
          nie większej niż 2 szt. na metr kwadratowy stoiska oraz stoły w
          liczbie nie większej niż 1 szt. na 2 metry kwadratowe stoiska.
          Organizator może wyrazić zgodę na korzystanie z własnego wyposażenia
          stoiska, lecz powierzchnia wynajmu oraz koszt, zawarte w umowie, nie
          ulegają zmianie. Organizator może dostarczyć dodatkowe wyposażenie
          stoiska na życzenie Wystawcy, zgodnie z ustalonym cennikiem.
        </li>
        <h2 className="d-flex justify-content-center mt-3 mb-3">
          Warunki i terminy wpłat
        </h2>
        <li>
          Wystawca zobowiązuje się do opłacenia ceny stoiska zgodnie z terminem
          podanym w umowie, jednak nie później niż do 01.10.2022 r. Wystawca
          rozliczający się za stoisko w towarze zobowiązuje się do jego
          przekazania w terminie podanym w umowie, nie później jednak niż do
          dnia 01.10.2022 r. Szczegóły przekazania towaru będą podane Wystawcy
          na adres e-mailowy podany w umowie.
        </li>
        <li>
          W przypadku nieterminowego rozliczenia barterowego, Organizator
          zastrzega sobie prawo do odmowy rozliczenia barterowego i możliwość
          zmiany sposobu rozliczenia na gotówkowy.
        </li>
        <li>
          W przypadku odstąpienia przez Wystawcę od umowy o współpracę
          obejmującej wystawienie stoiska opłata za stoisko uiszczona przez
          Wystawcę zostaje zwrócona:
        </li>
        <ul>
          <li>
            w wysokości 100% wniesionej opłaty, jeśli rezygnacja nastąpi do
            31.08.2022 r.
          </li>
          <li>
            w wysokości 75% wniesionej opłaty, jeśli rezygnacja nastąpi do
            15.09.2022 r.
          </li>
          <li>
            w wysokości 50% wniesionej opłaty, jeżeli rezygnacja nastąpi do
            01.10.2022 r.
          </li>
        </ul>
        <li>
          Rezygnacja w późniejszym terminie wiąże się z brakiem zwrotu kwot, o
          których mowa. W przypadku, gdy wystawca odstąpił od umowy przed
          uiszczeniem ceny za stoisko lub przekazaniem jej równowartości w
          towarze, zobowiązany jest uiścić kwotę, o której mowa powyżej lub jej
          równowartość w towarze na zasadach określonych powyżej.
        </li>
        <li>
          Punktu 30 nie stosuje się, a Organizator zwróci Wystawcy wniesioną
          opłatę, jeśli są spełnione poniższe warunki łącznie:
        </li>
        <ul>
          <li>
            Wystawca odstąpił od umowy z powodu konieczności odbycia kwarantanny
            z uwagi na COVID-19
          </li>
          <li>obowiązek odbycia kwarantanny wypadł w terminie GDF</li>
          <li>
            2022 udokumentował wobec Organizatora fakt konieczności odbycia
            kwarantanny w sposób niebudzący wątpliwości
          </li>
          <li>
            złożył wobec Organizatora oświadczenie, że nie ma możliwości
            przekazania prowadzenia stoiska
          </li>
          <li>pracownikowi (ewentualnie osobie współpracującej z Wystawcą).</li>
        </ul>
        <li>
          Rozliczenia z Wystawcą związane z rezygnacją z udziału w GDF będą
          realizowane w terminie do 30 dni od daty zakończenia GDF.
        </li>
        <li>
          W przypadku odwołania GDF 2022, Organizator zapewnia automatyczny
          zwrot opłat uiszczonych przez Wystawców, w terminie:
        </li>
        <ul>
          <li>
            180 dni od daty odwołania tego wydarzenia, jeśli odwołanie miało
            związek z negatywnymi skutkami COVID-19.
          </li>
          <li>
            30 dni od daty odwołania, jeśli odwołanie nastąpiło z innej
            przyczyny leżącej po stronie Organizatora, zwłaszcza z uwagi na siłę
            wyższą ( przez siłę wyższą rozumie się zdarzenia zewnętrzne,
            niezależne od Organizatora i niemożliwe do przewidzenia, takie jak w
            szczególności: wojna, pożar, epidemie (inne niż COVID-19), powódź,
            blokady komunikacyjne o charakterze ponadregionalnym, kataklizmy
            społeczne albo katastrofy budowli lub budynków).
          </li>
        </ul>
        <li>
          W przypadku zmiany czasu lub miejsca GDF 2022, Wystawca jest
          zobowiązany do zgłoszenia żądania zwrotu uiszczonej opłaty za stoisko
          w terminie 30 dni od dnia ogłoszenia w mediach społecznościowych GDF
          2022 informacji o zmianie czasu bądź miejsca GDF 2022. Brak takiego
          zgłoszenia oznacza, iż Wystawca wyraża wolę udziału w GDF 2022 w nowej
          lokalizacji bądź czasie.
        </li>
        <li>
          Opłata zostanie zwrócona na rachunek bankowy, z którego została
          uiszczona, chyba, że Wystawca w zgłoszeniu zwrotu poda inny rachunek
          bankowy (forma mailowa jest wystarczająca).
        </li>
        <li>
          Organizator nie zwraca innych kosztów poniesionych przez Wystawcę w
          związku z odwołaniem bądź zmianą czasu lub miejsca GDF 2022 w
          przypadku gdy odwołanie, zmiana czasu lub miejsca GDF następuje z
          przyczyn niezależnych od Organizatora.
        </li>
        <li>
          Zapisy powyższe stosuje się odpowiednio do rozliczeń barterowych, przy
          czym Organizator zapewnia pokrycie kosztów wysyłki zwrotu barteru.
        </li>
        <li>
          Wszystkie stoiska niezgłoszone i nieuzgodnione z Organizatorem zostaną
          zlikwidowane, a koszty związane z ich usunięciem poniesie właściciel
          tego stoiska.
        </li>
        <li>
          Wystawca wyraźnie potwierdza, że organizator nie składał mu żadnych
          zapewnień, ani gwarancji dotyczących wyników ekonomicznych, jakie
          wystawca osiągnie na skutek udziału w konwencie i nie będzie miał z
          tego tytułu do organizatora jakichkolwiek roszczeń.
        </li>
        <h2 className="d-flex justify-content-center mt-3 mb-3">Reklama</h2>
        <li>
          Wystawcy posiadający stoisko mogą w jego obrębie, rozwieszać bannery,
          plakaty, kolportować ulotki; poza stoiskiem mogą to robić jedynie po
          uprzednim uzgodnieniu tego z Organizatorem (za dodatkową opłatą i
          wyłącznie w miejscach wyznaczonych przez Organizatora).
        </li>
        <li>
          Wszystkie roll-upy, bannery, ulotki i plakaty rozmieszczone poza
          stoiskiem bez uprzedniego uzgodnienia tego z Organizatorem zostaną
          usunięte, a koszty związane z ich usunięciem poniesie właściciel tego
          stoiska. Roznoszenie ulotek poza stoiskiem bez uprzedniego uzgodnienia
          tego z Organizatorem będzie skutkowało usunięciem Wystawcy z terenu
          GDF, bez zwrotu kosztów.
        </li>
        <li>
          Umieszczanie nazwy GDF bądź jej części, jak również umieszczanie loga
          GDF bądź jego części na sprzedawanych produktach nie jest dopuszczalne
          bez zawarcia umowy z Organizatorem. Naruszenie tej zasady skutkować
          będzie natychmiastowym wyproszeniem Wystawcy z terenu GDF oraz
          koniecznością zapłaty odszkodowania na rzecz Organizatora oraz
          skorzystania przez niego z innych uprawnień na podstawie
          obowiązujących przepisów.
        </li>
        <li>
          Organizator może utrwalać przebieg imprezy, a w szczególności
          zachowania osób w niej uczestniczących za pomocą urządzeń
          rejestrujących obraz i dźwięk oraz udostępniać zgromadzone w ten
          sposób materiały odpowiednim organom ścigania w przewidzianych prawem
          przypadkach, jak również wykorzystywać je w celach marketingowych, w
          tym zwłaszcza publikować na własnych stronach internetowych, portalach
          społecznościowych, prezentacjach, ofertach handlowych, materiałach
          reklamowych itp.
        </li>
        <h2 className="d-flex justify-content-center mt-3 mb-3">
          Hale wystawiennicze
        </h2>
        <li>
          Halę wystawienniczą (Hol C) Organizator zobowiązuje się udostępnić:
        </li>
        <ul>
          <li>
            14.10.2022 w godzinach 15:00 - 23:00, od godziny 9:00 dla Wystawców
            w celu przygotowania Stoisk
          </li>
          <li>15.10.2022 w godzinach 08:00 - 23:00</li>
          <li>16.10.2022 w godzinach 10:00 - 17:00</li>
        </ul>
        <li>
          Organizator zastrzega sobie prawo zmiany terminu udostępnienia
          powierzchni w Hali wystawienniczej po uprzednim poinformowaniu
          Wystawców drogą mailową, jeżeli zmiana nastąpi przed rozpoczęciem GDF
          lub poprzez rozwieszenie ogłoszeń przy wejściu do hali, jeżeli zmiana
          wystąpi w trakcie trwania GDF.
        </li>
        <li>
          Organizator zastrzega sobie prawo do zmiany godzin dostępności Hali
          wystawienniczej dla uczestników GDF po uprzednim poinformowaniu
          Wystawców drogą mailową, jeżeli zmiana nastąpi przed rozpoczęciem GDF
          lub poprzez rozwieszenie ogłoszeń przy wejściu do hali jeżeli zmiana
          wystąpi w trakcie trwania GDF.
        </li>
        <li>
          Organizator zobowiązuje się do zabezpieczenia hali wystawienniczej w
          godzinach jej zamknięcia.
        </li>
        <li>
          Organizator nie ponosi odpowiedzialności materialnej za przedmioty
          pozostawione na stoiskach na czas zamknięcia hali wystawienniczej.
        </li>
        <li>
          Organizator nie ponosi odpowiedzialności materialnej za szkody
          wyrządzone przez uczestników GDF w obrębie stoisk w trakcie
          udostępnienia hali wystawienniczej dla zwiedzających.
        </li>
        <li>
          Wystawca zobowiązany jest do usunięcia ze stoiska i terenu wokół niego
          pustych opakowań przed otwarciem hali dla uczestników.
        </li>
        <li>
          Wystawca zobowiązany jest do utrzymania czystości i estetyki stoiska w
          godzinach dostępności dla uczestników.
        </li>
        <h2 className="d-flex justify-content-center mt-3 mb-3">
          Wejściówki i wjazd na teren Areny Gliwice
        </h2>
        <li>
          Po dotarciu na teren konwentu wystawca ma obowiązek zgłosić się do
          organizatora w celu wskazania mu miejsca na rozstawienie stoiska.
        </li>
        <li>
          Wystawca otrzyma dokument uprawniający do wjazdu na teren Areny
          Gliwice. Organizator nie gwarantuje dostępności miejsc parkingowych.
        </li>
        <li>
          Organizator nie ponosi odpowiedzialności materialnej za pojazdy
          pozostawione na terenie Areny Gliwice.
        </li>
        <li>
          Wystawca zobowiązany jest do przestrzegania zasad dotyczących
          parkowania, wyznaczonych przez Organizatora. Pojazdy pozostawione w
          niedozwolonych miejscach podlegać będą odholowaniu na koszt Wystawcy.
        </li>
        <li>
          Wejściówka (identyfikator) „Wystawca” jest przeznaczona wyłącznie dla
          obsługi stoiska, ponieważ umożliwia wstęp na Halę wystawienniczą w
          godzinach niedostępnych dla uczestników. Identyfikator „Wystawca”
          uprawnia do korzystania z atrakcji GDF.
        </li>
        <li>
          Organizator zastrzega sobie prawo do ograniczenia liczby wejściówek
          dopuszczalnych dla danego stoiska.
        </li>
        <h2 className="d-flex justify-content-center mt-3 mb-3">Przesyłki</h2>
        <li>
          Organizator nie odpowiada za przesyłki Wystawcy przesłane na inny
          adres korespondencyjny niż wskazany przez Organizatora.
        </li>
        <li>
          Przesyłki należy przesyłać na adres:
          <div><BoldText value="Gliwickie Dni Fantastyki 2022" /></div>
          <div><BoldText value="Centrum Kultury Studenckiej „Mrowisko”" /></div>
          <div><BoldText value="ul. Pszczyńska 85" /></div>
          <div><BoldText value="44-100 Gliwice" /></div>
        </li>
        <li>
          Przesyłki wielkogabarytowe, w tym przesyłki na paletach, jeśli nie
          ustalono inaczej, należy przesyłać bezpośrednio na adres Areny
          Gliwice.
        </li>
        <li>
          O przesyłkach kierowanych na adres Areny Gliwice należy informować
          Organizatora drogą mailową na adres koordynatora wystawców.
        </li>
        <li>
          Wszystkie paczki po zakończeniu GDF muszą zostać odebrane przez
          zamówionych kurierów do 17.10.2022 r. do godziny 16:00. Organizator
          nie pośredniczy w zamawianiu usług kurierskich. Organizator nie ponosi
          odpowiedzialności za paczki nieodebrane w terminie.
        </li>
        <h2 className="d-flex justify-content-center mt-3 mb-3">Inne</h2>
        <li>
          Wolontariusze Festiwalu nie pomagają Wystawcom przy rozstawianiu
          stoisk, o ile odrębna umowa wyraźnie nie określa zasad takiej pomocy
          bądź Organizatorzy nie postanowią inaczej.
        </li>
        <h2 className="d-flex justify-content-center mt-3 mb-3">
          Postanowienia końcowe
        </h2>
        <li>
          Organizator zastrzega sobie prawo do zmiany niniejszego Regulaminu bez
          uprzedniego informowania potencjalnych uczestników.
        </li>
      </ol>
    </>
  );
};
