import AppButton from "@/components/appButton/AppButton";
import AppInput from "@/components/appInput/AppInput";
import AppTitle from "@/components/appTitle/AppTitle";
import { View } from "react-native";

const register = () => {
  const handleRegister = async () => {
    // Implement registration logic here
  };
  return (
    <View>
      <AppTitle title="Register" />
      <AppInput placeholder="Enter Username..." />
      <AppInput placeholder="Enter Password..." secureTextEntry={true} />
      <AppInput placeholder="Confirm Password..." secureTextEntry={true} />
      <AppInput placeholder="Enter Email..." />
      <AppInput placeholder="Enter Phone Number..." />
      <AppButton title={"Register"} onPress={handleRegister} />
    </View>
  );
};

export default register;
