import emailjs from '@emailjs/browser';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { multiStepContext } from '../../../context/FormDataProvider';
import avatar from '../../../images/avatar.jpeg';
import logo from '../../../images/logo.png';
import Footer from '../../../share/Footer/Footer';
import './LastStep.css';
const LastStep = () => {
  const [voornaamisValid, setVoornaamIsValid] = useState(true);
  const [achternaamisValid, setAchternaamIsValid] = useState(true);
  const [emailadresisValid, setEmailadresIsValid] = useState(true);
  const [telefoonnummerisValid, setTelefoonnummerIsValid] = useState(true);
  const [voornaam, setVoornaam] = useState('');
  const [achternaam, setAchternaam] = useState('');
  const [emailadres, setEmailadres] = useState('');
  const [telefoonnummer, setTelefoonnummer] = useState('');
  const navigate = useNavigate();
    const { formdata, setFormdata } = useContext(multiStepContext)
    console.log(formdata)
    const sendEmail = (e) => {
      e.preventDefault();
      const errors = [
        voornaamisValid,
        achternaamisValid,
        emailadresisValid,
        telefoonnummerisValid
      ]
      if(!errors.includes(true)){
        setFormdata({...formdata, voornaam:voornaam, achternaam:achternaam, emailadres:emailadres, telefoonnummer:telefoonnummer })
      }else{
        Swal.fire({
            title: "Error",
            text:'please fill up all input field',
            icon: "error",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok",
          })
      }
    
      emailjs.send(
        'service_gn520zw', 
        'template_y5wfq9d',
        {
          doel: formdata.doel,
          geschat: formdata.geschat,
          ligging: formdata.ligging,
          achternaam: formdata.achternaam,
          emailadres: formdata.emailadres,
          hellingshoek: formdata.hellingshoek,
          huisnummer: formdata.huisnummer,
          postcode: formdata.postcode,
          straatnaam: formdata.straatnaam,
          telefoonnummer: formdata.telefoonnummer,
          voornaam: formdata.voornaam,
          woonplaats: formdata.woonplaats,
          zonnepanelen: formdata.zonnepanelen
        },
        'Z8UvKU9u_n1HNlFV5'
      )
      Swal.fire({
        title: "Successful",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Thank you",
      })
      .then((response) => {
       if(response){
       
        //  navigate('/')
        //  window.location.reload()
      }
        console.log('SUCCESS!', response.status, response.text);
        
      }, (err) => {
        console.log('FAILED...', err);
      });
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (
    <div>
        <div className="bg-image-last-page">
        <div className="top-logo d-flex justify-content-center">
        <img src={logo} alt=""  height='100' width='100' />
        
        </div>
         <div className="d-flex justify-content-center overlap">
         <div className="last-step">
         <div class="card" style={{width:'55rem'}}>
        <div class="card-body">
            <h3 className="text-center mt-2 mb-4 card-title">Doe de gratis opbrengstscan</h3>
            <div className="container">
                <div className="sub-title">
                    <h3>Bijna klaar!</h3>
                </div>
               <div className="row">
                <div className="col-md-8 col-12">
            <form class="row g-3" onSubmit={sendEmail}>
              <div class="col-md-6">
                <label for="validationCustom03" class="form-label input-label-f">Voornaam*</label>
                <input type="text" class={voornaamisValid ? "form-control"  : "form-control invalid invalid-placeholder"} id="validationCustom03" required placeholder='Je voornaam' name='straatnaam'
               onChange={(e)=> setVoornaam(e.target.value)}
               onBlur={(e)=>{
                 if (e.target.value.trim() === "") {
                   setVoornaamIsValid(false);
                 } else {
                   setVoornaamIsValid(true);
                 }
               }}
                />
               {!voornaamisValid && voornaam.length <= 0 ? <p className="error">Dit veld is verplicht</p> : ''}
              </div>
              <div class="col-md-6">
              <label for="validationCustom03" class="form-label input-label-f">Achternaam*</label>
                <input type="text" class={achternaamisValid ? "form-control"  : "form-control invalid invalid-placeholder"} id="validationCustom03" required placeholder='Je achternaam'
                 onChange={(e)=> setAchternaam(e.target.value)}
                 onBlur={(e)=>{
                  if (e.target.value.trim() === "") {
                    setAchternaamIsValid(false);
                  } else {
                    setAchternaamIsValid(true);
                  }
                }}
                />
                {!achternaamisValid && achternaam.length <= 0 ? <div className="error">Dit veld is verplicht</div> : ""}
              </div>
              <div class="col-md-12">
              <label for="validationCustom03" class="form-label input-label-f">E-mailadres*</label>
               <input type="email" class={emailadresisValid ? "form-control"  : "form-control invalid invalid-placeholder"} id="validationCustom03" required placeholder='Hier sturen wij de scan heen'
                onChange={(e)=> {setEmailadres(e.target.value)
                  if (e.target.value.length !== emailRegex.test(emailadres)) {
                    setEmailadresIsValid(false);
                  } else {
                    setEmailadresIsValid(true);
                  }
                }}
                onBlur={(e)=>{
                 if (e.target.value.length !== emailRegex.test(emailadres)) {
                   setEmailadresIsValid(false);
                 } else {
                   setEmailadresIsValid(true);
                 }
               }}
                />
                 {!emailadresisValid &&  !emailRegex.test(emailadres) ? <div className="error">Dit veld is verplicht</div> : ''}
              </div>
              <div class="col-md-12">
              <label for="validationCustom03" class="form-label input-label-f">Telefoonnummer*</label>
                 <input type="text" class={telefoonnummerisValid ? "form-control"  : "form-control invalid invalid-placeholder"} id="validationCustom03" required  placeholder='Voor vragen of onduidelijkheden'
                onChange={(e)=> {setTelefoonnummer(e.target.value)
                  if (e.target.value.length >= 10) {
                    setTelefoonnummerIsValid(false);
                    
                  } else {
                    setTelefoonnummerIsValid(true);
                  }
                }}
                onBlur={(e)=>{
                 if (e.target.value.length >= 10) {
                   setTelefoonnummerIsValid(false);
                 } else {
                   setTelefoonnummerIsValid(true);
                 }
               }}
                />
                {telefoonnummerisValid  ? <div className="error">Dit veld is verplicht</div> : ''}
              </div>
              <p className='terms'>Ik ga akkoord met de <a href="https://www.sunrecup.be/algemenevoorwaarden/" style={{color:'#9FDE00', textDecoration:'none'}}>gebruikersvoorwaarden.</a></p>
              <div class="col-12 mb-2">
                <><button class="start-btn last-btn" type="submit">Stuur in en ontvang advies</button></>
              </div>
            </form>
                </div>
                <div className="col-md-4 col-12">
                    <div className='text-center'>
                        <p className='last-step-sidebar__title'>Gratis en vrijblijvend!</p>
                        <p className='last-step-sidebar__text'>Klanten beoordelen de gratis opbrengstscan met 5 sterren</p>
                        <div className="ratings">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                        <p className='last-step-sidebar__quote'>" Vriendelijk, behulpzaam
                        Wordt goed geluisterd naar wens van klant
                        Heel jong ploeg maar ze werken gelijk dat ze al jaren ervaring hebben "</p>
                        <div className='d-flex justify-content-center'>
                        <div className="profile">
                          <div className="avatar">
                          <img src={avatar} alt="" height='60' width='60' />
                          </div>
                        </div>
                        </div>
                        <h5 className='profile-name'>Abdenor Lahiq</h5>
                        <p className='profile-comment'>Onafhankelijk adviseur zonnepanelen.</p>
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

export default LastStep