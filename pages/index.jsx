import React from "react";
import { Table, Button } from "antd";
import styled from "styled-components";
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

const MyApp = () => {
  // 화면에 보일 명칭과 Database 컬럼 이름을 매칭시킨다.
  const columns = [
    {
      title: "번호",
      dataIndex: "id",
    },
    {
      title: "제목",
      render: (data) => (
        <Link href="/detail">
          <div>{data.title}</div>
        </Link>
      ),
    },
    {
      title: "작성자",
      dataIndex: "author",
    },
    {
      title: "작성일",
      dataIndex: "createdAt",
    },
    {
      title: "조회수",
      dataIndex: "hit",
    },
  ];

  // 데이터베이스에서 들어온 데이터!  - 가상 -
  const datum = [
    {
      id: "5",
      title: "이게 게시판 디자인 이구나?",
      author: "석만이",
      createdAt: "2022-03-04",
      hit: 43,
    },
    {
      id: "4",
      title: "개킹받쥬?? 아무것도 못하쥬?",
      author: "똥즤니v",
      createdAt: "2022-03-05",
      hit: 201,
    },
    {
      id: "3",
      title: "안녕하세요. 저는 민희에여",
      author: "민희",
      createdAt: "2022-03-05",
      hit: 88,
    },
    {
      id: "2",
      title: "건희는 코로나 걸려써여...",
      author: "거니",
      createdAt: "2022-03-06",
      hit: 105,
    },
    {
      id: "1",
      title: "이건 우리가 만든 게시판 이에요!",
      author: "상호",
      createdAt: "2022-03-06",
      hit: 200,
    },
  ];

  return (
    <Wrapper>
      <Flip top>
        <PageTitle>Next Board</PageTitle>
      </Flip>

      <Fade>
        {/* Button Section */}
        <BWrapper>
          <Link href="/write">
            <Button type="primary" size="small">
              글쓰기
            </Button>
          </Link>
        </BWrapper>

        {/* Table Section */}
        <Table rowKey="id" size="small" columns={columns} dataSource={datum} />
      </Fade>
    </Wrapper>
  );
};

export default MyApp;
