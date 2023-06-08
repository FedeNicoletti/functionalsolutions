import "./brand.css";
import { marca, mila, NiT, ponce } from "./import";

export default function Brand() {
  return (
    <div className="fs__brand section__padding">
      <div>
        <img src={marca} alt="marca" />
      </div>
      <div>
        <img src={mila} alt="mila" />
      </div>
      <div>
        <img src={NiT} alt="NiT" />
      </div>
      <div>
        <img src={ponce} alt="ponce" />
      </div>
    </div>
  );
}
