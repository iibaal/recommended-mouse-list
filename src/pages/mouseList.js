import * as React from "react"
import "../styles/global.css"
import { Link } from "gatsby"


// styles
const pageStyles = {
  color: "#ffffff",
  padding: 96,
  fontFamily: "Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  textAlign: 'center',
  color: "#ffffff"
}
const resetStyles = {
  borderRadius: '5px',
  borderStyle: 'none',
  padding: '10px 20px 10px 20px',
  backgroundColor: '#b00020',
  fontSize: '16px',
  cursor: 'pointer',
  color: 'white ',
  boxShadow: '0 8px 6px -6px black'
}

const mouseListStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '3px',
  boxShadow: '0 8px 6px -6px black',
  backgroundColor: '#1c1c1c',
  height: '75px',
  cursor: 'pointer',
  color: 'white',
  width: '200px',
  margin: '24px',
  textDecoration: 'none'
}

const mouseList = [{ "mouseName": "Gwolves Skoll/Skoll Mini", "grip": "Palm", "shape": "Ergonomic", "size": "Kecil", "imagePath": null, "key": 1 }, { "mouseName": "Xtrify M4", "grip": "Palm", "shape": "Ergonomic", "size": "Kecil", "imagePath": null, "key": 2 }, { "mouseName": "Zowie EC-2A/B", "grip": "Palm", "shape": "Ergonomic", "size": "Kecil", "imagePath": null, "key": 3 }, { "mouseName": "G Pro Wireless", "grip": "Palm", "shape": "Ambidextrous", "size": "Kecil", "imagePath": null, "key": 4 }, { "mouseName": "G Pro X Superlight", "grip": "Palm", "shape": "Ambidextrous", "size": "Kecil", "imagePath": null, "key": 5 }, { "mouseName": "Gwolves Hati/HT-M", "grip": "Palm", "shape": "Ambidextrous", "size": "Kecil", "imagePath": null, "key": 6 }, { "mouseName": "Fantech UX2", "grip": "Palm", "shape": "Ambidextrous", "size": "Kecil", "imagePath": null, "key": 7 }, { "mouseName": "Fantech UX3/XD3", "grip": "Palm", "shape": "Ambidextrous", "size": "Kecil", "imagePath": null, "key": 8 }, { "mouseName": "Zowie S2", "grip": "Palm", "shape": "Ambidextrous", "size": "Kecil", "imagePath": null, "key": 9 }, { "mouseName": "Rexus Daxa Air/Wireless", "grip": "Palm", "shape": "Ergonomic", "size": "Kecil", "imagePath": null, "key": 10 }, { "mouseName": "Rexus Daxa Air 2", "grip": "Palm", "shape": "Ambidextrous", "size": "Kecil", "imagePath": null, "key": 11 }, { "mouseName": "Cooler Master MM720", "grip": "Palm", "shape": "Ergonomic", "size": "Kecil", "imagePath": null, "key": 12 }, { "mouseName": "Razer Deathadder V2 Mini", "grip": "Palm", "shape": "Ergonomic", "size": "Kecil", "imagePath": null, "key": 13 }, { "mouseName": "Logitech G102", "grip": "Claw", "shape": null, "size": "Kecil", "imagePath": null, "key": 14 }, { "mouseName": "Logitech G304", "grip": "Claw", "shape": null, "size": "Kecil", "imagePath": null, "key": 15 }, { "mouseName": "Cooler Master MM710", "grip": "Claw", "shape": null, "size": "Kecil", "imagePath": null, "key": 16 }, { "mouseName": "Cooler Master MM711", "grip": "Claw", "shape": null, "size": "Kecil", "imagePath": null, "key": 17 }, { "mouseName": "Razer Viper Mini", "grip": "Claw", "shape": null, "size": "Kecil", "imagePath": null, "key": 18 }, { "mouseName": "Glorious Model O-", "grip": "Claw", "shape": null, "size": "Kecil", "imagePath": null, "key": 19 }, { "mouseName": "End Game XM1", "grip": "Claw", "shape": null, "size": "Kecil", "imagePath": null, "key": 20 }, { "mouseName": "Gwolves HT-S", "grip": "Claw", "shape": null, "size": "Kecil", "imagePath": null, "key": 21 }, { "mouseName": "Razer Viper Mini", "grip": "Fingertip", "shape": null, "size": "Kecil", "imagePath": null, "key": 22 }, { "mouseName": "Glorious Model O-", "grip": "Fingertip", "shape": null, "size": "Kecil", "imagePath": null, "key": 23 }, { "mouseName": "Gwolves Skoll", "grip": "Palm", "shape": "Ergonomic", "size": "Sedang", "imagePath": null, "key": 24 }, { "mouseName": "Xtrify M4", "grip": "Palm", "shape": "Ergonomic", "size": "Sedang", "imagePath": null, "key": 25 }, { "mouseName": "Zowie EC2", "grip": "Palm", "shape": "Ergonomic", "size": "Sedang", "imagePath": null, "key": 26 }, { "mouseName": "Razer Deathadder Essential", "grip": "Palm", "shape": "Ergonomic", "size": "Sedang", "imagePath": null, "key": 27 }, { "mouseName": "Razer Deathadder V2/Pro", "grip": "Palm", "shape": null, "size": "Sedang", "imagePath": null, "key": 28 }, { "mouseName": "Fantech UX2", "grip": "Palm", "shape": "Ambidextrous", "size": "Sedang", "imagePath": null, "key": 29 }, { "mouseName": "Gwolves Hati/HT-M", "grip": "Palm", "shape": "Ambidextrous", "size": "Sedang", "imagePath": null, "key": 30 }, { "mouseName": "Logitech G Pro Wireless", "grip": "Palm", "shape": "Ambidextrous", "size": "Sedang", "imagePath": null, "key": 31 }, { "mouseName": "Zowie S2", "grip": "Palm", "shape": "Ambidextrous", "size": "Sedang", "imagePath": null, "key": 32 }, { "mouseName": "Logitech G Pro X Superlight", "grip": "Palm", "shape": null, "size": "Sedang", "imagePath": null, "key": 33 }, { "mouseName": "Razer Basilisk V2/X/Ultimate", "grip": "Palm", "shape": null, "size": "Sedang", "imagePath": null, "key": 34 }, { "mouseName": "Rexus Daxa Air/Wireless", "grip": "Palm", "shape": null, "size": "Sedang", "imagePath": null, "key": 35 }, { "mouseName": "Gwolves Hati/HT-M", "grip": "Claw", "shape": null, "size": "Sedang", "imagePath": null, "key": 36 }, { "mouseName": "Fantech UX2", "grip": "Claw", "shape": null, "size": "Sedang", "imagePath": null, "key": 37 }, { "mouseName": "Logitech G Pro Wireless", "grip": "Claw", "shape": null, "size": "Sedang", "imagePath": null, "key": 38 }, { "mouseName": "Logitech G Pro X Superlight", "grip": "Claw", "shape": null, "size": "Sedang", "imagePath": null, "key": 39 }, { "mouseName": "Cooler Master MM710", "grip": "Claw", "shape": null, "size": "Sedang", "imagePath": null, "key": 40 }, { "mouseName": "Cooler Master MM711", "grip": "Claw", "shape": null, "size": "Sedang", "imagePath": null, "key": 41 }, { "mouseName": "Cooler Master MM720", "grip": "Claw", "shape": null, "size": "Sedang", "imagePath": null, "key": 42 }, { "mouseName": "Logitech G304", "grip": "Claw", "shape": null, "size": "Sedang", "imagePath": null, "key": 43 }, { "mouseName": "Logitech G102", "grip": "Claw", "shape": null, "size": "Sedang", "imagePath": null, "key": 44 }, { "mouseName": "Zowie S2", "grip": "Claw", "shape": null, "size": "Sedang", "imagePath": null, "key": 45 }, { "mouseName": "Zowie FK2A/B", "grip": "Claw", "shape": null, "size": "Sedang", "imagePath": null, "key": 46 }, { "mouseName": "Razer Viper/Ultimate", "grip": "Claw", "shape": null, "size": "Sedang", "imagePath": null, "key": 47 }, { "mouseName": "End Game XM1", "grip": "Claw", "shape": null, "size": "Sedang", "imagePath": null, "key": 48 }, { "mouseName": "Glorious Model O-", "grip": "Claw", "shape": null, "size": "Sedang", "imagePath": null, "key": 49 }, { "mouseName": "Fantech UX3/XD3", "grip": "Claw", "shape": null, "size": "Sedang", "imagePath": null, "key": 50 }, { "mouseName": "Rexus Daxa Air 2", "grip": "Claw", "shape": null, "size": "Sedang", "imagePath": null, "key": 51 }, { "mouseName": "Razer Viper Mini", "grip": "Fingertip", "shape": null, "size": "Sedang", "imagePath": null, "key": 52 }, { "mouseName": "Glorious Model O-", "grip": "Fingertip", "shape": null, "size": "Sedang", "imagePath": null, "key": 53 }, { "mouseName": "Cooler Master MM710", "grip": "Fingertip", "shape": null, "size": "Sedang", "imagePath": null, "key": 54 }, { "mouseName": "Cooler Master MM711", "grip": "Fingertip", "shape": null, "size": "Sedang", "imagePath": null, "key": 55 }, { "mouseName": "Cooler Master MM720", "grip": "Fingertip", "shape": null, "size": "Sedang", "imagePath": null, "key": 56 }, { "mouseName": "Glorious Model D", "grip": "Palm", "shape": "Ergonomic", "size": "Besar", "imagePath": null, "key": 57 }, { "mouseName": "Zowie EC1A/B", "grip": "Palm", "shape": "Ergonomic", "size": "Besar", "imagePath": null, "key": 58 }, { "mouseName": "Razer Deathadder V2/Pro", "grip": "Palm", "shape": "Ergonomic", "size": "Besar", "imagePath": null, "key": 59 }, { "mouseName": "Razer Deathadder Essential", "grip": "Palm", "shape": "Ergonomic", "size": "Besar", "imagePath": null, "key": 60 }, { "mouseName": "Zowie FK1A/B", "grip": "Claw", "shape": null, "size": "Besar", "imagePath": null, "key": 61 }, { "mouseName": "Zowie S1", "grip": "Claw", "shape": null, "size": "Besar", "imagePath": null, "key": 62 }, { "mouseName": "Gwolves Hati/HT-M", "grip": "Claw", "shape": null, "size": "Besar", "imagePath": null, "key": 63 }, { "mouseName": "Logitech G Pro Wireless", "grip": "Claw", "shape": null, "size": "Besar", "imagePath": null, "key": 64 }, { "mouseName": "Logitech G Pro X Superlight", "grip": "Claw", "shape": null, "size": "Besar", "imagePath": null, "key": 65 }, { "mouseName": "Glorious Model O/Wireless", "grip": "Claw", "shape": null, "size": "Besar", "imagePath": null, "key": 66 }, { "mouseName": "Tecware Exo Plus/Elite", "grip": "Claw", "shape": null, "size": "Besar", "imagePath": null, "key": 67 }, { "mouseName": "Fantech UX2", "grip": "Claw", "shape": null, "size": "Besar", "imagePath": null, "key": 68 }, { "mouseName": "Razer Basilisk V2/X/Ultimate", "grip": "Claw", "shape": null, "size": "Besar", "imagePath": null, "key": 69 }, { "mouseName": "Zowie S2", "grip": "Claw", "shape": null, "size": "Besar", "imagePath": null, "key": 70 }, { "mouseName": "Fantech UX3/XD3", "grip": "Claw", "shape": null, "size": "Besar", "imagePath": null, "key": 71 }, { "mouseName": "Rexus Daxa Air 2", "grip": "Claw", "shape": null, "size": "Besar", "imagePath": null, "key": 72 }, { "mouseName": "Gwolves Hati/HT-M", "grip": "Fingertip", "shape": null, "size": "Besar", "imagePath": null, "key": 73 }, { "mouseName": "Razer Viper/Ultimate/Mini", "grip": "Fingertip", "shape": null, "size": "Besar", "imagePath": null, "key": 74 }, { "mouseName": "Glorious Model O/O-", "grip": "Fingertip", "shape": null, "size": "Besar", "imagePath": null, "key": 75 }, { "mouseName": "End Game XM1", "grip": "Fingertip", "shape": null, "size": "Besar", "imagePath": null, "key": 76 }, { "mouseName": "Cooler Master MM710", "grip": "Fingertip", "shape": null, "size": "Besar", "imagePath": null, "key": 77 }, { "mouseName": "Cooler Master MM711", "grip": "Fingertip", "shape": null, "size": "Besar", "imagePath": null, "key": 78 }, { "mouseName": "Cooler Master MM720", "grip": "Fingertip", "shape": null, "size": "Besar", "imagePath": null, "key": 79 }, { "mouseName": "Zowie FK1", "grip": "Fingertip", "shape": null, "size": "Besar", "imagePath": null, "key": 80 }, { "mouseName": "Tecware Exo Plus/Elite", "grip": "Fingertip", "shape": null, "size": "Besar", "imagePath": null, "key": 81 }, { "mouseName": "Zowie S2", "grip": "Fingertip", "shape": null, "size": "Besar", "imagePath": null, "key": 82 }, { "mouseName": "Fantech UX3/XD3", "grip": "Fingertip", "shape": null, "size": "Besar", "imagePath": null, "key": 83 }, { "mouseName": "Rexus Daxa Air 2", "grip": "Fingertip", "shape": null, "size": "Besar", "imagePath": null, "key": 84 }]

