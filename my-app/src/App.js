import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Avatar, { genConfig } from 'react-nice-avatar'

const App = () => {
  let { eye, ear, background, wear, nose, skin, hair, smile } = useParams();

  console.log(useParams())
  console.log("eye: " + eye)
  console.log("ear: " + ear)
  console.log("background: " + background)
  console.log("wear: " + wear)
  console.log("nose: " + nose)
  console.log("skin: " + skin)
  console.log("hair: " + hair)
  console.log("smile: " + smile)

  if (typeof eye === 'undefined') {
    eye = 'circle'
  }
  
  if (typeof ear === 'undefined') {
    ear = 'small'
  }
  
  if (typeof background === 'undefined') {
    background = 'circle'
  }
  
  if (typeof wear === 'undefined') {
    wear = 'hoody'
  }
  
  if (typeof nose === 'undefined') {
    nose = 'short'
  }
  
  if (typeof skin === 'undefined') {
    skin = 'white'
  }
  
  if (typeof hair === 'undefined') {
    hair = 'normal'
  }
  
  if (typeof smile === 'undefined') {
    smile = 'laugh'
  }

  const config = genConfig({ sex: "man",
                             eyeStyle: eye,
                             earSize: ear,
                             shape : background,
                             shirtStyle : wear,
                             noseStyle : nose,
                             faceColor : skin,
                             airStyle : hair,
                             mouthStyle : smile,
                             glassesStyle: 'none',
                             bgColor: 'grey',
                             hatStyle: 'none',
                             hairColor: 'black',
                             shirtColor: 'green'}) 



  console.log("eye: " + eye)
  console.log("ear: " + ear)
  console.log("background: " + background)
  console.log("wear: " + wear)
  console.log("nose: " + nose)
  console.log("skin: " + skin)
  console.log("hair: " + hair)
  console.log("smile: " + smile)


  return (
    <div>
      <Avatar style={{ width: '8rem', height: '8rem' }} {...config} />
    </div>
  );
}

export default App;