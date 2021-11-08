import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class HomeView {
  init(){    
    console.log('HomeView.init')
    document.title = 'Home'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  render(){
    const template = html`
      <va-app-header title="Home" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      <div class="page-content">
        <h1 class="typo">Hey ${Auth.currentUser.firstName}</h1>

        <h3 class="typo">Button example: </h3>
        <sl-button class="anim-in" @click=${() => gotoRoute('/profile')}>View Profile</sl-button>
        <p>&nbsp;</p>
        <h3>Link example</h3>
        <a href="/profile" @click=${anchorRoute}>View Profile</a>

        <style>

        .typo {
          color: #000;
        }

        </style>
        
      </div>
     
    `
    render(template, App.rootEl)
  }
}

export default new HomeView()