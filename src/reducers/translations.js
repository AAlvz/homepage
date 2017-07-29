import { fromJS } from "immutable";

const initialState = fromJS({
  en: {
    get_integrated_environments_in_one_click: "Get integrated environments in one click",
    get_integrated_environments_in_one_click_image: "development-environment.png",
    integrated_environments_section: {
      local_image_url: "../imgs/development-environment.png",
      local_image_url_2x: "../imgs/development-environment_2x.png",
      production_image_url: "../imgs/test-environment.png",
      production_image_url_2x: "../imgs/test-environment_2x.png",
      test_image_url: "../imgs/production-environment.png",
      test_image_url_2x: "../imgs/production-environment_2x.png",
      title: "Get integrated environments in one click"
    },
    menu: {
      blog: "Blog",
      demo: "Demo",
      help: "Help",
      home: "Home",
      login: "Login"
    },
    slider: {
      button: "Become Efficient Now",
      subtitle: "Focus on development. We handle operations.",
      title: "The perfect DevOps automation platform",
      title2: "for software development teams"
    }
  },
  es: {
    get_integrated_environments_in_one_click: "Get integrated environments in one click",
    get_integrated_environments_in_one_click_image: "development-environment.png",
    integrated_environments_section: {
      local_image_url: "../imgs/development-environment.png",
      local_image_url_2x: "../imgs/development-environment_2x.png",
      production_image_url: "../imgs/test-environment.png",
      production_image_url_2x: "../imgs/test-environment_2x.png",
      test_image_url: "../imgs/production-environment.png",
      test_image_url_2x: "../imgs/production-environment_2x.png",
      title: "Get integrated environments in one click"
    },
    menu: {
      blog: "Blog",
      demo: "Demo",
      help: "Ayuda",
      home: "Inicio",
      login: "Login"
    },
    slider: {
      button: "Become Efficient Now",
      subtitle: "Focus on development. We handle operations.",
      title: "The perfect DevOps automation platform",
      title2: "for software development teams"
    }
  }
});

export default function translations(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
