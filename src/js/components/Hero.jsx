import { randomArray } from "./funciones";

let imagesHeres = [
  "https://img.pccomponentes.com/articles/1085/10855615/1575-asus-rog-strix-x870e-e-gaming-wifi.jpg",
  "https://img.pccomponentes.com/articles/1065/10657909/1685-team-group-t-force-delta-rgb-ddr5-6000mhz-32gb-2x16gb-cl30-foto.jpg",
  "https://img.pccomponentes.com/articles/1095/10954246/1773-tarjeta-grafica-gigabyte-geforce-rtx-5060-windforce-max-oc-8gb-gddr7-reflex-2-rtx-ai-dlss4.jpg",
  "https://img.pccomponentes.com/articles/31/310552/1692-cooler-master-mwe-650-bronze-v2-650w-80-plus-bronze.jpg",
  "https://img.pccomponentes.com/articles/1086/10860456/1477-amd-ryzen-7-9800x3d-47-52ghz-caracteristicas.jpg",
  "https://img.pccomponentes.com/articles/1064/10648534/1952-samsung-990-pro-2tb-ssd-pcie-40-nvme-m2.jpg",
  "https://img.pccomponentes.com/articles/1086/10863541/1623-forgeon-solum-refrigeracion-liquida-240-argb-kit-liquid-cooler-blanca-comprar.jpg",
];

const HeroComponent = () => (
  <div className="container my-5">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-4">
          Welcome to PC Componentes
        </h1>
        <p className="lead">
          PC Componentes is a PC component store that sells the best components
          for your PC. We have a wide selection of components from CPU, GPU,
          RAM, storage, and more. We also have a selection of peripherals such
          as mice, keyboards, and monitors.
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
            onClick={() => {
              document.getElementById("hero-image").src =
                randomArray(imagesHeres);
            }}
          >
            Next IMG
          </button>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden mt-5 mt-lg-0 mx-auto">
        <img
          id="hero-image"
          className="cover-lg-3 w-100"
          src={randomArray(imagesHeres)}
          alt=""
        />
      </div>
    </div>
  </div>
);

export default HeroComponent;
