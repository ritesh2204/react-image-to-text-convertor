import React from 'react';

const ImageWrapper = ({uploadImage, loading}) => {
    return (
        <div className="image-wrapper">
            {loading ? <h2> please wait while processing ...</h2> : (   <form>
            <input
                type="file"
                onChange={uploadImage}
                name="image"
            />
            </form>)}
         
        </div>
    )
}

export default ImageWrapper
