import React from "react";
import Wwk from "../asset/wwk.png";
import Img from "../asset/img.png";
import Wahyu from "../asset/wahyu.png";

import { Container, Row, Col, Button } from "react-bootstrap";

function LandingPage() {
  return (
    <div>
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <h1
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                Sekolah SMA Negeri 6 Metro
              </h1>
              <img
                src="https://smanegeri6metro.sch.id/img/page/1588650632411.jpg"
                alt=""
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  margin: "20px 0",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
                }}
              />
              <p>
                Di sekolah kami menyediakan jenjang pendidikan menengah pada
                pendidikan formal di Indonesia yang dilaksanakan setelah lulus
                dari Sekolah Menengah Pertama (SMP) atau sederajat. Jenjang
                pendidikan ini dimulai dari Kelas 10 sampai Kelas 12 dengan
                siswa yang umumnya berusia 15-18 tahun.
              </p>
              <a className="text-decoration-none" href="https://smanegeri6metro.sch.id">

              <Button variant="primary">Lihat Lebih Lanjut</Button>
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="features mt-5">
        <Container>
          <Row>
            <Col
              md={4}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                backgroundColor: "#f9f9f9",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src="https://smanegeri6metro.sch.id/img/galeri/1653122069468.jpeg"
                alt=""
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  margin: "20px 0",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
                }}
              />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
            <Col
              md={4}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                backgroundColor: "#f9f9f9",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src="https://smanegeri6metro.sch.id/img/post/1588661617510.jpg"
                alt=""
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  margin: "20px 0",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
                }}
              />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
            <Col
              md={4}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                backgroundColor: "#f9f9f9",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src="https://smanegeri6metro.sch.id/img/galeri/1653122237015.jpg"
                alt=""
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  margin: "20px 0",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
                }}
              />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <footer>
        <Container
          className="mt-5"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            backgroundColor: "#4070f4",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Row>
            <Col>
              <img
                src="https://storage.googleapis.com/s.mysch.id/picture/92209272LogoSMPN6Metrotransparan.png"
                alt=""
                style={{ width: "100px" }}
              />
            </Col>
            <div
              className="container"
              style={{ display: "flex", alignItems: "center", margin: "35px" }}
            >
              <div
                className="img-container"
                style={{ width: "10px", float: "left", marginRight: "10px" }}
              >
                <img src={Wwk} alt="" style={{ width: "50px" }} />
              </div>
              <p style={{ color: "white", margin: "28px" }}>
                sma_negeri6_metro
              </p>

              <div
                className="img-container"
                style={{ width: "10px", float: "left", marginRight: "10px" }}
              >
                <img
                  src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-facebook-icon-png-image_9015416.png"
                  alt=""
                  style={{ width: "45px" }}
                />
              </div>
              <p style={{ color: "white", margin: "28px" }}>
                sma negeri 6 metro
              </p>

              <div
                className="img-container"
                style={{ width: "10px", float: "left", marginRight: "10px" }}
              >
                <img src={Img} alt="" style={{ width: "48px" }} />
              </div>
              <p style={{ color: "white", margin: "28px" }}>
                smanegeri_@6metro
              </p>

              <div
                className="img-container"
                style={{ width: "10px", float: "left", marginRight: "10px" }}
              >
                <img src={Wahyu} alt="" style={{ width: "50px" }} />
              </div>
              <p style={{ color: "white", margin: "28px" }}>0882-0036-54586</p>
            </div>

            <Col>
              <img
                src="https://smanegeri6metro.sch.id/img/page/1588650632411.jpg"
                alt=""
                style={{ width: "865px", height: "none" }}
              />
            </Col>
            <p className="mt-4" style={{ color: "white" }}>
              SMA 6 METRO &copy; 2024
            </p>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default LandingPage;
