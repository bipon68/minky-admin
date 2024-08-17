import React from "react";
import { Link } from "react-router-dom";
import TailwindsEleHeader from "./TailwindsEleHeader";
import TailwindEleBtn from "./TailwindEleBtn";

const TailwindsElements = () => {
  return (
    <div className="mt-14 ml-56 ">
      <main class="app-content">
        <TailwindsEleHeader />

        <TailwindEleBtn />

        <div class="tile mb-4">
          <div class="row">
            <div class="col-lg-12">
              <div class="page-header">
                <h2
                  class="mb-3 text-4xl font-semibold line-head"
                  id="typography"
                >
                  Typography
                </h2>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <div class="bs-component grid gap-2">
                <h1 class="text-5xl">Heading 1</h1>
                <h2 class="text-4xl">Heading 2</h2>
                <h3 class="text-3xl">Heading 3</h3>
                <h4 class="text-2xl">Heading 4</h4>
                <h5 class="text-xl">Heading 5</h5>
                <h6 class="text-sm">Heading 6</h6>
                <h3 class="text-2xl">
                  Heading
                  <small class="text-muted text-2xl font-semibold">
                    with muted text
                  </small>
                </h3>
                <p class="lead">
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor.
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="bs-component grid gap-2">
                <h2 class="text-3xl font-semibold">Example body text</h2>
                <p>
                  Nullam quis risus eget{" "}
                  <Link href="#">urna mollis ornare</Link> vel eu leo. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Nullam id dolor id nibh ultricies
                  vehicula.
                </p>
                <p>
                  <small>
                    This line of text is meant to be treated as fine print.
                  </small>
                </p>
                <p>
                  The following is <strong>rendered as bold text</strong>.
                </p>
                <p>
                  The following is
                  <em class="font-semibold">rendered as italicized text</em>.
                </p>
                <p>
                  An abbreviation of the word attribute is
                  <abbr title="attribute">attr</abbr>.
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="bs-component grid gap-2">
                <h2 class="text-3xl font-semibold">Emphasis classes</h2>
                <p class="text-muted">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.
                </p>
                <p class="text-primary">
                  Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
                <p class="text-warning">
                  Etiam porta sem malesuada magna mollis euismod.
                </p>
                <p class="text-danger">
                  Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p class="text-success">
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </p>
                <p class="text-info">
                  Maecenas sed diam eget risus varius blandit sit amet non
                  magna.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <h2
                class="mb-3 line-head text-3xl font-semibold"
                id="type-blockquotes"
              >
                Blockquotes
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="bs-component">
                <blockquote class="blockquote">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer class="blockquote-footer">
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="bs-component">
                <blockquote class="blockquote blockquote-reverse">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer class="blockquote-footer">
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div class="tile mb-4">
          <div class="row">
            <div class="col-lg-12">
              <div class="page-header">
                <h2 class="mb-3 line-head text-3xl font-semibold" id="navs">
                  Navs
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <h3 class="text-2xl font-semibold">Tabs</h3>
              <div class="bs-component">
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#home">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#profile">
                      Profile
                    </a>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link disabled" href="#">
                      Disabled
                    </Link>
                  </li>
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </Link>
                    <div class="dropdown-menu">
                      <Link class="dropdown-item" href="#">
                        Action
                      </Link>
                      <Link class="dropdown-item" href="#">
                        Another action
                      </Link>
                      <Link class="dropdown-item" href="#">
                        Something else here
                      </Link>
                      <div class="dropdown-divider"></div>
                      <Link class="dropdown-item" href="#">
                        Separated link
                      </Link>
                    </div>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade active show" id="home">
                    <p>
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure
                      terry richardson ex squid. Aliquip placeat salvia cillum
                      iphone. Seitan aliquip quis cardigan american apparel,
                      butcher voluptate nisi qui.
                    </p>
                  </div>
                  <div class="tab-pane fade" id="profile">
                    <p>
                      Food truck fixie locavore, accusamus mcsweeney's marfa
                      nulla single-origin coffee squid. Exercitation +1 labore
                      velit, blog sartorial PBR leggings next level wes anderson
                      artisan four loko farm-to-table craft beer twee. Qui photo
                      booth letterpress, commodo enim craft beer mlkshk aliquip
                      jean shorts ullamco ad vinyl cillum PBR. Homo nostrud
                      organic, assumenda labore aesthetic magna delectus mollit.
                    </p>
                  </div>
                  <div class="tab-pane fade" id="dropdown1">
                    <p>
                      Etsy mixtape wayfarers, ethical wes anderson tofu before
                      they sold out mcsweeney's organic lomo retro fanny pack
                      lo-fi farm-to-table readymade. Messenger bag gentrify
                      pitchfork tattooed craft beer, iphone skateboard locavore
                      carles etsy salvia banksy hoodie helvetica. DIY synth PBR
                      banksy irony. Leggings gentrify squid 8-bit cred
                      pitchfork.
                    </p>
                  </div>
                  <div class="tab-pane fade" id="dropdown2">
                    <p>
                      Trust fund seitan letterpress, keytar raw denim keffiyeh
                      etsy art party before they sold out master cleanse
                      gluten-free squid scenester freegan cosby sweater. Fanny
                      pack portland seitan DIY, art party locavore wolf cliche
                      high life echo park Austin. Cred vinyl keffiyeh DIY salvia
                      PBR, banh mi before they sold out farm-to-table VHS viral
                      locavore cosby sweater.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <h3>Pills</h3>
              <div class="bs-component">
                <ul class="nav nav-pills">
                  <li class="nav-item">
                    <Link class="nav-link active" href="#">
                      Active
                    </Link>
                  </li>
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </Link>
                    <div class="dropdown-menu">
                      <Link class="dropdown-item" href="#">
                        Action
                      </Link>
                      <Link class="dropdown-item" href="#">
                        Another action
                      </Link>
                      <Link class="dropdown-item" href="#">
                        Something else here
                      </Link>
                      <div class="dropdown-divider"></div>
                      <Link class="dropdown-item" href="#">
                        Separated link
                      </Link>
                    </div>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" href="#">
                      Link
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link disabled" href="#">
                      Disabled
                    </Link>
                  </li>
                </ul>
              </div>
              <br />
              <div class="bs-component">
                <ul class="nav nav-pills nav-stacked">
                  <li class="nav-item">
                    <Link class="nav-link active" href="#">
                      Active
                    </Link>
                  </li>
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </Link>
                    <div class="dropdown-menu">
                      <Link class="dropdown-item" href="#">
                        Action
                      </Link>
                      <Link class="dropdown-item" href="#">
                        Another action
                      </Link>
                      <Link class="dropdown-item" href="#">
                        Something else here
                      </Link>
                      <div class="dropdown-divider"></div>
                      <Link class="dropdown-item" href="#">
                        Separated link
                      </Link>
                    </div>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" href="#">
                      Link
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link disabled" href="#">
                      Disabled
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <h2
                class="mb-3 line-head text-2xl font-semibold"
                id="nav-breadcrumbs"
              >
                Breadcrumbs
              </h2>
              <div class="bs-component">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active">Home</li>
                </ol>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link href="#">Home</Link>
                  </li>
                  <li class="breadcrumb-item active">Library</li>
                </ol>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link href="#">Home</Link>
                  </li>
                  <li class="breadcrumb-item">
                    <Link href="#">Library</Link>
                  </li>
                  <li class="breadcrumb-item active">Data</li>
                </ol>
              </div>
            </div>
            <div class="col-lg-6">
              <h2 class="mb-3 line-head" id="pagination">
                Pagination
              </h2>
              <div class="bs-component">
                <div>
                  <ul class="pagination">
                    <li class="page-item disabled">
                      <Link class="page-link" href="#">
                        «
                      </Link>
                    </li>
                    <li class="page-item active">
                      <Link class="page-link" href="#">
                        1
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        2
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        3
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        4
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        5
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        »
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul class="pagination pagination-lg">
                    <li class="page-item disabled">
                      <Link class="page-link" href="#">
                        «
                      </Link>
                    </li>
                    <li class="page-item active">
                      <Link class="page-link" href="#">
                        1
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        2
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        3
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        4
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        5
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        »
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul class="pagination pagination-sm">
                    <li class="page-item disabled">
                      <Link class="page-link" href="#">
                        «
                      </Link>
                    </li>
                    <li class="page-item active">
                      <Link class="page-link" href="#">
                        1
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        2
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        3
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        4
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        5
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        »
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tile mb-4">
          <div class="row">
            <div class="col-lg-12">
              <div class="page-header">
                <h2
                  class="mb-3 line-head text-2xl font-semibold"
                  id="indicators"
                >
                  Indicators
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <h4 class="text-xl font-semibold">Alerts</h4>
              <div class="bs-component">
                <div class="alert alert-dismissible alert-warning">
                  <button class="close" type="button" data-dismiss="alert">
                    ×
                  </button>
                  <h4 class="text-xl font-semibold">Warning!</h4>
                  <p>
                    Best check yo self, you're not looking too good. Nulla vitae
                    elit libero, a pharetra augue. Praesent commodo cursus
                    magna,
                    <Link class="alert-link" href="#">
                      vel scelerisque nisl consectetur et
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="bs-component">
                <div class="alert alert-dismissible alert-danger">
                  <button class="close" type="button" data-dismiss="alert">
                    ×
                  </button>
                  <strong>Oh snap!</strong>
                  <Link class="alert-link" href="#">
                    Change a few things up
                  </Link>{" "}
                  and try submitting again.
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="bs-component">
                <div class="alert alert-dismissible alert-success">
                  <button class="close" type="button" data-dismiss="alert">
                    ×
                  </button>
                  <strong>Well done!</strong> You successfully read
                  <Link class="alert-link" href="#">
                    this important alert message
                  </Link>
                  .
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="bs-component">
                <div class="alert alert-dismissible alert-info">
                  <button class="close" type="button" data-dismiss="alert">
                    ×
                  </button>
                  <strong>Heads up!</strong> This
                  <Link class="alert-link" href="#">
                    alert needs your attention
                  </Link>
                  , but it's not super important.
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 class="text-xl font-semibold">Badges</h4>
            <div class="bs-component flex gap-1">
              <span class="badge badge-primary">Primary</span>
              <span class="badge badge-secondary">Secondary</span>
              <span class="badge badge-success">Success</span>
              <span class="badge badge-danger">Danger</span>
              <span class="badge badge-warning">Warning</span>
              <span class="badge badge-info">Info</span>
              <span class="badge badge-light">Light</span>
              <span class="badge badge-dark">Dark</span>
            </div>
            <div class="bs-component">
              <span class="badge badge-pill badge-primary">Primary</span>
              <span class="badge badge-pill badge-secondary">Secondary</span>
              <span class="badge badge-pill badge-success">Success</span>
              <span class="badge badge-pill badge-danger">Danger</span>
              <span class="badge badge-pill badge-warning">Warning</span>
              <span class="badge badge-pill badge-info">Info</span>
              <span class="badge badge-pill badge-light">Light</span>
              <span class="badge badge-pill badge-dark">Dark</span>
            </div>
          </div>
        </div>

        <div class="tile mb-4">
          <div class="row">
            <div class="col-lg-12">
              <div class="page-header">
                <h2 class="mb-3 line-head text-3xl font-semibold">Progress</h2>
              </div>
              <h5 id="progress-basic " class="text-2xl font-semibold">
                Basic
              </h5>
              <div class="bs-component mb-2">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <h5 id="progress-alternatives" class="text-2xl font-semibold">
                Contextual alternatives
              </h5>
              <div class="bs-component">
                <div class="progress mb-2">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div class="progress mb-2">
                  <div
                    class="progress-bar bg-info"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div class="progress mb-2">
                  <div
                    class="progress-bar bg-warning"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div class="progress mb-2">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <h5 id="progress-multiple" class="text-2xl font-semibold">
                Multiple bars
              </h5>
              <div class="bs-component">
                <div class="progress mb-2">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="15"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <div
                    class="progress-bar bg-info"
                    role="progressbar"
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <h5 id="progress-striped" class="text-2xl font-semibold">
                Striped
              </h5>
              <div class="bs-component">
                <div class="progress mb-2">
                  <div
                    class="progress-bar progress-bar-striped"
                    role="progressbar"
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div class="progress mb-2">
                  <div
                    class="progress-bar progress-bar-striped bg-success"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div class="progress mb-2">
                  <div
                    class="progress-bar progress-bar-striped bg-info"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div class="progress mb-2">
                  <div
                    class="progress-bar progress-bar-striped bg-warning"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div class="progress mb-2">
                  <div
                    class="progress-bar progress-bar-striped bg-danger"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <h5 id="progress-animated" class="text-2xl font-semibold">
                Animated
              </h5>
              <div class="bs-component">
                <div class="progress mb-2">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tile mb-4">
          <div class="row">
            <div class="col-lg-12">
              <div class="page-header">
                <h2
                  class="mb-3 line-head text-3xl font-semibold"
                  id="containers"
                >
                  Containers
                </h2>
              </div>
              <div class="bs-component">
                <div class="jumbotron">
                  <h1 class="display-3">Jumbotron</h1>
                  <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <p>
                    <Link class="btn btn-primary btn-lg" href="#">
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <h3 class="text-3xl font-semibold">List groups</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="bs-component">
                <ul class="list-group">
                  <li class="list-group-item">
                    <span class="tag tag-default tag-pill float-xs-right">
                      14
                    </span>
                    Cras justo odio
                  </li>
                  <li class="list-group-item">
                    <span class="tag tag-default tag-pill float-xs-right">
                      2
                    </span>
                    Dapibus ac facilisis in
                  </li>
                  <li class="list-group-item">
                    <span class="tag tag-default tag-pill float-xs-right">
                      1
                    </span>
                    Morbi leo risus
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="bs-component">
                <div class="list-group">
                  <Link
                    class="list-group-item list-group-item-action active"
                    href="#"
                  >
                    Cras justo odio
                  </Link>
                  <Link class="list-group-item list-group-item-action" href="#">
                    Dapibus ac facilisis in
                  </Link>
                  <Link
                    class="list-group-item list-group-item-action disabled"
                    href="#"
                  >
                    Morbi leo risus
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="bs-component">
                <div class="list-group">
                  <Link
                    class="list-group-item list-group-item-action active"
                    href="#"
                  >
                    <h4 class="list-group-item-heading">
                      List group item heading
                    </h4>
                    <p class="list-group-item-text">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                  </Link>
                  <Link class="list-group-item list-group-item-action" href="#">
                    <h4 class="list-group-item-heading">
                      List group item heading
                    </h4>
                    <p class="list-group-item-text">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <h3 class="text-3xl font-semibold">Cards</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="bs-component">
                <div class="card mb-3 text-white bg-primary">
                  <div class="card-body">
                    <blockquote class="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div class="card mb-3 text-white bg-success">
                  <div class="card-body">
                    <blockquote class="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div class="card mb-3 text-white bg-info">
                  <div class="card-body">
                    <blockquote class="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div class="card mb-3 text-white bg-warning">
                  <div class="card-body">
                    <blockquote class="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div class="card mb-3 text-white bg-danger">
                  <div class="card-body">
                    <blockquote class="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div class="card mb-3 text-black bg-light">
                  <div class="card-body">
                    <blockquote class="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div class="card mb-3 text-white bg-dark">
                  <div class="card-body">
                    <blockquote class="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="bs-component">
                <div class="card mb-3 border-primary">
                  <div class="card-body">
                    <blockquote class="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div class="card mb-3 border-success">
                  <div class="card-body">
                    <blockquote class="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div class="card mb-3 border-info">
                  <div class="card-body">
                    <blockquote class="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div class="card mb-3 border-warning">
                  <div class="card-body">
                    <blockquote class="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div class="card mb-3 border-danger">
                  <div class="card-body">
                    <blockquote class="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div class="card mb-3 border-light">
                  <div class="card-body">
                    <blockquote class="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div class="card mb-3 border-dark">
                  <div class="card-body">
                    <blockquote class="card-blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="bs-component">
                <div class="card">
                  <h4 class="card-header text-2xl font-semibold">
                    Card header
                  </h4>
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <h6 class="card-subtitle text-muted">
                      Support card subtitle
                    </h6>
                  </div>

                  <div class="card-body">
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link class="card-link" href="#">
                      Card link
                    </Link>
                    <Link class="card-link" href="#">
                      Another link
                    </Link>
                  </div>
                  <div class="card-footer text-muted">2 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tile mb-4">
          <div class="row">
            <div class="col-lg-12">
              <div class="page-header">
                <h2 class="mb-3 line-head text-2xl font-semibold" id="dialogs">
                  Dialogs
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <h4 class="text-xl font-semibold">Modals</h4>
              <div class="bs-component">
                <div class="modal">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title text-2xl font-semibold">
                          Modal title
                        </h5>
                        <button
                          class="close"
                          type="button"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <p>Modal body text goes here.</p>
                      </div>
                      <div class="modal-footer">
                        <button class="btn btn-primary" type="button">
                          Save changes
                        </button>
                        <button
                          class="btn btn-secondary"
                          type="button"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <h4 class="text-2xl font-semibold">Popovers</h4>
              <div class="bs-component">
                <button
                  class="btn btn-secondary"
                  type="button"
                  title=""
                  data-container="body"
                  data-toggle="popover"
                  data-placement="left"
                  data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  data-original-title="Popover Title"
                >
                  Left
                </button>
                <button
                  class="btn btn-secondary"
                  type="button"
                  title=""
                  data-container="body"
                  data-toggle="popover"
                  data-placement="top"
                  data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  data-original-title="Popover Title"
                >
                  Top
                </button>
                <button
                  class="btn btn-secondary"
                  type="button"
                  title=""
                  data-container="body"
                  data-toggle="popover"
                  data-placement="bottom"
                  data-content="Vivamus					sagittis lacus vel augue laoreet rutrum faucibus."
                  data-original-title="Popover Title"
                >
                  Bottom
                </button>
                <button
                  class="btn btn-secondary"
                  type="button"
                  title=""
                  data-container="body"
                  data-toggle="popover"
                  data-placement="right"
                  data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  data-original-title="Popover Title"
                >
                  Right
                </button>
              </div>
              <h4 class="text-2xl font-semibold">Tooltips</h4>
              <div class="bs-component">
                <button
                  class="btn btn-secondary"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="left"
                  title=""
                  data-original-title="Tooltip on left"
                >
                  Left
                </button>
                <button
                  class="btn btn-secondary"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Tooltip on top"
                >
                  Top
                </button>
                <button
                  class="btn btn-secondary"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title=""
                  data-original-title="Tooltip on bottom"
                >
                  Bottom
                </button>
                <button
                  class="btn btn-secondary"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="right"
                  title=""
                  data-original-title="Tooltip on right"
                >
                  Right
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TailwindsElements;
