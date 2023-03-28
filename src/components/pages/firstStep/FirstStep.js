import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { multiStepContext } from '../../../context/FormDataProvider'
import logo from '../../../images/logo.png'
import Footer from '../../../share/Footer/Footer'
import './FirstStep.css'
const FirstStep = () => {
  const { formdata, setFormdata } = useContext(multiStepContext)
  const [straatnaamisValid, setStraatnaamIsValid] = useState(true);
  const [huisnummerisValid, setHuisnummerIsValid] = useState(true);
  const [postcodeisValid, setPostcodeIsValid] = useState(true);
  const [woonplaatsisValid, setWoonplaatsIsValid] = useState(true);
  const [straatnaam, setStraatnaam] = useState('');
  const [huisnummer, setHuisnummer] = useState('');
  const [postcode, setPostcode] = useState('');
  const [woonplaats, setWoonplaats] = useState('');
  const navigate = useNavigate();

      const handleFirstStep = (e)=>{
        e.preventDefault()
           setFormdata({...formdata,  straatnaam:straatnaam, huisnummer:huisnummer, postcode:postcode, woonplaats:woonplaats  })
           navigate('/step2')
      }
  return (
    <div>
        <div className="bg-image">
         <div className="top-logo d-flex justify-content-center">
        <img src={logo} alt=""  height='100' width='100' />
        
        </div>
         <div className="d-flex justify-content-center overlap">
         <div className="step-one">
         <div class="card" style={{width:'50rem'}}>
        <div class="card-body">
            <h3 className="text-center mt-2 mb-4 card-title">Doe de gratis opbrengstscan</h3>
            <div className="container">
              <form class="row g-3 needs-validation" novalidate onSubmit={handleFirstStep}>
              <div class="col-md-8">
                <label for="validationCustom03" class="form-label input-label-f">Straatnaam</label>
               <div className="has-validation">
               <input type="text" class={straatnaamisValid ? "form-control"  : "form-control invalid invalid-placeholder"} id="validationCustom03" required placeholder='Straatnaam' name='straatnaam'
                onBlur={(e)=>{
                  if (e.target.value.trim() === "") {
                    setStraatnaamIsValid(false);
                  } else {
                    setStraatnaamIsValid(true);
                  }
                }}
                value={formdata['straatnaam']}
                onChange={(e)=> setStraatnaam(e.target.value)}
                />
               </div>
                {!straatnaamisValid && straatnaam.length<=0 ? <div className="error">Dit veld is verplicht</div> : ''}
              </div>
              <div class="col-md-4">
              <label for="validationCustom03" class="form-label input-label-f">Huisnummer</label>
                <input type="text" class={huisnummerisValid ? "form-control"  : "form-control invalid invalid-placeholder"} id="validationCustom03" required placeholder='123-a'
                name='huisnummer'
                onBlur={(e)=>{
                  if (e.target.value.trim() === "") {
                    setHuisnummerIsValid(false);
                  } else {
                    setHuisnummerIsValid(true);
                  }
                }}
                value={formdata["huisnummer"]}
                onChange={(e)=> setHuisnummer(e.target.value)}
                />
                {!huisnummerisValid && huisnummer.length <= 0 ? <div className="error">Dit veld is verplicht</div> : ''}
              </div>
              <div class="col-md-4">
              <label for="validationCustom03" class="form-label input-label-f">Postcode</label>
                <input type="text" class={postcodeisValid ? "form-control"  : "form-control invalid invalid-placeholder"} id="validationCustom03" required placeholder='1234'
                name='postcode'
                onBlur={(e)=>{
                  if (e.target.value.trim() === "") {
                    setPostcodeIsValid(false);
                  } else {
                    setPostcodeIsValid(true);
                  }
                }}
                value={formdata["postcode"]}
                onChange={(e)=> setPostcode(e.target.value)}
                />
               {!postcodeisValid && postcode.length <= 0 ? <div className="error">Dit veld is verplicht</div> : ''}
              </div>
              <div class="col-md-8">
              <label for="validationCustom03" class="form-label input-label-f">Woonplaats</label>
                <input type="text" class={woonplaatsisValid ? "form-control"  : "form-control invalid invalid-placeholder"} id="validationCustom03" required placeholder='woonplaats'
                name='woonplaats'
                onBlur={(e)=>{
                  if (e.target.value.trim() === "") {
                    setWoonplaatsIsValid(false);
                  } else {
                    setWoonplaatsIsValid(true);
                  }
                }}
                value={formdata["woonplaats"]}
                onChange={(e)=> setWoonplaats(e.target.value)}
                />
               {!woonplaatsisValid && woonplaats.length <= 0 ? <div className="error">Dit veld is verplicht</div> : ''}
              </div>
              <div class="col-12 mt- mb-2">
                <button class="start-btn" type="submit">Start scan</button>
              </div>
            </form>
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
export default FirstStep