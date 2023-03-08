function index({ havadurumuProp }) {
  return (
    <>
      {typeof havadurumuProp.main != "undefined" && (
        <div className="sonuc">
          <div className="sehir">
            {havadurumuProp.name},    {havadurumuProp.sys.country}
          </div>
          <div className="detay">
            <div className="derece">
              {Math.round(havadurumuProp.main.temp)} °C
            </div>
            <div className="status">
              {havadurumuProp.weather[0].description}
            </div>
          </div>
        </div>
      )}

    </>
  );
}
export default index;
