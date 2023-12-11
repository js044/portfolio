function filterPosts(category, button) {
    var gridItems = document.querySelectorAll('.grid-item');
    var buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(function(btn) {
        btn.classList.remove('active'); // Remove 'active' class from all buttons
    });

    button.classList.add('active'); // Apply 'active' class to the clicked button

    gridItems.forEach(function(item) {
        var categories = item.getAttribute('data-categories').split(' ');
        if (category === 'all' || categories.includes(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
