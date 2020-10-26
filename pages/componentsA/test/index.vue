<template>
    <w-form
        :model="form"
        ref="uForm"
    >
        <w-form-item label="姓名">
            <w-input v-model="form.name" />
        </w-form-item>
        <w-form-item label="简介">
            <w-input v-model="form.intro" />
        </w-form-item>
        <w-form-item label="性别">
            <w-input
                v-model="form.sex"
                type="select"
            />
        </w-form-item>
        <w-form-item label="水果">
            <w-checkbox-group>
                <w-checkbox
                    v-model="item.checked"
                    v-for="(item, index) in checkboxList"
                    :key="index"
                    :name="item.name"
                >
                    {{ item.name }}
                </w-checkbox>
            </w-checkbox-group>
        </w-form-item>
        <w-form-item label="味道">
            <w-radio-group v-model="radio">
                <w-radio
                    v-for="(item, index) in radioList"
                    :key="index"
                    :name="item.name"
                    :disabled="item.disabled"
                >
                    {{ item.name }}
                </w-radio>
            </w-radio-group>
        </w-form-item>
        <w-form-item label="开关">
            <w-switch
                slot="right"
                v-model="switchVal"
            ></w-switch>
        </w-form-item>
    </w-form>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    intro: '',
                    sex: ''
                },
                checkboxList: [{
                        name: '苹果',
                        checked: false,
                        disabled: false
                    },
                    {
                        name: '雪梨',
                        checked: false,
                        disabled: false
                    },
                    {
                        name: '柠檬',
                        checked: false,
                        disabled: false
                    }
                ],
                radioList: [{
                        name: '鲜甜',
                        disabled: false
                    },
                    {
                        name: '麻辣',
                        disabled: false
                    }
                ],
                radio: '',
                switchVal: false
            };
        }
    };
</script>
