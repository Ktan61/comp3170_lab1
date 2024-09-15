import './App.css'
import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false
  });

  const handleToggle = (albumKey) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [albumKey]: !prevState[albumKey]
    }));
  };

  return (
    <>
      <h1>MyTunes</h1>
      <div className="content">
        <img src="https://cdns-images.dzcdn.net/images/artist/0c2903ae7c3566b8229bf73584b2a141/1900x1900-000000-80-0-0.jpg" alt="members of the Nothing But Thieves band" width="500" height="500"/>
        <div className="albums">
          <h3>Nothing But Thieves Albums</h3>
          <details className="dropdown" onToggle={() => handleToggle('first')}>
            <summary className={`album-title ${isOpen.first ? 'open' : ''}`}>
              Nothing But Thieves (2015)
              <span className="icon">{isOpen.first ? "−" : "+"}</span>
            </summary>
            <ol>
              <li>&#8220;Excuse Me&#8221;</li>
              <li>&#8220;Ban All the Music&#8221;</li>
              <li>&#8220;Wake Up Call&#8221;</li>
              <li>&#8220;Itch&#8221;</li>
              <li>&#8220;If I Get High&#8221;</li>
              <li>&#8220;Graveyard Whistling&#8221;</li>
              <li>&#8220;Hostage&#8221;</li>
              <li>&#8220;Trip Switch&#8221;</li>
              <li>&#8220;Lover, Please Stay&#8221;</li>
              <li>&#8220;Drawing Pins&#8221;</li>
              <li>&#8220;Painkiller&#8221;</li>
              <li>&#8220;Tempt You (Evocatio)&#8221;</li>
            </ol>
          </details>
          <details className="dropdown" onToggle={() => handleToggle('second')}>
          <summary className={`album-title ${isOpen.second ? 'open' : ''}`}>
              Broken Machine (2017)
              <span className="icon">{isOpen.second ? "−" : "+"}</span>
            </summary>
            <ol>
              <li>&#8220;I Was Just a Kid&#8221;</li>
              <li>&#8220;Amsterdam&#8221;</li>
              <li>&#8220;Sorry&#8221;</li>
              <li>&#8220;Broken Machine&#8221;</li>
              <li>&#8220;Live Like Animals&#8221;</li>
              <li>&#8220;Soda&#8221;</li>
              <li>&#8220;I&#39;m Not Made by Design&#8221;</li>
              <li>&#8220;Particles&#8221;</li>
              <li>&#8220;Get Better&#8221;</li>
              <li>&#8220;Hell, Yeah&#8221;</li>
              <li>&#8220;Afterlife&#8221;</li>
            </ol>
          </details>
          <details className="dropdown" onToggle={() => handleToggle('third')}>
            <summary className={`album-title ${isOpen.third ? 'open' : ''}`}>
              Moral Panic (2020)
              <span className="icon">{isOpen.third ? "−" : "+"}</span>
            </summary>
            <ol>
              <li>&#8220;Unperson&#8221;</li>
              <li>&#8220;Is Everybody Going Crazy?&#8221;</li>
              <li>&#8220;Moral Panic&#8221;</li>
              <li>&#8220;Real Love Song&#8221;</li>
              <li>&#8220;Phobia&#8221;</li>
              <li>&#8220;This Feels Like the End&#8221;</li>
              <li>&#8220;Free If We Want It&#8221;</li>
              <li>&#8220;Impossible&#8221;</li>
              <li>&#8220;There Was Sun&#8221;</li>
              <li>&#8220;Can You Afford to Be an Individual?&#8221;</li>
              <li>&#8220;Before We Drift Away&#8221;</li>
            </ol>
          </details>
          <details className="dropdown" onToggle={() => handleToggle('fourth')}>
            <summary className={`album-title ${isOpen.fourth ? 'open' : ''}`}>
              Dead Club City (2023)
              <span className="icon">{isOpen.fourth ? "−" : "+"}</span>
            </summary>
            <ol>
              <li>&#8220;Welcome to the DCC&#8221;</li>
              <li>&#8220;Overcome&#8221;</li>
              <li>&#8220;Tomorrow Is Closed&#8221;</li>
              <li>&#8220;Keeping You Around&#8221;</li>
              <li>&#8220;City Haunts&#8221;</li>
              <li>&#8220;Do You Love Me Yet?&#8221;</li>
              <li>&#8220;Members Only&#8221;</li>
              <li>&#8220;Green Eyes :: Siena&#8221;</li>
              <li>&#8220;Foreign Language&#8221;</li>
              <li>&#8220;Talking to Myself&#8221;</li>
              <li>&#8220;Pop the Balloon&#8221;</li>
            </ol>
          </details>
        </div>
      </div>
    </>
  )
}

export default App
