import { useState } from 'react';
import { useCustomTheme } from '../../useCustomTheme';
import { TText } from './Text';

type TButtonProps = {
    style?: React.CSSProperties;
    buttonTextStyle?: React.CSSProperties;
    label?: string;
    children?: React.ReactNode;
    color?: string;
    colorHover?: string;
    width?: string;
    height?: string;
    fontSize?: string;
    disabled?: boolean;
    rightIcon?: string | JSX.Element;
    leftIcon?: string | JSX.Element;
    textColor?: string;
    shadow?: boolean;
    marginTop?: string | number;
    onPress?: () => void;
};

export const TButton = (props: TButtonProps) => {
    const [hovering, setHovering] = useState(false);
    const {
        textColor,
        primary,
        primaryAccent,
        secondary,
        secondaryAccent,
        transitionSpeed,
    } = useCustomTheme();

    const useOpacityForHover =
        props.color !== undefined && props.colorHover === undefined;

    return (
        <div
            onMouseEnter={() => {
                setHovering(true);
            }}
            onMouseLeave={() => {
                setHovering(false);
            }}
            style={{
                userSelect: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                borderColor: 'transparent',
                height: props.height ?? '32px',
                width: props.width ?? 'auto',
                marginTop: props.marginTop ?? 0,
                marginLeft: '4px',
                marginRight: '4px',
                padding: '10px',
                cursor: props.disabled ? 'none' : 'pointer',
                opacity: props.disabled
                    ? 0.5
                    : hovering && useOpacityForHover
                    ? 0.8
                    : 1,
                transition: `all ${transitionSpeed / 1000}s`,
                pointerEvents: props.disabled ? 'none' : 'auto',
                borderRadius: '8px',
                boxShadow: props.shadow
                    ? '8px 10px 17px rgba(0, 0, 0, 0.08)'
                    : '',
                backgroundColor: hovering
                    ? props.colorHover ??
                      props.color ??
                      props.style?.backgroundColor ??
                      props.style?.borderColor ??
                      primary ??
                      primaryAccent
                    : props.color ??
                      props.style?.backgroundColor ??
                      props.style?.borderColor ??
                      secondary ??
                      secondaryAccent,
                ...props.style,
            }}
            onClick={props.onPress}
        >
            {
                props.leftIcon && props.leftIcon
                // <Icon
                //     as={MaterialCommunityIcons}
                //     name={props.leftIcon}
                //     size={'xs'}
                //     color={props.textColor ?? textColor}
                // />
            }
            {props.children ? (
                props.children
            ) : (
                <TText style={{ color: 'red' }}>
                    {props.label ?? props.children}
                </TText>
            )}
            {
                props.rightIcon && props.rightIcon
                // <Icon
                //     as={MaterialCommunityIcons}
                //     name={props.rightIcon}
                //     size={'xs'}
                //     color={props.textColor ?? textColor}
                // />
            }
        </div>
    );
};
