import { StyleSheet, TextStyle } from 'react-native';
import colors from './colors';

interface TypographyType {
  Marketing: TextStyle;
  Slogan: TextStyle;
  BigHeader: TextStyle;
  Heading1SB: TextStyle;
  Heading2SB: TextStyle;
  Heading3SB: TextStyle;
  Heading4SB: TextStyle;
  Heading5SB: TextStyle;
  Heading6SB: TextStyle;
  Heading1B: TextStyle;
  Heading2B: TextStyle;
  Heading3B: TextStyle;
  Heading4B: TextStyle;
  Heading5B: TextStyle;
  Heading6B: TextStyle;
  Heading1R: TextStyle;
  Heading2R: TextStyle;
  Heading3R: TextStyle;
  Heading4R: TextStyle;
  Heading5R: TextStyle;
  Heading6R: TextStyle;
  Heading1L: TextStyle;
  Heading2L: TextStyle;
  Heading3L: TextStyle;
  Heading4L: TextStyle;
  Heading5L: TextStyle;
  Heading6L: TextStyle;
  Caption1: TextStyle;
  Caption2: TextStyle;
  Button1: TextStyle;
  Button2: TextStyle;
  Button3: TextStyle;
  Body: TextStyle;
  Body1: TextStyle;
  Body2: TextStyle;
  Paragraph: TextStyle;
  PriceOnSale: TextStyle;
  Input: TextStyle;
  SmallText: TextStyle;
  LabelNumbers: TextStyle;
}

interface FontWeightMap {
  [key: string]: TextStyle['fontWeight'];
}

enum FontFamilySuffix {
  Light = 'Light',
  Regular = 'Regular',
  Medium = 'Medium',
  SemiBold = 'SemiBold',
  Bold = 'Bold',
}

const FONT_WEIGHT_MAP: FontWeightMap = {
  [FontFamilySuffix.Light]: '300',
  [FontFamilySuffix.Regular]: '400',
  [FontFamilySuffix.Medium]: '500',
  [FontFamilySuffix.SemiBold]: '600',
  [FontFamilySuffix.Bold]: '700',
};

type CreateStyleType = (
  fontFamilySuffix: FontFamilySuffix,
  fontSize: number,
  lineHeight: number,
) => TextStyle;

const createStyle: CreateStyleType = (fontFamilySuffix, fontSize, lineHeight) => {
  return {
    fontFamily: 'System',
    fontWeight: FONT_WEIGHT_MAP[fontFamilySuffix],
    fontSize,
    lineHeight,
    color: colors.black,
  };
};

const typography = StyleSheet.create<TypographyType>({
  Marketing: createStyle(FontFamilySuffix.SemiBold, 80, 120),
  Slogan: createStyle(FontFamilySuffix.SemiBold, 60, 80),
  BigHeader: createStyle(FontFamilySuffix.SemiBold, 48, 60),
  Heading1SB: createStyle(FontFamilySuffix.SemiBold, 34, 41),
  Heading2SB: createStyle(FontFamilySuffix.SemiBold, 28, 34),
  Heading3SB: createStyle(FontFamilySuffix.SemiBold, 22, 28),
  Heading4SB: createStyle(FontFamilySuffix.SemiBold, 20, 25),
  Heading5SB: createStyle(FontFamilySuffix.SemiBold, 17, 22),
  Heading6SB: createStyle(FontFamilySuffix.SemiBold, 15, 20),
  Heading1B: createStyle(FontFamilySuffix.Bold, 34, 41),
  Heading2B: createStyle(FontFamilySuffix.Bold, 28, 34),
  Heading3B: createStyle(FontFamilySuffix.Bold, 22, 28),
  Heading4B: createStyle(FontFamilySuffix.Bold, 20, 25),
  Heading5B: createStyle(FontFamilySuffix.Bold, 17, 22),
  Heading6B: createStyle(FontFamilySuffix.Bold, 15, 20),
  Heading1R: createStyle(FontFamilySuffix.Regular, 34, 41),
  Heading2R: createStyle(FontFamilySuffix.Regular, 28, 34),
  Heading3R: createStyle(FontFamilySuffix.Regular, 22, 28),
  Heading4R: createStyle(FontFamilySuffix.Regular, 20, 25),
  Heading5R: createStyle(FontFamilySuffix.Regular, 17, 22),
  Heading6R: createStyle(FontFamilySuffix.Regular, 15, 20),
  Heading1L: createStyle(FontFamilySuffix.Light, 34, 41),
  Heading2L: createStyle(FontFamilySuffix.Light, 28, 34),
  Heading3L: createStyle(FontFamilySuffix.Light, 22, 28),
  Heading4L: createStyle(FontFamilySuffix.Light, 20, 25),
  Heading5L: createStyle(FontFamilySuffix.Light, 17, 22),
  Heading6L: createStyle(FontFamilySuffix.Light, 15, 20),
  Caption1: createStyle(FontFamilySuffix.Medium, 12, 16),
  Caption2: createStyle(FontFamilySuffix.Medium, 11, 13),
  Button1: createStyle(FontFamilySuffix.Regular, 16, 22),
  Button2: createStyle(FontFamilySuffix.Light, 12, 16),
  Button3: createStyle(FontFamilySuffix.Light, 16, 22),
  Body: createStyle(FontFamilySuffix.Medium, 17, 22),
  Body1: createStyle(FontFamilySuffix.Regular, 15, 20),
  Body2: createStyle(FontFamilySuffix.Regular, 13, 18),
  Paragraph: createStyle(FontFamilySuffix.Light, 16, 20),
  PriceOnSale: createStyle(FontFamilySuffix.Regular, 16, 22),
  Input: createStyle(FontFamilySuffix.Light, 13, 18),
  SmallText: createStyle(FontFamilySuffix.Regular, 11, 13),
  LabelNumbers: createStyle(FontFamilySuffix.Regular, 8, 8),
});

export default typography;
