function binarySearch(data, toFind, start, end){

          while(start<=end){
                    let mid = Math.floor((start+end)/2);

                    if(data[mid] == toFind){
                              return true;
                    }else if(data[mid] < toFind){
                              start = mid+1;
                    }else{
                              end = mid-1;
                    }
          }

          return false;
}

const data = [10,20,30,40,50,60,70,80,90,100];

let toFind = 20;

let result = binarySearch(data, toFind, 0, data.length-1);

if(result){
           console.log('We found data');         
}else{
          console.log('Data not found');
}

// We found data