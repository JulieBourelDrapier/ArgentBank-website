
import styled from 'styled-components';

const SrOnly = styled.h2`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important; /* 2 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important; /* 3 */
`;

const FeatureItem = styled.div`
  flex: 1;
  padding: 2.5rem;
`;

const FeatureItemTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FeatureItemP = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
`;

function Features () {
  return (
    <div>
      <SrOnly>Features</SrOnly>
        <FeatureItem>
          <img src="./img/icon-chat.png" alt="Chat Icon" class="feature-icon" />
          <FeatureItemTitle>You are our #1 priority</FeatureItemTitle>
          <FeatureItemP>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </FeatureItemP>
        </FeatureItem>
    </div>
  );
}

export default Features