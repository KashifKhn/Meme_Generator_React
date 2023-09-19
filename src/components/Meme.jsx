import React from 'react'
import { useEffect, useState } from 'react'

const Meme = () => {
    const [allMemeData, setAllMemeData] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.imgflip.com/get_memes");
            const data = await response.json()
            setAllMemeData(data.data.memes)
        }
        getData()
        return () => {

        }
    }, [])

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        imgUrl: ""
    })

    function handleSetMeme() {
    const randomNumber = Math.floor(Math.random() * allMemeData.length)
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                imgUrl: allMemeData[randomNumber].url
            }
        })
    }

    function handleChange(e) {
        const { value, name } = e.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                    onChange={handleChange}
                    value={meme.topText}
                    name='topText'
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    onChange={handleChange}
                    value={meme.bottomText}
                    name='bottomText'
                />
                <button onClick={handleSetMeme} className="form-btn">
                    Get a new meme image  🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.imgUrl} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme