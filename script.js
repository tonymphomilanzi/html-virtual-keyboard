


function handleKey(key) {
    document.getElementById('input').value += key;
}

function handleBackspace() {
    let value = document.getElementById('input').value;
    document.getElementById('input').value = value.slice(0, -1);
}




