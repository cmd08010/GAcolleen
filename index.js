
let photo = document.getElementById('photo')
let contact = document.getElementById('website')

//make the picture bigger on mouseover and then back to normal after timeout
photo.addEventListener('mouseover', function (e) {

  photo.style.width = "50rem"
  photo.style.height = "auto"

  setTimeout(() => {
    photo.style.width = null
    photo.style.height = null
  }, 1000)

})
