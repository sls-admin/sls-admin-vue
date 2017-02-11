import echarts from 'echarts';
module.exports = {
    name: 'echarts',
    data() {
        return {
            chartDom: null,
            data: {
                title: this.title,
                subtext: this.subtext,
                hover_title: this.hoverTitle,
                text_list: this.textList,
                value_list: this.valueList
            },
        }
    },
    methods: {
        init() {
            //基于准备好的dom，初始化echarts实例
            this.chartDom = echarts.init(document.getElementById('chartDom'));
            return this;
        },
        update() {
            if (this.chartDom === null) {
                this.init();
            }
            this.chartDom.setOption({
                title: {
                    text: this.data.title,
                    subtext: this.data.subtext
                },
                tooltip: {},
                xAxis: {
                    data: this.data.text_list
                },
                yAxis: {},
                series: [{
                    name: this.data.hover_title,
                    type: 'bar',
                    data: this.data.value_list
                }]
            });
        }
    },
    mounted: function() {
        this.init()
            .update(this.data);
    },
    props: {
        title: [String, Number],
        subtext: [String, Number],
        hoverTitle: [String, Number],
        textList: {
            type: Array,
            required: true
        },
        valueList: {
            type: Array,
            required: true
        }
    },
    watch: {
        valueList: function(v) {
            console.log(v);
            this.data.value_list = v;
            this.update();
        }
    }
}