import * as React from "react"
import "../styles/global.css"
import { Link } from "gatsby"
import { mouseList } from "../data"


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
  height: '100px',
  cursor: 'pointer',
  color: 'white',
  width: '200px',
  margin: '24px',
  textDecoration: 'none'
}

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
                  <span style={{ fontWeight: 600 }}>{mouse.mouseName}</span><br /><br />
                  <span style={{ color: '#dedede' }}>{mouse.shape}</span>
                </div>
              </a>)
        }
      </div>
      <div style={{ textAlign: 'center', marginTop: '64px', }}>
        <Link to='/'>
          <button style={resetStyles}>Reset</button>
        </Link>
      </div>

      <br /><br /><br />

      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <h3>
          Join Discord kami dengan menekan tombol Connect dibawah!<br /><iframe style={{ marginTop: '32px' }} src={"https://discord.com/widget?id=668089659494105121&theme=dark$username=dogepism"} width="350" height="350" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </h3>
      </div>
    </main>
  )
}

export default MouseList
