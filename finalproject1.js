function idcard()
{
    let firstname= document.getElementById("Firstname").value;
    let lastname= document.getElementById("Lastname").value;
    document.getElementById("Fullname").innerHTML= Firstname+ "" +Lastname;
    
    
    let Address= document.getElementById("Address").value;
    document.getElementById("Addresscard").innerHTML= Addresscard;

    let Age= document.getElementById("Age").value;
    document.getElementById("Agecard").innerHtml= Agecard;
    let Phonenumber= document.getElementById("Phone Number");
    document.getElementById("Phonecard").innerHTML= Phonecard;

let Array1= [Agecard, Phonecard];
Array1.push(Age);
Array1.push(Phonecard);

for (let i = 0;i < Array1.length; i++)

if (Array1[i] <=100)
document.getElementById('postAge').innerHtml= 'Age' +Agecard;
if (Array1[i] >100)
document.getElementById('postPhoneNumber').innerHtml= 'Phone Number' +PhoneCard;

}

document.getElementById("button1").addEventListener("click", function(){
    idcard();
}
);