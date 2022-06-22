const {Stack} = require('./stack');

const pres=(x)=>{
    let level = 0;
    if(x=="(" || x ==")"){
        level = 4;
    }else if(x=="^"){
        level = 3;
    }else if(x=="*"||x=="/"){
        level = 2;
    }else if(x=="+"||x=="-"){
        level = 1;
    }else{
        level = 0 ;
    }
    return level;
}

function main(){
    let s = new Stack();
    const exp = "(2+3)/5";
    let newExp= "";
    for (let i = 0 ; i < exp.length;i++){
        if(pres(exp[i])!=0){
            if(s.length()==0 || s.getPeek()=="(" ){
                s.push(exp[i])
            }else if(exp[i]=="("){
                s.push(exp[i])
            }else if(exp[i]==")"){
                while(s.getPeek()!="("){
                    newExp+=s.getPeek();
                    s.pop();
                }
                s.pop();
            }
        }else{
            newExp+=exp[i];
        }
    }

}