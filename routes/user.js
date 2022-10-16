const express = require("express"),
  router = express.Router(),
  {
    getDatabase,
    update,
    push,
    ref,
    set,
    onValue,
  } = require("firebase/database");
const allData = require("../data");

const db = getDatabase();
const pedidos = ref(db, "pedidosWebsite");

router.get("/", (req, res, next) => {
  onValue(pedidos, (snapshot) => {
    console.log(snapshot.val());
    let pedidosArray = [];
    let pedidosAll = snapshot.val();
    if (pedidosAll == null) {
      pedidosAll = [];
    }
    pedidosAll.forEach((item, i) => {
      if (item.authorId === req.user.userid) {
        pedidosArray.push(item);
      }
    });
    const data = {
      og: {
        title: "Dashboard",
        banner: "",
        url: allData.default.url,
      },
      port: allData.portfolio,
      blog: allData.blog,
      services: allData.services,
      defaultConfig: allData.default,
      user: req.user,
      pedidos: pedidosArray,
    };

    res.render("dashboard", data);
  });
});

router.post("/registrarPedido", (req, res) => {
  onValue(pedidos, (snapshot) => {
    let pedidosWeb = snapshot.val();
    if (pedidosWeb === null) {
      pedidosWeb = [];
    }
    push(ref(db, "pedidosWebsite"), pedidosWeb);
  });
  res.redirect("/dashboard");
});

router.get("/projeto/:id/detalhes", (req, res, next) => {
 
  onValue(pedidos, (snapshot) => {
    let pedidosWeb = snapshot.val();
    if (pedidosWeb === null) {
      pedidosWeb = [];
    }
    const findById = (id) => {
      return pedidosWeb.find((item) => item.id === id);
    };

    const data = {
      og: {
        title: "Detalhes de " + findById(req.params.id).title,
        banner: findById(req.params.id).previewURL,
        url:
          allData.default.url +
          "dashboard/projetos/" +
          req.params.id +
          "/detalhes",
      },
      port: allData.portfolio,
      blog: allData.blog,
      services: allData.services,
      defaultConfig: allData.default,
      user: req.user,
      pedido: findById(req.params.id),
    };

    res.render("detalhesPedido", data);
  });
});

module.exports = router;
