const gallery = document.getElementById('gallery');
const sliderContainer = document.getElementById('sliderContainer');
const sliderImage = document.getElementById('sliderImage');
const downloadLink = document.getElementById('downloadLink');
const uploadInput = document.getElementById('uploadInput');

function uploadImage() {
    uploadInput.click();
}

uploadInput.addEventListener('change', function(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = function(e) {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';

            const img = document.createElement('img');
            img.src = e.target.result;
            img.onclick = function() {
                sliderImage.src = this.src;
                downloadLink.href = this.src;
                sliderContainer.style.display = 'flex';
            };

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.innerHTML = '×';
            deleteBtn.onclick = function() {
                gallery.removeChild(galleryItem);
            };

            galleryItem.appendChild(img);
            galleryItem.appendChild(deleteBtn);
            gallery.appendChild(galleryItem);
        };
        reader.readAsDataURL(file);
    }
});

function closeSlider() {
    sliderContainer.style.display = 'none';
}