const express = require("express");
const router = express.Router();
const { pay } = require("../services/payment-service");

router.post('/create_payment_url', function (req, res, next) {
    let ipAddr = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    const url = pay(ipAddr, req.body.amount, req.body.bankCode, req.body.orderInfo, "other", "vn");

    res.status(200).send({
        status: true,
        message: "Tạo mã thanh toán thành công.",
        payload: url
    });
});

module.exports = router;