import styled from 'styled-components';
import CustomizableFlexLayout, {
  CustomizableFlexLayoutProps,
} from './CustomizableFlexLayout';

export const formLayout: CustomizableFlexLayoutProps = {
  flexDirection: 'column',
  gap: '1rem',
};

const FullContainerFlexLayout = styled.div<CustomizableFlexLayoutProps>`
  width: 100%;
  height: 100%;

  ${CustomizableFlexLayout};
`;

export default FullContainerFlexLayout;
