import { Center} from "native-base";
import { TText } from "../../Components/Themed/Text";
import { useCustomTheme } from "./../../useCustomTheme";

type CodeScreenProps = {
    code: string
};

const CodeScreen = (props: CodeScreenProps) => {
  const { backgroundColor, secondaryAccent, primary } = useCustomTheme();

  return (
    <Center
      width="100vw"
      height="100vh"
      alignItems="center"
      backgroundColor={backgroundColor}
    >
      <Center
        width="85vw"
        height="85vh"
        background={primary}
        opacity="0.7"
        backdrop-filter="blur(2px)"
      >
        <TText style={{fontSize: '280px', fontWeight: 'bolder', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', color: secondaryAccent}}>{props.code}</TText>
      </Center>
    </Center>
  );
};

export default CodeScreen;
