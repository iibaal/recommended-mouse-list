import React, { useState } from "react"
import "../styles/global.css"
import { Link } from "gatsby"
import { Helmet } from "react-helmet";


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
  justifyContent: 'center',
  borderRadius: '5px'
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

const handSize = [
  {
    text: '<18CM',
    size: 'Kecil',
    imagePath: 'smallhand.webp'
  },
  {
    text: '18CM',
    size: 'Sedang',
    imagePath: 'mediumhand.webp'
  },
  {
    text: '>18CM',
    size: 'Besar',
    imagePath: 'bighand.webp'
  },
]

// markup
const IndexPage = () => {
  // Declare a new state variable, which we'll call "count"
  const [gripTangan, setGripTangan] = useState();

  return (
    <main style={pageStyles} className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Recommended Mouse List</title>
        <meta name="description" content="Daftar mouse yang direkomendasikan oleh komunitas" />
        <link rel="canonical" href="https://pppcmouselist.gatsbyjs.io/" />
      </Helmet>

      <h1 style={headingStyles}>
        {!gripTangan && 'Grip Tangan'}
        {gripTangan && 'Ukuran Tangan'}
      </h1>
      <div className="hand-container" style={{ flexWrap: 'wrap', justifyContent: 'space-around', textAlign: 'center' }}>
        {!gripTangan && handGrip.map(grip => (
          <div style={handBox} className="grip-tangan">
            <div onClick={() => setGripTangan(grip.grip)} state={{ gripTangan: grip.grip }}>
              <img style={{ marginTop: '24px', width: '300px' }} alt={grip.grip} src={`${grip.imagePath}`} />
            </div>
            <span style={{ marginTop: '16px', marginBottom: '16px', fontSize: '24px' }}>{grip.grip}</span>
          </div>
        ))}
        {gripTangan && handSize.map(size => (
          <div style={handBox} className="grip-tangan">
            <Link to='/mouseList' state={{ gripTangan: gripTangan, ukuranTangan: size.size }}>
              <img style={{ marginTop: '24px', width: '300px' }} alt={size.text} src={`${size.imagePath}`} />
            </Link>
            <span style={{ marginTop: '16px', marginBottom: '16px', fontSize: '24px' }}>{size.text}</span>
          </div>
        ))}
      </div>
      <br /><br /><br />

      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <h3>
          Ada yang ingin ditanyakan? Join Discord kami dengan menekan tombol Connect dibawah!<br /><iframe title="discord-links" style={{ marginTop: '32px' }} src={"https://discord.com/widget?id=668089659494105121&theme=dark$username=dogepism"} width="350" height="350" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </h3>
      </div>


    </main>
  )
}

export default IndexPage
