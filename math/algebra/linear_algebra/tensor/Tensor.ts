function recursionExpand(node :any[] , lenArray :any[] , index=0): void{
    
  if(index < lenArray.length){
 
    for(let i = 0; i < lenArray[index];i++){
 
      node[i] = new Array(lenArray[index+1])
      recursionExpand(node[i],lenArray,index+1)
 
    }
 
  } else{ node.fill(0) }

}


function recursionDefine(node_main :any[], node_define :any[]){

  let children_length

  for(let i = 0; i < node_define.length;i){
    
    let length = []
    
    if(node_define[i].constructor.name === `Array`){
    
      let length_i = []

      for(let j = 0; j < node_define[i].length; j++){ length_i.push(node_define[i].length) }
    
      length.push(Math.max(...length_i))
    }

  children_length = Math.max(...length)
  console.log(children_length)
  }

}


class Tensor extends Array {
  constructor(tensor:number[] | undefined = undefined, length:number[]=[]){
    super()
    if(!tensor)
      recursionExpand(this,length)
    else{
      for(let i = 0;i < tensor.length;i++){
        this[i] = tensor[i]
      }
    }
  }


  get depth(){ return Tensor.depth(this) }


  static depth(tensor: Tensor){
    let depth=0
    if(tensor[0]){
      depth=1
      if(tensor[0].constructor.name === `Array`){
        depth += this.depth(tensor[0])
      }
    }
    return depth
  }
}

export default Tensor