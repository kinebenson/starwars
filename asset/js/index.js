const images = ["/asset/image/image1.jpg","/asset//image/image2.avif",
    "/asset/image/image3.jpg","/asset/image/image4.avif","/asset/image/image5.avif",
    "/asset/image/image6.avif","/asset/image/image7.avif","/asset/image/OIP.jpeg",
    "/asset/image/2.jpg","/asset/image/darth_vader_by_adenry_dbwsppz-375w-2x.jpg"]



//     for loop
// for (let i = 0;i < images.length; i ++){
//     console.log(images[i])
// }


// map method
// images.map((image,index)=>{console.log(image,index)})


//   for each loop
// images.forEach((image)=>{console.log(image)})

// for of loop
// for(let image of images){
// console.log(image)
// }

// for in loop
// for(let image in images){
//     console.log(images[image])
// }

// let actor;


// for (i=0;i<images.length;i++){
//  let image = document.createElement("img");
//  image.src = images[i];
//  let container = document.getElementById("image-container");
//  container.appendChild(image)
// }


fetch("https://swapi.dev/api/people/?format=json").then((response) => {
  return (response.json());
}).then((response)=>{ 
 actor = response.results;
 
 let row = document.getElementById("row");
 for(i=0;i<actor.length;i++){
  let img = document.createElement("img");
  img.src = images[i];
  let name = document.createElement("h2");
  name.textContent = actor[i].name;
 let column = document.createElement("div");
 column.classList.add("col-md-3");
  column.classList.add("snippet");
 column.appendChild(img);
 column.appendChild(name);
 row.appendChild(column)
 }
 ;})







