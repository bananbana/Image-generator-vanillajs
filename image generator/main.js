function createImages(response) {
    let images = response.results;
    console.log(images);
    let container = document.getElementById('images');
    //Use the document.createElement() method to create the img element.
    //Use the setAttribute() method to set the src attribute on the element.
    //Add the element to the page using the appendChild() method.
    images.forEach((result, i) => {
        if(i <=15){
            let img = document.createElement('img');
            img.setAttribute('src', result.urls.full);
            img.setAttribute('height', '200');
            img.setAttribute('width', '300');
            console.log(img);
            container.appendChild(img);
        }
    });
}

function myFunction() {
  let value = document.getElementById("search").value;
  let clientId='5ZPUcO3QZVc8nbTJb27xDiWtcCImhUtVACKBkNxXb2s';
  let response;
  const Http = new XMLHttpRequest();
    const url='https://api.unsplash.com/search/photos?query='+ value+'&client_id='+clientId;
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        response = Http.responseText
        console.log(JSON.parse(response));
        createImages(JSON.parse(response));
    }
  
}