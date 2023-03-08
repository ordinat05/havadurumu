// import yagmurlu from "../../Resimler/rainy.jpg";
import ResimCek from "./ResimCek";

function index({ arkaplan }) {
  return (
    <div className="arkaplan">
      <div className="overlay"></div>
      {/* <img className="arkaplan-resim" src={yagmurlu}></img> */}
      <ResimCek durum={arkaplan} />
    </div>
  );
}

export default index;
