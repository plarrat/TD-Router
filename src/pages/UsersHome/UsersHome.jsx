import { Button } from "react-bootstrap";
export default function UsersHome() {
  return (
    <div>
      <section className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <h1>Gestion des utilisateurs</h1>
            <hr />

            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Prénom</th>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Modifier</th>
                  <th>Supprimer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Philippe</td>
                  <td>Larrat</td>
                  <td>plarat@plarrat.fr</td>
                  <td>
                    <Button variant="warning">Modifier</Button>
                  </td>
                  <td>
                    <Button variant="danger">Supprimer</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
