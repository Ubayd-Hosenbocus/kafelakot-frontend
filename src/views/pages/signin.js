import App from './../../App'
import {html, render } from 'lit-html'
import {anchorRoute, gotoRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class SignInView {
  init(){
    console.log('SignInView.init')
    document.title = 'Sign In'
    this.render()
    Utils.pageIntroAnim()
    var rows = document.querySelectorAll('.row');

    rows.forEach((row) => {
      let colOpen = row.querySelector(".show-col"),
      colClose = row.querySelector(".close-col");
      
      colOpen.addEventListener("click", function () {
        row.classList.add("box-active");
      });
    
      colClose.addEventListener("click", function () {
        row.classList.remove("box-active");
      });
    });
    
  }

  

  signInSubmitHandler(e){
    e.preventDefault()
    const formData = e.detail.formData
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '') 
    
    
    
    // sign in using Auth    
    Auth.signIn(formData, () => {
      submitBtn.removeAttribute('loading')
    })


   
  }

  render(){    
    const template = html` 
    

    <img src="./images/background8.jpg" alt="background" class="back">

    

    <style>

    .back {
      width: auto;
      height: 125%;
    }

    </style>

    
    

      <div class="page-content page-centered">

      

      <div class="row">
      <div class="col p-2">
        <h2 class="typo">Kafe Lakot Website...</h2>
        <p>Hello. This website is about a coffee products line. It makes use of geolocation
        to track down the nearby stores whereby you can present your online receipt and 
        collect your purchased coffee product through the website itself. For security purposes,
        to view the website, create an account or if you already have an account, please sign in.
        Thank you.</p>
        <sl-button type="warning" class="show-col">Sign In</sl-button>
      </div>
      <div class="col">
        <img src="./images/signin.jpg" />
      </div>
      <div class="col p-2">
      <h2 class="typo">...Sign In</h2>
      
      <div class="signinup-box">
            
      <sl-form class="form-signup dark-theme" @sl-submit=${this.signInSubmitHandler}>          
        <div class="input-group">
          <sl-input class="length" name="email" type="email" placeholder="Email" required></sl-input>
        </div>
        <div class="input-group">
          <sl-input class="length" name="password" type="password" placeholder="Password" required toggle-password></sl-input>
        </div>
        <sl-button class="submit-btn" type="primary" submit style="width: 100%;">Sign In</sl-button>
      </sl-form>
      <p>No Account? <a href="/signup" @click=${anchorRoute}>Sign Up</a></p>
    </div>
        <sl-button type="warning" class="close-col">Close</sl-button>
      </div>
      </div>
      
      
      </div>

    

      <style>

      .length{

        width:100%;

      }



      .typo{
      color:#000;
      font-family: 'Abril Fatface', cursive;
      
      }
      
      .row {
      
      display: flex;
      flex-wrap: wrap;
      
      overflow: hidden;
      padding: 2rem 1rem;
      max-width: auto;
      background: # #f1f9ff;
      
      
      }
      .row .col {
      
      display: flex;
      align-items: flex-start;
      
      justify-content: center;
      
      flex-direction: column;
      
      flex: 0 0 calc(100% - 2rem);
      max-width: calc(100% - 2rem);
      
      margin: 0 1rem;
      background:  #fff;
      
      transition: transform 0.5s ease-in-out;
      }
      
      .row .col.p-2 {
      padding: 2rem;
      color:#000;
      display: flex;
  align-items: center;
  justify-content: center;
      
      }
      .row .col img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      
      }
      .row .col button {
      display: inline-block;
      padding: 1rem;
      background: #f8a755;
      border: none;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      font-weight: 700;
      color: #fff;
      }
      
      
      @media (min-width: 768px) {
      .row {
        flex-wrap: nowrap;
        
      }
      .row .col {
        
        flex: 0 0 calc(50% - 2rem);
        max-width: calc(50% - 2rem);
      }
      .row.box-active .col {
        transform: translateX(calc(-100% - 2rem));
        
      }
      .row.box-active .col:last-of-type {
        transform: translateX(calc(-100% - 2rem));
      }
      .row:nth-child(even) .col {
        transform: translateX(calc(-100% - 2rem));
      }
      .row:nth-child(even) .col:nth-child(1) {
        order: 3;
      }
      .row:nth-child(even) .col:nth-child(2) {
        order: 2;
      }
      .row:nth-child(even) .col:last-of-type {
        transform: translateX(calc(-100% - 2rem));
        order: 1;
      }
      .row:nth-child(even).box-active .col {
        transform: translateX(0);
      }
      .row:nth-child(even).box-active .col:last-of-type {
        transform: translateX(0);
      }
      }
      
      @media (max-width: 767.98px) {
      .row {
        height: calc(600px + 6rem);
      }
      .row .col {
        margin-bottom: 2rem;
        height: 300px;
      }
      .row.box-active .col {
        transform: translateY(calc(-100% - 2rem));
      }
      }
      
      
      </style>

    `
    render(template, App.rootEl)    
  }
}

export default new SignInView()