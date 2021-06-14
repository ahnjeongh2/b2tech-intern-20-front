import React from 'react';
import styled from 'styled-components';

export default function Modal({ open, closeModal, title, content }) {
  return (
    <Modalpopup className={open ? 'openModal' : 'modal'}>
      {open && (
        <Section>
          <Header>
            {title}
            <Button className="close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </Button>
          </Header>
          <Main>{content}</Main>
        </Section>
      )}
    </Modalpopup>
  );
}

const Modalpopup = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;

  &.openModal {
    display: flex;
    width: 100%;
    align-items: center;
    animation: modalBgShow 0.3s;

    @keyframes modalBgShow {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  }
`;

const Section = styled.section`
  width: 450px;
  margin: 0 auto;
  border-radius: 12px;
  background-color: #fff;
  overflow: hidden;
  animation: modalShow 0.3s;
`;

const Header = styled.div`
  position: relative;
  padding: 16px 64px 16px 16px;
  background-color: #f1f1f1;
  font-weight: 800;
`;

const Button = styled.button`
  position: absolute;
  top: 12px;
  right: 20px;
  font-size: 18px;
`;

const Main = styled.main`
  padding: 24px 16px;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
`;
