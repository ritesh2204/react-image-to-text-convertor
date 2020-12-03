import React from 'react'
const TextWrapper = ({text}) => {

const refresh = () => {
    window.location.reload()
}

    return (
        <div>
            <textarea  name="textarea" rows="4" cols="50">
                {text}
            </textarea>
            <br/>
          <button type="button" onClick={refresh}>Refresh</button>

        </div>
    )
}

export default TextWrapper
