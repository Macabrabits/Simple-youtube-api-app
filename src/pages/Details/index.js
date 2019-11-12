import React, {useState, useEffect} from 'react'
import {TextField, InputAdornment, Button} from '@material-ui/core'
// import clsx from 'clsx';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import api from "../../services/Axios"
import apiKey from "../../services/ApiKey"
import './style.css'

export default function Details(router){

    useEffect(()=>{getVideoDetails()},[])

    //STATES
    const [videoData, setVideoData] = useState({
        snippet:{
            thumbnails:{
                high:{
                    url:''
                }
            },
        },
        statistics:{}

    })

    ////STATES

    const getVideoDetails = async function(event){
        const videoId = router.match.params.videoId

        // https://www.googleapis.com/youtube/v3/videos?id={VIDEO_ID}&part=snippet,statistics&key={API_KEY}

        const res = await api.get('https://www.googleapis.com/youtube/v3/videos',{
            params: {
                part: 'snippet, statistics',
                id: videoId,
                key: apiKey
            }})
        console.log(videoData)
        console.log(res.data.items[0])
        setVideoData(res.data.items[0])


    }

    return (
    <div>
        <img src={videoData.snippet.thumbnails.high.url} alt={videoData.snippet.title}></img>
        <h1>{videoData.snippet.channelTitle}</h1>
        <h1>{videoData.snippet.title}</h1>
        <p>{videoData.snippet.description}</p>
        <h3>{videoData.snippet.publishedAt}</h3>
        <p>{videoData.statistics.likeCount}</p>
        <p>{videoData.statistics.dislikeCount}</p>
        <p>{videoData.statistics.viewCount}</p>
    </div>



    )
}