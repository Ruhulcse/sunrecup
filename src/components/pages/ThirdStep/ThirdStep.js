import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { multiStepContext } from '../../../context/FormDataProvider';
import logo from '../../../images/logo.png';
import Footer from '../../../share/Footer/Footer';
import './ThirdStep.css';
import { MdArrowForward } from "react-icons/md";

const MyData={	"catgories": {
  "Verbouwen en renoveren": {
    "Type opdracht": {
      "list": [
        "Aanbouw plaatsen",
        "Nieuw huis bouwen",
        "Zolder verbouwen",
        "Garage verbouwen",
        "Kelder verbouwen",
        "Opbouw plaatsen",
        "Verbouwen en renoveren - algemeen"
      ]
    },
    "Soort aanvraag": {
      "list": [
        "Particulier",
        "Zakelijk"
      ],
      "inputbox": 0
    },
    "Sloopwerkzaamheden": {
      "list": [
        "Ja",
        "Nee",
        "Weet ik niet"
      ]
    },
    "Vergunning nodig": {
      "list": [
        "Ja",
        "Nee",
        "Weet ik niet"
      ]
    },
    "Vergunning al beschikbaar": {
      "list": [
        "Ja",
        "Nee"
      ]
    },
    "Bouwtekening beschikbaar": {
      "list": [
        "Ja",
        "Nee"
      ]
    },
    "Materiaal al aanwezig": {
      "list": [
        "Ja",
        "Nee",
        "Gedeeltelijk"
      ]
    },
    "Uitvoerdatum": {
      "list": [
        "Binnen 1 maand",
        "Over 1 tot 3 maanden",
        "Over 3 tot 6 maanden",
        "Geen voorkeur"
      ]
    },
    "Wilt u fotos toevoegen?": {
      "list": [
        "Nee",
        "Ja"
      ]
    },
    "Bent u van plan dit project te laten uitvoeren?": {
      "list": [
        "Ja, na het vergelijken van de vakmensen",
        "Ik weet het nog niet, afhankelijk van de informatie",
        "Nee, ik ben alleen op zoek naar informatie"
      ]
    }
  },
  "Keuken": {
    "Type opdracht": {
      "list": [
        "Keuken verbouwen"
      ]
    },
    "Uitvoerdatum": {
      "list": [
        "Binnen 1 maand",
        "Over 1 tot 3 maanden",
        "Over 3 tot 6 maanden",
        "Geen voorkeur"
      ]
    },
    "Bent u van plan dit project te laten uitvoeren?": {
      "list": [
        "Ja, na het vergelijken van de vakmensen",
        "Ik weet het nog niet, afhankelijk van de informatie",
        "Nee, ik ben alleen op zoek naar informatie"
      ]
    }
  },
  "Badkamer en toilet": {
    "Type opdracht": {
      "list": [
        "Badkamer plaatsen of verbouwen",
        "Toilet verbouwen"
      ]
    },
    "Soort aanvraag": {
      "list": [
        "Particulier",
        "Zakelijk"
      ],
      "inputbox": 0
    },
    "Uitvoerdatum": {
      "date": "13/06/1995"
    },
    "Wilt u fots toevoegen?": {
      "list": [
        "Nee",
        "Ja"
      ]
    },
    "Bent u van plan dit project te laten uitvoeren?": {
      "list": [
        "Ja, na het vergelijken van de vakmensen",
        "Ik weet het nog niet, afhankelijk van de informatie",
        "Nee, ik ben alleen op zoek naar informatie"
      ]
    }
  }
}
}


