const mongoose=require("mongoose")

const signupSchema=new mongoose.Schema(
    {  
      
        firstname:{type:String,required:true},
        lastname:{type,String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        addresses:[
            {
                place:{type:String},
                mandal:{type:String},
                district:{type:String},
                state:{type:String},
                pincode:{type:Number},
                country:{type:String,default:"india"}
             }
         ],
       
     },
     {
        versionKey:false,
        timestamps:true
     }
);
module.exports=mongoose.model("signup",signupSchema)
