import * as React from "react"
import "../styles/global.css"
import { Link } from "gatsby"


// styles
const pageStyles = {
  color: "#ffffff",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
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

const handSize = [
  {
    text: '<18CM',
    size: 'Kecil',
    imagePath: 'smallhand.png'
  },
  {
    text: '18CM',
    size: 'Sedang',
    imagePath: 'mediumhand.png'
  },
  {
    text: '>18CM',
    size: 'Besar',
    imagePath: 'bighand.png'
  },
]

// markup
const UkuranTangan = ({ location }) => {
  if (location.state == null) {
    return (
      <main>hehe</main>
    )
  }
  return (
    <main style={pageStyles} className="container">
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Ukuran Tangan
      </h1>
      <div className="hand-container" style={{ flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
        {handSize.map(size => (
          <div style={handBox}>
            <Link to='/mouseList' state={{ gripTangan: location.state.gripTangan, ukuranTangan: size.size }}>
              <img style={{ marginTop: '24px', width: '300px' }} alt={size.text} src={`${size.imagePath}`} />
            </Link>
            <span style={{ marginTop: '16px', fontSize: '24px' }}>{size.text}</span>
          </div>
        ))}
      </div>
      {/* <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul> */}
    </main>
  )
}

export default UkuranTangan
