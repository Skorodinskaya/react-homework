const url = '/api/v1/cars/api/v1/cars';

const getCars = () => {
    return fetch (url)
        .then(value => value.json())
}

export {getCars}