const footerPage = () => {
    const footer = document.querySelector('.footer-page');
    let footerStrucutre = `
        <div class="footer-page-site-wrapper">
            <span class="footer-page-site">www.digitalm3.com.br</span>
        </div>

        <ul class="footer-page-image-wrapper">
            <li>
                <a href="https://www.facebook.com/digitalm3" target="_blank"> 
                    <img class="footer-page-image-facebook-desktop" src="../assets/images/facebook.png" alt="icone facebook" />
                </a>
            </li>

            <li>
                <a href="https://www.instagram.com/m3.ecommerce/" target="_blank">
                    <img class="footer-page-image-instagram-desktop" src="../assets/images/instagram.png" alt="icone instagram" />
                </a>
            </li>

            <li>
                <a href="https://www.linkedin.com/company/m3ecommerce/" target="_blank">
                    <img class="footer-page-image-linkedIn-desktop" src="../assets/images/linkedIn.png" alt="icone linkedin" />
                </a>
            </li>
        </ul>
    `

    footer.innerHTML = footerStrucutre;
}

export default footerPage;