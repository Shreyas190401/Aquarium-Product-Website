let carts = document.querySelectorAll('.btn');

let products = [
    {
        name: 'Elove 18 Watt Water Lifting Submersible Pump for Desert Air Coolers, Aquarium, Fountains - 180V-230V, 1.85 M',
        tag: 'pump1',
        price: 249,
        inCart: 0

    },
    {
        name: 'Hygger Quiet Mini Air Pump for Aquarium 1.5 Watt Oxygen Fish Air Pump',
        tag: 'pump2',
        price: 1250,
        inCart: 0

    },
     
    {
        name: '',
        tag: 'ff3',
        price: 130,
        inCart: 0

    },
    {
        name: 'Optimum Highly Nutritious Food Mini Pellet, 1 kg',
        tag: 'ff4',
        price: 333,
        inCart: 0

    },
    {
        name: 'Taiyo Special Fish Food, 1 kg',
        tag: 'ff5',
        price: 215,
        inCart: 0

    },
    {
        name: 'Taiyo Aini Fast Red Fish Food, 330gm',
        tag: 'ff6',
        price: 180,
        inCart: 0

    },
    {
        name: 'Protyn Whole Dried Black Soldier Fly Larvae Treat',
        tag: 'ff7',
        price: 580,
        inCart: 0

    },
    {
        name: 'TETRA Bits Complete -300ml/93g Fish Food For Aquariums',
        tag: 'ff8',
        price: 364,
        inCart: 0

    },
    {
        name: 'Optimum CP 3-in-1 Highly Nutritious Aquarium Fish Food for All Fishes, 100 g (Pack of 2)',
        tag: 'ff9',
        price: 295,
        inCart: 0

    },
    {
        name: 'Taiyo Aini Fast Growth Fish Food, 330g',
        tag: 'ff10',
        price: 189,
        inCart: 0

    },
    {
        name: 'TAIYO PLUSS DISCOVERY Fish Food 1 KG',
        tag: 'ff11',
        price: 276,
        inCart: 0

    },
    {
        name: 'DR FISH Honey Fast Red Fish Food, 330gm',
        tag: 'ff12',
        price: 250,
        inCart: 0

    }
];


for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
} 

function cartNumbers(product) {
    console.log("the product clicked is", product);
    let productNumbers = localStorage.getItem('cartNumbers');
     
    productNumbers = parseInt(productNumbers);
    
    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    
}   

onLoadCartNumbers();