import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/TrustedBy.scss";
import Cleaverd from '../assets/images/Trusted/Clevered.png'
import DelicateGem from '../assets/images/Trusted/DelicateGem.png'
import IFFCO from '../assets/images/Trusted/IFFCOTokio.png'
import MLJwellery from '../assets/images/Trusted/MLJewellers.png'
import PYkube from '../assets/images/Trusted/PYkube.png'
import RevivingIndia from '../assets/images/Trusted/RevivingIndia.png'
import ScalePad from '../assets/images/Trusted/ScalePad.png'
import RishiIndustries from '../assets/images/Trusted/RishiIndustries.png'
import ControlMap from '../assets/images/Trusted/Controlmap.png'
import NekBnde from '../assets/images/Trusted/nek-bande.png'
import MobileDeals from '../assets/images/Trusted/Mobile_Deals_24.png'
import IPL from '../assets/images/Trusted/IPL.png'

const logos = [
  { name: "Cleverd", url: Cleaverd },
  { name: "DelicateGem", url: DelicateGem},
  { name: "IFFCoTokio", url: IFFCO },
  { name: "MLJwellery", url: MLJwellery },
  { name: "PYkube", url: PYkube },
  { name: "RevivingIndia", url: RevivingIndia },
  { name: "ScalePad", url: ScalePad },
  { name: "RishiIndustries", url: RishiIndustries },
];

const projects = [
      { name: "ControlMap", url: ControlMap },
      { name: "Nek-Bande", url: NekBnde },
      { name: "Mobile_Deals", url: MobileDeals },
      { name: "IPL", url: IPL },
]

export default function TrustedBy() {
  return (
    <div className="container text-center my-5 trusted-by">
      <h3 className="fs-1 fw-bold mb-4">Trusted by</h3>

      {/* Row 1 */}
      <div className="logo-slider mb-3">
        <div className="logo-track">
          {[...logos, ...logos].map((logo, i) => (
            <div key={`row1-${i}`} className="logo-card">
              <img src={logo.url} alt={logo.name} className="img-fluid" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="logo-slider reverse">
        <div className="logo-track">
          {[...projects, ...projects].map((logo, i) => (
            <div key={`row2-${i}`} className="logo-card">
              <img src={logo.url} alt={logo.name} className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
