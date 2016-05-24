/**
 * Created by mac on 16/1/3.
 */
export default obj=>{
    let methods={
        initCallback:true,
        loadedCallback:true,
        closeCallback:true,
        successCallback:true,
        cancelCallback:true,
        checkedCallback:true,
        activeCallback:true,
        getValueCallback:true,

        updateCallback:true,
        deleteCallback:true,
        queryCallback:true,
        addCallback:true,
        insertCallback:true,
        ajaxCallback:true,

        defaultCallback:true

        //method
    };

    obj.prototype.methods = methods;
}