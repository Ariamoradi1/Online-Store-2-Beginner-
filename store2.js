var allProducts = [
 
 {id:1, name:"laptop", price:170000},
 {id:1, name:"car", price:160000},
 {id:1, name:"orange", price:180000},
 {id:1, name:"computer", price:290000}, 
 {id:1, name:"ball", price:140000},
 
 ]
 
 
var userBasket = [
 
 
 
 ]

var userInput = prompt("Enter number 1 if you want to add product and enter number 2 if you want to delete product")


if(userInput=="1"){
    
    var usersInput = prompt(" please enter your product name")
    
    var productData;
    
    var userProduct = allProducts.some(function(product){
        
        if(product.name==usersInput){
            
            productData=product;
            return true;
            
        }
        
        
    });
    
    if(userProduct==true){
        
        var userObject = {
            id:"",
            name:productData.name, 
            price:productData.price, 
            
            
        }
        
        userBasket.push(userObject)
        
        alert("product added")
        
    }else{
        
        alert("product is not available):")
        
        
    };
    
    
    
    
} else if(userInput=="2"){
    
    
    var userProductName = prompt("please enter your product name")
    
    var productIndex = userBasket.findIndex(function(product){
        
        return product.name==userProductName
        
        
    })
    
    userBasket.splice(productIndex, 1)
    
    console.log("basket" + userBasket)
    alert("products is successful deleted! ")
    
}else{
    
    
    
    alert(" Please enter your request correctly")
    
    
}


