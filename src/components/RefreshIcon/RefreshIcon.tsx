import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import colors from '@rnga/theme/colors';

interface RefreshIconProps extends SvgProps {
  size?: number;
}

const RefreshIcon = ({
  color = colors.primary,
  size = 29,
  strokeWidth = 1,
  ...props
}: RefreshIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 29 29" fill="none" {...props}>
      <Path
        d="M24.483 6.1989V12.1989M24.483 12.1989H18.483M24.483 12.1989L19.853 7.8389C18.4736 6.45864 16.683 5.56408 14.751 5.29004C12.819 5.016 10.8502 5.37731 9.14139 6.31954C7.43257 7.26176 6.07628 8.73385 5.2769 10.514C4.47751 12.2941 4.27834 14.2858 4.7094 16.189C5.14046 18.0921 6.17839 19.8036 7.66679 21.0656C9.15519 22.3275 11.0134 23.0715 12.9615 23.1855C14.9095 23.2994 16.8418 22.7772 18.4672 21.6974C20.0926 20.6176 21.323 19.0388 21.973 17.1989"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

export default memo(RefreshIcon);
