<template>
    <div>
        <!-- Fill-up Form -->
            <h3>If you have a questions you are free to contact me.</h3>
            <input type="button" class="contact-btn" name="submit" value="Click here" @click="togglecontactme">
            <form @submit.prevent="sumibmitForm" v-if="contactmevisible">
                        <center>
                            <div class="contact-container">
                            <div class="header">
                                <h1>Contact Form</h1>
                            </div>
                                <div class="form-control form-group" :class="{invalid: messageValidity ==='invalid'}">
                                <textarea type="text" id="message" name="message" placeholder="message..." 
                                 autocomplete="off" v-model.trim="messageme" @blur="validateMessage" required></textarea>
                                 <p v-if=" messageValidity ==='invalid'">Please Enter a messages</p>
                                </div><br>
    
                                <div class="form-control  form-group" :class="{invalid: emailmeValidity ==='invalid'}">
                                <input type="email" id="email"  name="email" 
                                placeholder="email" v-model.trim="emailme"  
                                autocomplete="off" @blur="validateEmail" required>
                                <p v-if=" emailmeValidity ==='invalid'">Please Enter a valid eamil address</p>
                                </div><br>
    
                                <div class="form-control form-group" :class="{invalid: passwordValidity ==='invalid'}">
                                <input type="password" id="password" name="password" 
                                placeholder="password" v-model.trim="passwordInput" 
                                autocomplete="off" @blur="validatePassword" required>
                                 <p v-if=" passwordValidity ==='invalid'">Please Enter a valid password</p>
                                </div><br>
                                <!-- <button name="submit">Submit</button> -->
                                <div class="col-12 form-group text-center">
                                <button type="button" class="btn btn-vue btn-lg col-4">Submit</button>
                                </div>
                            </div>
                        </center>
            </form>

            
                            <!-- end of Fill-up Form -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            contactmevisible: false,
            messageme: '',
            emailme: '',
            passwordInput: '',
            messageValidity: 'pendeng',
            emailmeValidity: 'pendeng',
            passwordValidity: 'pendeng',
        };
    },
    methods: {
        sumibmitForm() {
            console.log('Message: ' + this.messageme);
            this.messageme = '';
            console.log('Email: ' + this.emailme);
            this.emailme = '';
            console.log('Password: ' + this.passwordInput);
            this.passwordInput = '';
        },
        togglecontactme() {
                    this.contactmevisible = !this.contactmevisible;
               },
            validateMessage() {
                if(this.messageme === ''){
                    this.messageValidity = 'invalid';
                } else {
                    this.messageValidity = 'valid';
                }
            },
            validateEmail() {
                if(this.emailme === ''){
                    this.emailmeValidity = 'invalid';
                   
                } else {
                    this.emailmeValidity = 'valid';
                }
            },
             validatePassword() {
                if(this.passwordValidity === ''){
                    this.passwordValidity = 'invalid';
                } else {
                    this.passwordValidity = 'valid';
                }
            },
    },
};
</script>

<style scoped>
    .form-control.invalid textarea{
        border-color: red;
    }
    .contact-container{
            background: linear-gradient(60deg, #cef1e0 0%, #d0d323 100%);
            margin-left: 100px;
            margin-right: 100px;
            margin-top: 100px;
            margin-bottom: 100px;
            padding: 20px;
            width: 50rem;
            min-height: 100px;
            box-shadow: #333;
        }
        .header{
            margin: 10px;
            min-height: 20px;
            width: auto;
        }h1{
            margin: 20px 30px;
            padding: 20px;
            font-size: 30px;
            text-decoration: none;
            text-align: center;
        }
        .form-group{
          margin: 10px;
        }p{
          font-size: 10px;
          color: black;
          font-weight: 600;
        }
        textarea{
            background: none;
            border: none;
            outline: none;
            width: 100%;
            padding: 12px;
            border-radius: 4px;
            box-sizing: border-box;
            margin-top: 6px;
            margin-bottom: 16px;
            resize: none;
            border-bottom: 1px solid #333;
        }
        input{
            overflow: hidden;
            width: 100%;
            border: none;
            padding: 15px 10px;
            height: 10px;
            background: none;
            outline: none;
            color: #333;
            border-bottom: 1px solid #333;
                }.contact-btn{
                width: 15rem;
                height: 3rem;
                margin-top: 1rem;
                }
              button{    
                height: 50px;
                width: 46rem;
                padding: 16px 48px;
                background: none;
                border: 2px solid #131313;
                color: #131313;
                font-size: 20px;
                cursor: pointer;
                transition: all 0.3s;
        }button:hover{
            box-shadow: 0 0 0 5px #fff, 0 0 0 10px #333;
            border: 1px solid #333;
            transform: scale(0.9);
            color: #fff;
        }
</style>