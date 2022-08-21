import { useEffect, useState } from "react";

export const HelperRules = ({ modal }) => {
  const [header, setHeader] = useState("");

  useEffect(() => {
    if (modal) {
      setHeader("");
    }
    if (!modal) {
      setHeader("Regulamin helperów");
    }
  }, [modal]);

  return (
    <>
      <h1>{header}</h1>
      <div>
        Wolontariat jest regulowany przez Ustawę z dnia 24 kwietnia 2003 r. o
        działalności pożytku publicznego i o wolontariacie (Dz. U. z 2020 r.
        poz. 1057 z późn. zm.).
      </div>
      <h2 className="d-flex justify-content-center">I. Konwent</h2>
      <ol>
        <li>
          Konwent Gliwickie Dni Fantastyki, zwany dalej Konwentem, odbywa się w
          dniach 14-16 października 2022 roku na terenie tu wpisz teren eventu.
        </li>
        <li>
          Głównym organizatorem Konwentu jest GOP-Con Sp. z o.o., mieszcząca się
          przy pl. Jana Pawła II 3A, 41-709 Ruda Śląska, wpisana do Krajowego
          Rejestru Sądowego pod numerem 0000987688, NIP 6412559004, REGON
          52284901000000, zwana dalej Organizatorem. Organem odpowiedzialnym za
          zatrudnienie, koordynację oraz nadzór nad wolontariuszami jest Klub
          Fantastyki Kregulec, działający na wniosek i w porozumieniu z
          Organizatorem, a w imieniu Organizatora - Koordynator ds. Helperów.
        </li>
      </ol>
      <h2 className="d-flex justify-content-center">II. Wolontariat</h2>
      <ol>
        <li>
          Wolontariat jest dobrowolną i nieprzymuszoną formą uczestnictwa w
          konwencie, polegającą na nieodpłatnej pracy na rzecz wydarzenia.
        </li>
        <li>
          Koordynacją i nadzorem pracy wolontariuszy zajmują się wyznaczeni do
          tego Organizatorzy.
        </li>
        <li>
          Podstawą pracy wolontariusza jest umowa o wolontariat zawarta pomiędzy
          wolontariuszem a Organizatorem, sporządzona i podpisana w dwóch
          kopiach najpóźniej w dniu pierwszego dyżuru wolontariusza w trakcie
          wydarzenia.
        </li>
        <li>
          Wolontariuszem może zostać osoba, która ukończyła 16 lat lub ukończy
          najpóźniej w dniu rozpoczęcia Konwentu, tj. 14 października 2022 roku.
        </li>
        <li>
          Niepełnoletni wolontariusz jest zobowiązany do dostarczenia
          Organizatorom zgody opiekuna prawnego na udział w wolontariacie
          najpóźniej w dniu rozpoczęcia pierwszego dyżuru podczas Konwentu.
          Zgodę stanowi wypełniona Karta Młodego Wolontariusza [tutaj trzeba
          skonstruować własną kartę].
        </li>
        <li>
          Warunkiem koniecznym przyjęcia do wolontariatu jest wypełnienie
          formularza zgłoszeniowego dostępnego na stronie
          www.gliwickiednifantastyki.pl{" "}
        </li>
        <li>
          Rekrutacja otwarta będzie od dnia 15 września do dnia 26 września 2022
          roku. Zgłoszenia wysłane po tym terminie nie będą rozpatrywane.
        </li>
        <li>
          Wysłanie zgłoszenia wiąże się z akceptacją postanowień niniejszego
          regulaminu.
        </li>
        <li>
          Ogłoszenie wyników rekrutacji nastąpi w dniu 1 października 2022 roku
          drogą mailową. Mail będzie zawierał informację o pozytywnym
          rozpatrzeniu zgłoszenia, przyjęciu na listę rezerwową albo o
          odrzuceniu zgłoszenia. Organizator zastrzega sobie możliwość dokonania
          selekcji zgłoszeń.
        </li>
        <li>
          Brak potwierdzania udziału za pomocą wiadomości mailowej lub rozmowy
          telefonicznej z Organizatorem będzie skutkował usunięciem z
          uczestnictwa w wolontariacie.
        </li>
        <li>
          W przypadku przyjęcia do wolontariatu osoby z listy rezerwowej,
          Organizator skontaktuje się za pomocą wiadomości mailowej lub
          telefonicznie, aby potwierdzić zainteresowanie współpracą.
        </li>
      </ol>
      <h2 className="d-flex justify-content-center">III. Obowiązki wolontariusza</h2>
      <ol>
        <li>
          Wolontariusz jest zobowiązany do przejścia szkolenia przed Konwentem.
          Forma i termin szkolenia zostaną zakomunikowane po zamknięciu
          zgłoszeń.
        </li>
        <li>
          Wolontariusz zobowiązuje się do przepracowania liczby godzin ujętych w
          grafiku i umowie o wolontariat.
        </li>
        <li>Do obowiązków wolontariusza należy w szczególności:</li>
        <ul>
          <li>
            dbanie o czystość, porządek i bezpieczeństwo na terenie Konwentu;
          </li>
          <li>
            wykonywanie poleceń wydawanych przez organizatorów i koordynatorów;
          </li>
          <li>
            wykonywania powierzonych zadań w sposób staranny i bezpieczny dla
            siebie i innych uczestników Konwentu;
          </li>
          <li>przestrzeganie grafiku dyżurów;</li>
          <li>dbanie o dobre imię i wizerunek Konwentu;</li>
          <li>
            pomoc uczestnikom i innym wolontariuszom w miarę własnych
            możliwości;
          </li>
          <li>
            informowanie koordynatorów i organizatorów o zaistniałych
            zagrożeniach i niebezpieczeństwach, a także o osobach
            poszkodowanych.
          </li>
        </ul>
        <li>
          Wolontariusz powinien dbać o siebie oraz współuczestników Konwentu.
          Pamiętać o swoim zdrowiu, higienie, jedzeniu oraz nawadnianiu się.
        </li>
        <li>
          Wolontariusz, który pojawi się na dyżurze pod wpływem alkoholu lub
          innych środków odurzających, zostanie usunięty zarówno z wolontariatu,
          jak i z terenu Konwentu.
        </li>
        <li>
          Wolontariusz w koszulce wolontariusza poza godzinami dyżurów może
          zostać uznany za chętnego do dorywczej pracy i do takiej zobowiązany
          według uznania Organizatorów.
        </li>
        <li>
          Wolontariusz zobowiązuje się do wpłacenia kaucji w wysokości ceny
          biletu jednodniowego, która zostanie zwrócona po zakończeniu
          wszystkich dyżurów. Kaucja powinna być wpłacona najpóźniej do godziny
          przed rozpoczęciem pierwszego dyżuru.
        </li>
        <li>
          Wolontariuszowi zabrania się bycia pod wpływem alkoholu i innych
          środków odurzających podczas trwania imprezy, niezależnie od miejsca
          jego pobytu.
        </li>
        <li>Wolontariuszowi zabrania się oddawania krwi podczas wydarzenia.</li>
        <li>
          Wolontariusz zobowiązuje się do nieprowadzenia paneli, stoiska czy
          innych atrakcji niebędących częścią pełnienia dyżuru{" "}
        </li>
        <li>
          Wolontariusz zobowiązuje się do nieuczestniczenia w panelach,
          konkursach, quizach podczas dyżuru.
        </li>
        <li>
          Podczas swojego dyżuru helper zobowiązany jest posiadać
          identyfikator/opaskę w widocznym miejscu, tak by był widoczny dla
          uczestników.
        </li>
        <li>
          Ubiór wolontariusza nie powinien być w żaden sposób gorszący czy
          utrudniający mu pracę.
        </li>
        <li>
          Wolontariusz zobowiązany jest do znajomości i przestrzegania
          Regulaminu Konwentu.
        </li>
      </ol>
      <h2 className="d-flex justify-content-center">IV. Prawa wolontariusza</h2>
      <ol>
        <li>
          Wolontariusz, który odbędzie 8h dyżuru jest zwolniony z opłaty
          akredytacyjnej.
        </li>
        <li>Organizator zapewni wolontariuszom:</li>
        <ul>
          <li>
            strój służbowy (koszulkę w zgłoszonym rozmiarze) oraz dwa posiłki w
            trakcie Konwentu;
          </li>
          <li>
            bezpłatny nocleg w trakcie trwania Konwentu (tj. od piątku do
            niedzieli) w postaci wspólnej sali i dostępu do sanitariatów.
            Wolontariusze muszą samodzielnie zaopatrzyć się w śpiwory, karimaty
            lub inne podobne wyposażenie;
          </li>
          <li>przeszkolenie z zakresu wykonywanej pracy;</li>
          <li>zaświadczenie o odbyciu wolontariatu;</li>
          <li>ubezpieczenie od następstw nieszczęśliwych wypadków.</li>
        </ul>
      </ol>
      <h2 className="d-flex justify-content-center">V. Pozostałe postanowienia</h2>
      <ol>
        <li>
          Kaucja może być zatrzymana na poczet napraw uszkodzeń spowodowanych
          przez wolontariusza, jednak gdy ta kwota jest niewystarczająca, helper
          zobowiązany jest pokryć koszty z własnych środków.{" "}
        </li>
        <li>
          W przypadku niewywiązania się helpera z powierzonych mu obowiązków
          Organizator może nie zwrócić kaucji.
        </li>
        <li>
          Przed Konwentem podstawowym i oficjalnym kanałem komunikacyjnym
          pomiędzy Organizatorami a wolontariuszami jest kontakt mailowy.
        </li>
        <li>
          Organizator zastrzega sobie prawo do zmiany niniejszego regulaminu bez
          uprzedniego informowania wolontariuszy.
        </li>
      </ol>
    </>
  );
};
