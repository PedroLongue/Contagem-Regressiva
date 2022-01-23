const headerPage = () => {
    const header = document.querySelector('.header-page');
    let headerStructure = `
        <img class="logo-m3-academy" src="../assets/images/logoM3Academy.png" alt="Logo da M3 Academy" />
    `

    header.innerHTML = headerStructure;
}

export default headerPage;