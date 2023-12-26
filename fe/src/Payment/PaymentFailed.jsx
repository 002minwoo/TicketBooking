import React from 'react';
import './Failure.css'; // Đảm bảo có tệp CSS tương ứng
import { useTranslation } from 'react-i18next';

const PaymentFailure = () => {
  const {t }= useTranslation()
  
  return (
    <div className="failure-container">
      <div className="failure-icon">&#10008;</div>
      <div className="failure-text">{("Thanh toán thất bại")}</div>
      <div className="failure-details">
        {t("Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử lại sau hoặc liên hệ với chúng tôi để biết thêm chi tiết")}.
      </div>
      <button className="back-button" onClick={() => window.location.href = '/'}>Quay lại trang chủ</button>
    </div>
  );
};

export default PaymentFailure;
