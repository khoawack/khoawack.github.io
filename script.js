document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var closeButton = document.getElementsByClassName("close")[0];

    function openModal() {
        modal.style.display = "block";
    }

    function closeModal() {
        modal.classList.add("closing"); // Add closing class to initiate the closing animation

        // Wait for the animation to complete before hiding the modal
        setTimeout(function() {
            modal.style.display = "none"; // Hide the modal
            modal.classList.remove("closing"); // Remove the closing class
        }, 500); // Adjust the time according to your animation duration
    }

    btn.onclick = openModal;
    closeButton.onclick = closeModal;

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
});