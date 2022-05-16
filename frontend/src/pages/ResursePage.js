import React from 'react';
import videoLinks from '../components/videoData';
import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 400px;
  height: 300px;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Video = styled.iframe`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  margin-bottom: 1rem;
`;
function ResursePage() {
  return (
    <Container>
      <Wrapper>
        {videoLinks.map((video) => (
          <Card key={video.description}>
            <Video
              src={video.link}
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></Video>
            <p>
              <a href="https://vimeo.com/127873338">{video.description}</a>{' '}
            </p>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
}

export default ResursePage;
