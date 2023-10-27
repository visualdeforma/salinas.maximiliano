// JavaScript Document
const images = document.querySelectorAll('.img'); 
const containerImage = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const copy = document.querySelector('.copy');
const closeModal = document.querySelector('.bx.bx-x');


images.forEach(image =>{
	image.addEventListener('click',()=>{
		
		addImage(image.getAttribute('alt'),image.getAttribute('src'));
	})
})

const addImage = (srcImage, altImage) =>{
	containerImage.classList.toggle('move');
	imageContainer.classList.toggle('show');
	imageContainer.src=altImage;
	copy.innerHTML=srcImage;
}

containerImage.addEventListener('click',()=>{
	containerImage.classList.toggle('move');
	imageContainer.classList.toggle('show');

})