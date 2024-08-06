module.exports = function check(str, bracketsConfig) {
  // your solution
  
  var st = []
  
  for (let i=0;i<str.length;i++)
  {
      var br = str.at(i);
      console.log("br",br)
      for (let j in bracketsConfig) {
          
          if ((bracketsConfig[j].at(1) === br) ){
                  if(st.length >0){
                      console.log("pop", bracketsConfig[j])
                      var r = st.pop()
                      if (r !== bracketsConfig[j].at(0)){
                          st.push(r)
                          st.push(br)
                      }
                      console.log(r)
                  }
                  else {
                      console.log("push", bracketsConfig[j])
                       st.push(br)
                  }
                  
          }
          else {
              if (bracketsConfig[j].at(0) === br){
                  console.log("push", bracketsConfig[j])
                  st.push(br)
          }
         }
      }
  }
  console.log(st)
  return st.length>0? false: true
}