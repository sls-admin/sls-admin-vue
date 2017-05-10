import {
    FormData
} from 'components/';

module.exports = {
    components: {
        FormData
    },
    data() {
        return {
            fields: [{
                label: '级联选择器',
                type: 'cascader',
                key: 'cascader',
                value: {
                    default: '',
                    list: [{
                        id: 1,
                        city: '北京',
                        children: [{
                            city: '朝阳区',
                            id: '1-1'
                        }]
                    }, {
                        id: 2,
                        city: '上海',
                        children: []
                    }]
                },
                props: {
                    label: 'city',
                    value: 'id',
                    children: 'children'
                }
            }]
        }
    },
    methods: {
        onSubmit(data) {
            this.$emit('onTest', data);
        }
    }
}