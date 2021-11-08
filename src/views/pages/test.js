import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class TestView {
  init(){
    document.title = 'Test'    
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

  

  render(){


    const template = html`
      <va-app-header title="Test" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
       
      <div class="page-content">

     

      <div class="iframe-container">
      <iframe width="560" height="315" src="./video/kafe.mp4" frameborder="0" allow="autoplay;encrypted-media" allowfullscreen>
      </iframe>

      <style>

      .iframe-container{
        position: relative;
        width: 100%;
        padding-bottom: 56.25%;
        height: 0;
      }
      .iframe-container iframe{
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      </style>
    




    </div>
      
    <h2 class="product2" id="product2">OUR PRODUCTS</h2>


      <!-- Products Part -->
      
      <div class="blank1"></div>


  <div class="blank3"</div>

  <div class="container">

    <div class="content">

        <div class="content-overlay"></div>
        <img class="content-image" src="./images/pro1.jpg" alt="product 1"></img>
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">Capsules</h3>
          <p class="content-text">Discover our Collection</p>
        </div>
      </a>
    </div>
  </div>

  <div class="container">
    <div class="content">

        <div class="content-overlay"></div>
        <img class="content-image" src="./images/pro2.jpg" alt="product 2"></img>
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">Cold Brew</h3>
          <p class="content-text">Discover our Collection</p>
        </div>
      </a>
    </div>
  </div>

  <div class="container">
    <div class="content">

        <div class="content-overlay"></div>
        <img class="content-image" src="./images/pro3.jpg" alt="product 3"></img>
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">Ground Coffee</h3>
          <p class="content-text">Discover our Collection</p>
        </div>
      </a>
    </div>


    <div class="blank1"></div>




      </div>  
      
      <style>

      .product2{
        padding-top: 50px;
        text-align: center;
        color: #000;
      }

      .container{
        padding: 1em 0;
        float: left;
        width: 50%;
      }
      @media screen and (max-width: 640px){
        .container{
          display: block;
          width: 100%;
        }
      }
      
      @media screen and (min-width: 640px){
        .container{
          width: 33.33333%;
        }
      }
      
      .container .title{
        color: #1a1a1a;
        text-align: center;
        margin-bottom: 10px;
      }
      
      .content {
        position: relative;
        width: 90%;
        max-width: 400px;
        margin: auto;
        overflow: hidden;
      }
      
      .content .content-overlay {
        background: rgba(0,0,0,0.7);
        position: absolute;
        height: 99%;
        width: 100%;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        opacity: 0;
        -webkit-transition: all 0.4s ease-in-out 0s;
        -moz-transition: all 0.4s ease-in-out 0s;
        transition: all 0.4s ease-in-out 0s;
      }
      
      .content:hover .content-overlay{
        opacity: 1;
      }
      
      .content-image{
        width: 100%;
      }
      
      .content-details {
        position: absolute;
        text-align: center;
        padding-left: 1em;
        padding-right: 1em;
        width: 100%;
        top: 50%;
        left: 50%;
        opacity: 0;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        -webkit-transition: all 0.3s ease-in-out 0s;
        -moz-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
      }
      
      .content:hover .content-details{
        top: 50%;
        left: 50%;
        opacity: 1;
      }
      
      .content-details h3{
        color: #fff;
        font-weight: 500;
        letter-spacing: 0.15em;
        margin-bottom: 0.5em;
        text-transform: uppercase;
      }
      
      .content-details p{
        color: #fff;
        font-size: 0.8em;
      }
      </style>

      


      <!-- Sliding boxes Part -->
      

  
      <div class="row">
	<div class="col p-2">
		<h2 class="typo">OUR TEAM</h2>
		<p>Our Team are local strong women who are happy to bring the best in our coffee. They help collect the coffee beans in an ethical manner.
    We are a production which helps in empowering women to work.</p>
		<button type="button" class="show-col">Read More</button>
	</div>
	<div class="col">
		<img src="./images/photo1.jpg" />
	</div>
	<div class="col p-2">
		<p>Kafe Lakot was the first of many local women's choice to work for, as they saw it as an opportunity to bring about a better change to their
    livelihood. The women at Kafe Lakot are our key source to a great coffee.</p>
		<button type="button" class="close-col">Close</button>
	</div>
</div>

<div class="row">
	<div class="col p-2">
		<h2 class="typo">OUR PROCESS</h2>
		<p>Our process is an artisanal process. We hand roast our coffee beans and let them dry in the basking sun of Mauritius. This helps
    accentuates the flavour of the tropical climate which is infuse in our coffee.</p>
		<button type="button" class="show-col">Read More</button>
	</div>
	<div class="col">
		<img src="./images/photo2.jpg" />
	</div>
	<div class="col p-2">
		<p>Our roastry is one of the traditional and classic ones whereby the team helps in distinguishing the very best quality beans. The coffee
    that becomes the final product transcends the tongue palette in delivering exquisite taste.</p>
		<button type="button" class="close-col">Close</button>
	</div>
</div>


<div class="row">
	<div class="col p-2">
		<h2 class="typo">OUR LOCATION</h2>
		<p>Our disriubution center is found at Phoenix. We are proud partners of Phoenix Bevarages. We can be found all across Mauritius popular 'Lakot'.</p>
		<button type="button" class="show-col">Read More</button>
	</div>
	<div class="col">
		<img src="./images/location.png" />
	</div>
	<div class="col p-2">
		<p>Find the store near you and grab your 'Kafe'.&#128521;</p>
    <sl-button href="https://kafe-lakot-stores-locator.netlify.app/">Kafe Lakot Stores Locator</sl-button>
    <p></p>
		<button type="button" class="close-col">Close</button>
	</div>
  
</div>


<div class="blank1"></div>


<style>
.typo{
  color:#000;
  
}

.row {
  
  display: flex;
  flex-wrap: wrap;
  
  overflow: hidden;
  padding: 2rem 1rem;
  max-width: auto;
  background: #6f4e37;
  
  
}
.row .col {
  
  display: flex;
  align-items: flex-start;
  
  justify-content: center;
  
  flex-direction: column;
  
  flex: 0 0 calc(100% - 2rem);
  max-width: calc(100% - 2rem);
  
  margin: 0 1rem;
  background: #fff;
 
  transition: transform 0.5s ease-in-out;
}

.row .col.p-2 {
  padding: 2rem;
  color:#000;
  
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

<!-- Environmental Part -->
      
      <div class="blank1"></div>

      <div class="button" style="margin:0 auto;text-align:center">

    <div style="margin-left:auto;margin-right:auto;text-align:center">
    
    <h2 class="typo2">We are a proud local brand which promotes environmentally and sustainable coffee consumption.
    <h2>

        
        
        </div>

      </div>

      

  <div class="container2">
    <div class="content2">


        <img class="content-image" src="./images/mad.png" alt="icon">
        <div class="content-details fadeIn-bottom">
        </div>
      </a>
    </div>
  </div>

  <div class="container2">

    <div class="content2">


        <img class="content-image" src="./images/mad2.png" alt="icon">
        <div class="content-details fadeIn-bottom">
        </div>
      </a>
    </div>
  </div>

  <div class="container2">

    <div class="content2">


        <img class="content-image" src="./images/mad3.png" alt="icon">
        <div class="content-details fadeIn-bottom">
        </div>
      </a>
    </div>
  </div>

  

    <style>

    .blank1{
      padding-top: 25px;
    }

    .container2{
      padding: 1em 0;
      float: left;
      width: 50%;
    }
    @media screen and (max-width: 640px){
      .container2{
        display: block;
        width: 100%;
      }
    }
    
    @media screen and (min-width: 640px){
      .container2{
        width: 33.33333%;
      }
    }
    
    .container2 .title{
      color: #1a1a1a;
      text-align: center;
      margin-bottom: 10px;
    }
    
    .content2 {
      position: relative;
      width: 90%;
      max-width: 400px;
      margin: auto;
      overflow: hidden;
    }


    .typo2{
      color:#000;
      
    }
    </style>


    <!-- Footer Part -->
      
    
    <div class="hero">
  

      <div class="social-links">
        <a href=""><i class="fab fa-facebook-f"></i></a>
        <a href=""><i class="fab fa-instagram"></i></a>
        <a href=""><i class="fab fa-twitter"></i></a>
        <a href=""><i class="fab fa-youtube"></i></a>
      </div>
      <p class="typo3">Copyright &copy; 2021. All Rights Reserved by Kafe Lakot.
    </p>
    </div>
  
    
   
      </div>

   <style>

   .typo3{

    color:#000;

   }

   .hero {
    width: 100%;
    height: 15vh;
    background: #f1f9ff;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  
  
  .social-links {
    display: flex;
  }
  
  .social-links a {
    width: 40px;
    height: 40px;
    text-align: center;
    text-decoration: none;
    color: #000;
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.05);
    margin: 0 30px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    transition: transform 0.5s;
  }
  
  .social-links a .fab {
    font-size: 20px;
    line-height: 40px;
    position: relative;
    z-index: 10;
    transition: color 0.5s;
  }
  
  .social-links a::after {
    content: '';
    width: 100%;
    height: 100%;
    top: -90px;
    left: 0;
    background: #000;
    background: linear-gradient(-45deg, #ed1c94, #ffec17);
    position: absolute;
    transition: 0.5s;
  }
  
  .social-links a:hover::after {
    top: 0;
  }
  
  .social-links a:hover .fab {
    color: #fff;
  }
  
  .social-links a:hover {
    transform: translateY(-10px);
  }

   </style>
       
    `
  
    render(template, App.rootEl)
  }
}


export default new TestView()