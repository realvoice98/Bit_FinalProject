import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import {getCookie} from "../shared/Cookie";
import ModalRoot from "./Modal/ModalRoot";
import ModalTest from './Modal/ModalTest';
import {useState} from "react";

const Payment2 = (effect, deps) => {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };


    useEffect(() => {
        const jquery = document.createElement('script');
        jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
        const iamport = document.createElement('script');
        iamport.src = 'https://cdn.iamport.kr/js/iamport.payment-1.1.7.js';
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        };
    }, []);

    const onClickPayment = () => {
        const { IMP } = window;
        IMP.init('imp04868015');

        const data = {
            pg: 'html5_inicis',
            pay_method: 'card',
            merchant_uid: `mid_${new Date().getTime()}`,
            name: '견적 비용',
            amount: '100',
            custom_data: {
                name: '부가정보',
                desc: '세부 부가정보',
            },
            buyer_name: '홍길동',
            buyer_tel: '01012345678',
            buyer_email: '14279625@gmail.com',
            buyer_addr: '구천면로 000-00',
            buyer_postalcode: '01234',
        };

        IMP.request_pay(data, callback);
    };

    const callback = response => {
        const { success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status } = response;

        if (success) {
            setModalOpen(true)

        } else {
            alert(`결제 실패: ${error_msg}`);
        }
    };

    return <>
        {/* header 부분에 텍스트를 입력한다.*/}
        <ModalTest open={modalOpen} close={closeModal} header="결제 완료창">
            {/*Modal.js <main> {props.children} </main>에 내용이 입력된다. */}
            <h2>결제 완료</h2><br></br>
            <h1>결제 가격 : 100</h1><br></br>
            <h1>결제 받는 분 전문가 성함 : 비트전문가님</h1><br></br>
        </ModalTest>
        <Button variant="contained"
                style={{backgroundColor:'#F2AA4C'}}
                onClick={()=>
        {
            
            onClickPayment();
            fetch(`/matchedfinish`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${getCookie('access_token')}`,
                },
                body: JSON.stringify(
                    {quotationId:"6329b33b39caab08cc3bde78",surveyId:"6329b2d639caab08cc3bde77"}
                )
            })
                .then(res => res.json())
        }
        }>결제하기</Button>
    </>;
};
export default Payment2;