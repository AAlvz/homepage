import { connect } from "react-redux";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";

addLocaleData([...en, ...es]);

function mapStateToProps(state) {
  return {
    locale: state.applicationAppState.get("navigator_language"),
    messages: state.translationsAppState.get(state.applicationAppState.get("navigator_language")).toJS()
  };
}

export default connect(mapStateToProps)(IntlProvider);
