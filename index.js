document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.downloads a');
    
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            alert('Your download will start shortly.');
        });
    });
});
