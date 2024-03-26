import indo from "../assets/image/indmrt.png";
import alfa from "../assets/image/alfmrt.png";
import jatim from "../assets/image/bgJatim.png";
import dana from "../assets/image/dana.png";
import shoppe from "../assets/image/shoppe.png";
import tokopedia from "../assets/image/tokopedia.png";

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
        name: "dana",
        image: dana,
    },
    {
      name: "shoppe",
      image: shoppe,
    },
    {
      name: "tokopedia",
      image: tokopedia,
    },
  ];