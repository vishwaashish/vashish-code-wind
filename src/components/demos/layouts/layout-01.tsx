const LayoutDemo = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
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
const title = "Layout with header, body and footer";
const react = `
const LayoutDemo = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
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
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.content {
  max-width: 1280px;
  padding: 8px;
  margin: 0 auto;
  color: #333;
}
.footer {
  text-align: center;
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
