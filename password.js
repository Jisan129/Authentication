const bcrypt=require('bcrypt');
const saltRound=10;
const planText="1234"
const hash="$2b$10$TmrS3sId2omv4TrSCe9mze4M52yBkkD1dXCJwQ4vxpTJvuSBW39Ya"
const one="$2b$10$S/sCdmHYMURXZlZrrtXlLuuvIREri0mNmJmGbHnlkcqV2umAIiXJi"
const two="$2b$10$oYLnpkzStFVJfvOix5bsuuoEUeZ.SFZ2.lpzs38dQXNYMGS.TJxfa"

var password=''
bcrypt.genSalt(saltRound).then(salt=>{
    return bcrypt.hash(planText,salt)
}).then(hash=>{
        password=hash
        console.log(hash)
})
.catch(err=>console.error(err.message))

bcrypt.compare("123",one).then(res=>{
    console.log(res)
}).catch(err=>console.error(err.message))