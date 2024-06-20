import React from 'react'
import Gallery from '../components/Gallery';

const Zahranicnispoluprace = () => {
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
            <h2>Globální spolupráce na vašich zahraničních projektech</h2>
<p>
    Hledáte spolehlivého partnera pro realizaci vašich projektů po celém světě?
    S námi máte jistotu profesionálního přístupu a bohatých zkušeností. Naše firma poskytuje služby v oblasti elektroinstalace a technologických instalací již řadu let, a to nejen v Evropě, ale i na dalších kontinentech.
</p>

<h3>Výhody spolupráce s námi na zahraničních projektech</h3>
<ol>
    <li>
        <strong>Odbornost a profesionalita:</strong>
        <ul>
            <li><strong>Zkušený tým odborníků:</strong> Naši technici a inženýři mají široké znalosti a dovednosti, které aplikují v různých zemích a podmínkách.</li>
            <li><strong>Certifikace a standardy:</strong> Dodržujeme mezinárodní standardy kvality a bezpečnosti.</li>
        </ul>
    </li>
    
    <li>
        <strong>Moderní technologie a inovace:</strong>
        <ul>
            <li><strong>Inovativní řešení:</strong> Využíváme nejnovější technologie pro zajištění efektivních a spolehlivých systémů.</li>
            <li><strong>Automatizace a integrace:</strong> Instalujeme inteligentní systémy a technologie, které usnadňují řízení a správu vašich zařízení.</li>
        </ul>
    </li>
    
    <li>
        <strong>Spolehlivost a podpora:</strong>
        <ul>
            <li><strong>Dlouhodobá údržba:</strong> Nabízíme servisní smlouvy pro zajištění dlouhodobé spolehlivosti vašich instalací.</li>
            <li><strong>Nonstop podpora:</strong> Jsme zde pro vás 24/7, abychom zajistili hladký provoz vašich projektů kdekoliv na světě.</li>
        </ul>
    </li>
</ol>
</div>

<Gallery images={images} />

<div className="services--content-white">

<h3>Naše zkušenosti s mezinárodními projekty</h3>
<ol>
    <li>
        <strong>Dlouholetá praxe:</strong>
        <ul>
            <li><strong>Globální dosah:</strong> Realizujeme projekty po celém světě, od Evropy přes Asii až po Ameriku.</li>
            <li><strong>Bohaté zkušenosti:</strong> Naše týmy mají zkušenosti s různými typy projektů v odlišných kulturních a legislativních prostředích.</li>
        </ul>
    </li>
    
    <li>
        <strong>Kompletní služby na klíč:</strong>
        <ul>
            <li><strong>Návrh a plánování:</strong> Připravíme detailní projektový plán, který odpovídá vašim specifickým požadavkům.</li>
            <li><strong>Instalace a realizace:</strong> Zajišťujeme kompletní instalaci a uvedení do provozu všech technologií a systémů.</li>
        </ul>
    </li>
    
    <li>
        <strong>Flexibilita a přizpůsobivost:</strong>
        <ul>
            <li><strong>Pobyty mimo EU:</strong> Naše týmy jsou připraveny pracovat na dlouhodobých projektech mimo Evropskou unii.</li>
            <li><strong>Rychlá reakce:</strong> Přizpůsobíme se časovým harmonogramům a specifickým potřebám vašich projektů kdekoliv na světě.</li>
        </ul>
    </li>
</ol>



                </div>
                </div>
  )
}

export default Zahranicnispoluprace