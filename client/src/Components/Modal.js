import React from 'react';
import ReactDom from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'transparent',
  zIndex: 1000,
  borderRadius: '50%',
};

export default function Modal({
  open,
  children,
  onClose,
  id,
  description,
  name,
  prix,
  Nbr,
  img,
}) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} id={id}>
        <div>
          <div style={{ fontSize: 20 }}>{name}</div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <img style={{ width: 150, height: 150 }} src={img} />
            <div
              style={{
                fontSize: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              Nombre de Gellule Par Jour : {Nbr}
              <div style={{ fontSize: 20 }}>prix: {prix} € / mois</div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ fontSize: 15 }}>
              Description :<span style={{ fontSize: 15 }}>{description}</span>
            </div>
          </div>
        </div>
        <button onClick={onClose}>X</button>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  );
}
