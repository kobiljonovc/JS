let person = {
    ism: 'Akobir',
    familya: 'Sharifjonov',
    davlat: 'Uzbekistan',
    yosh: 16,
    boyi: '176sm',
    yil: 2008,
    oy: 'Dekabr',
    kun: 7,
};

console.log('Salom mening ismim: ' + person.ism + ', Familyam: ' + person.familya + ", Mening yoshim: " +
    person.yosh + "da.' + ', Mening bo'yim: " + person.boyi + ". " + "Men " + person.yil + " yil " + person.kun + " chi " + person.oy + " da tug'ilganman.")

function _car(__name = "BMW", __model = "M5") {
    console.log("Car name: " + __name + " model: " + __model + ".")
}

_car()