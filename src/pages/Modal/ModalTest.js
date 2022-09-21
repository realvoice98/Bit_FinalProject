import React from 'react';
import Button from "@mui/material/Button";
import './ModalTest.css'


function ModalTest(props) {
    const {open, close, header} = props

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button variant="contained" className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        <Button variant='contained' style={{backgroundColor:'#F2AA4C'}} className="close" onClick={close}>
                            close
                        </Button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
}

export default ModalTest;