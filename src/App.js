import React, {useState, useEffect} from 'react'
import Tesseract from 'tesseract.js';
import "./App.css"
import ImageWrapper from './components/ImageWrapper/ImageWrapper';
import TextWrapper from './components/TextWrapper.js/TextWrapper';
import axios from "axios";

const App = () => {

const [imageUrl, setImageurl] = useState(null)
const [loading, setLoading] = useState(false)
const [text , setText] = useState(null)

const uploadImage = async e => {
  setLoading(true)
    console.log(e.target.files[0])
    const formData = new FormData();
    formData.append("image" , e.target.files[0])
    const config = {
      headers : {
        "content-type" : "multipart/form-data"
      }
    }
    const res = await axios.post("https://api.imgbb.com/1/upload?expiration=600&key=c19a923a4da58a91391f07c87e0b8609", formData, config)
      setImageurl(res.data.data.url)
      setLoading(false)
  }

  useEffect(() => {
    const convertImageTotext = async () => {
      setLoading(true)
       const result = await Tesseract.recognize(
      imageUrl,
      'eng',
      { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
      console.log(text);
      setText(text)
    })
    setLoading(false)
    }
    if(imageUrl != null){
      convertImageTotext()
    }
  }, [imageUrl])
 

  return (
    <div>
     <div className="App">
      <img src="https://i.ibb.co/LpxDvR1/logo.png" className="logo" alt="" />
      <div className="container">
        {loading && <div className="loader"></div>}
        {text === null ? <ImageWrapper uploadImage={uploadImage} loading={loading}/> : <TextWrapper text={text}/>}    
      </div>
    </div>
    </div>
  )
}

export default App
