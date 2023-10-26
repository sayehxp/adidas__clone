import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <main>
  <nav>
    <ion-icon className='logo' name="triangle-outline"></ion-icon>
    <ion-icon className='menu' name="menu-outline"></ion-icon>
  </nav>
  <header>
    <h1>QUOTA</h1>
    <p>- est. 2000 -</p>
    <span className='bubble'></span>
  </header>
  <footer>
    <header>
      <h2>Quota</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis </p>
      <ul className='icons'>
        <ion-icon className='icon' name="logo-facebook"></ion-icon>
        <ion-icon className='icon' name="logo-instagram"></ion-icon>
        <ion-icon className='icon' name="logo-twitter"></ion-icon>
        <ion-icon className='icon' name="logo-youtube"></ion-icon>
      </ul>
    </header>
    <aside>
      <ul className='category'>
        <li>
          <h3>Project</h3>
        </li>
        <li>Houses</li>
        <li>Rooms</li>
        <li>Flats</li>
        <li>Apartments</li>
      </ul>
      <ul className='category'>
        <li>
          <h3>Company</h3>
        </li>
        <li>Objective</li>
        <li>Capital</li>
        <li>Security</li>
        <li>Selling</li>
      </ul>
      <ul className='category'>
        <li>
          <h3>Movement</h3>
        </li>
        <li>Movement</li>
        <li>Support us</li>
        <li>Pricing</li>
        <li>Renting</li>
      </ul>
      <ul className='category'>
        <li>
          <h3>Help</h3>
        </li>
        <li>Privacy</li>
        <li>Contact</li>
        <li>FAQs</li>
        <li>Blog</li>
      </ul>
    </aside>
  </footer>
</main>


    </div>
  );
}

export default Footer;
