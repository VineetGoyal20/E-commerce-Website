import React from 'react';
import front1 from '../images/yellow.jpg';
import front2 from '../images/12754.jpg';
import front3 from '../images/yellow.jpg';
import fproduct1 from '../images/fp1.jpg';
import fproduct2 from '../images/fp11.jpg';
import fproduct3 from '../images/fp2.jpg';
import mproduct1 from '../images/glasses.jpg';
import mproduct2 from '../images/watch.jpg';
import mproduct3 from '../images/tshirt.jpg';
import mproduct4 from '../images/phone.jpg';
import tproduct1 from '../images/cosmetic.jpg';
import tproduct2 from '../images/rings.jpg';
import tproduct3 from '../images/necklace.jpg';
import tproduct4 from '../images/bracelet.jpg';
import follow1 from '../images/follow1 (1).jpg'
import follow2 from '../images/follow1 (2).jpg'
import follow3 from '../images/follow1 (3).jpg'
import follow4 from '../images/follow1 (4).jpg'

class Home extends React.Component{
    render(){
        return(
        <div>
            <div class="top-header">
              <div class="container">
                <div class="row">
                  <div class="col-md-4 mr-auto">
                    <a href="#">Phone: +91 989123892</a>
                    <a href="#">Email: example@gmail.com </a>
                  </div>
                  <div class="col-md-4 ml-auto text-right">
                    <a href="#">Gift Card</a>
                    <a href="#">Track Order</a>
                    <a href="#">Language</a>
                  </div>
                  <div class="col-md-4 ml-auto text-right">
                    <a href="#">Gift Card</a>
                    <a href="#">Track Order</a>
                    <a href="#">Language</a>
                  </div>
                </div>
              </div>
            </div>
    
    <header class="navbar navbar-expand-lg bsnav pt-lg-0 pb-lg-0 position-sticky">
      <div class="container">
        <a href="#" class="navbar-brand"><h3>MyStore</h3></a>
        <button class="navbar-toggler toggler-elastic"><span class="navbar-toggler-icon"></span></button>
        <nav class="collapse navbar-collapse justify-content-end">
          <ul class="navbar-nav navbar-mobile mr-0">
            <li class="nav-item active"><a href="#" class="nav-link">Home</a></li>
            <li class="nav-item dropdown-menu"><a href="#" class="nav-link">Dropdown<i class="caret"></i></a>
              <ul class="navbar-nav">
                <li class="nav-item "><a href="#" class="nav-link">menu 1</a></li>
                <li class="nav-item "><a href="#" class="nav-link">menu 2</a></li>
                <li class="nav-item "><a href="#" class="nav-link">menu 3</a></li>
                <li class="nav-item "><a href="#" class="nav-link">menu 4</a></li>
                <li class="nav-item "><a href="#" class="nav-link">menu 5</a></li>
                <li class="nav-item "><a href="#" class="nav-link">menu 6</a></li>
              </ul>
            </li>
          <li class="nav-item"><a href="#" class="nav-link">About</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Services</a></li>
          <li class="nav-item"><a href="#" class="nav-link">blog</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
          <li class="nav-item">
            <a href="#" class="nav-link pl-2">
              <i class="fas fa-search"></i>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link pl-2">
              <i class="fas fa-shopping-cart"></i>
              <span class="cart_Count">1</span>
            </a>
          </li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="bsnav-mobile">
      <div class="bsnav-mobile-overlay"></div>
      <div class="navbar"></div>
    </div>
    
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={front1} class="d-block w-100" alt="slide1"/>
          <div class="slider-heading carousel-caption d-none d-md-block text-left">
            <h2>Explore your true style.</h2>
            <h1>"Fashion is just another accessory for someone with great style...."</h1>
            <p><a href="#">SHOP NOW</a></p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={front2} class="d-block w-100" alt="slide2"/>
        </div>
        <div class="carousel-item">
          <img src={front3} class="d-block w-100" alt="slide3"/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <i class="fas fa-angle-left" aria-hidden="true"></i>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <i class="fas fa-chevron-right" aria-hidden="true " ></i>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    
    <section class="Featured-product-section container-fluid py-5">
      <div class="container p-0">
        <div class="title-section text-center mb-5">
          <h2 class="title">Featured <span>Product</span></h2>
        </div>
        
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-4 col-sm-6 col-10 mx-auto mb-3 product-box">
            <div class="product-img-box col-10 p-0 mx-auto overflow-hidden">
              <img src={fproduct1} alt=""/>
              <div class="hvr-box">
                <a href="#">
                  <div><i class="far fa-eye"></i></div>
                </a>
                <a href="#">
                  <div><i class="far fa-heart"></i></div>
                </a>
                <a href="#">
                  <div><i class="fas fa-shopping-cart"></i></div>
                </a>
              </div>
            </div>
            <div class="col-10 text-center mt-4 mx-auto product-title">
              <a href="#">Women Purses</a>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <h4>$50</h4>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-10 mx-auto mb-3 product-box">
            <div class="product-img-box col-10 p-0 mx-auto overflow-hidden">
              <img src={fproduct2} alt=""/>
              <div class="hvr-box">
                <a href="#">
                  <div><i class="far fa-eye"></i></div>
                </a>
                <a href="#">
                  <div><i class="far fa-heart"></i></div>
                </a>
                <a href="#">
                  <div><i class="fas fa-shopping-cart"></i></div>
                </a>
              </div>
            </div>
            <div class="col-10 text-center mt-4 mx-auto product-title">
              <a href="#"> Women Footwear's</a>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <h4>$80</h4>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-10 mx-auto mb-3 product-box">
            <div class="product-img-box col-10 p-0 mx-auto overflow-hidden">
              <img src={fproduct3} alt=""/>
              <div class="hvr-box">
                <a href="#">
                  <div><i class="far fa-eye"></i></div>
                </a>
                <a href="#">
                  <div><i class="far fa-heart"></i></div>
                </a>
                <a href="#">
                  <div><i class="fas fa-shopping-cart"></i></div>
                </a>
              </div>
            </div>
            <div class="col-10 text-center mt-4 mx-auto product-title">
              <a href="#">Men's Wear</a>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <h4>$100</h4>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    
    <section class="banner-section container-fluid">
      <div class="row justify-content-center">
        <div class="banner col-12">
          <div class="banner-box ml-auto">
            <h1 class="text-white text-center">50% OFF</h1>
            <p class="text-white text-uppercase">All Women's Collection</p>
            <p class="text-center">
              <a href="#" class="mx-auto mt-3 text-uppercase">Shop Now</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="Featured-product-section container-fluid py-5">
      <div class="container p-0">
        <div class="title-section text-center mb-5">
          <h2 class="title">Most <span>Popular</span></h2>
        </div>
        
        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-4 col-sm-6 col-10 mx-auto mb-3 product-box">
            <div class="product-img-box col-12 p-0 mx-auto overflow-hidden">
              <img src={mproduct1} alt=""/>
              <div class="hvr-box">
                <a href="#">
                  <div><i class="far fa-eye"></i></div>
                </a>
                <a href="#">
                  <div><i class="far fa-heart"></i></div>
                </a>
                <a href="#">
                  <div><i class="fas fa-shopping-cart"></i></div>
                </a>
              </div>
            </div>
            <div class="col-10 text-center mt-4 mx-auto product-title">
              <a href="#">Googles</a>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half"></i>
              <h4>$70</h4>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 col-10 mx-auto mb-3 product-box">
            <div class="product-img-box col-12 p-0 mx-auto overflow-hidden">
              <img src={mproduct2} alt=""/>
              <div class="hvr-box">
                <a href="#">
                  <div><i class="far fa-eye"></i></div>
                </a>
                <a href="#">
                  <div><i class="far fa-heart"></i></div>
                </a>
                <a href="#">
                  <div><i class="fas fa-shopping-cart"></i></div>
                </a>
              </div>
            </div>
            <div class="col-10 text-center mt-4 mx-auto product-title">
              <a href="#">Watch</a>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half"></i>
              <h4>$160</h4>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 col-10 mx-auto mb-3 product-box">
            <div class="product-img-box col-12 p-0 mx-auto overflow-hidden">
              <img src={mproduct3} alt=""/>
              <div class="hvr-box">
                <a href="#">
                  <div><i class="far fa-eye"></i></div>
                </a>
                <a href="#">
                  <div><i class="far fa-heart"></i></div>
                </a>
                <a href="#">
                  <div><i class="fas fa-shopping-cart"></i></div>
                </a>
              </div>
            </div>
            <div class="col-10 text-center mt-4 mx-auto product-title">
              <a href="#">T-shirts</a>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half"></i>
              <h4>$90</h4>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 col-10 mx-auto mb-3 product-box">
            <div class="product-img-box col-12 p-0 mx-auto overflow-hidden">
              <img src={mproduct4} alt=""/>
              <div class="hvr-box">
                <a href="#">
                  <div><i class="far fa-eye"></i></div>
                </a>
                <a href="#">
                  <div><i class="far fa-heart"></i></div>
                </a>
                <a href="#">
                  <div><i class="fas fa-shopping-cart"></i></div>
                </a>
              </div>
            </div>
            <div class="col-10 text-center mt-4 mx-auto product-title">
              <a href="#">Electonics</a>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half"></i>
              <h4>$200</h4>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    
    <section class="card-section container-fluid">
      <div class="container p-0">
        <div class="row justify-content-center">
          
          <div class="card text-center p-3 m-2">
            <i class="fas fa-shipping-fast h2 my-2"></i>
            <div class="card-body p-2">
              <h6 class="card-title mb-2 text-uppercase">Express Delivery</h6>
              <p class="card-text text-muted">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          
          <div class="card text-center p-3 m-2">
            <i class="fas fa-hand-holding-usd h2 my-2"></i>
            <div class="card-body p-2">
              <h6 class="card-title mb-2 text-uppercase">Money Back Gurantee</h6>
              <p class="card-text text-muted">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          
          <div class="card text-center p-3 m-2">
            <i class="fas fa-handshake h2 my-2"></i>
            <div class="card-body p-2">
              <h6 class="card-title mb-2 text-uppercase">Direct Shipping</h6>
              <p class="card-text text-muted">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          
          <div class="card text-center p-3 m-2">
            <i class="fas fa-headset h2 my-2"></i>
            <div class="card-body p-2">
              <h6 class="card-title mb-2 text-uppercase">24/7 Support</h6>
              <p class="card-text text-muted">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="container-fluid py-5">
      <div class="container p-0">
        <div class="title-section text-center mb-5">
          <h2 class="title">Trending <span>Products</span></h2>
        </div>
        
        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-4 col-sm-6 col-10 mx-auto mb-3 product-box">
            <div class="product-img-box col-12 p-0 mx-auto overflow-hidden">
              <img src={tproduct1} alt=""/>
              <div class="hvr-box">
                <a href="#">
                  <div><i class="far fa-eye"></i></div>
                </a>
                <a href="#">
                  <div><i class="far fa-heart"></i></div>
                </a>
                <a href="#">
                  <div><i class="fas fa-shopping-cart"></i></div>
                </a>
              </div>
            </div>
            <div class="col-10 text-center mt-4 mx-auto product-title">
              <a href="#">Makeup</a>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half"></i>
              <h4>$40</h4>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 col-10 mx-auto mb-3 product-box">
            <div class="product-img-box col-12 p-0 mx-auto overflow-hidden">
              <img src={tproduct2} alt=""/>
              <div class="hvr-box">
                <a href="#">
                  <div><i class="far fa-eye"></i></div>
                </a>
                <a href="#">
                  <div><i class="far fa-heart"></i></div>
                </a>
                <a href="#">
                  <div><i class="fas fa-shopping-cart"></i></div>
                </a>
              </div>
            </div>
            <div class="col-10 text-center mt-4 mx-auto product-title">
              <a href="#">Rings</a>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half"></i>
              <h4>$50</h4>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 col-10 mx-auto mb-3 product-box">
            <div class="product-img-box col-12 p-0 mx-auto overflow-hidden">
              <img src={tproduct3} alt=""/>
              <div class="hvr-box">
                <a href="#">
                  <div><i class="far fa-eye"></i></div>
                </a>
                <a href="#">
                  <div><i class="far fa-heart"></i></div>
                </a>
                <a href="#">
                  <div><i class="fas fa-shopping-cart"></i></div>
                </a>
              </div>
            </div>
            <div class="col-10 text-center mt-4 mx-auto product-title">
              <a href="#">Jwellary</a>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half"></i>
              <h4>$500</h4>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 col-10 mx-auto mb-3 product-box">
            <div class="product-img-box col-12 p-0 mx-auto overflow-hidden">
              <img src={tproduct4} alt=""/>
              <div class="hvr-box">
                <a href="#">
                  <div><i class="far fa-eye"></i></div>
                </a>
                <a href="#">
                  <div><i class="far fa-heart"></i></div>
                </a>
                <a href="#">
                  <div><i class="fas fa-shopping-cart"></i></div>
                </a>
              </div>
            </div>
            <div class="col-10 text-center mt-4 mx-auto product-title">
              <a href="#">Bracelets</a>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half"></i>
              <h4>$50</h4>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    
    <section class="follow-us card-section container-fluid mb-5 ">
      <div class="container p-0">
        <div class="title-section text-center mb-5">
          <h2 class="title">Folow Us</h2>
        </div>
        <div class="row justify-content-center">
         
          <div class="card text-center p-0 m-2 rounded-0">
            <a href="#">
              <img src={follow1} class="container-fluid"/>
              <div class="card-body p-0 w-100 d-flex justify-content-center align-items-center">
                <i class="fab fa-instagram h2 my-2 text-light"></i>
              </div>
            </a>
          </div>
          <div class="card text-center p-0 m-2 rounded-0">
            <a href="#">
              <img src={follow2} class="container-fluid"/>
              <div class="card-body p-0 w-100 d-flex justify-content-center align-items-center">
                <i class="fab fa-instagram h2 my-2 text-light"></i>
              </div>
            </a>
          </div>
          <div class="card text-center p-0 m-2 rounded-0">
            <a href="#">
              <img src={follow3} class="container-fluid"/>
              <div class="card-body p-0 w-100 d-flex justify-content-center align-items-center">
                <i class="fab fa-instagram h2 my-2 text-light"></i>
              </div>
            </a>
          </div>
          <div class="card text-center p-0 m-2 rounded-0">
            <a href="#">
              <img src={follow4} class="container-fluid"/>
              <div class="card-body p-0 w-100 d-flex justify-content-center align-items-center">
                <i class="fab fa-instagram h2 my-2 text-light"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <footer class="pt-5 container-fluid">
            <div class="container p-0">
                <div class="row justify-content-start">
                <div class="col-md-2 col-sm-6">
                    <h6 class="text-dark text-uppercase">About Us</h6>
                    <ul>
                    <li><a href="#">How it Works</a></li>
                    <li><a href="#">Testimonals</a></li>
                    <li><a href="#">Carrers</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
                <div class="col-md-2 col-sm-6 offset-md-1">
                    <h6 class="text-dark text-uppercase">Useful Links</h6>
                    <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Destinations</a></li>
                    <li><a href="#">Sponsorships</a></li>
                    </ul>
                </div>
                <div class="col-md-2 col-sm-6 offset-md-1">
                    <h6 class="text-dark text-uppercase">Main Links</h6>
                    <ul>
                    <li><a href="#">Submit Videos</a></li>
                    <li><a href="#">Ambassadors</a></li>
                    <li><a href="#">Agency</a></li>
                    <li><a href="#">Influnencer</a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6 offset-md-1">
                    <h6 class="text-dark text-uppercase">Follow Us</h6>
                    <ul>
                    <li><a href="www.instagram.com"><i class="fab fa-instagram h5 mr-2"></i></a></li>
                    <li><a href="www.instagram.com"><i class="fab fa-facebook-f h5 mr-2"></i></a></li>
                    <li><a href="www.instagram.com"><i class="fab fa-twitter h5 mr-2"></i></a></li>
                    <li><a href="www.instagram.com"><i class="fab fa-youtube h5 mr-2"></i></a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="bottom-footer text-center py-3 mt-lg-4 mt-2 border-top border-dark">
                <p>@All right reserved <a href="#">MyStore</a>2021</p>
            </div>
            </footer>
        </div>
    );
}
}
export default Home;