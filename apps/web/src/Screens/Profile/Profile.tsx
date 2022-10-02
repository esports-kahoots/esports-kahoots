import { Box } from 'native-base';
import { useCustomTheme } from './../../useCustomTheme';

type ProfileProps = {};

const Profile = (props: ProfileProps) => {
    const { backgroundColor } = useCustomTheme();

    return (
        <Box width="100vw" height="100vh" backgroundColor={backgroundColor}>
            Profile
        </Box>
    );
};

export default Profile;
