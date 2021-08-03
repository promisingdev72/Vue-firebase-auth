<template>
    <div class="vue-tempalte">
        <form @submit.prevent="userLogin">
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" v-model="user.email" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="user.password" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>
        </form>
        <button type="submit" class="btn btn-dark btn-lg btn-block" @click="googleLogin">
               Google
        </button>
        <button type="submit" class="btn btn-dark btn-lg btn-block" @click="facebookLogin">
               Facebook
        </button>
        <button type="submit" class="btn btn-dark btn-lg btn-block" @click="twitterLogin">
               Twitter
        </button>
    </div>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {   
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userLogin() {
        firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
            this.$router.push('/home')
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    googleLogin() {
        
        var provider = new firebase.auth.GoogleAuthProvider();
        
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
       
        provider.setCustomParameters({
            'login_hint': 'user@example.com'
        });

        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            
            var credential = result.credential;

            
            var token = credential.accessToken;
            
            var user = result.user;
            console.log('token',token)
            console.log('user',user)
            
            
        }).catch((error) => {
            
            var errorCode = error.code;
            var errorMessage = error.message;
            
            var email = error.email;
            
            var credential = error.credential;
            console.log('errorCode',errorCode)
            console.log('errorMessage',errorMessage)
            console.log('email',email)
            console.log('credential',credential)
        });
    },
    facebookLogin() {
        
        var provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('user_birthday');
        provider.setCustomParameters({
            'display': 'popup'
        });
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            
            var credential = result.credential;

            
            var token = credential.accessToken;
            
            var user = result.user;
            console.log('token',token)
            console.log('user',user)
            
            
        }).catch((error) => {
            
            var errorCode = error.code;
            var errorMessage = error.message;
            
            var email = error.email;
            
            var credential = error.credential;
            console.log('errorCode',errorCode)
            console.log('errorMessage',errorMessage)
            console.log('email',email)
            console.log('credential',credential)
        });
    },
    twitterLogin() {
        
        var provider = new firebase.auth.TwitterAuthProvider();
        provider.setCustomParameters({
            'lang': 'es'
        });
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            
            var credential = result.credential;

            
            var token = credential.accessToken;
            
            var user = result.user;
            console.log('token',token)
            console.log('user',user)
            
            
        }).catch((error) => {
            
            var errorCode = error.code;
            var errorMessage = error.message;
            
            var email = error.email;
            
            var credential = error.credential;
            console.log('errorCode',errorCode)
            console.log('errorMessage',errorMessage)
            console.log('email',email)
            console.log('credential',credential)
        });
    },
  }
};
</script>