import React from "react";
import DHIlab from "./DHIlab/DHIlab";

const Navbar = () => {
  let isArrayFunction = (inputArray) => {
    if (Array.isArray(inputArray) && inputArray.length !== 0) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div id="Navbar">
      <div class="usa-overlay"></div>
      <header class="usa-header usa-header--basic usa-header--megamenu padding-bottom-4 padding-top-6">
        <div class="usa-nav-container">
          <div class="usa-navbar">
            <div class="usa-logo margin-0" id="basic-mega-logo">
              <em class="usa-logo__text">
                <div className="display-flex flex-row align-items-center">
                  <a href="#" title="Home" aria-label="Home">
                    <DHIlab />
                  </a>
                  <div className="logoj">
                        <img src="https://document-export.canva.com/VL9Wo/DAE_uVVL9Wo/44/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220710%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220710T022019Z&X-Amz-Expires=62079&X-Amz-Signature=8b1b3744a47ea245792a82c0fe789338a55caf188d9022996cd678e30dfaa149&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2010%20Jul%202022%2019%3A34%3A58%20GMT"></img>
                  </div>
                  <h3 className="display-inline-block">Symptom Checker</h3>
                </div>
              </em>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
