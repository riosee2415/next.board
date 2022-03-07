import React, { useRef } from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const PageTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const BWrapper = styled.div`
  width: 100%;
  margin-bottom: 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const WriteTextArea = styled(Input.TextArea)`
  resize: none;
`;

const Detail = () => {
  const detailFormRef = useRef();

  return (
    <Wrapper>
      <Flip top>
        <PageTitle>Detail</PageTitle>
      </Flip>

      {/* 글을 다 작성하고, 등록버튼을 누르면, console에 출력! */}

      <Fade>
        <Form
          ref={detailFormRef}
          labelCol={{ span: 3 }}
          wrapperCol={{ span: 21 }}
        >
          {/* 제목 */}
          <Form.Item label="제목" name="title" rules={[{ required: true }]}>
            <Input readOnly />
          </Form.Item>

          {/* 작성자 */}
          <Form.Item label="작성자" name="author" rules={[{ required: true }]}>
            <Input readOnly />
          </Form.Item>

          {/* 본문 */}
          <Form.Item label="본문" name="content" rules={[{ required: true }]}>
            <WriteTextArea rows={10} readOnly />
          </Form.Item>

          <BWrapper>
            <Link href="/">
              <Button size="small" type="default">
                목록으로
              </Button>
            </Link>
          </BWrapper>
        </Form>
      </Fade>
    </Wrapper>
  );
};

export default Detail;
