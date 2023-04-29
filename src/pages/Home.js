import { Button, Container, Row, Col, Table } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <center>
        <h2>TOURS</h2>
      </center>
      &nbsp;
      <Container size="sm">
        <Row>
          <Col>
            <Table>
              <tbody>
                <tr>
                  <td>
                    <h5>JUL16</h5>
                  </td>
                  <td>DETROIT, MI</td>
                  <td>DTE ENERGY MUSIC THEATRE</td>
                  <td>
                    <Button variant="primary">BUY TICKETS</Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>JUL19</h5>
                  </td>
                  <td>TORONTO,ON</td>
                  <td>BUDWEISER STAGE</td>
                  <td>
                    <Button variant="primary">BUY TICKETS</Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>JUL 22</h5>
                  </td>
                  <td>BRISTOW, VA</td>
                  <td>JIGGY LUBE LIVE</td>
                  <td>
                    <Button variant="primary">BUY TICKETS</Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>JUL 29</h5>
                  </td>
                  <td>PHOENIX, AZ</td>
                  <td>AK-CHIN PAVILION</td>
                  <td>
                    <Button variant="primary">BUY TICKETS</Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>AUG 2</h5>
                  </td>
                  <td>LAS VEGAS, NV</td>
                  <td>T-MOBILE ARENA</td>
                  <td>
                    <Button variant="primary">BUY TICKETS</Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>AUG 7</h5>
                  </td>
                  <td>CONCORD, CA</td>
                  <td>CONCORD PAVILION</td>
                  <td>
                    <Button variant="primary">BUY TICKETS</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
