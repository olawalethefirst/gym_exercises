import gym from "../assets/icons/gym.png";
import back from "../assets/icons/back.png";
import cardio from "../assets/icons/cardio.png";
import chest from "../assets/icons/chest.png";
import lowerarms from "../assets/icons/lowerarms.png";
import lowerlegs from "../assets/icons/lowerlegs.png";
import neck from "../assets/icons/neck.png";
import shoulders from "../assets/icons/shoulders.png";
import upperarms from "../assets/icons/upperarms.png";
import upperlegs from "../assets/icons/upperlegs.png";
import waist from "../assets/icons/waist.png";
import search from "../assets/icons/search.png";

const resolveBodyPartUri = (bodyPart: string) => {
  switch (bodyPart.replaceAll(" ", "")) {
    case "back":
      return back;
    case "cardio":
      return cardio;
    case "chest":
      return chest;
    case "lowerarms":
      return lowerarms;
    case "lowerlegs":
      return lowerlegs;
    case "neck":
      return neck;
    case "shoulders":
      return shoulders;
    case "upperarms":
      return upperarms;
    case "upperlegs":
      return upperlegs;
    case "waist":
      return waist;
    case "search":
      return search;
    default:
      return gym;
  }
};

export default resolveBodyPartUri;
