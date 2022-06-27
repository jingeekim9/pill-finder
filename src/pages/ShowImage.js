import Image from './Image';
import axios from 'axios';
import React, { useState } from "react";

const ShowImage = ({ image, name, temp, setLink }) => {
    const [loading, setLoading] = useState(false);

	const show = (image) => {
		return <Image image={image} />;
	};

    const handleSubmit = async() => {
        const formData = new FormData();
        console.log(name)
        formData.append("image", temp, name);
        try {
            setLoading(true);
            const response = await axios({
            method: "post",
            url: "https://pillfinder.herokuapp.com/pill_identifier",
            data: formData,
            headers: { 
                "Content-Type": "multipart/form-data", 
                "Access-Control-Allow-Origin": "*" 
            },
            });

            setLink(response.data.url_link);
            setLoading(false);
        } catch(error) {
            console.log(error)
        }
    }

	return <div className="container" style={{textAlign: 'center'}}>
            {image && show(image)}
            {
                image && 
                <div style={{display: 'inline-block'}}>
                    <button type="button" className="btn" style={{marginLeft: 30}} onClick={() => {handleSubmit()}}>
                        {
                            loading ?
                                <div className="spinner-border text-light" role="status"></div>
                                :
                                'Submit'
                        }
                        
                    </button>
                </div>
            }
            
        </div>;
};

export default ShowImage;