import AxiosSample from "../Axios/AxiosSample";
import OpenAiSample from "../OpenAi/OpenAiSample";
import StableDiffusionMain from "../StableDiffusion/StableDiffusionMain";

let id = 0;

const navItems = [
  {
    id: id++,
    order: 2,
    name: "채팅",
    isSelected: false,
    target: <OpenAiSample />,
  },
  {
    id: id++,
    order: 1,
    name: "입으로그리기",
    isSelected: false,
    target: <StableDiffusionMain />,
  },
  {
    id: id++,
    order: 3,
    name: "Axios",
    isSelected: false,
    target: <AxiosSample />,
  },
];

export default navItems;
