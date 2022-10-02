type TTextProps = {
    label?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
};

export const TText = (props: TTextProps) => {
    return (
        <div
            style={{
                ...props.style,
            }}
        >
            {props.label ?? props.children}
        </div>
    );
};
