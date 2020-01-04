import {AsyncStorage} from "react-native";
const baseUrl = 'http://demoapi2.payasian.co/';
const logout = async ()=>{
    try{
        let up =  await AsyncStorage.removeItem('USER_PROFILE');
        return true;
    }catch (e) {
        alert("Logout faield "+e);
        return false;
    }
};
const signUp = async (username,password,email,fullname,phone,country,sponsorUser)=>{
    try{
        let response = await fetch(baseUrl+'signup',{
            method: 'post',
            headers:{
                'Authorization': 'public 6kD!3nFTP?$-QtEC',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                FullName: fullname,
                UserName: username,
                PassWord: password,
                Email: email,
                Phone: phone,
                Country: country,
                SponsorUser:sponsorUser
            })
        });
        console.log(response);
        let responseJson = await response.json();
        console.log(responseJson);
        alert(responseJson.Message);
        if(response.status>=200 && response.status<=300){
            console.log('200 yes');
            console.log(responseJson);
            if(responseJson.IsSuccess == true)
                return true;
            else
                return responseJson.Message;
        }
        else
            return responseJson.Message;
    }catch (e) {
        alert(e);
    }
};
const login = async (username,password) => {
    try {
        let response = await fetch(baseUrl+'signin', {
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
exports.signup = signUp;
exports.getUserProfile  = getUserProfile;
