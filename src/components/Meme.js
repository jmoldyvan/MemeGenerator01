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




// flip a state from yes to no
// let [isGoingOut, setIsGoingOut] = React.useState(true)
// function click(){
//     setIsGoingOut(prevIsGoingOut => prevIsGoingOut = prevIsGoingOut ? false : true ) 
// }
// let funk = isGoingOut === true ? "yes" : "no"

// return ({}
//     <div className="state">
//         <h1 className="state--title">Do I feel like going out tonight?</h1>
//         <div onClick={click} className="state--value">
//             <h1>{funk}</h1>
//         </div>
//     </div>
// )

// const thingsArray1 = ["Thing 1", "Thing 2"]
// let [thingsArray, setThingsArray] = React.useState([thingsArray1])
// function addItem() {
//     setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`])
// }


// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (719) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: false
//     })
    
//     let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
//     function toggleFavorite() {
//         setContact(prevState => ({ ...prevState, isFavorite: !prevState.isFavorite}))
//     }