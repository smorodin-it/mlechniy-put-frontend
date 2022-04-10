import { css } from 'styled-components';
import { Property } from 'csstype';

export interface CustomizableFlexLayoutProps {
  flexDirection?: Property.FlexDirection;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  gap?: Property.Gap;
}

const CustomizableFlexLayout = css<CustomizableFlexLayoutProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection ?? 'row'};
  justify-content: ${(props) => props.justifyContent ?? 'initial'};
  align-items: ${(props) => props.alignItems ?? 'initial'};

  gap: ${(props) => props.gap ?? 'unset'}; ;
`;

export default CustomizableFlexLayout;
