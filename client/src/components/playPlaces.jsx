// import React, { useState } from 'react';
import Banner from './banner';
// import GridBoxes from './gridBoxes';
import Footer from './footer';
// import playExample from '../components/images/playExample.webp'; // Corrected import path

import React, { useState, useEffect } from 'react';
import GridBoxes from './gridBoxes';
import axios from 'axios'

function getDeviceType() { // for impressions
  const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|MQQBrowser|Opera Mini|Windows Phone|webOS|Kindle|Silk-Accelerated|(hpw|web)OS/i.test(ua)) {
      return "mobile";
    }
    return "desktop";
}

function trackVisit() { // for impressions - track visit information in db
  const deviceType = getDeviceType();
  const page = 'playPlaces';
  const time_of_day = new Date();
  const apiUrl = process.env.VERCEL_URL;

  // Store the visit time, page, and device type in the database
  axios.post('${apiUrl}/create', { time_of_day, page, deviceType })
    .then(response => {
      console.log('Visit time recorded:', response.data);
    })
    .catch(error => {
      console.error('Error recording visit time:', error);
    });
}

function Playplaces() {
  const apiUrl = process.env.VERCEL_URL;
  const [exdata, setExhibitData] = useState([]);
  useEffect(() => {
    axios({
      url: '${apiUrl}/exhibits',
      method: 'GET',
      headers: {
        authorization: 'mongodb+srv://sarahrnciar:m66Wpq4mggMTOZw8@admin.eqktqv7.mongodb.net/?retryWrites=true&w=majority',
      },
      catch(error) {
        console.error('error:', error);
        alert('An error occured.')
      }
    }).then((res) => {
      setExhibitData(res.data)
    });
  },[]);
  useEffect(() => {
    trackVisit();
  }, []); // empty dependency array ensures this runs once on mount

  return (
    <>
      <Banner className="playstyles-background" text="Places to Play" />
      <h1 className="user">I want to play at...</h1>
      <GridBoxes data={exdata} />
      <Footer />
    </>

  );
}

export default Playplaces;