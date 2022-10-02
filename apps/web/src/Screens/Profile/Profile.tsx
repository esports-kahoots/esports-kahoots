import { Box } from 'native-base';
import { TText } from '../../Components/Themed/Text';
import { useCustomTheme } from './../../useCustomTheme';

type ProfileProps = {};

const Profile = (props: ProfileProps) => {
    const { backgroundColor } = useCustomTheme();

    return (
        <Box width="100vw" height="100vh" backgroundColor={backgroundColor}>
            <div>Profile</div>
            Profile
            <TText
                style={{
                    fontSize: 200,
                    color: 'red',
                }}
            >
                Hello
            </TText>
        </Box>
    );
};

export default Profile;
