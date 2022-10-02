import { useColorModeValue, useTheme } from 'native-base';

export const useCustomTheme = () => {
    const { colors } = useTheme();

    const primary = useColorModeValue(
        colors.primary.light,
        colors.primary.dark
    );

    const primaryAccent = useColorModeValue(
        colors.primaryAccent.light,
        colors.primaryAccent.dark
    );

    const secondary = useColorModeValue(
        colors.secondary.light,
        colors.secondary.dark
    );

    const secondaryAccent = useColorModeValue(
        colors.secondaryAccent.light,
        colors.secondaryAccent.dark
    );

    // // Text
    const textColor = useColorModeValue(
        colors.text.primary.light,
        colors.text.primary.dark
    );

    const textColorSecondary = useColorModeValue(
        colors.text.secondary.light,
        colors.text.secondary.dark
    );

    const textColorLight = useColorModeValue(
        colors.text.primary.dark,
        colors.text.primary.light
    );

    const textColorGrey = useColorModeValue(
        colors.text.grey.primary.light,
        colors.text.grey.primary.dark
    );

    const textColorGreySecondary = useColorModeValue(
        colors.text.grey.secondary.light,
        colors.text.grey.secondary.dark
    );

    const textColorAlternate = useColorModeValue(
        colors.text.alternate.light,
        colors.text.alternate.dark
    );

    const textColorSpeaking = useColorModeValue(
        colors.text.speaking.light,
        colors.text.speaking.dark
    );

    // Backgrounds
    const backgroundColor = useColorModeValue(
        colors.background.primary.light,
        colors.background.primary.dark
    );

    const backgroundColorSecondary = useColorModeValue(
        colors.background.secondary.light,
        colors.background.secondary.dark
    );

    const backgroundColorTertiary = useColorModeValue(
        colors.background.tertiary.light,
        colors.background.tertiary.dark
    );

    const backgroundMedBeige = useColorModeValue(
        colors.background.medBeige.light,
        colors.background.medBeige.dark
    );

    const backgroundBeige = useColorModeValue(
        colors.background.beige.light,
        colors.background.beige.dark
    );

    const backgroundColorHover = useColorModeValue(
        colors.background.hover.light,
        colors.background.hover.dark
    );

    const backgroundColorOptions = useColorModeValue(
        colors.background.options.light,
        colors.background.options.dark
    );

    // Icons
    const iconTextColor = useColorModeValue(
        colors.icon.primary.light,
        colors.icon.primary.dark
    );

    // Transition speeds
    const transitionSpeed = 150;
    const transitionSpeedLayout = 250;

    return {
        primary,
        primaryAccent,
        secondary,
        secondaryAccent,
        textColor,
        textColorSecondary,
        textColorLight,
        textColorGrey,
        textColorGreySecondary,
        textColorAlternate,
        textColorSpeaking,
        backgroundColor,
        backgroundColorSecondary,
        backgroundColorTertiary,
        backgroundMedBeige,
        backgroundColorHover,
        backgroundColorOptions,
        backgroundBeige,
        iconTextColor,
        transitionSpeed,
        transitionSpeedLayout,
    };
};
