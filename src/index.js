// write your code here


document.addEventListener("DOMContentLoaded", fetchRamen)



function fetchRamen() { 
    fetch('http://localhost:3000/Ramens')
    .then(response => response.json())
    .then(results => {
        results.forEach((ramen) => renderRamen(ramen))
    });
};



function renderRamen(ramen) {

    const ramenMenu = document.getElementById('ramen-menu')
    const ramenImg = document.createElement('img')
    ramenImg.addEventListener('click', handleRamenClick)
    ramenImg.setAttribute('data-id', ramen.id)
    ramenImg.src = ramen.image
    ramenMenu.append(ramenImg)
};





function handleRamenClick(e){

    fetch(`http://localhost:3000/ramens/${e.target.dataset.id}`)
    .then(response => response.json())
    .then(ramen => addRamenImg(ramen))
};




function addRamenImg (ramen) {

    const ramenDetail = document.querySelector('.detail-image')
    ramenDetail.src = ramen.image
    
    const ramenName = document.querySelector('.name')
    ramenName.innerText = ramen.name

    const ramenRestaurant = document.querySelector('.restaurant')
    ramenRestaurant.innerText = ramen.restaurant

    const ramenRating = document.querySelector('#rating-display')
    ramenRating.innerText = ramen.rating

    const ramenComment = document.querySelector ('#comment-display')
    ramenComment.innerText = ramen.comment


    const ramenImg = document.createElement('img')
    ramenImg.img = ramen.image

};

const form =document.getElementById('new-ramen')

form.addEventListener('submit', handleForm)



function handleForm(e) {
    e.preventDefault()

    const newName = document.getElementByID ('new-name').value
    const newRestaurant = document.getElementbyID ('new-restaurant').value
    const newImage = document.getElementByIdconst ('new-image').value
    const newRating = document.getElementbyID ('new-rating').value
    const newComment = document.getElementById('new-comment').value

    const newRamen = {
        name: newName,
        restaurant: newRestaurant,
        image: newImage,
        rating: newRating,
        comment: newComment,

};

renderRamen(newRamen)

}