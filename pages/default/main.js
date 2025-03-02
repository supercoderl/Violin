async function handlePay() {
    try {
        const res = await axios.post(
            "/api/payment/create_payment_url",
            {
                orderInfo: "Thanh toán để dùng bản hoàn chỉnh",
                amount: 48000
            }
        );

        if (res?.data?.status && res?.data?.payload) {
            // Chuyển hướng người dùng đến URL thanh toán
            window.location.href = res.data.payload;
        } else {
            console.log("Không lấy được URL thanh toán.");
        }
    } catch (err) {
        console.error("Lỗi khi gọi API thanh toán:", err);
    }
}
