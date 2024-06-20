import React from 'react'
import Gallery from '../components/Gallery';

const Elektroinstalacevdomech = () => {
    const images = [
        "https://unsplash.it/660?random",
        "https://unsplash.it/620?random",
        "https://unsplash.it/680?random",
        "https://unsplash.it/690?random",
        "https://unsplash.it/600?random"
    ];

    return (
        <div className="services--content">
            <div className="services--content-volt">
                <h2>Profesionální Domovní Elektroinstalace pro Váš Domov</h2>
                <p>
                    Chcete zajistit bezpečnost a spolehlivost Vaší elektroinstalace?
                </p>
                <h3>U nás jste na správném místě! Nabízíme:</h3>
                <p>
                    <ul>
                        <li><strong>Kompletní elektroinstalační služby:</strong> Od návrhu po realizaci.</li>
                        <li><strong>Moderní technologie:</strong> Zajišťujeme nejnovější a nejefektivnější řešení.</li>
                        <li><strong>Bezpečnost na prvním místě:</strong> V souladu s nejvyššími standardy a předpisy.</li>
                        <li><strong>Zkušený tým odborníků:</strong> Profesionálové s dlouholetou praxí.</li>
                    </ul>
                </p>
            </div>
           
        <Gallery images={images} />

            <div className="services--content-white">
                <h3>
                    Proč si vybrat právě nás?
                </h3>
                <ul>
                    <li><strong>Kvalita a spolehlivost:</strong> Naše práce mluví za nás.</li>
                    <li><strong>Individuální přístup:</strong> Každý projekt je pro nás jedinečný.</li>
                    <li><strong>Rychlá a efektivní realizace:</strong> Dodržujeme termíny a šetříme Váš čas.</li>
                </ul>
            </div>
        </div>
    )
}

export default Elektroinstalacevdomech