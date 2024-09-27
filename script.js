const container= document.getElementById('container');
const userinput= document.querySelector('#inp');

const generateword= (letters_in_1word)=>{
    console.log('Value of letters_in_1word randomly generated is', letters_in_1word)
    let text= "";
    const letters= 'abcdefghijklmnopqrstuvwxyz'
    // console.log(letters.length)
    for(let i=0;i<letters_in_1word;i++)
    {
        const randomnumber= (Math.random()*(letters.length-1)).toFixed(0) 
        text=text+letters[randomnumber]
        console.log("random letter generated is at index", randomnumber)
    }
    return text; 
}


const generatepara=()=>{
    // let para = '';
        
    if(userinput){
    let numberofwords=userinput.value;
    console.log("user input is", numberofwords)
    
    let words=''
    for(i=0;i<numberofwords;i++)
    {
       let word= generateword((Math.random()*15).toFixed(0))
       words+=word+' ';
    }
    
    const para = document.createElement('p')
    para.setAttribute('class', 'paras')
    para.innerText= words;
    container.append(para)

    userinput.value='';
}
}