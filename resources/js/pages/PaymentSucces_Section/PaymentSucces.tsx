import React from "react";
import "../../../css/PaymentSucces.css";

const PaymentSucces: React.FC = () => {
  return (
    <div className="payment-success-wrapper container-fluid d-flex align-items-center justify-content-center">
      <div className="success-box text-center">
        {/* Icon Success */}
        <div className="success-icon mb-4">
          <i className="bi bi-check-circle-fill"></i>
        </div>

        {/* Title */}
        <h1 className="success-title">Pembayaran Berhasil!</h1>
        <p className="success-message">
          Terima kasih telah melakukan pembayaran. Pesanan Anda sedang diproses.
        </p>

        {/* Order Info */}
        <div className="order-info my-4">
          <p><strong>Order ID:</strong> #INV123456</p>
          <p><strong>Total:</strong> Rp 1.350.000</p>
          <p><strong>Status:</strong> Paid</p>
        </div>

        {/* Buttons */}
        <div className="action-buttons mt-4">
          <button className="btn btn-primaries mx-2">Lihat Pesanan</button>
          <button className="btn btn-primaries mx-2">Kembali ke Beranda</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSucces;
