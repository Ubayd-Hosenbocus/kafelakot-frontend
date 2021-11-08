import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class ProductsView {
  init(){
    document.title = 'Products'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){

    $(document).ready(function() {

      $('a.btn-gallery').on('click', function(event) {
        event.preventDefault();
        
        var gallery = $(this).attr('href');
        
        $(gallery).magnificPopup({
          delegate: 'a',
          type:'image',
          gallery: {
            enabled: true
          }
        }).magnificPopup('open');
      });
      
    });

    const template = html`
      <va-app-header title="Products" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
      <h2 class="product2" id="product2">Cold Brew Collection</h2>


      <!-- Cold Brew Part -->
      
      <div class="blank1"></div>

  
  <a href="#gallery-1" class="btn-gallery">
    
  
  <div class="container">
  
    <div class="content">
  
        <div class="content-overlay"></div>
        <img class="content-image" src="./images/allproducts/prod.jpg" alt="product 1"></img>
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">Saveur: Manz Ar Li</h3>
          <p class="content-text">Tap to view product</p>
        </div>
      </a>
    </div>

  </a>
    <p class="typo">Rs 250 per Pack  <sl-button type="primary"   href="/confirm" outline>Buy Now</sl-button></p>
  </div>

  <a href="#gallery-2" class="btn-gallery">
    
  
  <div class="container">
  
    <div class="content">
  
        <div class="content-overlay"></div>
        <img class="content-image" src="./images/allproducts/prod2.jpg" alt="product 2"></img>
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">Saveur: Kass Ene Poz</h3>
          <p class="content-text">Tap to view product</p>
        </div>
      </a>
    </div>

  </a>
  <p class="typo">Rs 250 per Pack  <sl-button type="primary"   href="/confirm" outline>Buy Now</sl-button></p>
  </div>

  <a href="#gallery-3" class="btn-gallery">
    
  
  <div class="container">
  
    <div class="content">
  
        <div class="content-overlay"></div>
        <img class="content-image" src="./images/allproducts/prod3.jpg" alt="product 3"></img>
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">Saveur: Kraz La Nuite</h3>
          <p class="content-text">Tap to view product</p>
        </div>
      </a>
    </div>

  </a>
  <p class="typo">Rs 250 per Pack  <sl-button type="primary"   href="/confirm" outline>Buy Now</sl-button></p>
  </div>
  

  <h2 class="product2" id="product2">Capsules Collection</h2>


      <!-- Capsule Part -->
      
      <div class="blank1"></div>

  
  <a href="#gallery-4" class="btn-gallery">
    
  
  <div class="container">
  
    <div class="content">
  
        <div class="content-overlay"></div>
        <img class="content-image" src="./images/allproducts/prod4.jpg" alt="product 4"></img>
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">Saveur: Manz Ar Li</h3>
          <p class="content-text">Tap to view product</p>
        </div>
      </a>
    </div>

  </a>
  <p class="typo">Rs 500 per Box  <sl-button type="primary"   href="/confirm" outline>Buy Now</sl-button></p>
  </div>

  <a href="#gallery-5" class="btn-gallery">
    
  
  <div class="container">
  
    <div class="content">
  
        <div class="content-overlay"></div>
        <img class="content-image" src="./images/allproducts/prod5.jpg" alt="product 5"></img>
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">Saveur: Kass Ene Poz</h3>
          <p class="content-text">Tap to view product</p>
        </div>
      </a>
    </div>

  </a>
  <p class="typo">Rs 500 per Box  <sl-button type="primary"   href="/confirm" outline>Buy Now</sl-button></p>
  </div>

  <a href="#gallery-6" class="btn-gallery">
    
  
  <div class="container">
  
    <div class="content">
  
        <div class="content-overlay"></div>
        <img class="content-image" src="./images/allproducts/prod6.jpg" alt="product 6"></img>
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">Saveur: Kraz La Nuite</h3>
          <p class="content-text">Tap to view product</p>
        </div>
      </a>
    </div>

  </a>
  <p class="typo">Rs 500 per Box  <sl-button type="primary"   href="/confirm" outline>Buy Now</sl-button></p>
  </div>
  

  <h2 class="product2" id="product2">Ground Coffee Collection</h2>


  <!-- Ground Coffee Part -->
  
  <div class="blank1"></div>


<a href="#gallery-7" class="btn-gallery">


<div class="container">

<div class="content">

    <div class="content-overlay"></div>
    <img class="content-image" src="./images/allproducts/prod7.jpg" alt="product 7"></img>
    <div class="content-details fadeIn-bottom">
      <h3 class="content-title">Saveur: Manz Ar Li</h3>
      <p class="content-text">Tap to view product</p>
    </div>
  </a>
</div>

</a>
<p class="typo">Rs 350 per Bag  <sl-button type="primary"   href="/confirm" outline>Buy Now</sl-button></p>
  </div>

<a href="#gallery-8" class="btn-gallery">


<div class="container">

<div class="content">

    <div class="content-overlay"></div>
    <img class="content-image" src="./images/allproducts/prod8.jpg" alt="product 8"></img>
    <div class="content-details fadeIn-bottom">
      <h3 class="content-title">Saveur: Kass Ene Poz</h3>
      <p class="content-text">Tap to view product</p>
    </div>
  </a>
</div>

</a>
<p class="typo">Rs 350 per Bag  <sl-button type="primary"   href="/confirm" outline>Buy Now</sl-button></p>
  </div>

<a href="#gallery-9" class="btn-gallery">


<div class="container">

<div class="content">

    <div class="content-overlay"></div>
    <img class="content-image" src="./images/allproducts/prod9.jpg" alt="product 9"></img>
    <div class="content-details fadeIn-bottom">
      <h3 class="content-title">Saveur: Kraz La Nuite</h3>
      <p class="content-text">Tap to view product</p>
    </div>
  </a>
</div>

</a>
<p class="typo">Rs 350 per Bag  <sl-button type="primary"   href="/confirm" outline>Buy Now</sl-button></p>
  </div>
   





   


    <div id="gallery-1" class="hidden">
	<a href="./images/products/cold/cold1/image.jpg">Image 1</a>
  <a href="./images/products/cold/cold1/image2.jpg">Image 2</a>
  <a href="./images/products/cold/cold1/image3.jpg">Image 3</a>
  <a href="./images/products/cold/cold1/image4.jpg">Image 4</a>
  <a href="./images/products/cold/cold1/image5.jpg">Image 5</a>
  <a href="./images/products/cold/cold1/image6.jpg">Image 6</a>
</div>

<div id="gallery-2" class="hidden">
<a href="./images/products/cold/cold2/image.jpg">Image 1</a>
<a href="./images/products/cold/cold2/image2.jpg">Image 2</a>
<a href="./images/products/cold/cold2/image3.jpg">Image 3</a>
<a href="./images/products/cold/cold2/image4.jpg">Image 4</a>
<a href="./images/products/cold/cold2/image5.jpg">Image 5</a>
<a href="./images/products/cold/cold2/image6.jpg">Image 6</a>
</div>

<div id="gallery-3" class="hidden">
<a href="./images/products/cold/cold3/image.jpg">Image 1</a>
<a href="./images/products/cold/cold3/image2.jpg">Image 2</a>
<a href="./images/products/cold/cold3/image3.jpg">Image 3</a>
<a href="./images/products/cold/cold3/image4.jpg">Image 4</a>
<a href="./images/products/cold/cold3/image5.jpg">Image 5</a>
<a href="./images/products/cold/cold3/image6.jpg">Image 6</a>
</div>

<div id="gallery-4" class="hidden">
	<a href="./images/products/cap/cap1/image.jpg">Image 1</a>
  <a href="./images/products/cap/cap1/image2.jpg">Image 2</a>
  <a href="./images/products/cap/cap1/image3.jpg">Image 3</a>
  <a href="./images/products/cap/cap1/image4.jpg">Image 4</a>
  <a href="./images/products/cap/cap1/image5.jpg">Image 5</a>
  <a href="./images/products/cap/cap1/image6.jpg">Image 6</a>
</div>

<div id="gallery-5" class="hidden">
	<a href="./images/products/cap/cap2/image.jpg">Image 1</a>
  <a href="./images/products/cap/cap2/image2.jpg">Image 2</a>
  <a href="./images/products/cap/cap2/image3.jpg">Image 3</a>
  <a href="./images/products/cap/cap2/image4.jpg">Image 4</a>
  <a href="./images/products/cap/cap2/image5.jpg">Image 5</a>
  <a href="./images/products/cap/cap2/image6.jpg">Image 6</a>
</div>

<div id="gallery-6" class="hidden">
	<a href="./images/products/cap/cap3/image.jpg">Image 1</a>
  <a href="./images/products/cap/cap3/image2.jpg">Image 2</a>
  <a href="./images/products/cap/cap3/image3.jpg">Image 3</a>
  <a href="./images/products/cap/cap3/image4.jpg">Image 4</a>
  <a href="./images/products/cap/cap3/image5.jpg">Image 5</a>
  <a href="./images/products/cap/cap3/image6.jpg">Image 6</a>
</div>

<div id="gallery-7" class="hidden">
	<a href="./images/products/ground/ground1/image.jpg">Image 1</a>
  <a href="./images/products/ground/ground1/image2.jpg">Image 2</a>
  <a href="./images/products/ground/ground1/image3.jpg">Image 3</a>
  <a href="./images/products/ground/ground1/image4.jpg">Image 4</a>
  <a href="./images/products/ground/ground1/image5.jpg">Image 5</a>
  <a href="./images/products/ground/ground1/image6.jpg">Image 6</a>
</div>

<div id="gallery-8" class="hidden">
	<a href="./images/products/ground/ground2/image.jpg">Image 1</a>
  <a href="./images/products/ground/ground2/image2.jpg">Image 2</a>
  <a href="./images/products/ground/ground2/image3.jpg">Image 3</a>
  <a href="./images/products/ground/ground2/image4.jpg">Image 4</a>
  <a href="./images/products/ground/ground2/image5.jpg">Image 5</a>
  <a href="./images/products/ground/ground2/image6.jpg">Image 6</a>
</div>

<div id="gallery-9" class="hidden">
	<a href="./images/products/ground/ground3/image.jpg">Image 1</a>
  <a href="./images/products/ground/ground3/image2.jpg">Image 2</a>
  <a href="./images/products/ground/ground3/image3.jpg">Image 3</a>
  <a href="./images/products/ground/ground3/image4.jpg">Image 4</a>
  <a href="./images/products/ground/ground3/image5.jpg">Image 5</a>
  <a href="./images/products/ground/ground3/image6.jpg">Image 6</a>
</div>


<!-- Footer Part -->
    
  
  
  <div class="hero">
  
    <div class="social-links">
      <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
      <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
      <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
      <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
    </div>
    <p class="typo4">Copyright &copy; 2021. All Rights Reserved by Kafe Lakot.
  </p>
  </div>

 
 
    </div>

    

 <style>


 .typo4{

  color:#fff;
  

 }

 .hero {
  width: 100%;
  height: 17vh;
  background: #6f4e37;
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
  color: #fff;
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
  background: rgb(131,58,180);
  background: linear-gradient(-4deg, rgba(131,58,180,1) 0%, rgba(95,78,55,1) 0%, rgba(252,176,69,1) 100%);
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

    </div>

      <style>

 

.hidden {
  overflow: hidden;
  display: none;
  visibility: hidden;
}

.btn-gallery img {
  width: 100%;
  height: auto;
}

    
    .typo{

      color: #000;
      text-align: center;

    }


  
    .typo3{
      padding-top:15px;
      color: #000;
      text-align: center;
    }

    .arrow {
      color: #fff;
      border: solid black;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
    }
    
    .right {
      color: #fff;
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }

    .content-title{
      font-family: 'Patahola', cursive;
      font-weight: bold;
      font-size: 30px;
    }

    .product2{
      padding-top: 50px;
      text-align: center;
      color: #000;
      font-family: 'Abril Fatface', cursive;
      font-size: 30px;
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

    


    `
    render(template, App.rootEl)
  }
}


export default new ProductsView()