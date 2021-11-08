<template>
    <div class="regform-select">
        <div class="regform-select__label">Язык</div>
        <input 
            type="text" 
            class="regform-select__selected select-click" 
            placeholder="Язык" 
            readonly 
            :value="selectedLang"
            @click="selectClick"
        >
        <div
            class="regform-select__arrow"
            @click="selectClick"
        ></div>
        <!-- <div class="regform-select__options regform-select__options_hidden"> -->
        <div 
            class="regform-select__options"
            :class="optionClass"
            @mouseleave="optionsLeave"
        >
            <div 
                v-for="(lang, index) in languages"
                :key="index"
                class="regform-select__option"
                @click="langClick(lang)"
                >
                {{lang}}
            </div>
            <!-- <div class="regform-select__option">Русский</div>
            <div class="regform-select__option">Английский</div>
            <div class="regform-select__option">Китайский</div>
            <div class="regform-select__option">Испанский</div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Select',
    // props: ['selectedClick', 'optionClick', 'optionsMouseLeave', 'languages'],
    props: {
        languages: Array,
        },
    data(){
        return {
            selectedLang: undefined,
            optionsVisibility: false,
        }
    },
    mounted(){
        console.log('select component mounted');
    },
    /* setup() {
        
    }, */
    computed:{
        optionClass: function(){
            if(this.optionsVisibility){
                return 'regform-select__options_display'
            }
            else
                return 'regform-select__options_hidden';
        },
    },
    methods: {
        selectClick(){
            console.log('Select: selectedClick method');
            this.optionsVisibility ? 
                this.optionsVisibility=false 
                    :
                this.optionsVisibility=true;
        },
        optionsLeave(){
            this.optionsVisibility=false;
        },
        langClick(lang){
            this.selectedLang=lang;
            this.optionsVisibility=false;
            this.$emit('language',lang);
        },
    },
}
</script>

<style lang="scss">

</style>