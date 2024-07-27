function generateStars() {
    let size = document.getElementById('sizeInput').value || 5;
    size = parseInt(size);
    
    // 1번
    let starContainer1 = document.getElementById('starContainer1');
    starContainer1.innerHTML = '';
    for (let i = 0; i < size; i++) {
        starContainer1.innerHTML += '★';
    }

    // 2번
    let starContainer2 = document.getElementById('starContainer2');
    starContainer2.innerHTML = '';
    for (let i = 0; i < size; i++) {
        starContainer2.innerHTML += '★<br>';
    }

    // 3번
    let starContainer3 = document.getElementById('starContainer3');
    starContainer3.innerHTML = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            starContainer3.innerHTML += '★';
        }
        starContainer3.innerHTML += '<br>';
    }

    // 4번
    let starContainer4 = document.getElementById('starContainer4');
    starContainer4.innerHTML = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j <= i; j++) {
            starContainer4.innerHTML += '★';
        }
        starContainer4.innerHTML += '<br>';
    }

    // 5번
    let starContainer5 = document.getElementById('starContainer5');
    starContainer5.innerHTML = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size - i; j++) {
            starContainer5.innerHTML += '★';
        }
        starContainer5.innerHTML += '<br>';
    }

    // 6번
    let starContainer6 = document.getElementById('starContainer6');
    starContainer6.innerHTML = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size - i - 1; j++) {
            starContainer6.innerHTML += '☆';
        }
        for (let j = 0; j < i + 1; j++) {
            starContainer6.innerHTML += '★';
        }
        starContainer6.innerHTML += '<br>';
    }

    // 7번
    let starContainer7 = document.getElementById('starContainer7');
    starContainer7.innerHTML = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < i; j++) {
            starContainer7.innerHTML += '☆';
        }
        for (let k = 0; k < size - i; k++) {
            starContainer7.innerHTML += '★';
        }
        starContainer7.innerHTML += '<br>';
    }

    // 8번
    let starContainer8 = document.getElementById('starContainer8');
    starContainer8.innerHTML = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size - i - 1; j++) {
            starContainer8.innerHTML += '☆';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            starContainer8.innerHTML += '★';
        }
        starContainer8.innerHTML += '<br>';
    }

    // 9번
    let starContainer9 = document.getElementById('starContainer9');
    starContainer9.innerHTML = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < i; j++) {
            starContainer9.innerHTML += '☆';
        }
        for (let k = 0; k < 2 * (size - i) - 1; k++) {
            starContainer9.innerHTML += '★';
        }
        starContainer9.innerHTML += '<br>';
    }

    // 10번
    let starContainer10 = document.getElementById('starContainer10');
    starContainer10.innerHTML = '';
    for (let i = 0; i < size - 1; i++) {
        for (let j = 0; j < size - i - 1; j++) {
            starContainer10.innerHTML += '☆';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            starContainer10.innerHTML += '★';
        }
        starContainer10.innerHTML += '<br>';
    }
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < i; j++) {
            starContainer10.innerHTML += '☆';
        }
        for (let k = 0; k < 2 * (size - i) - 1; k++) {
            starContainer10.innerHTML += '★';
        }
        starContainer10.innerHTML += '<br>';
    }

    // 11번
    let starContainer11 = document.getElementById('starContainer11');
    starContainer11.innerHTML = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size + (size - i - 1); j++) {
            starContainer11.innerHTML += '☆';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            starContainer11.innerHTML += '★';
        }
        starContainer11.innerHTML += '<br>';
    }
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size - i - 1; j++) {
            starContainer11.innerHTML += '☆';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            starContainer11.innerHTML += '★';
        }
        for (let l = 0; l < 2 * (size - i) - 1; l++) {
            starContainer11.innerHTML += '☆';
        }
        for (let m = 0; m < 2 * i + 1; m++) {
            starContainer11.innerHTML += '★';
        }
        starContainer11.innerHTML += '<br>';
    }
}

function updateStars() {
    generateStars();
}

// Initial call to generate stars on page load
window.onload = generateStars;