// markup
const MouseList = ({ location }) => {
  if (location.state == null) {
    return (
      <main style={pageStyles}>hehe</main>
    )
  }
  return (

    <main style={pageStyles} className="container">
      {console.log(location.state.size)}
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Daftar Mouse
      </h1>
      <h3 style={headingStyles}>
        Ukuran Tangan: {location.state.ukuranTangan} <br /> Grip: {location.state.gripTangan}
      </h3>

      <div className="hand-container" style={{ flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center', marginTop: '64px' }}>
        {
          mouseList.filter(mouse => mouse.size === location.state.ukuranTangan)
            .filter(mouse => mouse.grip === location.state.gripTangan)
            .map(mouse =>
              <a key={mouse.key} style={mouseListStyle} className="mouseListStyle" target="_blank" href={`https://www.tokopedia.com/search?st=product&q=${mouse.mouseName}&navsource=home`}>
                <div style={{ color: 'white', textDecorationColor: 'grey', textDecoration: 'none', }} >
                  {mouse.mouseName}
                </div>
              </a>)
        }
      </div>
      <div style={{ textAlign: 'center', marginTop: '64px', }}>
        <Link to='/'>
          <button style={resetStyles}>Reset</button>
        </Link>
      </div>
    </main>
  )
}

export default MouseList
