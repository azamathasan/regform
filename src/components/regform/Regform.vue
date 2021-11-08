<template>
    <div class="regform-container">
            <div class="regform-box">
                
                <div class="regform-header">
                    <h1 class="regform-header__h1">Регистрация</h1>
                    <div class="regform-box__inscription">
                        <span>Уже есть аккаунт?</span>&nbsp;&nbsp;<a href="#">Войти</a>
                    </div>
                </div>
                <div class="regform-box__inputs">
                    
                    <div class="regform-box__input">
                        <label>Имя</label>
                        <input 
                            type="text" 
                            placeholder="Введите Ваше имя"
                            v-model="userReg.name"
                            @input="nameRegExp"
                        >
                        <div
                            class="regform-box__error"
                            :class="nameErrorClass"
                        >Введено не корректное значение</div>
                    </div>
                    <div class="regform-box__input">
                        <label>Email</label>
                        <input 
                            type="Email" 
                            placeholder="Введите Ваш email"
                            v-model="userReg.email"
                            @input="emailRegExp"
                        >
                        <div
                            class="regform-box__error"
                            :class="emailErrorClass"
                        >Введено не корректное значение</div>
                    </div>
                    <div class="regform-box__input">
                        <label>Номер телефона</label>
                        <input 
                            type="tel" 
                            placeholder="Введите номер телефона"
                            v-model="userReg.tel"
                            @input="telRegExp"
                        >
                        <div
                            class="regform-box__error"
                            :class="telErrorClass"
                        >Введено не корректное значение</div>
                    </div>
                    <Select
                        :languages="languages"
                        @language="selectLanguage"
                    ></Select>

                    <div class="regform-box__checkbox">
                        <input 
                            type="checkbox" 
                            value="none" 
                            name="regform-box__checkbox"
                            v-model="userReg.checkbox"
                            
                        >
                        <div class="regform-box__border"></div>
                        <label for="regform-box__checkbox">Принимаю <a href="#">условия</a> испопльзования</label>
                        
                    </div>
                    <button 
                        class="regform-box__reg-button regform-box__reg-button_agree1"
                        :class="buttonAgreeClass"
                    >
                        Зарегистрироваться
                    </button>
                </div>
            </div>
        </div>
</template>

<script>
import Select from './Select.vue'

