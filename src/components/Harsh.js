import React, { useState, useEffect } from "react";


function Harsh() {
  const [randomCharacter, setRandomCharacter] = useState("");
  const [captach, setcaptcha] = useState("");
  const handlesearch = (e) => {
    const data = e.target.value;
  };

  useEffect(() => {
    generateRandomCharacter();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const generateRandomCharacter = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const minCharacters = 6;
    let randomCode = "";
    for (let i = 0; i < minCharacters; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomCode += characters.charAt(randomIndex);
    }
    setRandomCharacter(randomCode);
  };
  const refrestbtn = () => {
    generateRandomCharacter();
  };

  const handlecaptchs = (e) => {
    const data1 = e.target.value;
    setcaptcha(data1);
  };
  const handlesubmit = () => {
    if (setcaptcha === randomCharacter) {
      const pdfDisplayElement = document.querySelector(".pdf-display");
      // Hide the element if it exists
      if (pdfDisplayElement) {
        pdfDisplayElement.style.display = 'block';
    }
    }
  };

  const dashedStyle = {
    marginTop: "2px",
    borderBottom: "1px dashed #000",
  };

  return (
    <>
      <div className="wrapper">
        <header className="main-header hide-mob">
          <div className="site-header">
            <nav
              className="navbar navbar-expand-lg "
              style={{ backgroundColor: "black" }}
            >
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="/">
                    <img
                      src="https://esewa.punjab.gov.in/ui-assets/img/Emblem-Punjab-White.svg"
                      className="pun-logo"
                    />
                    <strong>Digital Punjab</strong>
                    <span>Punjab Enterprise Architecture</span>
                  </a>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a href="register">
                        <span className="glyphicon glyphicon-user"></span> Sign
                        Up
                      </a>
                    </li>
                    <li>
                      <a href="login">
                        <span className="glyphicon glyphicon-log-in"></span>
                        &nbsp; Citizen Login
                      </a>
                    </li>
                    <li>
                      <a href="actor-login">
                        <span className="glyphicon glyphicon-log-in"></span>
                        &nbsp; Official Login
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        Back To Home &nbsp;
                        <i className="	glyphicon glyphicon-home"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <div className="content-wrapper" style={{ marginLeft: "0px" }}>
          <center>
            <section className="content-header container center">
              <h3>Online Document Verificaiton for eSewa issued Documents</h3>
              <h5 style={{ color: "red" }}>
                In case of any issue while verifying the certificate in Chrome
                browser, please switch to Mozilla Firefox browser.
              </h5>
            </section>
          </center>
          <div
            className="content container"
            ng-controller="outputVerificationCtrl"
          >
            <div className="hpanel hblue">
              <div className="panel-body">
                <div className="form-horizontal">
                  <div className="row">
                    <div className="col-md-12 container center-content">
                      <div className="row">
                        <div className="col-md-4">
                          <form ng-submit="SearchDocument()">
                            <div className="form-group">
                              <table className="table Esewa-left-col">
                                <tbody>
                                  <tr>
                                    <th scope="col-12">
                                      Document Serial Number&nbsp;
                                      <span className="text-danger">
                                        &nbsp;* (Eg. ES1111111)
                                      </span>
                                    </th>
                                  </tr>
                                  <tr>
                                    <td>
                                      <input
                                        id="docSrNo"
                                        onChange={handlesearch}
                                        type="text"
                                        maxLength="20"
                                        className="text form-control"
                                        ng-model="veriData.docSrNo"
                                        ErrorMessage="Please enter Document Serial Number"
                                        placeholder="Enter Document Serial Number"
                                        required
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="col">Captcha</th>
                                  </tr>
                                  <tr>
                                    <td colSpan="5">
                                      <div className="form-group">
                                        <div className="well well-sm">
                                          <div className="text-center">
                                            <h1
                                              className="text"
                                              style={{
                                                marginTop: "2px",
                                                dashedStyle,
                                              }}
                                            >
                                              {randomCharacter}
                                            </h1>
                                            <span
                                              onClick={refrestbtn}
                                              className="glyphicon glyphicon-refresh"
                                            ></span>
                                            <div
                                              vc-recaptcha
                                              style={{
                                                marginBottom: "25px",
                                              }}
                                              theme="'light'"
                                              key="userCaptchaInput.key"
                                              on-create="setWidgetId(widgetId)"
                                              on-success="setResponse(response)"
                                              on-expire="cbExpiration()"
                                            ></div>
                                          </div>

                                          <div className="text-center">
                                            <input
                                              type="text"
                                              id="defaultReal"
                                              onChange={handlecaptchs}
                                              autoComplete="off"
                                              ng-model="veriData.recaptcha"
                                              className="form-control"
                                              name="defaultReal"
                                              required
                                            />
                                            <input
                                              type="hidden"
                                              id="defaultRealHashnew"
                                              className="form-control"
                                              placeholder="enter captcha code"
                                              name="defaultRealHashnew"
                                              required
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                                <tfoot>
                                  <tr>
                                    <td colSpan="2">
                                      <button
                                        id="submit"
                                        className="btn btn-info"
                                        type="submit"
                                        onClick={handlesubmit}
                                      >
                                        Search
                                      </button>
                                    </td>
                                  </tr>
                                </tfoot>
                              </table>
                            </div>
                          </form>
                        </div>
                        <div className="col-md-8">
                          <iframe
                            className="pdf-display harsh"
                            src="/harsh.pdf"
                            style={{ width: "100%", height: "80vh", display:'block' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12" style={{ color: "red" }}>
              <p>
                <strong>*Important*</strong> In case duplicate or multiple
                copies of certificates are issued against an original record,
                only the original certificate will appear on the verification
                link for authentication purposes. The contents of the duplicate
                copy are to be compared with the Certificate/Record that
                appeared on the verification&nbsp;link
              </p>
            </div>
            <section>
              <div className="row">
                <div className="col-xs-12 text-center bg-navy">
                  <a href="https://india.gov.in/" target="_blank">
                    <img
                      src="https://esewa.punjab.gov.in/ui-assets/img/india_gov_logo.png"
                      alt="india_gov_logo"
                      className="foot-indiagv"
                    />
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="http://www.digitalindia.gov.in/" target="_blank">
                    <img
                      src="https://esewa.punjab.gov.in/ui-assets/img/digital_india_logo.png"
                      alt="digital_india_logo"
                      className="marg-footer"
                    />
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="https://mygov.in/" target="_blank">
                    <img
                      src="https://esewa.punjab.gov.in/ui-assets/img/mygov-footer-logo.png"
                      alt="mygov-logo"
                      className="marg-footer"
                    />
                  </a>
                </div>
              </div>
            </section>
            <section className="landing-footer">
              <a href="#">Government of Punjab, India</a>
              &nbsp;|&nbsp;
              <a href="/notifications">Notifications</a>
              &nbsp;|&nbsp;
              <a href="#">Contact Us</a>
              &nbsp;|&nbsp;
              <a href="#">FeedBack</a>
              &nbsp;|&nbsp;
              <a href="#">National Portal of India</a>
              &nbsp;|&nbsp;
              <a href="#">Terms of Use</a>
              &nbsp;|&nbsp;
              <a href="#">FAQs</a>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Harsh;
