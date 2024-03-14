import React, { useState, useEffect } from 'react';
import Banner from './banner';
import GridBoxes from './gridBoxes';
import Footer from './footer';
import playExample from '../components/images/playExample.webp'; // Corrected import path

import axios from 'axios'

function PlayStylesPage() {
    const [exdata, setExhibitData] = useState([]);
    useEffect(()=>{
        axios({
            url:'http://localhost:5000/playstyles',
            method: 'GET',
            headers: {
              authorization:'mongodb+srv://sarahrnciar:m66Wpq4mggMTOZw8@admin.eqktqv7.mongodb.net/?retryWrites=true&w=majority',
            },
            catch(error) {console.error('error:', error);
            alert('An error occured.')}
          }).then((res) => {
            setExhibitData(res.data)});
    });
    
    return (
        <>
        <Banner className="playstyles-background" text="Places to Play" />
        <h1>I want to play at...</h1>
        <GridBoxes  data = {exdata}/>
        <Footer />
        </>
      
    );
  }
  
  export default PlayStylesPage;