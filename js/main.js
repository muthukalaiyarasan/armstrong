let x=parseInt(prompt("enter the number"));
let y=x;
let z=y;
let sum=0;
let count=0;
  while(x>0){
          let rem=x%10;
		  x=(x-rem)/10;
		  count++;
		  }
		  while(y!=0){
		    let rem=y%10;
			y=(y-rem)/10;
			sum=sum+(rem**count)
			}
			if(z==sum){
                    document.write("this is armstrong")		
		}
		else{
		 document.write("this is not a armstrong")
		 }