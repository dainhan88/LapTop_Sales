const orderBuilder = require("../controllers/orderController");
const express = require("express");

const routes = express.Router();

routes.get("/", orderBuilder.list_all_orders);
routes.post("/", orderBuilder.create_a_order);
routes.get("/:idorder", orderBuilder.read_a_order);
routes.get("/v1/getSold", orderBuilder.getSold);
routes.get("/getOrderByState/:trangThai", orderBuilder.getOrderByState);
routes.put("/:idorder", orderBuilder.update_a_order);
routes.delete("/:idorder", orderBuilder.delete_a_order);
routes.get("/v1/search", orderBuilder.filterOrder);
routes.get("/v2/getProfitNowMonth", orderBuilder.getProfitOrderNowMonth);
routes.get("/v2/getProfitPermonth", orderBuilder.getProfitPerMonth);
routes.get("/v2/getProfitMonthly", orderBuilder.getProfitMonthly);
routes.get(
  "/getOrderByDateRange/startDate=:startDate&?endDate=:endDate",
  orderBuilder.getOrderByDateRange
);
routes.get("/v3/getQuantityOderByPhone", orderBuilder.getQuantityOderByPhone);

routes.get("/v1/count/:status", orderBuilder.countItemsByState);
routes.get("/v4/search/?query=:query", orderBuilder.getorderByCondition);
routes.get("/v2/getPriceByTime/?id=:id", orderBuilder.getPriceByTime);
module.exports = routes;
