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
  marginBottom: 64,
  textAlign: 'center',
  color: "#ffffff"
}

const handBox = {
  flexDirection: 'column',
  display: 'flex',
  width: '300px',
  textAlign: 'center',
  justifyContent: 'center'
}

const handGrip = [
  {
    grip: 'Palm',
    imagePath: 'palm.webp'
  },
  {
    grip: 'Claw',
    imagePath: 'claw.webp'
  },
  {
    grip: 'Fingertip',
    imagePath: 'fingertip.webp'
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles} className="container">
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Grip Tangan
      </h1>
      <div className="hand-container" style={{ flexWrap: 'wrap', justifyContent: 'space-around', textAlign: 'center' }}>
        {handGrip.map(grip => (
          <div style={handBox}>
            <Link to='/ukuranTangan' state={{ gripTangan: grip.grip }}>
              <img style={{ marginTop: '24px', width: '300px' }} alt={grip.grip} src={`${grip.imagePath}`} />
            </Link>
            <span style={{ marginTop: '16px', fontSize: '24px' }}>{grip.grip}</span>
          </div>
        ))}
      </div>
    </main>
  )
}

export default IndexPage
