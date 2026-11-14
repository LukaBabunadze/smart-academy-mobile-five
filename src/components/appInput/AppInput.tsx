import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";

type AppInputProps = {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string | undefined;
  inputStyles?: ViewStyle;
} & TextInputProps;

const AppInput = ({
  placeholder = "Enter Text...",
  onChangeText,
  value,
  inputStyles,
  ...props
}: AppInputProps) => {
  return (
    <View style={[inputStyles, styles.inputContainer]}>
      <TextInput
        {...props}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        autoCapitalize="none"
      />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 8,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 8,
  },
});
