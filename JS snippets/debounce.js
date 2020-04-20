function debounce2() {
    let limit;
    return function () {
        clearTimeout(limit);
        limit = setTimeout(implementation, 3000);
    }
}

function implementation(params) {
    console.log('pressed');
}

const debounce = debounce2();