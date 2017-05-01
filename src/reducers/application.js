import * as types from "../constants/ActionTypes";
import { fromJS, List } from "immutable";

const initialState = fromJS({
  active_step: 3,
  steps: {
    stacks: [
      {
        description: "NodeJS",
        icon: ["icon-react"],
        isOtro: false,
        name: "react",
        title: "ReactJS"
      },
      {
        description: "NodeJS",
        icon: ["icon-angularjs"],
        isOtro: false,
        name: "angularjs",
        title: "AngularJS"
      },
      {
        description: "Python",
        icon: ["icon-django"],
        isOtro: false,
        name: "django",
        title: "Djago"
      },
      {
        description: "Ruby",
        icon: ["icon-rails"],
        isOtro: false,
        name: "rails",
        title: "Rails"
      },
      {
        description: "JavaScript environment",
        icon: ["icon-nodejs"],
        isOtro: false,
        name: "nodejs",
        title: "NodeJS"
      },
      {
        description: "Functional language",
        icon: ["icon-elixir"],
        isOtro: false,
        name: "elixir",
        title: "Elixir"
      },
      {
        description: "PHP",
        icon: ["icon-yii"],
        isOtro: false,
        name: "yii",
        title: "Yii"
      },
      {
        description: "NodeJS",
        icon: ["icon-ember"],
        isOtro: false,
        name: "ember",
        title: "Ember"
      },
      {
        description: "PHP",
        icon: ["icon-laravel"],
        isOtro: false,
        name: "laravel",
        title: "Laravel"
      },
      // {
      //   description: "Stack",
      //   icon: ["icon-add"],
      //   isOtro: true,
      //   name: "otro",
      //   title: "Otro"
      // }
    ],
    databases: [
      {
        description: "Base de datos mariadb",
        icon: ["icon-mariadb"],
        isOtro: false,
        name: "mariadb",
        title: "MariaDb"
      },
      {
        description: "Base de datos en memoria",
        icon: ["icon-redis"],
        isOtro: false,
        name: "redis",
        title: "Redis"
      },
      {
        description: "Basede datos orientado a documentos",
        icon: ["icon-mongodb"],
        isOtro: false,
        name: "mongodb",
        title: "MongoDB"
      },
      {
        description: "Base de datos relacional",
        icon: ["icon-mysql"],
        isOtro: false,
        name: "mysql",
        title: "MySql"
      },
      {
        description: "Base de datos relacional",
        icon: ["icon-postgresql"],
        isOtro: false,
        name: "postgresql",
        title: "Postgresql"
      },
      {
        description: "Base de datos clave-valor",
        icon: ["icon-cassandra","path1","path2","path3","path1"],
        isOtro: false,
        name: "cassandra",
        title: "Cassandra"
      },
      // {
      //   description: "Base de datos",
      //   icon: ["icon-add"],
      //   isOtro: true,
      //   name: "otro",
      //   title: "Otro"
      // }
    ],
    addons: [
      {
        description: "Módulo de seguridad",
        icon: ["icon-lock"],
        isOtro: false,
        name: "security",
        title: "Seguridad"
      },
      {
        description: "Módulo de copias de seguridad",
        icon: ["icon-backup"],
        isOtro: false,
        name: "backup",
        title: "Copias de seguridad"
      },
      {
        description: "Módulo de CI",
        icon: ["icon-ci"],
        isOtro: false,
        name: "CI",
        title: "CI"
      },
      {
        description: "Módulo de rendimiento",
        icon: ["icon-performance"],
        isOtro: false,
        name: "performance",
        title: "Rendimiento"
      },
      // {
      //   description: "Módulo",
      //   icon: ["icon-add"],
      //   isOtro: false,
      //   name: "otro",
      //   title: "Otro"
      // }
    ]
  }
});

export default function application(state = initialState, action) {
  switch (action.type) {
    case types.SET_EMAIL:
    {
      return state.set("email", action.value.get("email"));
    }
    case types.SET_STACK:
    {
      return state.set("stacks", List.of(action.value.get("stack")));
    }
    case types.REMOVE_STACK:
    {
      return state.set("stacks", List.of());
    }
    case types.SET_DATABASE:
    {
      return state.set("databases", List.of(action.value.get("database")));
    }
    case types.REMOVE_DATABASE:
    {
      return state.set("databases", List.of());
    }
    case types.SET_ADDONS:
    {
      return state.set("addons", state.get("addons")?
        action.value.getIn(["addon", "otro"])?
          state.get("addons").filter(stackFiltered=>
            !stackFiltered.get("otro")
          ).push(action.value.get("addon"))
          : state.get("addons").push(action.value.get("addon"))
        : List.of(action.value.get("addon"))
      );
    }
    case types.REMOVE_ADDONS:
    {
      return state.set("addons", state.get("addons")?
        action.value.getIn(["addon", "otro"])?
          state.get("addons").filter(stackFiltered=>
            !stackFiltered.get("otro")
          )
          : state.get("addons").filter(stackFiltered=>
            stackFiltered !== action.value.get("addon")
          )
        : List.of()
      );
    }
    case types.SET_ACTIVE_STEP:
    {
      return state.set("active_step", action.value.get("active_step"));
    }
    default:
      return state;
  }
}
