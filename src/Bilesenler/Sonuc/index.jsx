function index({ havadurumuProp }) {
  return (
    <>
      {typeof havadurumuProp != "undefined" && (
        <div className="sonuc">
          <div className="sehir">
            {havadurumuProp.sehir}
          </div>
          <div className="detay">
            <div className="derece">
              {havadurumuProp.derece} °C
            </div>
            <div className="status">
              {havadurumuProp.status}
            </div>
          </div>
        </div>
      )}

    </>
  );
}
export default index;
