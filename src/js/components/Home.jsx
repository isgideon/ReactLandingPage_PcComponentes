import React from "react";
import HeroComponent from "./Hero.jsx";
import { randomArray } from "./funciones.jsx";
import CardComponent from "./Cards.jsx";

let componentesCards = [
  {
    image:
      "https://img.pccomponentes.com/articles/1085/10855615/1575-asus-rog-strix-x870e-e-gaming-wifi.jpg",
    title: "Asus ROG Strix X870E-E Gaming WiFi",
    price: 500,
  },
  {
    image:
      "https://img.pccomponentes.com/articles/1065/10657909/1685-team-group-t-force-delta-rgb-ddr5-6000mhz-32gb-2x16gb-cl30-foto.jpg",
    title: "Team Group T-Force Delta RGB DDR5 6000MHz 32GB (2x16GB) CL30",
    price: 16000,
  },
  {
    image:
      "https://img.pccomponentes.com/articles/1095/10954246/1773-tarjeta-grafica-gigabyte-geforce-rtx-5060-windforce-max-oc-8gb-gddr7-reflex-2-rtx-ai-dlss4.jpg",
    title:
      "GIGABYTE GeForce RTX 5060 WindForce Max OC 8GB GDDR7 Reflex 2 RTX AI DLSS4",
    price: 460,
  },
  {
    image:
      "https://img.pccomponentes.com/articles/31/310552/1692-cooler-master-mwe-650-bronze-v2-650w-80-plus-bronze.jpg",
    title: "Cooler Master MWE 650 Bronze V2 650W 80+ Bronze",
    price: 290,
  },
  {
    image:
      "https://img.pccomponentes.com/articles/1086/10860456/1477-amd-ryzen-7-9800x3d-47-52ghz-caracteristicas.jpg",
    title: "AMD Ryzen 7 9800X3D 47-52GHz",
    price: 599,
  },
  {
    image:
      "https://img.pccomponentes.com/articles/1064/10648534/1952-samsung-990-pro-2tb-ssd-pcie-40-nvme-m2.jpg",
    title: "Samsung 990 Pro 2TB SSD PCIe 4.0 NVMe M.2",
    price: 299,
  },
  {
    image:
      "https://img.pccomponentes.com/articles/1086/10863541/1623-forgeon-solum-refrigeracion-liquida-240-argb-kit-liquid-cooler-blanca-comprar.jpg",
    title:
      "Forgeon Solum Refrigération Liquide 240 ARGB Kit Liquid Cooler Blanche Comprar",
    price: 99,
  },
];

//create your first component
const Home = () => (
  <>
    <HeroComponent />
    <div className="container my-5">
      <div className="row g-4">
        {componentesCards.map((componente, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <CardComponent
              image={componente.image}
              title={componente.title}
              price={componente.price}
            />
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Home;
