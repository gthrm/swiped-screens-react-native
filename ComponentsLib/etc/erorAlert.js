import { Alert } from "react-native";

export default (value) => {
  if (value.response !== undefined && value.response.status !== undefined) {
    switch (value.response.status) {
      case 401:
        getAlert(
          "Данные не верны!", ""
        );
        break;
      case 500:
        getAlert(
          "Внутренняя ошибка сервера!",
          "Повторите попытку позднее"
        );
        break;
      case 404:
        getAlert("Упс!", "Что-то пошло не так. Повторите попытку позднее.");
        break;
      case undefined:
        getAlert("Проверьте подключение к сети!", "");
        break;
      default:
        getAlert("Проверьте подключение к сети!", "");//this.getAlert(String(err.response.status), String(err.response.text));
        break;
    }
  } else {
    getAlert(
      "Проверьте подключение к сети!",
      ""
    );
  }

}

function getAlert(title, message) {
  Alert.alert(
    title,
    message,
    [
      // {
      //   text: "Ask me later",
      //   onPress: () => console.log("Ask me later pressed")
      // },
      // {
      //   text: "Cancel",
      //   onPress: () => console.log("Cancel Pressed"),
      //   style: "cancel"
      // },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );
}