const createFooter = () => {
  let footer = document.querySelector("footer");

  footer.innerHTML = `
    <div class="footer-content">
        <img src="img/" class="logo" alt="company logo">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title"></li>
                <li><a href="#" class="footer-link">about</a></li>
                <li><a href="#" class="footer-link">home</a></li>
                <li><a href="#" class="footer-link">contact</a></li>
               
            </ul>
            <ul class="category">
                <li class="category-title"></li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
             
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Our products cover all types of trucks and trailers, which are widely used in engineering construction,
     cargo transportation and other fields. Whether it is heavy-load transportation or complex road conditions, our equipment can provide the best performance. quaerat fugiat ratione et vero maxime praesentium, architecto minima reiciendis iste quo deserunt assumenda alias ducimus. Ullam odit maxime id voluptates rerum tenetur corporis laboriosam! Cum error ipsum laborum tempore in rerum necessitatibus nostrum nobis modi! Debitis adipisci illum nemo aperiam sed, et accusamus ut officiis. Laborum illo exercitationem quo culpa reprehenderit excepturi distinctio tempore cupiditate praesentium nisi ut iusto, assumenda perferendis facilis voluptas autem fuga sunt ab debitis voluptatum harum eum. Asperiores, natus! Est deserunt incidunt quasi placeat omnis, itaque harum?</p>
    <p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
};

createFooter();
