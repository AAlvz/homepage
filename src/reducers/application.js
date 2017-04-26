import * as types from "../constants/ActionTypes";
import { fromJS, List } from "immutable";

const initialState = fromJS({
  active_step: 0,
  steps: {
    stacks: {
      label: "Stack",
      options: [
        {
          description: "NodeJS",
          icon: ["icon-react",1],
          isOtro: false,
          name: "react"
        },
        {
          description: "Functional programming language",
          icon: ["icon-erlang",1],
          isOtro: false,
          name: "erlang"
        },
        {
          description: "NodeJS",
          icon: ["icon-angularjs",1],
          isOtro: false,
          name: "angularjs"
        },
        {
          description: "Python",
          icon: ["icon-django",1],
          isOtro: false,
          name: "django"
        },
        {
          description: "Ruby",
          icon: ["icon-rails",1],
          isOtro: false,
          name: "rails"
        },
        {
          description: "JavaScript environment",
          icon: ["icon-nodejs",1],
          isOtro: false,
          name: "nodejs"
        },
        {
          description: "PHP",
          icon: ["icon-yii",1],
          isOtro: false,
          name: "yii"
        },
        {
          description: "NodeJS",
          icon: ["icon-ember",1],
          isOtro: false,
          name: "ember"
        },
        {
          description: "Javascript",
          icon: ["icon-meteor",1],
          isOtro: false,
          name: "meteor"
        },
        {
          description: "Stack",
          icon: ["icon-add",1],
          isOtro: true,
          name: "otro"
        }
      ]
    },
    databases: [
      {
        description: "Base de datos clave-valor",
        icon: ["icon-cassandra",4],
        isOtro: false,
        name: "cassandra"
      },
      {
        description: "Base de datos en memoria",
        icon: ["icon-redis",1],
        isOtro: false,
        name: "redis"
      },
      {
        description: "Basede datos orientado a documentos",
        icon: ["icon-mongodb",1],
        isOtro: false,
        name: "mongodb"
      },
      {
        description: "Base de datos relacional",
        icon: ["icon-mysql",1],
        isOtro: false,
        name: "mysql"
      },
      {
        description: "Base de datos relacional",
        icon: ["icon-postgresql",1],
        isOtro: false,
        name: "postgresql"
      },
      {
        description: "Base de datos",
        icon: ["icon-add",1],
        isOtro: true,
        name: "otro"
      }
    ],
    addons: {

    }
  }
});

export default function application(state = initialState, action) {
  switch (action.type) {
    case types.SET_PROJECT_NAME:
    {
      return state.set("project_name", action.value.get("project_name"));
    }
    case types.SET_STACK:
    {
      return state.set("stacks", state.get("stacks")?
        action.value.getIn(["stack", "otro"])?
          state.get("stacks").filter(stackFiltered=>
            !stackFiltered.get("otro")
          ).push(action.value.get("stack"))
          : state.get("stacks").push(action.value.get("stack"))
        : List.of(action.value.get("stack"))
      );
    }
    case types.REMOVE_STACK:
    {
      return state.set("stacks", state.get("stacks")?
        action.value.getIn(["stack", "otro"])?
          state.get("stacks").filter(stackFiltered=>
            !stackFiltered.get("otro")
          )
          : state.get("stacks").filter(stackFiltered=>
            stackFiltered !== action.value.get("stack")
          )
        : List.of()
      );
    }
    case types.SET_DATABASE:
    {
      return state.set("database", action.value.get("database"));
    }
    case types.SET_ADDONS:
    {
      return state.set("addons", action.value.get("addons"));
    }
    case types.SET_ACTIVE_STEP:
    {
      return state.set("active_step", action.value.get("active_step"));
    }
    default:
      return state;
  }
}
