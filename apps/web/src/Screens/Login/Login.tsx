import { Button, HStack, VStack } from 'native-base';
import GoogleIcon from '../../Assets/Icons/GoogleIcon';
import { HorizontalDivider } from '../../Components/Themed/Grid';
import { TText } from '../../Components/Themed/Text';
import { useCustomTheme } from '../../useCustomTheme';

type LoginProps = {};

const Login = (props: LoginProps) => {
    const {
        textColorLight,
        backgroundColor,
        primary,
        primaryAccent,
        secondary,
        secondaryAccent,
    } = useCustomTheme();

    return (
        <div
            style={{
                backgroundColor: backgroundColor,
                height: '100vh',
                width: '100vw',
                flexDirection: 'row',
                display: 'flex',
            }}
        >
            <VStack width="33.3%" />
            <VStack alignItems="center" flexDir="column" width="33.3%">
                <HStack
                    flexDir="row"
                    alignItems="center"
                    height="100%"
                    width="100%"
                >
                    <VStack alignItems="center" width="100%">
                        <Button
                            width="100%"
                            leftIcon={<GoogleIcon />}
                            backgroundColor={primary}
                            _hover={{
                                backgroundColor: primaryAccent,
                            }}
                        >
                            <TText
                                style={{
                                    fontWeight: 700,
                                    fontSize: '18px',
                                    color: backgroundColor,
                                }}
                            >
                                Continue As Guest
                            </TText>
                        </Button>

                        <TText
                            style={{
                                fontWeight: 600,
                                fontSize: '12px',
                                color: secondary,
                                marginTop: '1em',
                                marginBottom: '-2em',
                            }}
                        >
                            or...
                        </TText>
                        <HorizontalDivider width="120%" color={secondary} />

                        <Button
                            width="100%"
                            backgroundColor={primaryAccent}
                            _hover={{
                                backgroundColor: primary,
                            }}
                        >
                            <TText
                                style={{
                                    fontWeight: 700,
                                    fontSize: '18px',
                                    color: backgroundColor,
                                }}
                            >
                                Continue As Guest
                            </TText>
                        </Button>
                    </VStack>
                </HStack>
            </VStack>
            <VStack width="33.3%" />
        </div>
    );
};

export default Login;
