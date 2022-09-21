import { useEffect, useState } from "react";

export const CosplayRules = ({ modal }) => {
  const [header, setHeader] = useState("");

  useEffect(() => {
    if (modal) {
      setHeader("");
    }
    if (!modal) {
      setHeader("Regulamin Konkursu Cosplay");
    }
  }, [modal]);

  return (
<>
      <h1>{header}</h1> 
      <h2 className="d-flex justify-content-center">§ 1 Definicje</h2>
      <ol>
      <li>Użyte w niniejszym Regulaminie pojęcia i definicje będą miały poniżej przedstawione 
znaczenie:</li>
<ol style={{listStyleType: "lower-alpha"}}>
<li>Organizator – Gliwickich Dni Fantastyki, zwanych dalej GDF, jest GOP-Con Sp. z o.o., mieszcząca się przy pl. Jana Pawła II 3A, 41-709 Ruda Śląska, wpisana do Krajowego Rejestru Sądowego pod numerem 0000987688, NIP 6412559004, REGON 52284901000000, zwane dalej Organizatorem.</li>
<li>Konkurs – konkurs prowadzony pod nazwą „Konkurs Cosplay” na zasadach określonych Regulaminem. Konkurs zostanie przeprowadzony wyłącznie podczas wydarzenia „Gliwickie Dni Fantastyki 2022” które odbędzie się w dniach 14-16.10.2022r.</li>
<li>Regulamin – niniejszy regulamin określający warunki, na których odbywa się konkurs pod  nazwą „Konkurs Cosplay”. Regulamin ten jest jedynym obowiązującym regulaminem.</li>
<li>Uczestnik – osoba fizyczna spełniająca wymagania z § 3 ust.1 Regulaminu.</li>
</ol>
</ol>
<h2 className="d-flex justify-content-center">§ 2 Postanowienia ogólne</h2>
<ol>
<li>Konkurs organizowany jest na terytorium Rzeczpospolitej Polskiej.</li>
<li>Konkurs zostanie przeprowadzony podczas Gliwickich Dni Fantastyki 2022 w dniu 15.10.2022r.</li>
<li>Konkurs nie jest grą losową, zakładem wzajemnym ani loterią promocyjną, których wynik  zależy od przypadku (przeprowadzenie losowania) w rozumieniu art. 2 ustawy z dnia 19  listopada 2009 r. o grach hazardowych (Dziennik Ustaw z 2009 r., Nr 201 poz. 1540).</li>
<li>W trakcie trwania Konkursu Organizator dochowa wszelkich starań by zachować określone  w aktualnych wytycznych normy sanitarne, w szczególności takich jak: dezynfekcja obiektów  znajdujących się na backstage'u, klamek, toalet, używanego sprzętu oraz udostępnieniu płynu do dezynfekcji rąk dla Uczestników.</li>
</ol>
<h2 className="d-flex justify-content-center">§ 3 Warunki uczestnictwa w Konkursie</h2>
<ol>
<li>Uczestnikiem Konkursu może być każda osoba fizyczna, będąca konsumentem w rozumieniu  art. 221kc, która co najmniej w dniu rozpoczęcia Konkursu spełnia łącznie następujące warunki:</li>
<ul style={{alignSelf: "flex-start"}}>
<li>zapoznała się z treścią Regulaminu i zaakceptowała jego postanowienia</li>
<li>jest pełnoletnia lub ukończyła przynajmniej 13 rok żyć i posiada pisemną zgodę oraz podpis opiekuna prawnego na udział w konkursie lub przebywa na terenie konwentu pod nadzorem opiekuna prawnego</li>
<li>posiada strój postaci z komiksów, filmów, książek, seriali, gier komputerowych, bajek, bądź  innych produktów popkultury.</li>
<li>zgłaszany strój nie zajął 1 miejsca w jakimkolwiek innym konkursie</li>
</ul>
<li>Niedozwolone jest umieszczanie i propagowanie przez Uczestników treści niezgodnych z prawem i dobrymi obyczajami, mogących naruszyć czyjekolwiek dobra osobiste. W przypadku stwierdzenia ww. Uczestnik może zostać zdyskwalifikowany.</li>
<li>Uczestnictwo w Konkursie jest dobrowolne. Uczestnik przystępując do Konkursu akceptuje wszystkie zawarte w Regulaminie postanowienia.</li>
</ol>
<h2 className="d-flex justify-content-center">§ 4 Zasady i przebieg Konkursu</h2>
<ol>
<li>Uczestnik konkursu powinien wykonać swój strój samodzielnie, jednak są dopuszczalne pojedyncze elementy kupione. Strój musi być wykonany samodzielnie w przynajmniej 80%.</li>
<li>Każdy uczestnik podlega ocenie indywidualnej.</li>
<li>Zgłoszenie na konkurs Cosplay należy wysłać w terminie od 05.09.2022r. do 01.10.2022r. do godziny 23:59.</li>
<li>Organizator zastrzega sobie prawo do odrzucenia zgłoszeń niekompletnych, nieodpowiednich dla osób młodszych oraz powszechnie uznawanych za niewłaściwe.</li>
<li>Zmiany w zgłoszeniu można dokonywać najpóźniej do 09.10.2022r.</li>
<li>Najpóźniej dwa dni przed rozpoczęciem konkursu wszystkim uczestnikom zostanie wysłana aktualna informacja dotycząca godziny i miejsca rozpoczęcia konkursu wraz z próbą i rundą Jury.</li>
<li>Każdy Uczestnik jest zobowiązany pojawić się na próbie przed konkursem.</li>
<li>Każdy Uczestnik jest zobowiązany wziąć udział w rundzie Jury przed konkursem, polegającej na prezentacji kostiumu przed sędziami konkursu.</li>
<li>Każdy Uczestnik będzie miał maksymalnie 2,5 minuty, aby zaprezentować swój strój na
scenie przed Jury i publicznością.</li>
<li>Strój każdego Uczestnika zostanie oceniony przez Jury zarówno podczas rundy Jury
jak i podczas występu na scenie.</li>
<li>Nagrody zostaną przyznane w następujących kategoriach:</li>
<ul style={{alignSelf: "flex-start"}}>
<li>Największe podobieństwo do postaci (zgodność z materiałami źródłowymi)</li>
<li>Najlepszy występ sceniczny</li>
<li>Najlepsze wykonanie techniczne (użyte materiały, techniki oraz staranność wykonania stroju)</li>
<li>Projekt własny</li>
</ul>
<li>Niestawienie się na próbie przed konkursem, na rundzie Jury lub na prezentacji scenicznej jest uznawane za rezygnację z uczestnictwa.</li>
<li>W Konkursie dopuszczalne są występy grupowe. Jednak każdy członek grupy musi spełnić  wszystkie powyższe wymagania. Uczestnicy występujący w grupie będą mieli maksymalnie 3 minuty, aby zaprezentować swoje stroje na scenie.</li>
<li>Ogłoszenie wyników i wręczenie nagród odbędzie się 15.10.2022 r.</li>
<li>Decyzja Jury jest nieodwołalna i nie podlega zaskarżeniu.</li>
<li>Organizator zastrzega sobie prawo do :</li>
<ul style={{alignSelf: "flex-start"}}>
<li>zmiany terminów zgłoszeń, a w szczególności do zakończenia przyjmowania zgłoszeń we wcześniejszym terminie</li>
<li>wprowadzania zmian w niniejszym Regulaminie</li>
<li>odwołania konkursu, bez podania przyczyny</li>
</ul>
<li>Uczestnik biorąc udział w konkursie musi podpisać oświadczenie w którym wyraża zgodę na wykorzystanie wizerunku do celów promocyjnych przez organizatora.</li>
<li>Uczestnicy są zobowiązani do przestrzegania zasad sanitarnych oraz epidemiologicznych na terenie Konwentu, backstage’u oraz szatni.</li>
<li>Regulamin Konwentu „Gliwickie Dni Fantastyki 2022” jest nadrzędny i obowiązuje każdego Uczestnika.</li>
<li>Niedozwolone jest używanie przedmiotów ostrych, elementów pirotechnicznych, rac dymnych oraz przedmiotów zagrażających życiu, bądź zdrowiu Uczestników lub widowni oraz używanie symboli ogólnie przyjętych za niewłaściwe (Organizator zastrzega sobie prawo do interpretacji)</li>
<li>Nagrody rzeczowa nie podlega reklamacji oraz wymianie na ekwiwalent pieniężną.</li>
<li>Organizator zastrzega sobie prawo do wykluczenia z udziału w Konkursie: </li>
<ul style={{alignSelf: "flex-start"}}>
<li>osób, co do których zajdzie uzasadnione przypuszczenie, że mogą one podejmować działania prowadzące do prób obejścia Regulaminu, lub które w inny sposób dążą do przełamania zabezpieczeń lub zasad przeprowadzania Konkursu. </li>
<li>osób prowadzących działania naruszające uzasadnione interesy Organizatora, godzące w jego wizerunek, lub naruszające zasady współżycia społecznego. </li>
<li>osób łamiących ustalenia Regulaminu.</li>
</ul>
<li>Organizator zastrzega sobie prawo do nanoszenia poprawek do wysłanych zapowiedzi 
postaci, jeżeli te będą zawierały treści niezgodne z prawem i dobrymi obyczajami, mogące
naruszyć czyjekolwiek dobra osobiste.</li>
</ol>
<h2 className="d-flex justify-content-center">§ 5 Dane osobowe uczestników</h2>
<ol>
<li>Przystępując do konkursu uczestnik wyraża zgodę na przetwarzanie danych osobowych w  postaci imienia i nazwiska, adresu zamieszkania, telefonu, adresu e-mail oraz wizerunku na potrzeby organizacji konkursu, wyłonienia zwycięzcy oraz publikacji danych uczestnika  nagrodzonego na stronie internetowej Gliwickich Dni Fantastyki 2022 oraz profilu konwentu na portalu  społecznościowym Facebook. W przypadku otrzymania nagrody uczestnik wyraża zgodę na przetwarzanie danych osobowych w postaci imienia, nazwiska, adresu zamieszkania, daty  urodzenia, numeru pesel oraz imion rodziców na potrzeby wręczenie nagrody oraz dla potrzeb podatkowych. </li>
<li>Wyrażenie zgody na przetwarzanie danych jest dobrowolne jednak niezbędne do  uczestnictwa w konkursie.</li>
<li>Administratorem danych osobowych jest GOP-Con Sp. z o.o., mieszcząca się przy pl. Jana Pawła II 3A, 41-709 Ruda Śląska, wpisana do Krajowego Rejestru Sądowego pod numerem 0000987688, NIP 6412559004, REGON 52284901000000.</li>
<li>Dane osobowe uczestników konkursu w postaci imienia, nazwiska oraz wizerunku  przetwarzane będą wyłącznie w celu organizacji konkursu oraz publikacji danych autorów  nagrodzonych prac na nośnikach określonych w §5. p.1</li>
<li>Wśród odbiorców danych osobowych znaleźć się mogą podmioty, które na podstawie  stosownej umowy powierzenia stają się odbiorcami danych, a które realizują w imieniu bądź  na rzecz administratora określone funkcje (łączenie i przechowywanie danych, konserwacja  systemów księgowych i kadrowych, administracja pocztą elektroniczną, dystrybutor biletów).
Poza powyżej wskazanymi przypadkami dane osobowe nie będą udostępniane innym  podmiotom, ani nie będą przekazywane do państw trzecich, o ile nie wynikało to będzie z  obowiązujących przepisów prawa.</li>
<li>W innych przypadkach przekazanie danych osobowych może nastąpić wyłącznie za zgodą  uczestnika.</li>
<li>Dane osobowe będą przetwarzane przez okres niezbędny dla przeprowadzenia konkursu,  wręczenia nagrody a także przez czas wynikający z obowiązujących przepisów prawa, w  szczególności przepisów podatkowych oraz przepisów kodeksu prawa cywilnego.</li>
<li>Każdy, kogo dane osobowe są przetwarzane, ma prawo żądania od administratora dostępu do swoich danych osobowych, prawo do żądania ich sprostowania, usunięcia lub ograniczenia przetwarzania, prawo wniesienia sprzeciwu a także prawo do przenoszenia danych.</li>
<li>W przypadku, gdy przetwarzanie danych osobowych odbywa się na podstawie zgody jest  ona zawsze dobrowolna.</li>
<li>Zgoda na przetwarzanie danych osobowych może być w każdej chwili cofnięta bez wpływu na zgodność z prawem przetwarzania, którego dokonano przed cofnięciem zgody. Zgoda może być cofnięta w dowolny sposób, który umożliwi Administratorowi danych osobowych zapoznanie się wolą osoby, której dane dotyczą.</li>
<li>Każdy, kogo dane są przetwarzane, ma prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych w przypadku stwierdzenia, iż jego dane osobowe przetwarzane są z naruszeniem prawa.</li>
<li>Dane osobowe nie podlegają zautomatyzowanym procesom podejmowania decyzji, w tym profilowaniu.</li>
</ol>
<h2 className="d-flex justify-content-center">§ 6 Postanowienia końcowe</h2>
<ol style={{alignSelf: "flex-start"}}>
<li>W kwestiach nieuregulowanych Regulaminem stosuje się przepisy Kodeksu Cywilnego.</li>
<li>Zasady przeprowadzania Konkursu określa wyłącznie Regulamin.</li>
<li>Regulamin wchodzi w życie z dniem publikacji. </li>
</ol>
</>
  );
};
