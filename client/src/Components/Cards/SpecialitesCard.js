import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import arrowRight from '../../assets/Icon/arrow-right.svg';
import arrowLeft from '../../assets/Icon/arrow-left.svg';

import Modal from '../Modal';
import Data_Specialites from '../../Utilis/ProductData/Data_Specialites';

const SpecialitesCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const openModalInit = {
    isOpen: isOpen,
    id: 0,
    description: '',
    name: '',
    price: '',
    Nbr: 0,
    img: '',
  };
  const [isOpenModal, setOpenModal] = useState(openModalInit);

  const OpenModal = (params) => {
    setIsOpen((v) => !v);
    setOpenModal({
      ...isOpenModal,
      isOpen: isOpen,
      id: params.id,
      Description: params.Description,
      name: params.name,
      price: params.price,
      Nbr: params.nombreGelluleParJour,
      img: params.img,
    });
  };

  const goBack = () => {
    history.goBack();
  };
  return (
    <div>
      <div>Specialites</div>
      {Data_Specialites.map((item, key) => (
        <div>
          <div className="auth-innerProduct">
            <div key={item.id} onClick={() => OpenModal(item)}>
              {/* <div key={key} onClick={handleClickOpen}> */}
              <div style={{ fontSize: 10 }}>Nom du Produit: {item.name}</div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <img
                  style={{ width: 50, height: 50 }}
                  src={item.img}
                  alt={item.name}
                />
                <div
                  style={{
                    fontSize: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  Nombre de Gellule Par Jour : {item.nombreGelluleParJour}
                  <div style={{ fontSize: 10 }}>
                    prix: {item.price} € / mois
                  </div>
                </div>
              </div>
              <div style={{ width: '100%' }}>
                <div style={{ fontSize: 11 }}>
                  Description :
                  <span style={{ fontSize: 10 }}>
                    {item.Description.substring(0, 64)}...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          id={isOpenModal.id}
          description={isOpenModal.Description}
          name={isOpenModal.name}
          prix={isOpenModal.price}
          Nbr={isOpenModal.Nbr}
          img={isOpenModal.img}
        ></Modal>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div onClick={goBack}>
            <img src={arrowLeft} />
          </div>
          <div>
            <Link to="/plantes">
              <img src={arrowRight} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialitesCard;
