import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'




class LocationView {
  init(){
    document.title = 'Location'    
    this.render()    
    Utils.pageIntroAnim()
  }
  
  


  

  



  render(){
    
    
    const template = html`
    <va-app-header title="Location" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
       

    <img src="./images/background.jpg" alt="background" class="back">

    <style>

    .back {
      width: auto;
      height: 125%;
    }

    </style>
    

      <div class="page-content page-centered">
        <div class="signinup-box">
          <img class="signinup-logo" src="/images/location2.png">          
          <div class="button" style="margin:0 auto;text-align:center">

    <div style="margin-left:auto;margin-right:auto;text-align:center">
    
        
        <sl-button type="primary" href="https://kafe-lakot-stores-locator.netlify.app/">Kafe Lakot Stores Locator</sl-button>
        
        </div>

      </div>



      
        </div>

        


      </div>

      

  
    `
    render(template, App.rootEl)
  }
}



export default new LocationView()