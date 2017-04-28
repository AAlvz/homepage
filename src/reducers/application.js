import * as types from "../constants/ActionTypes";
import { fromJS, List } from "immutable";

const initialState = fromJS({
  active_step: 0,
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
        description: "Functional programming language",
        icon: ["icon-erlang"],
        isOtro: false,
        name: "erlang",
        title: "Erlang"
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
        description: "Javascript",
        icon: ["icon-meteor"],
        isOtro: false,
        name: "meteor",
        title: "Meteor"
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
        description: "Base de datos clave-valor",
        icon: ["icon-cassandra","path1","path2","path3","path1"],
        isOtro: false,
        name: "cassandra",
        title: "Cassandra"
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
        description: "Módulo de escalabilidad",
        icon: ["icon-scalability"],
        isOtro: false,
        name: "scalability",
        title: "Escalabilidad"
      },
      {
        description: "Módulo de Rendimiento",
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
      return state.set("databases", state.get("databases")?
        action.value.getIn(["database", "otro"])?
          state.get("databases").filter(stackFiltered=>
            !stackFiltered.get("otro")
          ).push(action.value.get("database"))
          : state.get("databases").push(action.value.get("database"))
        : List.of(action.value.get("database"))
      );
    }
    case types.REMOVE_DATABASE:
    {
      return state.set("databases", state.get("databases")?
        action.value.getIn(["database", "otro"])?
          state.get("databases").filter(stackFiltered=>
            !stackFiltered.get("otro")
          )
          : state.get("databases").filter(stackFiltered=>
            stackFiltered !== action.value.get("database")
          )
        : List.of()
      );
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
