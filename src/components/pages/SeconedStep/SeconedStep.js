import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { multiStepContext } from '../../../context/FormDataProvider';
import logo from '../../../images/logo.png';
import Footer from '../../../share/Footer/Footer';
import './SeconedStep.css';
const SeconedStep = () => {
      const { formdata, setFormdata } = useContext(multiStepContext)
      console.log(formdata)
  return (
    <div>
    <div className="bg-image">
    <div className="top-logo d-flex justify-content-center">
        <img src={logo} alt=""  height='100' width='100' />
        
        </div>
     <div className="d-flex justify-content-center overlap">
     <div className="step-two">
     <div class="card" style={{width:'50rem'}}>
    <div class="card-body">
        <h3 className="text-center mt-2 mb-4 card-title">Ontvang gratis offertes van aannemers</h3>
        <div className="container">
            <div className="sub-title">
            <h4 className="mt-2 mb-2">Vul je gegevens aan</h4>
            <hr className='mt-4 mb-2' />
            </div>
            <label className='input-label-f'>Straatnaam*</label>
            <div class="input-group mb-3">
            <input type="text" class="form-control"  
            value={formdata["straatnaam"]}
            onChange={(e)=> setFormdata({...formdata, "straatnaam": e.target.value})}
            />
            </div>
            <label className='input-label-f'>Huisnummer*</label>
            <div class="input-group mb-3">
            <input type="text" class="form-control"
            value={formdata["huisnummer"]}
            onChange={(e)=> setFormdata({...formdata, "huisnummer": e.target.value})}
            />
            </div>
            <label className='input-label-f'>Postcode*</label>
            <div class="input-group mb-3">
            <input type="text" class="form-control"
            value={formdata["postcode"]}
            onChange={(e)=> setFormdata({...formdata, "postcode": e.target.value})}
            />
            </div>
            <label className='input-label-f'>Woonplaats*</label>
            <div class="input-group mb-3">
            <input type="text" class="form-control"
             value={formdata["woonplaats"]}
             onChange={(e)=> setFormdata({...formdata, "woonplaats": e.target.value})}
            />
            </div>
            <div class="d-grid mb-4">
           <Link to='/step3'><button class="start-btn btn-two" type="button">Doorgaan</button></Link>
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

export default SeconedStep