import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppIcon = () => {
    const handleChatClick = () => {
        const whatsappChatUrl = 'https://wa.me/2347067810860';

        window.location.href = whatsappChatUrl;
      };
      
      const iconStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        backgroundColor: 'green',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      };
      
      return (
        <div className="floating-whatsapp-icon" style={iconStyle} onClick={handleChatClick}>
          <FaWhatsapp size={24} color="white" />
        </div>
      );
      
};

export default FloatingWhatsAppIcon;
