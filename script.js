document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var closeButton = document.getElementsByClassName("close")[0];

    function openModal() {
        modal.style.display = "block"; 
        setTimeout(function() {
            modal.classList.add("open"); 
        }, 10); 
    }

    function closeModal() {
        modal.classList.add("closing");
        modal.classList.remove("open"); 

        setTimeout(function() {
            modal.style.display = "none"; 
            modal.classList.remove("closing"); 
        }, 500); 
    }

    btn.onclick = openModal;
    closeButton.onclick = closeModal;

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
});
