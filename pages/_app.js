import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}
