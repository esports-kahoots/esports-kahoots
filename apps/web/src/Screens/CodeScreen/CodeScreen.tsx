import { Center, Text} from 'native-base';
import { useCustomTheme } from './../../useCustomTheme';

type CodeScreenProps = {};

const CodeScreen = (props: CodeScreenProps) => {
    const { backgroundColor } = useCustomTheme();




    return (


        <Center width="100vw" height="100vh" alignItems="center" backgroundColor={backgroundColor}>
            <Center width="85vw" height="85vh"
            alignSelf="center"
            justifyContent="center"
            background="#DDA15E"
            opacity="0.7"
            backdrop-filter="blur(2px)">
                <Text fontSize="240">A</Text>
            </Center>
        </Center>
    );
};

export default CodeScreen;