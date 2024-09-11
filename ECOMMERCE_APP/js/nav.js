const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
               
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">about</a></li>
            <li class="link-item"><a href="#" class="link">service</a></li>
            <li class="link-item"><a href="#" class="link">faqs</a></li>
            <li class="link-item"><a href="#" class="link">contact</a></li>
        </ul>
    `;
};

createNav();
