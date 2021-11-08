import App from './../../App'
import {html, render } from 'lit-html'

class FourOFourView{
  init(){
    console.log('FourOFourView.init')    
    document.title = '404 File not found'    
    this.render()
  }

  render(){
    const template = html`    
      <div class="calign">
        <h1 class="typo">Opps!</h1>
        <p class="typo">Sorry, we couldn't find that.</p>
      </div>
      <style>
      .typo {
        color: #000;
      }

      </style>
    `
    render(template, App.rootEl)
  }
}

export default new FourOFourView()