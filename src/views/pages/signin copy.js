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

  render(){    
    const template = html` 
    

    <img src="./images/background1.jpg" alt="background" class="back">

    <style>

    .back {
      width: auto;
      height: 200%;
    }

    </style>
    

      <div class="page-content page-centered">
        <div class="signinup-box">
          <img class="signinup-logo" src="/images/logowsh.png">          
          <sl-form class="form-signup dark-theme" @sl-submit=${this.signInSubmitHandler}>          
            <div class="input-group">
              <sl-input name="email" type="email" placeholder="Email" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input name="password" type="password" placeholder="Password" required toggle-password></sl-input>
            </div>
            <sl-button class="submit-btn" type="primary" submit style="width: 100%;">Sign In</sl-button>
          </sl-form>
          <p>No Account? <a href="/signup" @click=${anchorRoute}>Sign Up</a></p>
        </div>
      </div>

    



    `
    render(template, App.rootEl)    
  }
}

export default new SignInView()