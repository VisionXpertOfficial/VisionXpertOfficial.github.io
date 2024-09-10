// console.log("Hello!")

document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    const apiKey = 'YOUR_ACCESS_KEY';
    const query = 'technology';

    for (const image of images) {
        // console.log(image)
        fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${apiKey}`)
        .then(Response => Response.json())
        .then(data => {
           image.src = data.urls.small;
           image.width = 100;
           image.height = 100;
    })
    .catch(err => console.error(err));

}

})