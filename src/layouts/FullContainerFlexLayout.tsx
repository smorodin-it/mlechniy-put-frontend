import styled from 'styled-components';
import CustomizableFlexLayout, {
  CustomizableFlexLayoutProps,
} from './CustomizableFlexLayout';

const FullContainerFlexLayout = styled.div<CustomizableFlexLayoutProps>`
  width: 100%;
  height: 100%;

  ${CustomizableFlexLayout};
`;

export default FullContainerFlexLayout;
