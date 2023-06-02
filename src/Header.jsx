import trollFace from "./TrollFace.png"

export default function Header() {
  return (
    <header>
        <img src={trollFace} alt="logo" />
        <h2 className="logo">Meme Generator</h2>
        <h3 className="title">React Course - Project 3</h3>
    </header>
  )
}
