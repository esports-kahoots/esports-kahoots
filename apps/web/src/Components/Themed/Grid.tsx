import { Box, HStack, VStack } from 'native-base';
import { useCustomTheme } from '../../useCustomTheme';

type TGridProps = {
    children?: React.ReactNode;
    height?: string | number;
    width?: string | number;
    alignItems?: string;
    borderRadius?: string | number;
    color?: string
};

export const TRow = (props: TGridProps) => {
    return (
        <HStack
            {...props}
            marginBottom="1em"
            flexDir="row"
            height={props.height}
            borderRadius={props.borderRadius}
            alignItems={props.alignItems ?? 'flex-start'}
        >
            <VStack flex={1}>{props.children}</VStack>
        </HStack>
    );
};

export const HorizontalDivider = (props: TGridProps) => {
    return (
        <Box
            height="0px"
            width={props.width}
            flex={1}
            borderWidth="1px"
            borderColor={props.color}
            marginTop="2.5em"
            marginBottom="2.5em"
        />
    );
};
