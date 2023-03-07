import React, { useState } from 'react'
import './App.css'

import Arkaplan from "./Bilesenler/Arkaplan";
import AramaCubugu from "./Bilesenler/Arama/AramaCubugu";
import Sonuc from "./Bilesenler/Sonuc";

function App() {
  // const havaDurumu = {
  //   sehir: "Ankara",
  //   derece: "20",
  //   status: "Güneşli"
  // }
  const [havaDurumu, belirtHavaDurumu] = useState({});

  return (
    <section className="uygulama">
      {/* Hava Durumu Uygulaması */}
      <Arkaplan />
      <div id="baslik">Hava Durumu</div>
      <AramaCubugu belirtHavaDurumuProp={belirtHavaDurumu} />
      <Sonuc havadurumuProp={havaDurumu} />
    </section>
  )
}

export default App
