setInterval(updateScreenWidth, 1000);


/* Checkbox */

const checkboxes = document.querySelectorAll('.single-checkbox');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            checkboxes.forEach(cb => {
                if (cb !== this) {
                    cb.checked = false;
                }
            });
        }
    });
});

/*  */
