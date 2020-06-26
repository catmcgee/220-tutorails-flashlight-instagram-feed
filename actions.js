// this function gets pictures from instagram and displays them on the webpage

getInstaPictures();

async function getInstaPictures() {
    // adding ?__a=1 on the end of any instagram URL is a public API
    const response = await fetch("https://www.instagram.com/catmcgeecode/?__a=1");
    const jsonData = await response.json(); // converts into json so we can easily find the images
    // console.log(jsonData)
    const pictures = jsonData.graphql.user.edge_owner_to_timeline_media.edges; 
    
    // iterate through each picture to add to HTML
    for(i = 0; i < pictures.length ; i++) {
        let img = document.createElement('img');
        img.src = pictures[i].node.display_url; // this is where the image url is stored in the json
        document.body.appendChild(img);
    }
}

// this function moves the flashlight 

document.addEventListener('mousemove', update)

function update(e) {
    let x = e.clientX; // X position of mouse
    let y = e.clientY; // Y position of mouse

    // sets --cursor variables that we use in the CSS to display flashlight
    document.documentElement.style.setProperty('--cursorX', x + 'px'); 
    document.documentElement.style.setProperty('--cursorY', y + 'px');
}

