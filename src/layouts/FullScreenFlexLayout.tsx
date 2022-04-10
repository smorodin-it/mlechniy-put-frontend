import styled from 'styled-components/macro';
import CustomizableFlexLayout, {
  CustomizableFlexLayoutProps,
} from './CustomizableFlexLayout';

const FullScreenFlexLayout = styled.div<CustomizableFlexLayoutProps>`
  height: 100vh;

  ${CustomizableFlexLayout};
`;

export default FullScreenFlexLayout;
