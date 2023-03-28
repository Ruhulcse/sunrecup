import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { multiStepContext } from '../../../context/FormDataProvider';
import logo from '../../../images/logo.png';
import Footer from '../../../share/Footer/Footer';
import './ThirdStep.css';


const items = [
  {
      id:1,
      image:'https://cdn.solvari.nl/apps/solar-panel-yield-scan/img/flat.svg',
      title:'Plat dak'
  },
  {
      id:2,
      image:'https://cdn.solvari.nl/apps/solar-panel-yield-scan/img/slightly_pitched.svg',
      title:'Minimale helling'
  },
  {
      id:3,
      image:'https://cdn.solvari.nl/apps/solar-panel-yield-scan/img/pitched.svg',
      title:'Flauwe helling'
  },
  {
      id:4,
      image:'https://cdn.solvari.nl/apps/solar-panel-yield-scan/img/steep.svg',
      title:'Standaard helling'
  },
  {
      id:5,
      image:'https://cdn.solvari.nl/apps/solar-panel-yield-scan/img/very_steep.svg',
      title:'Steile helling'
  },
]

const ThirdStep = () => {
    const [platisActive, setPlatIsActive] = useState(false);
    const [doel, setDoel] = useState("Zonnepanelen kopen");
    const [hellingshoek, setHellingshoek] = useState("Plat dak");
    const [ligging, setLigging] = useState("Analyseer de beste ligging voor mij");
    const [geschat, setGeschat] = useState("Zeer laag (2 personen, tot 2.000 kWh)");
    const [zonnepanelen, setZonnepanelen] = useState("Ik weet het nog niet, afhankelijk van advies & informatie");
    const {formdata, setFormdata} = useContext(multiStepContext)
    const navigate = useNavigate()
    const handleThirdtStep = (e)=>{
      e.preventDefault()
         setFormdata({...formdata,  doel:doel, hellingshoek:hellingshoek, ligging:ligging, geschat:geschat,zonnepanelen:zonnepanelen})
         navigate('/last-step')
    }
  return (
    <div>
        <div className="bg-image-step-3">
        <div className="top-logo d-flex justify-content-center">
        <img src={logo} alt=""  height='100' width='100' />
        
        </div>
     <div className="d-flex justify-content-center overlap">
     <div className="step-three">
     <div class="card" style={{width:'60rem'}}>
    <div class="card-body">
        <h3 className="text-center mt-2 mb-4 card-title">Doe de gratis opbrengstscan</h3>
        <div className="container overflow-hidden">
            <div className="sub-title">
            <h4 className="mt-2 mb-2">Jouw situatie</h4>
            <hr className='mt-4 mb-2' />
            </div>
            <div className="row g-4">
                <div className="col-md-8 col-12">
                   <form onSubmit={handleThirdtStep}>
                   <label className='select_label mb-2'>Doel van je scan</label>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={doel.length <= 18 ? true: false}
                value="Zonnepanelen kopen"
                onClick={(e)=> {
                  setDoel(e.target.value)}}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                Zonnepanelen kopen
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                value="Zonnepanelen zelf installeren"
                onClick={(e)=> setDoel(e.target.value)}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                Zonnepanelen zelf installeren
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                 value="Ik heb al zonnepanelen"
                 onClick={(e)=> setDoel(e.target.value)}
                />
                <label class="form-check-label" for="flexRadioDefault3">
                Ik heb al zonnepanelen
                </label>
                </div>
                <label className='select_label mb-2'>Hellingshoek van je dak</label>
                <div className="container overflow-hidden">
                  <div className="row gy-4">
                {items.map((item, index) =>(
                 
                     <div className="col-md-4" onClick={()=> setHellingshoek(item.title)}>
                    <div className={hellingshoek === item.title ? "checkable-button__active" : "checkable-button"}>
                    <img src={item.image} draggable="false" alt="Plat dak" class="roof-orientation__icon"/>
                    <p class="roof-orientation__title">{item.title}</p>
                    </div>
                   </div>
                    ))}
                  </div>
                </div>
                <div className='mt-4'>
                    <div className="mt-4">
                    <label className='select_label mb-2'>Ligging van je dak</label>
                    <select class="form-select" aria-label="Default select example"
                    name="Liggingvanjedak"
                    onChange={(e)=> setLigging(e.target.value)}
                    >
                    <option className='select_option' selected  value='Analyseer de beste ligging voor mij'>Analyseer de beste ligging voor mij</option>
                    <option className='select_option' value='West'>West</option>
                    <option className='select_option' value='Zuidwest'>Zuidwest</option>
                    <option className='select_option' value='Zuiden'>Zuiden</option>
                    <option className='select_option' value='Zuidoost'>Zuidoost</option>
                    <option className='select_option' value='Oost'>Oost</option>
                    </select>
                    </div>
                    <div className="mt-4">
                    <label className='select_label mb-2'>Geschat jaarlijks stroomverbruik</label>
                    <select class="form-select" aria-label="Default select example"
                    onChange={(e)=> setGeschat(e.target.value)}
                    >
                    <option value="Zakelijk (meer dan 10.000 kWh)">Zakelijk (meer dan 10.000 kWh)</option>
                    <option value="Zeer laag (2 personen, tot 2.000 kWh)" selected> Zeer laag (2 personen, tot 2.000 kWh) </option>
                    <option value="Laag (3 personen, 2.000 kWh - 4.000 kWh)"> Laag (3 personen, 2.000 kWh - 4.000 kWh) </option>
                    <option value="Bovengemiddeld (5 personen, 6.000 kWh - 8.000 kWh)"> Bovengemiddeld (5 personen, 6.000 kWh - 8.000 kWh) </option>
                    <option value="Hoog (6+ personen, 8.000 - kWh - 10.000 kWh)">  Hoog (6+ personen, 8.000 - kWh - 10.000 kWh)  </option>
                    <option value="Gemiddeld (4 personen, 4.000 kWh - 6.000 kWh)"> Gemiddeld (4 personen, 4.000 kWh - 6.000 kWh) </option>
                    </select>
                    </div>
                    <div className="mt-4">
                    <label className='select_label mb-2'>Ben je van plan om zonnepanelen te laten plaatsen?</label>
                    <select class="form-select" aria-label="Default select example"
                    onChange={(e)=> setZonnepanelen(e.target.value)}
                    >
                    <option value='Nee, ik ben alleen op zoek naar informatie'> Nee, ik ben alleen op zoek naar informatie </option>
                    <option value="Ja, na het vergelijken van offertes"> Ja, na het vergelijken van offertes </option>
                    <option value="Ik weet het nog niet, afhankelijk van advies & informatie" selected> Ik weet het nog niet, afhankelijk van advies & informatie  </option>
                    </select>
                    </div>
                </div>
                <div class="d-grid mb-4 mt-4">
            <button class="start-btn step-3" type="submit">Doorgaan</button>
            </div>
                   </form>
                </div>
                <div className="col-md-4 col-12" style={{backgroundColor:'#EBEBEB'}}>
                   <div className='mt-4 mb-4'>
                   <p>Je adresgegevens:</p>
                    <p>{formdata.straatnaam}</p>
                    <p>{formdata.huisnummer}</p>
                    <p>{formdata.postcode}</p>
                    <p>{formdata.woonplaats}</p>
                    <a href="/step2">Klopt dit niet? <br />Pas je gegevens aan.</a>
                   </div>
                </div>
            </div>
        </div>
    </div>
    </div>
     </div>
     </div>
    </div>
    <div className="main mt-4 mb-4">
    <div className="container">
      <div className="title">
        <h2>Bespaar vanaf dag één op uw energiefactuur met onze opbrengstscan en begeleiding</h2>
      </div>
      <div className="description mt-4">
        <p>Wilt u besparen op uw energiefactuur en hulp krijgen bij uw zoektocht naar de beste energieoplossingen? Doe dan de opbrengstscan en kom in contact met een van onze vriendelijke salesvertegenwoordigers. Onze expert begeleidt u van A tot Z en zal u voorzien van het beste advies op maat van uw budget en behoeften.</p>
        <p>Onze salesvertegenwoordiger zal niet alleen de beste prijs en voorwaarden voorstellen, maar zal ook alle mogelijke financieringsopties in kaart brengen om ervoor te zorgen dat uw project binnen uw budget past.</p>
        <p>Kortom, doe vandaag nog de opbrengstscan en begin vanaf dag één te besparen op uw energiefactuur!</p>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default ThirdStep