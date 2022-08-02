import React from "react"
import memeData from "../memeData.js"

export default function Meme(){

    let [memeImage, setMemeImage] = React.useState({
        randomImage: "http://i.imgflip.com/1bij.jpg",
        topText: '',
        bottomText: '',
    })

    let [allMemeImages, setAllMemeImages] = React.useState(memeData)



    function handleClick() {
        let item = allMemeImages.data.memes[Math.floor(Math.random()*allMemeImages.data.memes.length)]
        console.log(item.url);
        setMemeImage(prevMeme => ({
            ...prevMeme, randomImage: item.url
        }))
    }


return(
        <main className="main">
            <div className="form">
                <input className="formInput" type="text" placeholder="VERT"></input>
                <input className="formInput" type="text" placeholder="HORZ"></input>
                <button onClick={handleClick} className="formButton">NEW MEME BACKGROUND</button>
            </div>
            <img className="memeImg" src={memeImage.randomImage} />
        </main>
)}

