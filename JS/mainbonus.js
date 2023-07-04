for (let i =1; i <=100; i++) {
    document.getElementById('squaresCont').innerHTML += `
        <div class="square bg-square">
            <p class="text-center text-white fs-3 fw-3 vertical-align-square">${i}</p>
        </div>
    `;
    if ( i % 3 == 0) {
        document.getElementById('squaresCont').innerHTML += `
        <div class="square bg-tre">
            <p class="text-center text-white fs-3 fw-3 vertical-align-square">Fizz</p>
        </div>
    `;
    } else if ( i % 5 == 0) {
        document.getElementById('squaresCont').innerHTML += `
        <div class="square bg-five">
            <p class="text-center text-white fs-3 fw-3 vertical-align-square">Buzz</p>
        </div>
    `;
    } else if ( i % 5 == 0 && i % 3 == 0) {
        document.getElementById('squaresCont').innerHTML += `
        <div class="square bg-trefive">
            <p class="text-center text-white fs-3 fw-3 vertical-align-square">FizzBuzz</p>
        </div>
    `;
    }
}
