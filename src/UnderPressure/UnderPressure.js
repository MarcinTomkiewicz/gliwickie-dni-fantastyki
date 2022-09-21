export const UnderPressure = () => {
  return (
    <div className="d-flex align-items-center justify-content-center w-100">
      <img src={`${process.env.PUBLIC_URL + "construction.png"}`} style={{width: "600px", maxWidth: "50%", flexShrink: "1"}}/>
      <div style={{fontSize: "calc(1.375rem + 1.5vw)", fontWeight: "600", flexGrow: "1"}}>Gliwik aktualnie pracuje nad tą stroną. Zapraszamy wkrótce!</div>
    </div>
  );
};
