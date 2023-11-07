import React from "react";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.body}>
      <div className={style.navbar}>
        <div className={style.navbar_left}>
          <div style={{ width: "8%" }}>
            <img
              style={{ width: "40%" }}
              src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
              alt="logo"
            />
          </div>
          <div className={style.navbar_left_box_pages}>
            <div>
              <p>Product</p>
            </div>
            <div>
              <p>Solutions</p>
            </div>
            <div>
              <p>Open Source</p>
            </div>
            <div>
              <p>Pricing</p>
            </div>
          </div>
        </div>
        <div className={style.navbar_right}>
          <div>
            <div className={style.searchBox}>
              <input
                className={style.searchInput}
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
          <div>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
              }}
              class="button-11"
              role="button"
            >
              Signin
            </button>
          </div>
          <div>
            <button
              style={{
                padding: "5px 15px",
                borderRadius: "2%",
                backgroundColor: "transparent",
                border: "1px solid white",
                color: "white",
              }}
              class="button-4"
              role="button"
            >
              Signup
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "50px",
        }}
      >
        <div>
          <img
            src="https://github.githubassets.com/assets/lines-hero-6c09abf3dd42.svg"
            alt=""
          />
        </div>

        <div>
          <img
            style={{ width: "300px", height: "auto" }}
            src="https://github.githubassets.com/assets/hero-drone-6f6778300d9b.webp"
            alt=""
            class="home-drone position-absolute top-12 right-0 events-none col-3 height-auto js-build-in-item build-in-animate"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
