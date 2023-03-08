import React, { useState } from "react";

function AramaCubugu({ belirtHavaDurumuProp }) {

  const api = {
    key: "fc135d38a08e9ae3746f5f99440fb107",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };
  const [araParametre, belirtAraParametre] = useState("");

  const ara = (e) => {

    if (e.key === "Enter") {
      fetch(`${api.base}?q=${araParametre}&units=metric&lang=tr&appid=${api.key}`)
        .then((veri) => veri.json())
        .then((sonuc) => {
          belirtAraParametre("");
          belirtHavaDurumuProp(sonuc);
          console.log(sonuc)
        })
    }
  }

  return (
    <div className="arama">Arama
      <input
        className="arama-input" type="text"
        placeholder="Şehir"
        onChange={(e) => belirtAraParametre(e.target.value)}
        value={araParametre}
        onKeyPress={ara}
      />
    </div>
  );
}

export default AramaCubugu;
