const buttons = document.querySelectorAll("#controls button");

const container = document.getElementById('content');


let source = [
    {
        heading: 'Biomass Energy',
        body: 'Biomass is renewable organic material that comes from plants and animals. Biomass was the largest source of total annual U.S. energy consumption until the mid-1800s. Biomass continues to be an important fuel in many countries, especially for cooking and heating in developing countries. The use of biomass fuels for transportation and for electricity generation is increasing in many developed countries as a means of avoiding carbon dioxide emissions from fossil fuel use. In 2019, biomass provided nearly 5 quadrillion British thermal units (Btu) and about 5% of total primary energy use in the United States.("Biomass explained", 2021)',
        imgUrl: 'img/biomass.jpg',
        imgAlt: 'Biomass'
    },
    {
        heading: 'Tidal Energy',
        body: 'In the U.S. 8% of our energy generating capacity comes from wind turbines—that’s more than any other renewable resource—and wind power has more than tripled over the past decade. Everyday Einstein Sabrina Stierwalt. (August 14, 2019). Everything you need to know about Tidal Energy',
        imgUrl: 'img/tidal.jpg',
        imgAlt: 'Tidal'
    },
    {
        heading: 'Wind Energy',
        body: 'Anything that moves has kinetic energy, and scientists and engineers are using the wind’s kinetic energy to generate electricity. Wind energy, or wind power, is created using a wind turbine, a device that channels the power of the wind to generate electricity',
        imgUrl: 'img/wind.jpg',
        imgAlt: 'Wind'
    }
];




function preloader() {
    const photosList = [
        'img/hydro.jpg',
        'img/tidal.jpg',
        'img/wind.jpg'

    ];
    const Image = [];
    for (let i = 0; i < photosList.length; i++) {
        photos[i] = new images();
        photos[i].src = photosList[i];
    }

    console.log(`Preloaded images:\n\t${photos[0].src}\n\t${photos[1].src}\n\t${photos[2].src}`);


};
window.addEventListener("load", preloader);

content.innerHTML = `
            <div>
                <h2>${source[0].heading}</h2>
                    <img src=“${source[0].imgUrl}" alt=“${source[0].imgAlt}">
                    <p>${source[0].body}</p>
            </div>`;


function clickButton(e) {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].hasAttribute('id')) {
            buttons[i].removeAttribute('id');
        }
    }

    let currentPage = e.target;
    currentPage.setAttribute("id", "active");

    if (e.target.innerText === 'Biomass') {

        content.innerHTML = `
            <div>
                <h2>${source[0].heading}</h2>
                    <img src="${source[0].imgUrl}" alt="${source[0].imgAlt}">
                    <p>${source[0].body}</p>
            </div>`;

    } else if (e.target.innerText === 'Tidal') {
        content.innerHTML = `
                <div>
                    <h2>${source[1].heading}</h2>
                        <img src="${source[1].imgUrl}" alt="${source[1].imgAlt}">
                        <p>${source[1].body}</p>
                </div>`;

    } else {
        content.innerHTML = `
                <div>
                    <h2>${source[2].heading}</h2>
                        <img src="${source[2].imgUrl}" alt="${source[2].imgAlt}">
                        <p>${source[2].body}</p>
                </div>`;
    }

}











for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', clickButton);
}
