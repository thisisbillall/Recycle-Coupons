import logo from './logo.svg';
import './App.css';

import reportWebVitals from './reportWebVitals';
import { Routes, Route} from 'react-router-dom';
import Muncipal from './Components/Muncipal';
import Homepage from './Components/Homepage';
import Person from './Components/Person';
import Example from './Components/Example';
import Header from './Components/Header';
function App() {
  return (
    <div>
      <Header/>
      <div  style={{margin: "1.5rem"}}>
        <Routes>
          <Route path ='/' element = {<Homepage/>}/>
          <Route path='/user' element={<Person/>}/>
          <Route path='/muncipal' element={<Muncipal/>}/>
          <Route path='/ee' element={<Example/>}/>
        </Routes>
        </div>

    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">
            Users volunteering to collect and give away these plastics will be given different types of incentives based on the type and amount. Our platform encourages citizens to not waste and throw away plastic products and also enable eco-friendly recycling opportunity for different industries.
              </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <a href="#">Recycler</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>






    </div>
  );
}

export default App;
