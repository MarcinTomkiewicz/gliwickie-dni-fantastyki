import { BoldText } from "../utils/BoldText"

export const Parents = () => {
    return (
        <>
        <h1>Dla rodziców - najważniejsze informacje</h1>
        <div style={{alignSelf: "flex-start"}}>Drodzy rodzice!</div>
        <div style={{alignSelf: "flex-start"}}>W trosce o dobro i bezpieczeństwo Waszych dzieci, przekazujemy w tym miejscu kilka zasad uczestnictwa niepełnoletnich w Gliwickich Dniach Fantastyki:</div>
        <ul style={{alignSelf: "flex-start", listStyle: "square"}}>
            <li>Dzieci poniżej 13. roku życia mogą przebywać na terenie Konwentu tylko pod opieką osób dorosłych.</li>
            <li>Młodzież w wieku między 13. a 18. rokiem życia może przebywać na terenie Konwentu samodzielnie, pod warunkiem posiadania podpisanej Zgody Rodziców/Opiekunów.</li>
            <li>Zgoda Rodziców/Opiekunów powinna być uzupełniona jak najdokładniej, w szczególności prosimy upewnić się, że podaliście poprawny numer telefonu oraz pełną informację o alergiach.</li>
            <li>Młodzież do lat 18. uczestnicząca w Konwencie w charakterze wolontariuszy (helperów) powinna również posiadać wypełnioną Zgodę Rodziców/Opiekunów.</li>
            <li>Wzór Zgody Rodziców/Opiekunów jest dostępny poniżej.</li>
        </ul>
        <a style={{alignSelf: "flex-start"}} href={`${process.env.PUBLIC_URL + "/Zgoda_Rodzica_Opiekuna.pdf"}`} className="footer__a" target="_blank"><BoldText value="Pobierz Zgodę Rodziców/Opiekunów" /></a>
        </>
    )
}