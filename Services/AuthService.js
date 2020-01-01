import {AsyncStorage} from "react-native";

const logout = async ()=>{
    try{
        let up =  await AsyncStorage.removeItem('USER_PROFILE');
        return true;
    }catch (e) {
        alert("Logout faield "+e);
        return false;
    }
};

const login = async (username,password) => {
    try {
        let response = await fetch('http://demoapi2.payasian.co/signin', {
            method: 'post',
            headers: {
                'Authorization': 'public 6kD!3nFTP?$-QtEC',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                IsPasscode: 'false',
                DeviceId: 'null',
                UserName: username,
                Password: 'd$b@pa#19'
                //this.state.password
            })
        });
        let responseJson = await response.json();
        alert(responseJson.Message);
        if (response.status >= 200 && response.status < 300) {
            //alert(responseJson.IsSuccess);
            //console.log(responseJson.UserProfile);
            if(responseJson.IsSuccess == true)
                await AsyncStorage.setItem('USER_PROFILE',JSON.stringify(responseJson.UserProfile));
            let test = await AsyncStorage.getItem('USER_PROFILE');
            test = JSON.parse(test);
            console.log(test.UserName);
            alert('Logged in as '+test.UserName);
            return true;

            //alert(res.IsSuccess);
        }
        //alert(response.status);

    } catch (e) {

    }
};
const getUserProfile = async ()=>{
    try{
        let up =  await AsyncStorage.getItem('USER_PROFILE');
        console.log("test logging--");
        up = JSON.parse(up);
        return up;
    }catch (e) {
        console.log(e);
    }

};
exports.login = login;
exports.logout = logout;
exports.getUserProfile  = getUserProfile;