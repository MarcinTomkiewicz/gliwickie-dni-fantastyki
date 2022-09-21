import { useEffect, useState } from "react";

export const EventRules = ({ modal }) => {
  const [header, setHeader] = useState("");

  useEffect(() => {
    if (modal) {
      setHeader("");
    }
    if (!modal) {
      setHeader("Zasady zgłaszania atrakcji");
    }
  }, [modal]);

  return (
    <>
      <h1>{header}</h1>
      <ul>
        <li>Każda osoba może zgłosić dowolną ilość atrakcji</li>
        <li>
          Każda atrakcja powinna być zgłoszona za pośrednictwem formularza
          zgodnie z zasadą "jedna atrakcja = jedno zgłoszenie"
        </li>
        <li>
          O przyjęciu lub odrzuceniu atrakcji decyduje Koordynator
          odpowiedzialny za dany dział albo Koordynator Działu Programu
        </li>
        <li>
          Przeprowadzenie atrakcji o łącznym czasie trwania powyżej 2h wiąże się
          ze zniżką na Bilet 3-dniowy w wysokości 100%, poniżej tego czasu - 50%
        </li>
        <li>
          W przypadku sesji RPG oraz warsztatów do 100% zniżki na akredytację
          uprawniają atrakcje trwające minimum 4 godziny
        </li>
        <li>
          O przyznaniu powyższych rabatów decyduje faktyczna długość
          zaakceptowanych i przeprowadzonych atrakcji
        </li>
        <li>
          Obniżoną kwotę za akredytację będzie można uiścić w dniu Konwentu
          gotówką lub kartą
        </li>
        <li>
          Na ten moment nie przewidujemy możliwości podwyższenia pakietu do
          Biletu Kolekcjonerskiego (Smoczej Pieczęci), jednak w przypadku
          zmiany, będziemy o tym informować osobnym komunikatem
        </li>
        <li>
          Zgłoszenia będą przyjmowane do 30 września 2022 włącznie. Zgłoszenia
          wysłane i otrzymane po tym terminie nie będą rozpatrywane.
        </li>
        <li>
          Informacje o przyjęciu bądź odrzuceniu punktu programu a także
          informacje o dokładnej godzinie atrakcji zostaną przekazane do
          wiadomości Twórców Programu nie później niż do dnia 5 października
        </li>
        <li>
          Ostateczna wersja programu zostanie opublikowana w dniu 10
          października 2022
        </li>
      </ul>
    </>
  );
};
