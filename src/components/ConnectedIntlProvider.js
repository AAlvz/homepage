import { connect } from "react-redux";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";

addLocaleData([...en, ...es]);

function mapStateToProps(state) {
  // const { lang, messages } = state.locales;
  console.log(state);
  return { locale: navigator.language, textComponent:{Text}};
}

export default connect(mapStateToProps)(IntlProvider);
