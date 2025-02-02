const LayoutDemo = () => {
  return (
    <div className="flex h-screen min-h-[500px] flex-col bg-white dark:bg-[#101010]">
      <header className="border-b bg-white dark:bg-[#101010]">
        <div className="w-ful flex h-14 items-center justify-between p-2 md:p-4">
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

      <div className="flex flex-1 flex-row overflow-y-hidden">
        <nav className="order-first hidden w-56 overflow-y-auto px-2 py-5 md:block">
          <ul className="">
            {Array.from(
              { length: 15 },
              (a: number = 1, b: number = 1) => a + b,
            ).map((item) => (
              <li key={item}>
                <button className="w-full rounded px-2 py-2 text-left hover:bg-indigo-50">
                  Sidebar Item {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <main className="flex-1 overflow-y-auto border-l border-r p-2 md:p-5">
          <div className="">
            <p className="mb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              unde harum fugiat, recusandae incidunt rem sapiente nihil repellat
              perferendis dignissimos nulla neque minus? Quos ipsum enim ad eius
              quae accusantium a esse nesciunt molestiae. Molestiae suscipit
              voluptas laudantium autem doloribus nulla quis velit incidunt
              dolorem dolorum repellendus recusandae reprehenderit, quam unde!
              Ut ullam dicta suscipit culpa delectus tenetur quisquam debitis
              nam cumque, reiciendis eaque sequi, perspiciatis dignissimos
              accusamus in excepturi odio fugit non laboriosam. Placeat
              consectetur eligendi suscipit corporis ducimus doloribus rem
              exercitationem praesentium odio commodi, porro aut illum. Voluptas
              corporis harum error adipisci libero? Doloremque beatae aperiam
              veritatis,
            </p>
            <p className="mb-3">
              Voluptas sint nihil amet sapiente ratione sed, accusamus porro
              omnis similique possimus consequuntur cupiditate sit, iure eos
              laboriosam modi molestiae voluptatem at nisi unde! Error ipsum
              nulla tenetur saepe reiciendis, voluptate ullam vero ex doloremque
              quaerat ipsa dolore dolores deleniti dolorum maxime placeat
              aperiam eius eveniet tempora molestias, corporis illum?
              Exercitationem, excepturi maiores? Beatae cupiditate at quisquam
              illum nobis exercitationem aspernatur soluta officia consequatur
              laborum quia ab natus porro quae ipsa praesentium ipsum
              perferendis sint, omnis eius, blanditiis, culpa odit incidunt aut.
              Explicabo cum autem odio molestias suscipit minima laboriosam
              itaque eius dolores eaque natus consequatur incidunt nam veniam
              labore voluptatem modi, aliquid sint blanditiis at delectus eos
              mollitia deleniti! Facilis quasi aperiam aliquid neque
              necessitatibus quae nobis officiis laudantium! Culpa, earum
              repudiandae quo quos asperiores unde iste, officia illo odio
              minima accusamus omnis hic atque amet eius accusantium vitae,
              reprehenderit ab nesciunt maxime! Vel incidunt est accusamus,
              temporibus aliquam veritatis quaerat voluptate rerum ipsum eum
              reiciendis pariatur alias a dicta ipsam dolore maiores amet
              expedita iusto ratione tempora?
            </p>
            <p className="mb-3">
              Quae soluta assumenda vitae optio fugit impedit cupiditate,
              consequuntur, quidem esse similique sint rem ex rerum culpa, iste
              commodi natus! Sequi commodi doloribus qui id voluptatum iure
              impedit obcaecati. Magni quos corporis incidunt numquam
              repellendus, atque porro veniam reiciendis molestiae maiores omnis
              exercitationem tenetur nam cumque ad praesentium nulla, quaerat
              sapiente, distinctio blanditiis quia amet laboriosam earum
              eligendi! Quod dolor eveniet odio quaerat cupiditate velit
              voluptate repudiandae. Magni itaque praesentium ipsam. Commodi
              voluptatum similique exercitationem, accusamus eligendi neque.
              Aliquam numquam officiis necessitatibus! Et eius iste eveniet
              mollitia, deleniti aut, maxime delectus odio nesciunt ea itaque
              dicta. Illum corrupti odit at possimus in ipsa eaque aliquam
              inventore eum esse eos commodi eius ab ullam iste consequuntur
              minus ducimus tenetur, molestiae amet libero fugiat laudantium
              vitae maxime? Vel illum commodi tempora architecto exercitationem
              fugiat facilis culpa labore aliquam reprehenderit molestias
              mollitia ullam, magnam tenetur, odit fugit, facere voluptatibus
              enim veritatis quis modi consequuntur iste? Animi tenetur odio
              minus quisquam ea explicabo veniam totam nesciunt laborum quod
              cumque expedita odit, nam sint sapiente? Earum, dignissimos quasi
              veritatis, et in id laboriosam deleniti a saepe, quibusdam nisi
              aliquid ratione rem quas consequatur cupiditate asperiores
              doloremque corrupti atque optio tenetur harum nostrum soluta ab?
              Sapiente molestiae, nulla ipsam ipsa iste rerum reiciendis
              accusamus consequuntur vero quaerat! Inventore, debitis fugiat
              laudantium, pariatur tenetur, quasi nihil velit dolorem reiciendis
              culpa soluta fuga maiores quaerat. Aspernatur, vel sapiente
              veritatis id sit nihil voluptatibus quidem fuga ea sunt
              praesentium doloremque, incidunt maxime? Inventore officiis atque
            </p>
          </div>
        </main>

        <aside className="hidden w-52 overflow-y-auto px-2 py-5 lg:block">
          <ul className="">
            {Array.from(
              { length: 15 },
              (a: number = 1, b: number = 1) => a + b,
            ).map((item) => (
              <li key={item}>
                <button className="w-full rounded px-2 py-2 text-left hover:bg-indigo-50">
                  Sidebar Item {item}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <footer className="border-t">
        <div className="p-2 text-center md:p-4">
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
const title = "Admin layout1";
const react = `
<div className="flex h-screen min-h-screen flex-col bg-white dark:bg-[#101010]">
      <header className="border-b bg-white dark:bg-[#101010]">
        <div className="w-ful flex h-14 items-center justify-between p-2 md:p-4">
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

      <div className="flex flex-1 flex-row overflow-y-hidden">
        <nav className="order-first hidden w-56 overflow-y-auto px-2 py-5 md:block">
          <ul className="">
            {Array.from(
              { length: 15 },
              (a: number = 1, b: number = 1) => a + b,
            ).map((item) => (
              <li key={item}>
                <button className="w-full rounded px-2 py-2 text-left hover:bg-indigo-50">
                  Sidebar Item {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <main className="flex-1 overflow-y-auto border-l border-r p-2 md:p-5">
          <div className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            unde harum fugiat, recusandae incidunt rem sapiente nihil repellat
            perferendis dignissimos nulla neque minus? Quos ipsum enim ad eius
            quae accusantium a esse...
          </div>
        </main>

        <aside className="hidden w-52 overflow-y-auto px-2 py-5 lg:block">
          <ul className="">
            {Array.from(
              { length: 15 },
              (a: number = 1, b: number = 1) => a + b,
            ).map((item) => (
              <li key={item}>
                <button className="w-full rounded px-2 py-2 text-left hover:bg-indigo-50">
                  Sidebar Item {item}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <footer className="border-t">
        <div className="p-2 text-center md:p-4">
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
`;

const html = `
const LayoutDemo = () => {
  return (
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

        <div className="main-container">
          <nav className="sidebar">
            <ul>
              {Array.from(
                { length: 15 },
                (a: number = 1, b: number = 1) => a + b,
              ).map((item) => (
                <li key={item}>
                  <button className="sidebar-item">Sidebar Item {item}</button>
                </li>
              ))}
            </ul>
          </nav>

          <main className="content">
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              unde harum fugiat, recusandae incidunt rem sapiente nihil repellat
              perferendis dignissimos nulla neque minus? Quos ipsum enim ad eius
              quae accusantium a esse...
            </div>
          </main>

          <aside className="aside">
            <ul>
              {Array.from(
                { length: 15 },
                (a: number = 1, b: number = 1) => a + b,
              ).map((item) => (
                <li key={item}>
                  <button className="sidebar-item">Sidebar Item {item}</button>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <p>
              ©2025{" "}
              <a role="link" className="link">
                CodeWind
              </a>
              . All rights reserved.
            </p>
          </div>
        </footer>
      </div>
  );
};

// css

.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
  background-color: white;
}
.header {
  border-bottom: 1px solid #ddd;
  background-color: white;
}
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
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
.main-container {
  display: flex;
  flex: 1;
  overflow-y: hidden;
}
.sidebar {
  display: none;
  width: 200px;
  overflow-y: auto;
  padding: 16px;
}
.sidebar-item {
  width: 100%;
  padding: 8px;
  text-align: left;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
}
.sidebar-item:hover {
  background-color: #e0e7ff;
}
.content {
  flex: 1;
  overflow-y: auto;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  padding: 16px;
}
.aside {
  display: none;
  width: 200px;
  overflow-y: auto;
  padding: 16px;
}
.footer {
  border-top: 1px solid #ddd;
  text-align: center;
}
.footer-content {
  padding: 8px;
}
.link {
  color: #4f39f6;
  text-decoration: none;
}
@media (min-width: 768px) {
  .header-content {
    padding: 16px;
  }
  .content {
    padding: 16px;
  }
  .footer-content {
    padding: 16px;
  }
  .sidebar {
    display: block;
  }
  .aside {
    display: block;
  }
}
`;
export { LayoutDemo, react, title, html };
