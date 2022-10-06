import React, {useState} from "react";
import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import classes from './audio.module.scss'


const AudioPage = () => {
    const [track_url, setTrackUrl] = useState(`https://form-serverside.vercel.app/audios/632ee4fb716fec2048ff514e`);
    const [track, setTrack] = useState();
    const [tracks, setTracks] = useState([]);
    const [successUploadMessage, setSuccessMessage] = useState();

    const {error : fetchingError, sendRequest: fetchTracks} = useHttp();
    const {error: addingError, sendRequest: addTrack } = useHttp();

    useEffect(() => {
        const responseHandler = (data) => {
            setTracks(data);
        }
        let url = `https://form-serverside.vercel.app/audios`
        fetchTracks({url}, responseHandler);
    }, []);

    const trackHandler = (e) => {        
        setTrack(e.target.files[0])
}
    
    useEffect(() => {
    const elementRef = ReactDOM.findDOMNode(this);
    const audioRef= elementRef.querySelector('audio');
    const sourceRef = audioRef.querySelector('source');
        
        sourceRef.src = track_url;
        audioRef.load();

    console.log(track_url);
    }, [track_url]);



const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', track.name);
    formData.append('track', track);
   
    const responseHandler = (response) => {
      setSuccessMessage(response);    
    }

    let url ="https://form-serverside.vercel.app/audios";
      addTrack(
        {url ,
        method : 'POST',
        body : formData,
        headers: {
          "Content-Type": "application/json",
        }},
        responseHandler
    );

  };

  return (
    <div className={classes.container}>
        <div className={`${classes.audio} ${classes.audio__fetch}`}>
        {fetchingError && <h1>{fetchingError}</h1>}
        <h1>please select track:</h1>
        <select
                defaultValue={"default"}
              >
                <option value="default" disabled>
                  Please select
                </option>
               {
                tracks?.map((t, i) => {
                  return (
                    <option onClick={() => {setTrackUrl(`https://form-serverside.vercel.app/audios/${t._id}`)}} value={t}>{t.filename}</option>
                  )
                })
               }
              </select>
             {/* {track_url && <audio controls ><source src={track_url}/></audio>} */}
             <audio controls ><source src={track_url}/></audio>
        </div>
        <div className={`${classes.audio} ${classes.audio__add}`}>
    <form onSubmit={submitHandler}>
    <input
              type="file"
              id="track"
              onChange={trackHandler}
            />
     <button type="submit" className="btn">add</button> 
     {addingError && <h1>{addingError}</h1>}      
    </form>
        </div>

    </div>
    );
};

export default AudioPage;
