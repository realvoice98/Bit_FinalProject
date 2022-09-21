
import React from "react";
import ModalTest from './ModalTest';
import {useState} from "react";
import Button from "@mui/material/Button";


function ModalRoot() {
    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };


    return (
        <>
            <Button variant="contained" onClick={()=>{
                setModalOpen(true)
            }}>모달팝업</Button>
            {/* header 부분에 텍스트를 입력한다.*/}

            <ModalTest open={modalOpen} close={closeModal} header="결제 완료창">
                {/*Modal.js <main> {props.children} </main>에 내용이 입력된다. */}
                <h2>결제 완료</h2><br></br>
                <h1>결제 완료 전문가 성함 : 위범석</h1><br></br>
                <h1>결제 가격 : 10000</h1><br></br>
            </ModalTest>
        </>
    );
}
export default ModalRoot;