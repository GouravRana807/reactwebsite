import React from 'react';
import './App.css';
import $ from 'jquery';

const App = () => {
  window.onload = function () {
    $('.nav').click(function () {
      $('#mySidenav').css('width', '70px');
      $('#main').css('margin-left', '70px');
      $('.logo').css('visibility', 'hidden');
      $('.logo span').css('visibility', 'visible');
      $('.logo span').css('margin-left', '-10px');
      $('.icon-a').css('visibility', 'hidden');
      $('.icons').css('visibility', 'visible');
      $('.icons').css('margin-left', '-8px');
      $('.nav').css('display', 'none');
      $('.nav2').css('display', 'block');
    });

    $('.nav2').click(function () {
      $('#mySidenav').css('width', '300px');
      $('#main').css('margin-left', '300px');
      $('.logo').css('visibility', 'visible');
      $('.icon-a').css('visibility', 'visible');
      $('.icons').css('visibility', 'visible');
      $('.nav').css('display', 'block');
      $('.nav2').css('display', 'none');
    });
  };
  return (
    <>
      <div>
        <div id="mySidenav" className="sidenav">
          <p className="logo">
            <span>
              <img
                className="yoj"
                src="../public/img/icons8-image-30.png"
                width="30px"
                height="40px"
                alt=""
              />
            </span>
            LAUNDRY
          </p>
          <a href="#" className="icon-a ">
            <img
              className="imgg fa fa-list icons"
              src="../img/icons8-home-30.png"
              alt=""
              style={{ visibility: 'visible', marginLeft: '8px' }}
            />{' '}
            Dashboard
          </a>
          <a href="#" className="icon-a">
            <img
              className="imgg fa fa-list icons"
              src="../img/order.png"
              alt=""
            />
            Pos
          </a>
          <a href="#" className="icon-a">
            <img
              className="imgg fa fa-list icons"
              src="../img/order.png"
              alt=""
            />
            Orders
          </a>
          <a href="#" className="icon-a">
            <img
              className="imgg fa fa-list icons"
              src="../img/menu.png"
              alt=""
            />
            Order Status Screen
          </a>
          <a href="#" className="icon-a">
            <img
              className="imgg fa fa-list icons"
              src="../img/icons8-fugue-30.png"
              alt=""
            />
            Expensive
          </a>
          <a href="#" className="icon-a">
            <img
              className="imgg fa fa-list icons"
              src="../img/order.png"
              alt=""
            />
            Customers
          </a>
          <a href="#" className="icon-a">
            <img
              className="imgg fa fa-list icons"
              src="../img/order.png"
              alt=""
            />
            Services
          </a>
          <a href="#" className="icon-a">
            <img
              className="imgg fa fa-list icons"
              src="../img/icons8-chart-bar-48.png"
              alt=""
            />
            Reports
          </a>
          <a href="#" className="icon-a">
            <img
              className="imgg fa fa-list icons"
              src="../img/icons8-setting-48.png"
              alt=""
            />
            Tools
          </a>
          <a href="#" className="icon-a">
            <img
              className="imgg fa fa-list icons"
              src="../img/icons8-fugue-30.png"
              alt=""
            />
            Logout
          </a>
        </div>
        <div id="main">
          <div className="head">
            <div className="col-div-6">
              <span
                style={{
                  fontSize: '30px',
                  cursor: 'pointer',
                  color: 'rgb(22, 21, 21)',
                  position: 'relative',
                  zIndex: '900',
                }}
                className="nav"
              >
                ☰
              </span>
              <span
                style={{
                  fontSize: '30px',
                  cursor: 'pointer',
                  color: 'rgb(22, 21, 21)',
                  position: 'relative',
                  zIndex: '900',
                }}
                className="nav2"
              >
                ☰
              </span>
            </div>

            <div className="col-div-6">
              <div className="profile">
                <div className="inm">
                  <img
                    className="marj imgg"
                    src="../img/icons8-plus-50.png"
                    alt=""
                  />
                  <img
                    className="marj imgg"
                    src="../img/icons8-fugue-30.png"
                    alt=""
                  />
                  <img
                    className="marj imgg"
                    src="../img/icons8-plus-50.png"
                    alt=""
                  />
                </div>
                <div className="inm2">
                  <select id="English" className="ino3">
                    <option value=" English">English</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>

          <div className="clearfix"></div>
          <br />
          <div className="loke">
            <div>
              <div className="uid">
                <div className="yahoo">
                  <div className="box">
                    <p>
                      PENDING ORDER
                      <br />
                      <span>202</span>
                    </p>
                    <img
                      className="fa fa-tasks box-icon"
                      src="../img/shopping-bag.png"
                      width={60}
                      alt=""
                    />
                  </div>
                </div>
                <div className="yahoo">
                  <div className="box">
                    <p>
                      PROCESSING ORDER
                      <br />
                      <span>99</span>
                    </p>
                    <img
                      className="fa fa-tasks box-icon"
                      src="../img/atom.png"
                      width={60}
                      alt=""
                    />
                  </div>
                </div>
                <div className="yahoo">
                  <div className="box">
                    <p>
                      READY TO DELIVER
                      <br />
                      <span>263</span>
                    </p>
                    <img
                      className="fa fa-tasks box-icon"
                      src="../img/thumbs-down.png"
                      width={60}
                      alt=""
                    />
                  </div>
                </div>
                <div className="yahoo">
                  <div className="box">
                    <p>
                      DELIVERED ORDERS
                      <br />
                      <span>347</span>
                    </p>
                    <img
                      className="fa fa-tasks box-icon"
                      src="../img/check.png"
                      width={60}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
              <br />
              <br />
            </div>

            <div className="chrome">
              <div className="bot">
                <div className="tim">
                  <div>
                    <h2>Today's Delivery</h2>
                  </div>
                  <div className="tim2">
                    <div>
                      <input
                        className="ino"
                        type="search"
                        name="Search Here"
                        placeholder="Search Here"
                        id=""
                      />
                    </div>
                    <div>
                      <select id="All Orders" className="ino2">
                        <option value="Single Orders">All Orders</option>
                        <option value="Multiple Orders">Single Orders</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="ktiff">
                  <div className="otiff">
                    <div className="tiff orange">
                      <div className="odd">
                        <p>98659865</p>
                        <p>ORD-0951</p>
                      </div>
                      <div>
                        <img src="../img/shirt.png" alt="" width="25px" />
                      </div>
                    </div>
                    <div className="tiff redd">
                      <div className="odd">
                        <p>98659865</p>
                        <p>ORD-0951</p>
                      </div>
                      <div>
                        <img src="../img/shirt.png" alt="" width="25px" />
                        <img src="../img/shirt.png" alt="" width="25px" />
                      </div>
                    </div>
                    <div className="tiff greyy">
                      <div className="odd">
                        <p>98659865</p>
                        <p>ORD-0951</p>
                      </div>
                      <div>
                        <img src="../img/cap.png" alt="" width="25px" />
                      </div>
                    </div>
                  </div>
                  <div className="otiff1">
                    <div className="tiff greyy">
                      <div className="odd">
                        <p>98659865</p>
                        <p>ORD-0951</p>
                      </div>
                      <div>
                        <img src="../img/shirt.png" alt="" width="25px" />
                        <img src="../img/cap.png" alt="" width="25px" />
                      </div>
                    </div>
                    <div className="tiff skyy">
                      <div className="odd">
                        <p>98659865</p>
                        <p>ORD-0951</p>
                      </div>
                      <div>
                        <img src="../img/shirt.png" alt="" width="25px" />
                        <img src="../img/shirt.png" alt="" width="25px" />
                        <img src="../img/cap.png" alt="" width="25px" />
                      </div>
                    </div>
                    <div className="tiff skyy">
                      <div className="odd">
                        <p>98659865</p>
                        <p>ORD-0951</p>
                      </div>
                      <div>
                        <img src="../img/cap.png" alt="" width="25px" />
                        <img src="../img/shirt.png" alt="" width="25px" />
                        <img src="../img/shirt.png" alt="" width="25px" />
                        <img src="../img/shirt.png" alt="" width="25px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bot2">
                <h2 className="ov">Overview</h2>
                <div className="overview">
                  <div className="boxd ee">
                    <div className="circles"></div>
                  </div>
                </div>

                <div className="tomm">
                  <div className="fld">
                    <div className="fl">
                      <div className="colr"></div>
                      <p>Pending</p>
                    </div>
                    <div className="fl rma">
                      <div className="colrye"></div>
                      <p>Processing</p>
                    </div>
                    <div></div>
                  </div>
                  <div className="fld">
                    <div className="fl">
                      <div className="colrgre"></div>
                      <p>Ready to deliver</p>
                    </div>
                    <div className="fl">
                      <div className="colrblue"></div>
                      <p>Delivered</p>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
