import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalTitle: string,
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, modalTitle, children }: ModalProps) => {
  const [display, setDisplay] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setDisplay(true);
  }, [isOpen]);

  const closeModal = () => {
    setDisplay(false);
    onClose();
  };

  if (!display) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems:"center" }}>
          <div onClick={closeModal} style={{ paddingBottom: 2, cursor:"pointer" }}>
            <CloseIcon />
          </div>
          <p style={{fontSize:20, fontWeight:"600",color:"#252B42" }}>{modalTitle}</p>
        </div>

        {children}
      </div>
      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
        }
        .modal-content {
          background-color: white;
          padding: 1em;
          border-radius: 10px;
          max-width: 500px;
          width: 90%;
        }
      `}</style>
    </div>
  );
};
