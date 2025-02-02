const LayoutDemo = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 border-b bg-white dark:bg-[#101010]">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between p-2 md:p-4">
          <h1 className="font-bold tracking-wider text-[#4f39f6]">CodeWind</h1>
          <button aria-label="Menu" className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm7 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto max-w-7xl p-2 md:p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi pariatur
          officia exercitationem repellendus, quis atque excepturi at officiis
          repudiandae ipsa a ad, rem quia modi perferendis porro facilis error
          aliquid fugit aperiam. Earum perferendis nesciunt tempora ipsa beatae
          eveniet tempore molestias numquam ab id rerum aliquid, voluptates
          aperiam, eaque blanditiis necessitatibus repudiandae accusantium
          ratione, doloribus ut. Et amet eligendi natus repellendus in
          accusantium quam fuga saepe? Praesentium eaque nisi soluta quibusdam
          sequi! Quod eos nobis id minus dolore nihil aliquid accusamus
          accusantium dolor. Atque, tempore, quae esse, nostrum ad ipsum ea at
          rerum necessitatibus architecto itaque. Odit cum et dolorum eius
          numquam explicabo voluptatibus iusto cumque quos ducimus omnis
          assumenda veritatis nemo cupiditate, voluptatem ipsa facilis
          voluptates voluptas odio! Officia, voluptatum eveniet saepe velit, rem
          ipsum dolorem repellendus sunt esse ut corporis ex et vitae modi
          eligendi necessitatibus nemo id cupiditate eum obcaecati sit dolore
          maiores architecto. Quibusdam laboriosam, non animi cupiditate eius id
          libero illum reprehenderit facere porro ducimus magnam sapiente nobis
          ex voluptate odio fugiat, voluptates adipisci excepturi quasi. Totam
          temporibus eum dignissimos repellendus optio eius illo voluptatibus
          quos possimus cupiditate minima in sit quaerat, perferendis
          necessitatibus omnis sint porro ducimus voluptate ea. Fugit est odit
          quisquam aliquam ducimus laboriosam? Error quaerat, qui exercitationem
          quia nulla accusantium modi. Harum commodi, quam sapiente ducimus
          possimus laudantium saepe, ab quas totam recusandae voluptatibus eos
          officiis dignissimos velit quos repellat quibusdam voluptatem
          similique pariatur! Omnis fuga explicabo qui veniam natus deleniti
          molestiae pariatur, in fugiat maiores dolore esse commodi nam, dolores
          iste modi cumque eum laudantium unde consequatur. Magni suscipit
          repellendus odio, rerum repellat eveniet. Quos architecto illum neque
          quas debitis illo vitae voluptates consequuntur nemo ex, dignissimos
          ratione dolorem? Explicabo inventore deserunt veniam, quas voluptas
          illum sequi nobis sit vel magnam adipisci labore repudiandae ex amet
          ab perspiciatis doloribus ratione repellat! Odit labore alias culpa.
          Nobis provident unde laborum, suscipit quibusdam quasi quaerat magnam
          ex aliquid, assumenda atque. Maiores, vero facere aut recusandae
          fugiat facilis fuga est iste commodi ad soluta, accusantium veritatis
          animi saepe, assumenda id delectus aliquid. Ratione cumque eos
          consectetur illo officiis ut incidunt soluta repudiandae excepturi
          ullam odio nisi dicta ea dolorem minus aperiam maxime at rem nobis
          doloremque, atque quis perspiciatis accusamus architecto! Veniam fuga
          dignissimos sit labore cum quia fugiat non suscipit quaerat
          accusantium id, quidem sapiente amet eligendi? Maiores amet
          consequuntur itaque dignissimos rerum qui obcaecati mollitia, sapiente
          alias dicta sit hic nostrum, dolorum consequatur quibusdam sequi
          maxime! Quisquam dicta tenetur harum quia quas atque ipsam est!
          Similique magnam repudiandae sint ipsam minus, laudantium fuga
          cupiditate eius. Perspiciatis quibusdam libero autem consequuntur
          quisquam explicabo blanditiis. Eaque ab vero, ex, repudiandae dolore
          eos ad rerum aperiam dolores dolorem nihil dignissimos maiores, maxime
          hic inventore. Aspernatur, iure! Molestiae sunt, iste impedit deserunt
          esse quod doloribus temporibus odio aperiam et vel tenetur architecto,
          officia labore, sapiente illum magnam ratione! Optio recusandae quasi
          labore perferendis rem aperiam voluptatem, magnam consequuntur iure
          ipsam, sit voluptate id minus beatae alias quod dolor fuga eveniet
          magni dicta quo error. Unde.
        </div>
      </main>
      <footer className="border-t">
        <div className="mx-auto max-w-7xl p-2 text-center md:p-4">
          <p>
            ©2025{" "}
            <a role="link" className="text-[#4f39f6] hover:underline">
              CodeWind
            </a>
            . All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
const title = "Layout with sticky header, body and footer";
const react = `
const LayoutDemo = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 border-b bg-white dark:bg-[#101010]">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between p-2 md:p-4">
          <h1 className="font-bold tracking-wider text-[#4f39f6]">CodeWind</h1>
          <button aria-label="Menu" className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm7 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </header>
      <main className="flex-1 border-y">
        <div className="mx-auto max-w-7xl p-2 md:p-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          vitae assumenda mollitia veritatis nihil! Quos cum, nisi consectetur,
          eius ullam doloremque, quas optio rem deserunt provident...
        </div>
      </main>
      <footer>
        <div className="mx-auto max-w-7xl p-2 text-center md:p-4">
          <p>
            ©2025{" "}
            <a role="link" className="text-[#4f39f6] hover:underline">
              CodeWind
            </a>
            . All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
`;

const html = `
const LayoutDemo = () => {
  return (
    <>
      <div className="layout-container">
        <header className="header">
          <div className="header-content">
            <h1 className="logo">CodeWind</h1>
            <button aria-label="Menu" className="menu-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm7 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </header>

        <main className="main">
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            vitae assumenda mollitia veritatis nihil! Quos cum, nisi
            consectetur, eius ullam doloremque, quas optio rem deserunt
            provident...
          </div>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <p>
              &copy; 2025{" "}
              <a role="link" href="#" className="link">
                CodeWind
              </a>
              . All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

//css

.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.header{
  position: sticky;
  top:0;
  background: white;
  border-bottom: 1px solid #ddd;
}
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
  padding: 8px;
  margin: 0 auto;
}
.logo {
  font-weight: bold;
  color: #4f39f6;
  letter-spacing: 0.05em;
}
.menu-button {
  background: none;
  border: none;
  cursor: pointer;
}
.icon {
  width: 20px;
  height: 20px;
}
.main {
  flex: 1;
}
.content {
  max-width: 1280px;
  padding: 8px;
  margin: 0 auto;
  color: #333;
}
.footer {
  text-align: center;
  border-top: 1px solid #ddd;
  padding: 8px;
}
.footer-content {
  max-width: 1280px;
  margin: 0 auto;
}
.link {
  color: #4f39f6;
  text-decoration: none;
}
@media (min-width: 768px) {
  .header-content, .content, .footer-content {
    padding: 16px;
  }
}
`;

export { LayoutDemo, react, title, html };
