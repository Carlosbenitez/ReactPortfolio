let button = document.querySelector(".btn")

button.addEventListener('click', (e) => {

    window.location.href = "mailto:carlosbenitez86753@yahoo.com?subject=" + document.getElementById('Subject').value + "&body=" +
    document.getElementById('Message').value
    window.location.href = 'thankyou.html';
});