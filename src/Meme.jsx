import React from "react"

export default function Meme() {
    
    const [topText, setTopText] = React.useState('Me: I just finished my workout, time to eat something healthy')
    const [bottomText, setBottomText] = React.useState('Me to me: Eat a whole pizza, you\'ve earned it')
    const [memesData, setMemesData] = React.useState([])
    const [memeImg, setMemeImg] = React.useState('https://i.imgflip.com/1e7ql7.jpg')

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemesData(data.data.memes))
    }, [])

    function getMemeImg() {
        const randomNum = Math.floor(Math.random() * memesData.length)
        setMemeImg(memesData[randomNum].url)
    }

  return (
    <section className="grid-container">
        <input
            type="text" 
            name="topText" 
            className="input" 
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
        />
        <input
            type="text"
            name="bottomText" 
            className="input" 
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
        />
        <button onClick={getMemeImg} className="meme-btn">Get a new meme image  🖼️</button>
        <div className="meme-img">
            <p className="top-text">{topText}</p>
            <img src={memeImg} alt="Meme image"/>
            <p className="bottom-text">{bottomText}</p>
        </div>
    </section>
  )
}
