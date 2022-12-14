import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import Heading from '../atom/Heading';
import Button from '../atom/Button';
import Link from 'next/link';

const Container = styled.div`
  width: 100%;
  min-width: 100%;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: 1fr 3fr 1fr 1fr;
  @media (min-height: 700px) {
    height: 700px;
  }
`;

const TextContainer = styled.div``;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
`;

const FooterContainer = styled.div``;

export default function IndexTemplate({ participantsNum, handleSendLog }) {
  return (
    <>
      <Container>
        <TextContainer>
          <Heading
            text={'YUTI'}
            fontSize="50px"
            textAlign="center"
            highlighted
          ></Heading>
          <Heading
            text={'내가 좋아할만한 유튜버는?'}
            textAlign="center"
          ></Heading>
        </TextContainer>
        <ImageContainer>
          <Image src="/images/mainImage.png" alt="" layout="fill"></Image>
        </ImageContainer>
        <Link href="/survey">
          <Button
            text={`테스트 시작하기\n${participantsNum}명이 참여했어요`}
            onClick={handleSendLog}
          ></Button>
        </Link>
        <FooterContainer>
          <Heading
            text={'비즈니스 문의'}
            fontSize="20px"
            textAlign="center"
          ></Heading>
          <Heading
            text={'pms16011172@gmail.com'}
            fontSize="13px"
            textAlign="center"
          ></Heading>
        </FooterContainer>
      </Container>
    </>
  );
}
