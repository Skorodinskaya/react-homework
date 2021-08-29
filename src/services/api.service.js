const url = 'http://91.201.233.14/api/v1/cars';

const getCars = () => {
    return fetch (url)
        .then(value => value.json())
}

const addCar = (car) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

const updateCar = (car) => {
    fetch(url + '/' + car.id, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

const deleteCar = (id) => {
    fetch(url + '/' + id, {
        method: 'DELETE'
    })
        .then()
}

export {getCars, addCar, updateCar, deleteCar}