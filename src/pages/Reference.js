import React from 'react'
import GalleryRef from '../components/GalleryRef'

const Reference = () => {
  const images1 = [
    "https://picsum.photos/600",
    "https://picsum.photos/640",
    "https://picsum.photos/650",
    "https://picsum.photos/680",
    "https://picsum.photos/660",
    "https://picsum.photos/670",
    "https://picsum.photos/690",
    "https://picsum.photos/630",
    "https://picsum.photos/620",
    "https://picsum.photos/610",
    "https://picsum.photos/730",
    "https://picsum.photos/720",
    "https://picsum.photos/710"
  ]

  const images2 = [
    "https://picsum.photos/800",
    "https://picsum.photos/840",
    "https://picsum.photos/850",
    "https://picsum.photos/880",
    "https://picsum.photos/860",
    "https://picsum.photos/870",
    "https://picsum.photos/890",
    "https://picsum.photos/830",
    "https://picsum.photos/820"
  ]

  const images3 = [
    "https://picsum.photos/808",
    "https://picsum.photos/848",
    "https://picsum.photos/858",
    "https://picsum.photos/888",
    "https://picsum.photos/868",
    "https://picsum.photos/878",
    "https://picsum.photos/898",
    "https://picsum.photos/838",
    "https://picsum.photos/828"
  ]

  return (
    <div className="services--content">
      <div className="services--content-white">
        <h2>Reference 1</h2>
        <p>Vítr skoro nefouká a tak by se na první pohled mohlo zdát, že se balónky snad vůbec nepohybují. Jenom tak klidně levitují ve vzduchu. Jelikož slunce jasně září a na obloze byste od východu k západu hledali mráček marně, balónky působí jako jakási fata morgána uprostřed pouště. Zkrátka široko daleko nikde nic, jen zelenkavá tráva, jasně modrá obloha a tři křiklavě barevné pouťové balónky, které se téměř nepozorovatelně pohupují ani ne moc vysoko, ani moc nízko nad zemí. Kdyby pod balónky nebyla sytě zelenkavá tráva, ale třeba suchá silnice či beton, možná by bylo vidět jejich barevné stíny - to jak přes poloprůsvitné barevné balónky prochází ostré sluneční paprsky.</p>

      </div>
      <GalleryRef images={images1} />
      <div className="services--content-white">
        <h2>Reference 2</h2>
        <p>Vítr skoro nefouká a tak by se na první pohled mohlo zdát, že se balónky snad vůbec nepohybují. Jenom tak klidně levitují ve vzduchu. Jelikož slunce jasně září a na obloze byste od východu k západu hledali mráček marně, balónky působí jako jakási fata morgána uprostřed pouště. Zkrátka široko daleko nikde nic, jen zelenkavá tráva, jasně modrá obloha a tři křiklavě barevné pouťové balónky, které se téměř nepozorovatelně pohupují ani ne moc vysoko, ani moc nízko nad zemí. Kdyby pod balónky nebyla sytě zelenkavá tráva, ale třeba suchá silnice či beton, možná by bylo vidět jejich barevné stíny - to jak přes poloprůsvitné barevné balónky prochází ostré sluneční paprsky.</p>

      </div>
      <GalleryRef images={images2} />
      <div className="services--content-white">
        <h2>Reference 3</h2>
        <p>Vítr skoro nefouká a tak by se na první pohled mohlo zdát, že se balónky snad vůbec nepohybují. Jenom tak klidně levitují ve vzduchu. Jelikož slunce jasně září a na obloze byste od východu k západu hledali mráček marně, balónky působí jako jakási fata morgána uprostřed pouště. Zkrátka široko daleko nikde nic, jen zelenkavá tráva, jasně modrá obloha a tři křiklavě barevné pouťové balónky, které se téměř nepozorovatelně pohupují ani ne moc vysoko, ani moc nízko nad zemí. Kdyby pod balónky nebyla sytě zelenkavá tráva, ale třeba suchá silnice či beton, možná by bylo vidět jejich barevné stíny - to jak přes poloprůsvitné barevné balónky prochází ostré sluneční paprsky.</p>

      </div>
      <GalleryRef images={images3} />
    </div>
  )
}

export default Reference