import React from "react";
import styled from "@emotion/styled/macro";

const ModalBody = styled.div`
    width: 100vw;
    max-width: 386px;
    padding: 8px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 370px;
  border-radius: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 24px;
  box-sizing: border-box;
  background-color: #19181A;
  ${Date} + ${InputTodo} {
    margin-top: 24px;
  }
;
`;

const Date = styled.small`
    display: block;
    color: #C9C8CC;
`;

const InputTodo = styled.input`
    padding: 16px 24px;
    border: none;
    width: 100%;
    box-sizing: border-box;
    background-color: transparent;
    color: #C9C8CC;
    caret-color: #C9C8CC;
`;

const TodoFormModal: React.FC = () => {
    return (
        <Modal>
            <ModalBody>
                <Card>
                    <Date>2021-09-12</Date>
                    <InputTodo placeholder="new event" />
                </Card>
            </ModalBody>
        </Modal>
    )
}