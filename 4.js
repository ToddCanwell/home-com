'use strict';

function daynightHandler(self){

    
                    if(self.value==='night'){
                    BodybackgroundColor('black');
                    BodyColor('gray');
                    self.value='day';
                       HOLdecoration('underline');
                        HOLColor('yellow');
                        
                    }
                     else{
                        BodybackgroundColor('white');
                        BodyColor('black');
                        self.value='night';

                        HOLdecoration('underline');
                        HOLColor('blue');
                    }
                }


function BodybackgroundColor(color){
    
    document.querySelector('body').style.backgroundColor=color;

}

function BodyColor(color){
   
    document.querySelector('body').style.color=color;
}

function HOLdecoration(decoration){
    let array =  document.querySelectorAll('a');
                    
                        let i = 0;
                        while(i<array.length){
                        array[i].style.textDecoration=decoration;
                            i++;}

} 

function HOLColor(color){   
    let array =  document.querySelectorAll('a');
                    
                        let i = 0;
                        while(i<array.length){
                        array[i].style.color=color;
                            i++;}

}

function reset(back,color,td){
    document.querySelector('#daynightbutton').value='night';
    let reset=document.querySelectorAll('a');
    let z=0;
    while( z<reset.length){
        document.querySelector('body').style.backgroundColor=back;
        reset[z].style.color=color;
        reset[z].style.textDecoration=td;
        z++; 
                         }
        }