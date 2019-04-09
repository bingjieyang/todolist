window.model = {
    data: {
        todoItems: [],
        inputText: '',
        filter: 'All'
    },
    //localstorage.setitem("变量名",值)时，此处变量名需要用小写，移动端会把大写转小写，导致无法取到值
    TOKEN: 'todomvc'
};