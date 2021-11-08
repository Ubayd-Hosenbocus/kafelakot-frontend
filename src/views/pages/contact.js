import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class ContactView {
  init(){
    document.title = 'Contact Us'    
    this.render()    
    Utils.pageIntroAnim()
    const form = document.querySelector('.input-validation-type');
    form.addEventListener('sl-submit', () => alert('Message received! Refresh page for new submission.'));
  }

  render(){
    
    const template = html`
      <va-app-header title="Contact Us" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      
      
      <img src="./images/background2.jpg" alt="background" class="back">

    <style>

    

    </style>


      <div class="page-content page-centered">      
      <div class="container3">  
      <form id="contact" action="" method="post">
        <h2>Kafe Lakot Contact Form</h2>
        <p class="typo"><b>Leave us your message. Thanks!</b></p>
       <br>

        <sl-form class="input-validation-type">

        <sl-input type="name" label="Name" placeholder="John Smith" required></sl-input>
        <br>

        <sl-input type="phone" label="Number" placeholder="+230 12345678" required></sl-input>
        <br>
  
        <sl-input type="email" label="Email" placeholder="you@example.com" required></sl-input>
        <br>

        <sl-textarea name="message" label="Message" placeholder="Write your message..."></sl-textarea>
        <br>
  
  <sl-button  class="length" type="primary" submit>Submit</sl-button>
</sl-form>
       
      </form>
      </div>
      
      
        
      




<style>

.length{
  width:100%;
}


.input-validation-type{

  color: #000;

}

.typo{
  color: #000;
  text-align:center;
}

.back{

 
  width:auto;
  height:125%;

}


.container3 {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact textarea,
#contact button[type="submit"] {
  font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
}

#contact {
  background: #F9F9F9;
  padding: 25px;
  margin: 150px 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#contact h2 {
  font-family: 'Pineapple Demo', cursive;
  text-align:center;
  color: #000;
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
}

#contact h4 {
  color: #000;
  margin: 5px 0 15px;
  text-align:center;
  display: block;
  font-size: 13px;
  font-weight: 400;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #FFF;
  margin: 0 0 5px;
  padding: 10px;
}

#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

#contact textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

#contact button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #6f4e37;
  color: #FFF;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}

#contact button[type="submit"]:hover {
  background: #43A047;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

#contact button[type="submit"]:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

.copyright {
  text-align: center;
}

#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #aaa;
}

::-webkit-input-placeholder {
  color: #888;
}

:-moz-placeholder {
  color: #888;
}

::-moz-placeholder {
  color: #888;
}

:-ms-input-placeholder {
  color: #888;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

</style>
      
</div>


        
      </div>      

      
    `
    render(template, App.rootEl)
  }
}


export default new ContactView()