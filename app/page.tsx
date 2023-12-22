import Image from 'next/image'
import "./globals.css"

export default function Index() {
  return (
    <>
      <div style={{zIndex: -1}}><Image
        src={"/bongocat.gif"}
        alt='idk'
        layout='fill'
        objectFit='cover'
      /></div>
    </>
  )
}
