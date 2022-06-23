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
    const exp ="(2+3)" 
    let newExp= "";
    for (let i = 0 ; i < exp.length;i++){
        if(pres(exp[i])!=0){
            if(s.getLength()==0 || s.getPeek()=="(" ){
                s.push(exp[i])
            }else if(exp[i]=="("){
                s.push(exp[i])
            }else if(exp[i]==")"){
                while(s.getPeek()!="("){
                    newExp+=s.getPeek();
                    s.pop();
                }
                s.pop();
            }else if(pres(exp[i])>pres[s.getPeek]){
                s.push(exp[i])
            }else if(pres(exp[i])<pres[s.getPeek]){
                newExp+=exp[i]
                s.pop()
                while(pres(exp[i])<pres[s.getPeek]){
                    newExp+=exp[i];
                    s.pop()
                }
        }else{
            newExp+=exp[i];
        }
    }
    console.log(newExp);

}
console.log(pres("/")<pres("+"));