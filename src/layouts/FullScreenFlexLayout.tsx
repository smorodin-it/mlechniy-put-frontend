import styled from 'styled-components';
import CustomizableFlexLayout, {
  CustomizableFlexLayoutProps,
} from './CustomizableFlexLayout';

const FullScreenFlexLayout = styled.div<CustomizableFlexLayoutProps>`
  width: 100vw;
  height: 100vh;

  ${CustomizableFlexLayout};
`;

export default FullScreenFlexLayout;
