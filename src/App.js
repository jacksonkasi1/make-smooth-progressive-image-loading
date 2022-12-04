import "./App.css"

function App() {
  return (
    <div className="App">
      <div class="hero">
        <div class="bar left-bar">
          <div>
            <h1>Keep your plants alive</h1>
            <p>
              Individual care schedule and reminders for your plants,
              recommendations, step by step guides, identification, light meter
              and more. Keep your plants alive with Planta!
            </p>
          </div>
        </div>
        <div class="bar image-container">
          <img
            src="https://getplanta.com/images/icons/planta-app-icon.svg"
            alt="p"
            className="p-img"
          />
          <img
            src="https://getplanta.com/images/app-hero.webp"
            alt="Planta app"
            className="hero-image"
          />
          <img
            src="https://getplanta.com/images/icons/add-plant.svg"
            alt="add-img"
            srcset=""
            className="add-img"
          />
          <img
            src="https://getplanta.com/images/icons/app-menu.svg"
            alt="app-menu"
            srcset=""
            className="app-menu-img"
          />
        </div>
      </div>
      <footer>
        <p className="author" >
          Made with ❤️ by{" "}
          <a href="https://github.com/jacksonkasi0" target="_blank">
            jackson kasi
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