export default {
    name: 'Regform',
    data(){
        return {
            languages: ['Русский','Английский','Китайский','Испанский',],
            userReg: {
                name: '',
                email: '',
                tel: '',
                language: '',
                checkbox: '',
            },
            errors: {
                nameError: false,
                emailError: false,
                telError: false,
            },
            buttonAgree: false,
        }
    },
    components: {
        Select,
    },

    computed: {
        nameErrorClass: function(){
            if(this.errors.nameError)
                return 'regform-box__error_display';
            else
                return 'regform-box__error_hide';
        },
        emailErrorClass: function(){
            if(this.errors.emailError)
                return 'regform-box__error_display';
            else
                return 'regform-box__error_hide';
        },
        telErrorClass: function(){
            if(this.errors.telError)
                return 'regform-box__error_display';
            else
                return 'regform-box__error_hide';
        },
        buttonAgreeClass: function(){
            if(
                    this.userReg.name
                    &&
                    this.userReg.email
                    &&
                    this.userReg.tel
                    &&
                    this.userReg.language
                    &&
                    this.userReg.checkbox
                    &&
                    !this.errors.nameError
                    &&
                    !this.errors.emailError
                    &&
                    !this.errors.telError
                )
                {
                    return 'regform-box__reg-button_agree';
                }
                else{
                    return '';
                }
        },
    },
    methods: {
        selectLanguage(lang){
            this.userReg.language=lang;
        },
        nameRegExp(){
            
            // поле “Имя” не может содержать цифры и символы кроме пробела и дефиса
            // var re = /(\d+)\s(\w+)/;

            // /^[A-ZА-ЯЁ\s-]+$/i.test(lat_space_hyphen);
            const regexp=/^[A-ZА-ЯЁ\s-]+$/i;

            console.log('nameRegExp');
            console.log('this.userReg.name.length: '+this.userReg.name.length);
            console.log('this.userReg.name.length: '+this.userReg.name.length);
            if(this.userReg.name.length&&!regexp.test(this.userReg.name)){
                // error message for name
                this.errors.nameError=true;
                
            }
            else{
                this.errors.nameError=false;
            }
        },
        emailRegExp(){
            // в поле “email” можно отправить только email

            const regexp=/^([A-Z0-9-]+)@([A-Z]+)\.([A-Z]{2,})$/i;

            console.log('emailRegExp');
            console.log('this.userReg.email.length: '+this.userReg.email.length);
            // (хотя бы один (любой) символ)@(хотя бы один символ).(хотя бы один символ)
            // const isEmail = (str) => /^(.+)@(.+)\.(.+)$/.test(str)

            if(this.userReg.email.length&&!regexp.test(this.userReg.email)){
                // error message for email
                this.errors.emailError=true;
                
            }
            else{
                this.errors.emailError=false;
            }
        },
        telRegExp(){
            // в поле “номер телефона” можно ввести только 11 цифр},
            var regexp=/^(\+[0-9]|[0-9])(\d{10})$/i;

            if(this.userReg.tel.length&&!regexp.test(this.userReg.tel)){
                // error message for tel
                this.errors.telError=true;
                
            }
            else{
                this.errors.telError=false;
            }
        },

    }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@600&display=swap");
// @font-face {
//     font-family: "IBM Plex Sans"; /* Гарнитура шрифта */
//     src: url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@600&display=swap"); /* Путь к файлу со шрифтом */
//     // src: url("./fonts/IBM_Plex_Sans/IBMPlexSans-Regular.ttf"); /* Путь к файлу со шрифтом */
//    }

body{
    background-color: #e5e5e5;
    font-family: IBM Plex Sans;
}

.regform-container{
    margin: auto;
    max-width: 460px;
    min-width: 360px;
    text-align: start;
}

.regform-box{
    background-color: white;
    border-radius: 24px;
    width: 100%;
    padding-top: 40px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 40px;
}
.regform-box a{
    color: #0880AE;
    text-decoration: none;
}

.regform-header{
    margin-bottom: 24px;
}

.regform-header__h1{
    color: black;
    font-size: 34px;
    line-height: 44.2px;
    font-weight: bold;
    margin-bottom: 8px;
}

.regform-box__inputs{
}

.regform-box__input,
.regform-select{
    display: flex;
    flex-direction: column;
    margin-top: 34px;
}
.regform-box__error{
    color: #FF7171;
    margin-top: 3px;
}
.regform-box__error_hide{
    display: none;
}
.regform-box__error_display{
    display: block;
}
.regform-select{
    position: relative;
}
.regform-box__input>input,
.regform-select__selected{
    border: 1px solid #DBE2EA;
    box-sizing: border-box;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
    border-radius: 6px;
    padding: 16px;
}
.regform-box__input>input:focus,
.regform-box__input>input:focus-visible{
    border: 2px solid #0880AE;
}
.regform-select__selected{
    font-size: 16px;
    cursor: pointer;
}
.regform-box__input>input::placeholder,
.regform-select__selected::placeholder{
    font-size: 16px;
    line-height: 21px;
    color: #7C9CBF;
    opacity: 1;
}

.regform-select__arrow{
    position: absolute;
    right: 18px;
    top: 50%;
    border: solid #0880AE;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 6px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    cursor: pointer;
}

.regform-select__options{
    border: 1px solid #DBE2EA;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04), 0px 20px 20px rgba(44, 39, 56, 0.04);
    border-radius: 6px;
    padding-top: 12px;
    padding-bottom: 11px;
    position: absolute;
    width: 100%;
    background: white;
    margin-top: 74px;
    z-index: 2;
    cursor: pointer;
}
.regform-select__options_display{
    display: block;
}
.regform-select__options_hidden{
    display: none;
}
.regform-select__selected{
    margin-bottom: 4px;
}
.regform-select__selected:focus,
.regform-select__selected:focus-visible{
    border: 2px solid #0880AE;
}
.regform-select__option{
    color: #756F86;
    padding-top: 12px;
    padding-bottom: 11px;
    padding-left: 15px;
}
.regform-select__option:hover{
    background: #EBF4F8;
}


.regform-box__checkbox{
    position: relative;
    margin-top: 36px;
    display: flex;
    align-items: center;
}
.regform-box__checkbox>label{
    color: #756F86;
    margin-left: 5px;
}

/* ______________ CUSTOM CHECKBOX_________________ */

.regform-box__checkbox>input[type=checkbox] {
    z-index: 4;
    opacity: 0;
    width: 24px;
    height: 24px;
    cursor: pointer;
}

.regform-box__checkbox>.regform-box__border {
	cursor: pointer;
	position: absolute;
	width: 20px;
	height: 20px;
    left: 4px;
	border-radius: 4px;
    background: transparent;
    border: 2px solid #0880AE;
}

.regform-box__checkbox>.regform-box__border:after {
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
	filter: alpha(opacity=0);
	opacity: 0;
	content: '';
	position: absolute;
	width: 12px;
	height: 5px;
	background: transparent;
	top: 5px;
	left: 4px;
	border: 1px solid #0880AE;
	border-top: none;
	border-right: none;

	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	-o-transform: rotate(-45deg);
	-ms-transform: rotate(-45deg);
	transform: rotate(-45deg);
}

.regform-box__checkbox>.regform-box__border:hover::after {
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";
	filter: alpha(opacity=30);
	opacity: 0.3;
}

.regform-box__checkbox>input[type=checkbox]:checked + .regform-box__border:after {
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
	filter: alpha(opacity=100);
	opacity: 1;
}
/* ______________END CUSTOM CHECKBOX_________________ */


.regform-box__reg-button{
    margin-top: 38px;
    background: #DBE2EA;
    box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
    border-radius: 6px;
    font-size: 16px;
    color: #B1B5BF;
    text-align: center;
    padding-top: 18px;
    padding-bottom: 18px;
    width: 100%;
    border: none;
    cursor: pointer;
}
.regform-box__reg-button_agree{
    background: #0880AE;
    color: #EBF4F8;
}
.regform-box__reg-button_agree:active{
    outline: 3px solid rgba(44, 39, 56, 0.86);
}
</style>