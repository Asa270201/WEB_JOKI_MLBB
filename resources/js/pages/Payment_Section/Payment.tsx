import React, { useEffect, useState } from "react";
import "../../../css/PaymentPage.css";

const PaymentPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 menit dalam detik

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format menit:detik
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="payment-page-wrapper container-fluid bg-dark text-light py-5">
      <div className="container text-center">
        <h1 className="mb-4">Pembayaran QRIS Store</h1>

        {/* QRIS Image */}
        <div className="qris-box my-4">
          <img
            src="/template/Qris.jpg" // ganti dengan path QRIS store kamu
            alt="QRIS Store"
            className="qris-img img-fluid border rounded"
          />
        </div>

        {/* Countdown Timer */}
        <div className="countdown-box my-3">
          <h4>Batas Waktu Pembayaran</h4>
          <p className="fs-2 fw-bold text-warning">{formatTime(timeLeft)}</p>
          {timeLeft <= 0 && (
            <p className="text-danger fw-bold">
              Waktu pembayaran telah habis. Silakan buat pesanan baru.
            </p>
          )}
        </div>

        {/* Instruksi */}
        <div className="instructions mt-4">
          <p>
            Silakan scan QRIS di atas menggunakan aplikasi e-wallet atau mobile
            banking Anda. Pastikan pembayaran dilakukan sebelum waktu habis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
