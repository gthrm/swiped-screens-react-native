import { AsyncStorage } from "react-native";
import erorAlert from "./erorAlert";
import { _dataToStore, _retrieveData } from './AsyncStorageManipulator';
import api from "../api";

export const _errorHandler = async (err, funcAfterRefresh, getInitialState) => {
    console.log("_errorHandler", err, err.response);

    if (err.response.status === 401 && err.response.data.msg === "Token has expired") {
        _refreshToken(
            funcAfterRefresh,
            getInitialState
        )
    } else if (err.response.status === 401 && err.response.data.msg === "Token has been revoked" || err.response.status === 404 && err.response.data.message === "User not found") {
        await AsyncStorage.clear().finally(
            () => {
                if (getInitialState) {
                    console.log('getInitialState');

                    getInitialState()
                }
            }
        )

    } else {
        console.log("else");

        // await AsyncStorage.clear();
        erorAlert(err);
    }
}



const _refreshToken = async (func, getInitialState) => {
    _retrieveData('refresh_token')
        .then(
            refresh_token => {
                // console.log("refresh_token", refresh_token);

                api
                    .refreshToken(refresh_token)
                    .then(({ data }) => {
                        // console.log(data);

                        _dataToStore("access_token", data.access_token).then(() => {
                            _dataToStore("refresh_token", data.refresh_token).then(() => {
                                func !== null ? func() : console.log('ok');
                            });
                        });

                    })
                    .catch(async err => {
                        console.log("err refreshToken", err.response);
                        await AsyncStorage.clear().finally(
                            () => {
                                if (getInitialState) {
                                    console.log('getInitialState');

                                    getInitialState()
                                }
                            }
                        )
                    })
            })

};
