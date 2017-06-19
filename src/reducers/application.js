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
        description: "Relational Database",
        icon: ["icon-mariadb"],
        isOtro: false,
        name: "mariadb",
        title: "MariaDb"
      },
      {
        description: "In-memory data structure store",
        icon: ["icon-redis"],
        isOtro: false,
        name: "redis",
        title: "Redis"
      },
      {
        description: "Document Database",
        icon: ["icon-mongodb"],
        isOtro: false,
        name: "mongodb",
        title: "MongoDB"
      },
      {
        description: "Relational Database",
        icon: ["icon-mysql"],
        isOtro: false,
        name: "mysql",
        title: "MySql"
      },
      {
        description: "Document Database",
        icon: ["icon-postgresql"],
        isOtro: false,
        name: "postgresql",
        title: "Postgresql"
      },
      {
        description: "Key value Database",
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
        description: "Security module",
        icon: ["icon-lock"],
        isOtro: false,
        name: "security",
        title: "Security"
      },
      {
        description: "Backups module",
        icon: ["icon-backup"],
        isOtro: false,
        name: "backup",
        title: "Backup"
      },
      {
        description: "CI module",
        icon: ["icon-ci"],
        isOtro: false,
        name: "CI",
        title: "CI"
      },
      {
        description: "Performance module",
        icon: ["icon-performance"],
        isOtro: false,
        name: "performance",
        title: "Performance"
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
    case types.SET_CELLPHONE:
    {
      return state.set("cellphone", action.value.get("cellphone"));
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
      // return state.set("databases", List.of(action.value.get("database")));
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
      // return state.set("databases", List.of());
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
