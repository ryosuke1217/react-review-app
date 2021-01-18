import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RootPage } from "./pages/Root.js";
import { RestaurantDetailPage } from "./pages/RestaurantDetail.js";
import { RestaurantListPage } from "./pages/RestaurantList.js";

function Header() {
  return (
    <section className="hero is-warning">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            タイトル
            <br className="is-hidden-tablet" />
            レビュー
          </h1>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer ">
      <div className="content">
        <p className="has-text-centered">
          test-text
        </p>
      </div>
    </footer>
  );
}

export function App() {
  return (
    <Router>
      <Header />
      <section className="section has-background-warning-light">
        <div className="container">
          <div className="block has-text-right">
            <button className="button is-warning is-inverted is-outlined">
              ログイン
            </button>
          </div>
          <Switch>
            <Route path="/" exact>
              <RootPage />
            </Route>
            <Route path="/restaurants" exact>
              <RestaurantListPage />
            </Route>
            <Route path="/restaurants/:restaurantId">
              <RestaurantDetailPage />
            </Route>
          </Switch>
        </div>
      </section>
      <Footer />
    </Router>
  );
}