const ThirdStep = () => {
    const [platisActive, setPlatIsActive] = useState(false);
    const [doel, setDoel] = useState("Zonnepanelen kopen");
    const [hellingshoek, setHellingshoek] = useState("Plat dak");
    const [ligging, setLigging] = useState("Analyseer de beste ligging voor mij");
    const [geschat, setGeschat] = useState("Zeer laag (2 personen, tot 2.000 kWh)");
    const [zonnepanelen, setZonnepanelen] = useState("Ik weet het nog niet, afhankelijk van advies & informatie");
    const {formdata, setFormdata} = useContext(multiStepContext)
    const [selectedValues, setSelectedValues] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('');

    const navigate = useNavigate()
    const handleThirdtStep = (e)=>{
      e.preventDefault()
         setFormdata({...formdata,  doel:doel, hellingshoek:hellingshoek, ligging:ligging, geschat:geschat,zonnepanelen:zonnepanelen,  category: selectedCategory })
         navigate('/last-step')
    }
    const handleChange = (category) => {
      setSelectedCategory(category);
    };
      const Categories=MyData.catgories;
      // console.log(selectedCategory)

      const handleRadioChange = (key, value) => {
        setSelectedValues(prevState => ({
          ...prevState,
          [key]: value 
        }));
      };
    
   
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
        <h3 className="text-center mt-2 mb-4 card-title">Wat zijn de details van uw project?</h3>
        <div className="container overflow-hidden">
            <div className="sub-title">
            <h4 className="mt-2 mb-2">Jouw situatie</h4>
            <hr className='mt-4 mb-2' />
            </div>
            <div className="row g-4">
                <div className="col-md-8 col-12">
                <form onSubmit={handleThirdtStep} className="p-4 border rounded">
      <div>
        <h2 className="text-xl font-semibold">Category:</h2>
      </div>
      {Object.keys(Categories).map((category, index) => (
        <div key={index} className="flex items-center justify-between p-2 border-b">
          <div className="flex items-center">
            <input
              type='radio'
               id={`radio-${index}`}
               name="category"
               className="hidden"
               checked={selectedCategory === category}
               onChange={() => handleChange(category)}
            />
            <label htmlFor={`radio-${index}`} className="flex items-center cursor-pointer">
              <span
                className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${selectedCategory === category ? 'bg-green-500' : 'border-gray-300'}`}
              >
                {selectedCategory === category && <span className="text-white text-xs">&#10003;</span>}
              </span>
              <span className="ml-2">{category}</span>
            </label>
          </div>
          {selectedCategory === category && <span className="text-green-500 text-lg">&#10003;</span>}
        </div>
       
      ))};
    <div>
      {selectedCategory && Categories[selectedCategory] && Object.entries(Categories[selectedCategory]).map(([key, value]) => (
        <div key={key} className="flex items-center justify-between p-2 ">
          <div className='w-full'>
            <span className="font-semibold">{key}:</span> 
            {Array.isArray(value.list) ? ( 
             
           <ul >
           {value.list.map((item, index) => (
             <li key={index} className="flex items-center border-b py-2">
               <input
                 type="radio"
                 id={`${key}-${index}`}
                 name={key}
                 value={item}
                 className="hidden"
                 checked={selectedValues[key] === item}
                 onChange={() => handleRadioChange(key, item)}
               />
               <label htmlFor={`${key}-${index}`} className="flex items-center cursor-pointer">
                 <span
                   className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${selectedValues[key] === item ? 'bg-green-500' : 'border-gray-300'}`}
                 >
                   {selectedValues[key] === item && <span className="text-white text-xs">&#10003;</span>}
                 </span>
                 
                 <span className="ml-2">{item}</span>
               </label>
               
             </li>
           ))
           }
         </ul>
            ) : typeof value === 'object' ? (
              
              Object.entries(value).map(([subKey, subValue]) => (
                <div key={subKey} className='w-full'>
                  <span className="font-semibold">{subKey}:</span>
                  {Array.isArray(subValue.list) ? ( 
                    <ul>
                    {subValue.list.map((subItem, index) => (
                      <li key={index} className="flex items-center border-b py-2">
                        <input
                          type="radio"
                          id={`${subKey}-${index}`}
                          name={subKey}
                          value={subItem}
                          className="hidden"
                          checked={selectedValues[subKey] === subItem}
                          onChange={() => handleRadioChange(subKey, subItem)}
                        />
                        <label htmlFor={`${subKey}-${index}`} className="flex items-center cursor-pointer">
                          <span
                            className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${selectedValues[subKey] === subItem ? 'bg-green-500' : 'border-gray-300'}`}
                          >
                            {selectedValues[subKey] === subItem && <span className="text-white text-xs">&#10003;</span>}
                          </span>
                          <span className="ml-2">{subItem}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                  ) : (
                    
                    <span>{subValue}</span>
                  )}
                </div>
              ))
            ) : (
              <span>{value}</span>
            )}
          </div>
        </div>
      ))}
    </div>
    <div>
      <h3 className='text-xl font-semibold mt-4 '>Projectomschrijving</h3>
      <p className='text-gray-600 text-sm'>Beschrijf in het kort uw project en ontvang specifiekere offertes</p>
      <textarea id="w3review" name="w3review" rows="5" cols="50" className='w-full border-2 border-gray-300 ronded-full' placeholder='Bijvoorbeeld ruimte(s) waar werkzaamheden plaats vinden, staat van onderhoud en oppervlakte'>At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea>
    </div>


      <button type="submit" className=" w-full flex  justify-center items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 mt-4 font-semibold gap-3">
        Ga naar de laatste stap <span className='font-bold'><MdArrowForward />
        </span>
      </button>
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

export default ThirdStep;