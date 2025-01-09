document.getElementById('resource-monitoring').addEventListener('dblclick', function() {
    let images = document.querySelectorAll('#resource-monitoring img');
    let currentIndex = 0;
    
    function changeImage() {
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'none';
        }
        images[currentIndex].style.display = 'block';
        currentIndex = (currentIndex + 1) % images.length;
    }
    
    setInterval(changeImage, 3000); // Schimbă imaginea la fiecare 3 secunde
    changeImage(); // Arată prima imagine
});
