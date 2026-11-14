import { StyleSheet, Text, TouchableOpacity } from "react-native";

type AppButtonProps = {
  title: string;
  onPress?: () => void;
  activeOpacity?: number;
};

const AppButton = ({
  title,
  onPress,
  activeOpacity,
  ...props
}: AppButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      {...props}
      onPress={onPress}
      activeOpacity={activeOpacity ?? 0.8}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    marginVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    width: "94%",
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
