import React from 'react';

const ImageList = (props) => {
    console.log(props);
    const totalImages = props.images.length;
    if(totalImages == 0) return (<div style={{textAlign: 'center'}}>No Images Found</div>)
    return (  
        <div>
            <h4 style={{ marginBottom: '10px' }} >Found {props.images.length} images</h4>
            <div>
                {props.images.map(image => (
                    <img 
                        src={image.urls.regular} 
                        style={{objectFit: 'cover', height: '400px', width: '400px'}}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default ImageList;