import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import moment from 'moment'

class ProfileView {
  init(){
    console.log('ProfileView.init')
    document.title = 'Profile'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>

      <img src="./images/background4.jpg" alt="background" class="back">

    <style>

    .back {
      width: auto;
      height: 125%;
    }

    </style>


      <div class="page-content calign" id="prof">   
           
        ${Auth.currentUser && Auth.currentUser.avatar ? html`
          <sl-avatar style="--size: 200px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
        `:html`
        <sl-avatar style="--size: 200px; margin-bottom: 1em;"></sl-avatar>
        `}
        <h2 class="typo">${Auth.currentUser.firstName} ${Auth.currentUser.lastName}</h2>
        <p class="typo">${Auth.currentUser.email}</p>
        
        <p class="typo">Updated: ${moment(Auth.currentUser.updatedAt).format('MMMM Do YYYY, @ h:mm a')}</p>

        <sl-button @click=${()=> gotoRoute('/editProfile')}>Edit Profile</sl-button>

        
      </div> 

      <style>
      .typo {
        color: #fff;
      }

      </style>

      

    `
    render(template, App.rootEl)
  }
}


export default new ProfileView()