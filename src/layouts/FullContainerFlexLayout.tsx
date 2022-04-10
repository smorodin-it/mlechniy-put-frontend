import styled from 'styled-components/macro';
import CustomizableFlexLayout, {
  CustomizableFlexLayoutProps,
} from './CustomizableFlexLayout';

export const formLayout: CustomizableFlexLayoutProps = {
  flexDirection: 'column',
  gap: '1rem',
};

const FullContainerFlexLayout = styled.div<CustomizableFlexLayoutProps>`
  width: 100%;

  padding: 1rem;

  ${CustomizableFlexLayout};
`;

export default FullContainerFlexLayout;
