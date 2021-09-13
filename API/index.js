express=require('express');
nodemailer=require('nodemailer')
cors=require('cors')
//transporteur

app=express()
const corsOptions = {
    origin: "http://127.0.0.1:3000/",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
  
app.use(cors(corsOptions))

app.get("/",(req,res)=>{
    res.send("api maintech")
})

app.get("/pb_description/:email/:date/:pb",async function(req,res){
    transporter=nodemailer.createTransport(
        {
            service:"gmail",
            auth:{
                user:"eliudti248@gmail.com",
                pass:"40421192e"
            }
        }
    )
    let info = await transporter.sendMail({
        from: 'Maintech', // sender address
        to: "etiemele01@gmail.com", // list of receivers
        subject: "probleme maintenance", // Subject line
        html: 
        "<html>\
            <body>\
                <div>\
                    <b>Message 💬 de:</b><br>"+req.params.email+"<br>\
                    <b>date de survention du probleme 🗓:</b><br>"+req.params.date+"<br>\
                    <b>probleme ⚠️:</b><br>"+req.params.pb+"<br>\
                </div>\
            </body>\
        </html>", // html body
    });
    
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    console.log(req.params)
    res.send("probleme decription")
})

app.get("/projet_expl",(req,res)=>{
    res.send("projet explication")
})

app.listen(5000,()=>{
    console.log("conectez au port 5000")
})