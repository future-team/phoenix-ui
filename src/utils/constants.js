/**
 * Created by mac on 15/9/7.
 */
//classname前缀

function setNamespace(className) {
    return `${className}`;
}
const CLASS_NAME_NAMESPACE = '';
export const classConstants = {
    /**
     * 状态
     * */
    //标签新增命名空间
        //标签启用
    positive:setNamespace('positive'),
        //标签灰色
    negative:setNamespace('negative'),
        //标签灰白
    modest:setNamespace('modest'),
        //提示框暖色(黄色)
    warm:setNamespace('warm'),
    //标签灰色
    //标签无背景色
    neutral: setNamespace('neutral'),


    //theme
    // 白色
    light: setNamespace('light'),
    // 橘红色
    assertive: setNamespace('assertive'),
    //绿色
    balanced: setNamespace('balanced'),
    //按钮是否需要添加边框
    outline: setNamespace('outline'),
    //按钮是否处于待唤醒状态
    awaiting: setNamespace('awaiting'),
    //禁用
    disabled: setNamespace('disabled'),
    //启用
    enable: setNamespace('enable'),
    block: setNamespace('block'),
    //垂直
    tacked: setNamespace('tacked'),
    //宽度自适应
    justify: setNamespace('justify'),
    //选中
    active : setNamespace('active'),
    //行内样式
    inline : setNamespace('inline'),
    //大小
    size: setNamespace('size'),
    //圆形样式
    radius: setNamespace('radius'),
    //隨圆
    round: setNamespace('round'),
    //向上箭头
    'arrow-up': setNamespace('arrow-up'),
    //向下箭头
    'arrow-down': setNamespace('arrow-down'),
    /**
     * 颜色
     * */
    //成功样式
    success: setNamespace('success'),
    //错误红色
    error: setNamespace('error'),
    //警告warning
    warning: setNamespace('warning'),
    //危险danger
    danger: setNamespace('danger'),
    //展示
    show: setNamespace('show'),
    white: setNamespace('white'),
    /**
     * form列表相关
     * */
    //必填
    require: setNamespace('require'),
    //跳转链接
    jump: setNamespace('link'),
    //最后一个item是否浮动
    right: setNamespace('lastItem'),
    classNameNamespace: CLASS_NAME_NAMESPACE,
   /**
    * tab
    * */
    vertical: setNamespace('vertical')
}

// 自定义属性集合
export const propsConstants = {
    classPrefix: 'classPrefix',
    componentTag: 'componentTag',
    classMapping: 'classMapping',

    phIcon: 'phIcon',
    phReg: 'phReg',
    phLabel: 'phLabel',

    index: 'index',
    activeIndex: 'activeIndex',
    vertical: 'vertical',
    visible: 'visible',
    error: 'error',
    clear: 'clear',
    closeButton: 'closeButton',
    shadowDisabled: 'shadowDisabled',
    count: 'count',
    navigate: 'navigate',
    clickable: 'clickable',
    getTarget: 'getTarget',
    distance: 'distance',
    changeActive: 'changeActive',
    hideIcon: 'hideIcon',
    changeVisible: 'changeVisible',
    progress: 'progress',
    range: 'range',
    showRange: 'showRange',
    duration: 'duration',
    tipMode: 'tipMode',
    tipStay: 'tipStay',
    buttons: 'buttons',
    tips: 'tips',
    status: 'status',
    column: 'column',
    defaultSrc: 'defaultSrc',
    lazy: 'lazy',
    buttonText: 'buttonText',
    showButton: 'showButton',
    nowrap: 'nowrap',
    hardware: 'hardware',

    // fn
    closeCallback: 'closeCallback',
    clickCallback: 'clickCallback',
    focusCallback: 'focusCallback',
    blurCallback: 'blurCallback',
    slideCallback: 'slideCallback',
    dragCallback: 'dragCallback',
    dropCallback: 'dropCallback',
    loadCallback: 'loadCallback',
    queryCallback: 'queryCallback',
    clearCallback: 'clearCallback',

    // menu
    ceiling: 'ceiling',
    headerHeight: 'headerHeight',
    activeName: 'activeName'
}