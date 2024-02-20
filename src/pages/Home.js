import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../assets/image.png"
import Type from "../components/Type";
import Draw from "../components/Draw";

function Home() {
    const styles = {
        landing: {
          height: "calc(100% - 93px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          overflowX: "hidden",
        },

      };
  return (
    <main className="landing container" style={styles.landing}>
    <section>
  
            <Draw/>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
        
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M 
                <strong className="main-name"> JYOTHISS JAYADEVAN</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{   marginTop:-45}}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "590px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      </section>
      </main>

  );
}

export default Home;
