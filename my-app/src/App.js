import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Avatar, { genConfig } from 'react-nice-avatar';
import { saveAs } from "file-saver";
import domtoimage from "dom-to-image";
// import fs-react from 'fs-react';

const App = () => {
  let { eye, ear, background, wear, nose, skin, hair, smile } = useParams();

  const [image, setImage] = useState();
  const [urlimage, setUrlImage] = useState();
  const [loading, setLoading] = useState(true);

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

  const config = genConfig({ sex: 'man',
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


  useEffect(() => {
    async function fetchData() {
      const scale = 2;
      const node = document.getElementById('myAvatar');
      if (node) {
        const blob = await domtoimage.toBlob(node, {
          height: node.offsetHeight * scale,
          style: {
            transform: `scale(${scale}) translate(${node.offsetWidth / 2 / scale}px, ${node.offsetHeight / 2 / scale}px)`,
            "border-radius": 0
          },
          width: node.offsetWidth * scale
        });
        setImage(blob);
        const url = URL.createObjectURL(blob);
        setUrlImage(url);
        // saveAs(blob, "avatar.png");
        // fs.writeFile('path/to/save/image', blob, (err) => {
        //   if (err) throw err;
        //   console.log(`The file has been saved!`);
      // });
        setLoading(false)
      }
    }
    fetchData();
  }, []);


  if( loading == true)
  {
    return (
      
      <div id='myAvatar'>
        <Avatar style={{ width: '8rem', height: '8rem' }} {...config} />
      </div>
    );
  }
  else
  {
    return (
         <img id='image' src={urlimage} /> 
    );
  }

}

export default App;