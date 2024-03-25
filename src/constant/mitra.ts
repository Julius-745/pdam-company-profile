import indo from "../assets/image/indmrt.png";
import alfa from "../assets/image/alfmrt.png";
import jatim from "../assets/image/bgJatim.png";
import bri from "../assets/image/bgBRI.png";

    export interface IMitra {
    name: string;
    image: any;
  }
  
  export const MitraData: Array<IMitra> = [
    {
      name: "indomaret",
      image: indo,
    },
    {
      name: "bank jatim",
      image: jatim,
    },
    {
      name: "alfamart",
      image: alfa,
    },
    {
        name: "bank bri",
        image: bri,
    },
  ];