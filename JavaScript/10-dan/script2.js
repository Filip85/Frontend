document.querySelectorAll('button').forEach(button => {
    button.dataset.clickCount = 0;

    button.addEventListener('click', () => {
        console.log("Button: " + button.dataset.id + " Clicks: " + ++button.dataset.clickCount)
    });
});