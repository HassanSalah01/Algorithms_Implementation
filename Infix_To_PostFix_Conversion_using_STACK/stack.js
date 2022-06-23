class Stack{
    constructor(){
        this.top = -1;
        this.stk = []
    }

    push(val){
        this.top++;
        this.stk[this.top]=val;
    }
    pop(){
        this.top--;
    }
    getPeek(){
        return this.stk[this.top];
    }
    getLength(){
        return this.top+1;
    }

}

module.exports = {
    Stack
}