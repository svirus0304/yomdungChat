const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const stableDiffusionApi = async (props, callback) => {
  const data = {
    key: process.env.REACT_APP_STABLE_DIFFUSION_KEY,
    prompt: props.prompt,
    negative_prompt: props.negative_prompt,
    width: props.width,
    height: props.height,
    samples: props.samples,
    num_inference_steps: props.num_inference_steps,
    safety_checker: props.safety_checker,
    enhance_prompt: props.enhance_prompt,
    seed: props.seed,
    guidance_scale: props.guidance_scale,
    webhook: props.webhook,
    track_id: props.track_id,
  };

  const config = {
    method: "post",
    url: "https://stablediffusionapi.com/api/v3/text2img",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  console.log(config);
  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      callback(null, JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
      callback(error, null);
    });
};

module.exports = stableDiffusionApi;
