// JavaScript Document
const images = document.querySelectorAll('.img'); 
const containerImage = document.querySelector('.container-img');
const containerImage = document.querySelector('.img-show');
const copy = document.querySelector('.copy');
const closeModal = document.querySelector('.bx.bx-x');


images.forEach(image =>{
	image.addEventListener('click', ()=>{
		
		addImage(image.getAttribute('src')image.getAttribute('alt'));
	})
})

const addImage = (srcImage, altImage) =>{
	containerImage.classList.toggle('move');
	imagecontainer.classList.toggle('show');
	imageContainer.src = srcImage;
	copy.innherHTML = altimage;
}

closeModal.addEventListener('click', ()=>{
	containerImage.classList.toggle('move');
	imagecontainer.classList.toggle('show');
})