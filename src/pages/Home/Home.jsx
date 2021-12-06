import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="container">
        <section className="row">
          <div className="col-md-12">
            <div className="p-5 m-5 mb-4 bg-light rounded-3">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Gestion des utilisateurs</h1>
                <p className="col-md-8 fs-4">
                  Le but de l'exercice sera de créer une application single
                  page, nous permettant de naviguer entre plusieurs pages sans
                  recharger le navigateur.
                </p>
                <Link
                  to="/users"
                  className="btn btn-primary btn-lg"
                  type="button"
                >
                  Gestion des utilisateurs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
