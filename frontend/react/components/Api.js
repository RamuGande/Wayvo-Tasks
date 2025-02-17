import { useState } from "react";
 import '../App.css'

export default function Api(){
    const [inp_name,setArt_name]=useState("");
    const [artist_name,setArtist] = useState("");
    const [followers,setFollowers] = useState("");
    const [image_url,setImg] = useState("");

    async function spotify(inp_name) {
        try{
             const response = await fetch(`https://spotify-api-wrapper.appspot.com/artist/${inp_name}`)
             const data = await response.json();
            setArtist(data.artists.items[0].name);
            setFollowers(data.artists.total); 
            setImg(data.artists.items[0].images[0].url);
        }
        catch(err){
            console.log(err)
        }
       
        
    }
    return(
        <div class="total">
        <div className="total1">
            <div className="user_data">
                <input type = "text"  onChange ={(e)=>setArt_name(e.target.value)} placeholder="Enter Artist Name"/>
                <button onClick={() => spotify(inp_name)}>Search</button>
            </div>
            
             {artist_name &&
                <div className="user_output">
                    <p>Artist-name:{artist_name}</p>
                    <p>followers:{followers}</p>
                    <div className="image">
                        <img alt = "" src = {image_url} className="art_img"/>
                    </div>
                </div>
            }
            
            
        </div>
        </div>
        
        

    );
}